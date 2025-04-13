// src/app/utils/dataTransformations.js

import singlePartnerAnalysis from '../../data/singlePartnerAnalysis';


// Calculate theme distribution for multiple partners
export function calculateThemeDistribution(partnerIds) {
  // Initialize counters for each principle
  const principleCounts = {
    1: { name: "Organizational/Legal Compliance", count: 0, partners: new Set() },
    2: { name: "People and Cultures", count: 0, partners: new Set() },
    3: { name: "Insight, Engagement & Strategy", count: 0, partners: new Set() },
    4: { name: "Effectively Run Organisation", count: 0, partners: new Set() },
    5: { name: "Finance", count: 0, partners: new Set() }
  };

  // Count principles across selected partners
  partnerIds.forEach(partnerId => {
    const partnerData = singlePartnerAnalysis[partnerId];
    if (!partnerData) return;

    partnerData.frameworkAlignment.forEach(alignment => {
      const principleId = alignment.principleId;
      
      // Count this partner for this principle
      principleCounts[principleId].count += alignment.focusAreaCount;
      principleCounts[principleId].partners.add(partnerId);
    });
  });

  // Convert to percentage format for the pie chart
  const totalAreas = Object.values(principleCounts).reduce((sum, data) => sum + data.count, 0);
  
  const themeDistributionData = Object.entries(principleCounts)
    .filter(([_, data]) => data.count > 0) // Only include principles with areas
    .map(([principleId, data]) => ({
      principle: parseInt(principleId),
      principleName: data.name,
      count: data.count,
      partnerCount: data.partners.size,
      percentage: totalAreas > 0 ? (data.count / totalAreas) * 100 : 0,
      partners: Array.from(data.partners)
    }))
    .sort((a, b) => b.count - a.count); // Sort principles by count

  return themeDistributionData;
}

// Generate heat map data for theme analysis
export function generateThemeHeatMap(partnerIds) {
  // Get all unique elements from the selected partners
  const allElements = new Set();
  partnerIds.forEach(partnerId => {
    const partnerData = singlePartnerAnalysis[partnerId];
    if (!partnerData) return;
    
    partnerData.frameworkAlignment.forEach(alignment => {
      alignment.elements.forEach(element => {
        const elementId = element.split(' ')[0]; // Extract "3.1" from "3.1 Strategic Plan"
        allElements.add(elementId);
      });
    });
  });
  
  // Sort element IDs numerically
  const sortedElementIds = Array.from(allElements).sort((a, b) => {
    const [aPrinciple, aElement] = a.split('.');
    const [bPrinciple, bElement] = b.split('.');
    return parseInt(aPrinciple) - parseInt(bPrinciple) || 
           parseInt(aElement) - parseInt(bElement);
  });
  
  // Get element names
  const elementDetails = {};
  sortedElementIds.forEach(elementId => {
    // Find full name for this element ID from any partner that uses it
    let elementName = elementId;
    for (const partnerId of partnerIds) {
      const partnerData = singlePartnerAnalysis[partnerId];
      if (!partnerData) continue;
      
      for (const alignment of partnerData.frameworkAlignment) {
        for (const element of alignment.elements) {
          if (element.startsWith(elementId)) {
            elementName = element;
            break;
          }
        }
        if (elementName !== elementId) break;
      }
      if (elementName !== elementId) break;
    }
    
    elementDetails[elementId] = elementName;
  });
  
  // Create partner data with element mapping
  const partnerData = partnerIds.map(partnerId => {
    const partner = singlePartnerAnalysis[partnerId];
    if (!partner) return null;
    
    // Create element mapping for this partner
    const elements = {};
    sortedElementIds.forEach(elementId => {
      elements[elementId] = { 
        intensity: 0, 
        status: "Not Addressed",
        completionPercentage: 0,
        gipExcerpts: []
      };
    });
    
    // Fill in data from the partner
    partner.frameworkAlignment.forEach(alignment => {
      alignment.elements.forEach(element => {
        const elementId = element.split(' ')[0];
        if (elements[elementId]) {
          // Calculate intensity (0-3 scale)
          let intensity = 1; // Default if addressed but no status
          if (alignment.implementationStatus === "In Progress") intensity = 2;
          if (alignment.implementationStatus === "Completed") intensity = 3;
          
          elements[elementId] = {
            intensity,
            status: alignment.implementationStatus || "Addressed",
            completionPercentage: alignment.completionPercentage || 0,
            gipExcerpts: alignment.gipExcerpts || []
          };
        }
      });
    });
    
    return {
      partnerId,
      name: partner.name,
      elements
    };
  }).filter(Boolean); // Remove null entries
  
  return {
    elements: sortedElementIds.map(id => ({
      id,
      name: elementDetails[id]
    })),
    partnerData
  };
}

// Calculate support request matrix
export function generateSupportRequestMatrix(partnerIds) {
  // Map to store support requests by element
  const supportByElement = {};
  
  // Process each partner's support requests
  partnerIds.forEach(partnerId => {
    const partnerData = singlePartnerAnalysis[partnerId];
    if (!partnerData || !partnerData.supportRequests) return;
    
    partnerData.supportRequests.forEach(request => {
      const elementId = request.cfMapping.elementId;
      const principleId = request.cfMapping.principleId;
      const elementKey = `${principleId}.${elementId}`;
      
      // Initialize element entry if needed
      if (!supportByElement[elementKey]) {
        supportByElement[elementKey] = {
          principleId: principleId,
          elementId: elementId,
          elementName: request.cfMapping.elementName || `Element ${elementId}`,
          requests: {},
          partners: new Set()
        };
      }
      
      // Add this partner to the element's partners
      supportByElement[elementKey].partners.add(partnerId);
      
      // Group by support area
      const supportArea = request.supportArea;
      if (!supportByElement[elementKey].requests[supportArea]) {
        supportByElement[elementKey].requests[supportArea] = {
          type: supportArea,
          partners: new Set(),
          examples: []
        };
      }
      
      // Add this partner to this support area
      supportByElement[elementKey].requests[supportArea].partners.add(partnerId);
      
      // Add example
      supportByElement[elementKey].requests[supportArea].examples.push({
        partnerId,
        partnerName: partnerData.name,
        context: request.context,
        timeline: request.requestedTimeline,
        gipExcerpt: request.gipExcerpt
      });
    });
  });
  
  // Transform to array format and calculate percentages
  const totalPartners = partnerIds.length;
  
  const supportMatrix = Object.values(supportByElement).map(element => {
    // Convert requests object to array
    const requestsArray = Object.values(element.requests).map(req => ({
      type: req.type,
      partnerCount: req.partners.size,
      percentage: (req.partners.size / totalPartners) * 100,
      partners: Array.from(req.partners),
      examples: req.examples
    })).sort((a, b) => b.partnerCount - a.partnerCount);
    
    return {
      principleId: element.principleId,
      elementId: element.elementId,
      elementName: element.elementName,
      partnerCount: element.partners.size,
      percentage: (element.partners.size / totalPartners) * 100,
      partners: Array.from(element.partners),
      requests: requestsArray
    };
  }).sort((a, b) => b.partnerCount - a.partnerCount);
  
  return supportMatrix;
}

// Additional data transformation functions would go here