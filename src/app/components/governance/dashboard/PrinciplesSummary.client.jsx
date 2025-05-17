// src/app/components/governance/dashboard/PrinciplesSummary.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';
import { generateThemeHeatMap } from '../../../utils/dataTransformations';

export default function PrinciplesSummary({ data, viewMode }) {
  const { selectedPrinciple, setSelectedPrinciple } = useAnalysis();
  const [expandedElement, setExpandedElement] = useState(null);
  
  // For single partner view
  const singlePartnerPrinciples = viewMode === 'single' ? data.frameworkAlignment : null;
  
  // For multi-partner view
  const heatMapData = viewMode === 'comparison' 
    ? generateThemeHeatMap(data.map(partner => partner.id))
    : null;
  
  return (
    <div className="space-y-8">
      {/* Principle selection - shows in both views */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({length: 5}, (_, i) => i + 1).map(principleId => (
          <button
            key={principleId}
            onClick={() => setSelectedPrinciple(selectedPrinciple === principleId ? null : principleId)}
            className={`
              p-4 rounded-lg border text-left
              ${selectedPrinciple === principleId 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-200'}
            `}
          >
            <span className="font-medium text-gray-900">
              Principle {principleId}
            </span>
            <p className="mt-1 text-sm text-gray-500">
              {getPrincipleName(principleId)}
            </p>
          </button>
        ))}
      </div>
      
      {/* Principle details based on view mode */}
      {viewMode === 'single' ? (
        <SinglePartnerPrincipleDetails 
          principles={singlePartnerPrinciples} 
          selectedPrinciple={selectedPrinciple}
          expandedElement={expandedElement}
          setExpandedElement={setExpandedElement}
        />
      ) : (
        <MultiPartnerPrincipleDetails 
          heatMapData={heatMapData}
          selectedPrinciple={selectedPrinciple}
          expandedElement={expandedElement}
          setExpandedElement={setExpandedElement}
        />
      )}
    </div>
  );
}

// Component for single partner principle details
function SinglePartnerPrincipleDetails({ 
  principles, 
  selectedPrinciple,
  expandedElement,
  setExpandedElement
}) {
  // Filter principles if one is selected
  const filteredPrinciples = selectedPrinciple 
    ? principles.filter(p => p.principleId === selectedPrinciple)
    : principles;
  
  return (
    <div className="space-y-6">
      {filteredPrinciples.map((principle) => (
        <div key={principle.principleId} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Principle {principle.principleId}: {principle.principleName}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {principle.focusAreaCount} focus {principle.focusAreaCount === 1 ? 'area' : 'areas'} • {principle.implementationStatus}
              </p>
            </div>
            <div className="bg-blue-100 rounded-full px-3 py-1 text-sm text-blue-800">
              {principle.completionPercentage}% complete
            </div>
          </div>
          
          {/* Elements list */}
          <div className="space-y-4">
            {principle.elements.map((element, index) => {
              // Extract the element ID from the string
              const elementId = element.split(' ')[0];
              const isExpanded = expandedElement === `${principle.principleId}-${elementId}`;
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Element header */}
                  <button 
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-100"
                    onClick={() => setExpandedElement(
                      isExpanded ? null : `${principle.principleId}-${elementId}`
                    )}
                  >
                    <span className="font-medium text-gray-900">{element}</span>
                    <span className="text-blue-600">
                      {isExpanded ? 'Hide details' : 'Show details'}
                    </span>
                  </button>
                  
                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="p-4 border-t border-gray-200 bg-white">
                      <h4 className="font-medium text-gray-900 mb-2">GIP Excerpts</h4>
                      {principle.gipExcerpts && principle.gipExcerpts.length > 0 ? (
                        <ul className="space-y-2">
                          {principle.gipExcerpts.map((excerpt, i) => (
                            <li key={i} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                              &quot;{excerpt}&quot;
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500 italic">No detailed excerpts available</p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      
      {filteredPrinciples.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-500">
            {selectedPrinciple 
              ? `No focus areas for Principle ${selectedPrinciple}` 
              : 'No principles data available'
            }
          </p>
        </div>
      )}
    </div>
  );
}

// Component for multi-partner principle details
function MultiPartnerPrincipleDetails({ 
  heatMapData,
  selectedPrinciple,
  expandedElement,
  setExpandedElement
}) {
  if (!heatMapData) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">No principles data available</p>
      </div>
    );
  }
  
  // Filter elements by selected principle
  const filteredElements = selectedPrinciple 
    ? heatMapData.elements.filter(el => el.id.startsWith(`${selectedPrinciple}.`))
    : heatMapData.elements;
  
  return (
    <div className="space-y-6">
      {/* Heat map visualisation */}
      <div className="bg-white overflow-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="sticky left-0 bg-white z-10 p-3 border-b border-gray-200 text-left text-sm font-medium text-gray-900">
                Element
              </th>
              {heatMapData.partnerData.map(partner => (
                <th key={partner.partnerId} className="p-3 border-b border-gray-200 text-center text-sm font-medium text-gray-900">
                  {partner.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredElements.map(element => (
              <tr key={element.id} 
                className={expandedElement === element.id ? 'bg-blue-50' : 'hover:bg-gray-50'}
                onClick={() => setExpandedElement(expandedElement === element.id ? null : element.id)}
              >
                <td className="sticky left-0 bg-inherit z-10 p-3 border-b border-gray-200 cursor-pointer">
                  <div className="font-medium text-gray-900">{element.name}</div>
                </td>
                
                {heatMapData.partnerData.map(partner => {
                  const elementData = partner.elements[element.id];
                  return (
                    <td key={partner.partnerId} className="p-3 border-b border-gray-200 text-center cursor-pointer">
                      {elementData.intensity > 0 ? (
                        <div className="inline-flex items-center">
                          <div className={`
                            w-4 h-4 rounded-full mr-2
                            ${elementData.status === "Completed" ? "bg-green-500" :
                              elementData.status === "In Progress" ? "bg-blue-500" :
                              "bg-yellow-500"}
                          `}></div>
                          <span className="text-sm">
                            {elementData.status}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Expanded element details */}
      {expandedElement && (
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {heatMapData.elements.find(e => e.id === expandedElement)?.name}
          </h3>
          
          <div className="space-y-4">
            {heatMapData.partnerData.map(partner => {
              const elementData = partner.elements[expandedElement];
              if (elementData.intensity === 0) return null;
              
              return (
                <div key={partner.partnerId} className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-900">{partner.name}</h4>
                    <div className={`
                      px-2 py-1 rounded-full text-xs
                      ${elementData.status === "Completed" ? "bg-green-100 text-green-800" :
                        elementData.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"}
                    `}>
                      {elementData.status}
                    </div>
                  </div>
                  
                  {elementData.gipExcerpts && elementData.gipExcerpts.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">GIP Excerpts:</h5>
                      <ul className="space-y-2">
                        {elementData.gipExcerpts.map((excerpt, i) => (
                          <li key={i} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                            &quot;{excerpt}&quot;
                            </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {filteredElements.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-500">
            {selectedPrinciple 
              ? `No elements found for Principle ${selectedPrinciple}` 
              : 'No elements data available'
            }
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to get principle names
function getPrincipleName(principleId) {
  const principleNames = {
    1: "Organisational/Legal Compliance",
    2: "People and Cultures",
    3: "Insight, Engagement & Strategy",
    4: "Effectively Run Organisation",
    5: "Finance"
  };
  
  return principleNames[principleId] || `Principle ${principleId}`;
}