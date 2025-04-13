// src/app/components/governance/dashboard/OverviewDashboard.client.jsx
'use client';

import { useState, useEffect } from 'react';
import { useAnalysis } from '@/app/contexts/AnalysisContext.client';
import PieChart from '../charts/PieChart.client';
import { calculateThemeDistribution } from '@/app/utils/dataTransformations';

export default function OverviewDashboard({ data, viewMode }) {
  const { setSelectedPrinciple } = useAnalysis();
  
  // Transform the data based on view mode
  const themeDistribution = viewMode === 'single'
    ? getPartnerThemeDistribution(data)
    : calculateThemeDistribution(data.map(partner => partner.id));
  
  return (
    <div className="space-y-8">
      {/* Overview cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard
          title="Focus Areas"
          value={viewMode === 'single' ? data.developmentAreas.length : getTotalUniqueAreas(data)}
          label={viewMode === 'single' ? 'areas of development' : 'unique areas across partners'}
        />
        
        <OverviewCard
          title="Top Principle"
          value={getTopPrinciple(themeDistribution).name}
          label={`${getTopPrinciple(themeDistribution).percentage.toFixed(1)}% of focus areas`}
        />
        
        <OverviewCard
          title="Support Requests"
          value={getTotalSupportRequests(data)}
          label={viewMode === 'single' ? 'requests from this partner' : 'across all selected partners'}
        />
      </div>
      
      {/* Principle distribution chart */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Principle Distribution
        </h3>
        <PieChart 
          data={themeDistribution}
          height={400}
          onPrincipleSelect={setSelectedPrinciple}
        />
      </div>
      
      {/* Recent development areas */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {viewMode === 'single' ? 'Development Areas' : 'Common Development Areas'}
        </h3>
        
        {viewMode === 'single' ? (
          <SinglePartnerDevelopmentAreas areas={data.developmentAreas} />
        ) : (
          <MultiPartnerDevelopmentAreas data={data} />
        )}
      </div>
    </div>
  );
}

// Helper component for the overview cards
function OverviewCard({ title, value, label }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-3xl font-bold text-blue-600">
        {value}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {label}
      </p>
    </div>
  );
}

// Component to show development areas for a single partner
function SinglePartnerDevelopmentAreas({ areas }) {
  // Show up to 3 most recent areas
  const recentAreas = areas.slice(0, 3);
  
  return (
    <div className="space-y-4">
      {recentAreas.map((area, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900">{area.areaTitle}</h4>
          <p className="text-sm text-gray-600 mt-1">{area.objective}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">
              {area.progressStatus} • {area.leadPerson}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              area.progressStatus === 'Completed' ? 'bg-green-100 text-green-800' :
              area.progressStatus === 'In Progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {area.timeframe}
            </span>
          </div>
        </div>
      ))}
      
      {areas.length > 3 && (
        <button className="text-blue-600 text-sm hover:text-blue-800">
          View all {areas.length} development areas
        </button>
      )}
    </div>
  );
}

// Component to show common development areas across partners
function MultiPartnerDevelopmentAreas({ data }) {
  // Here we would use the shared theme analysis data
  // This is a simplified version
  const commonAreas = findCommonDevelopmentAreas(data);
  
  return (
    <div className="space-y-4">
      {commonAreas.slice(0, 3).map((area, index) => (
        <div key={index} className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">{area.title}</h4>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {area.partnerCount} partners
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{area.description}</p>
          <div className="mt-2">
            <span className="text-xs text-gray-500">
              Partners: {area.partners.join(', ')}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Helper functions
function getPartnerThemeDistribution(partnerData) {
  // Extract theme data from a single partner's framework alignment
  return partnerData.frameworkAlignment.map(principle => ({
    principle: principle.principleId,
    principleName: principle.principleName,
    count: principle.focusAreaCount,
    percentage: (principle.focusAreaCount / getTotalFocusAreas(partnerData)) * 100
  }));
}

function getTotalFocusAreas(partnerData) {
  return partnerData.frameworkAlignment.reduce((sum, principle) => {
    return sum + principle.focusAreaCount;
  }, 0);
}

function getTopPrinciple(themeDistribution) {
  if (themeDistribution.length === 0) {
    return { name: 'None', percentage: 0 };
  }
  
  const sorted = [...themeDistribution].sort((a, b) => b.percentage - a.percentage);
  return {
    name: `Principle ${sorted[0].principle}`,
    percentage: sorted[0].percentage
  };
}

function getTotalSupportRequests(data) {
  if (Array.isArray(data)) {
    // Multi-partner view
    return data.reduce((sum, partner) => {
      return sum + (partner.supportRequests?.length || 0);
    }, 0);
  } else {
    // Single partner view
    return data.supportRequests?.length || 0;
  }
}

function getTotalUniqueAreas(partners) {
  // This is a simplified version - in reality we would do more sophisticated deduplication
  const allAreas = partners.flatMap(partner => partner.developmentAreas);
  const uniqueAreaTitles = new Set(allAreas.map(area => area.areaTitle));
  return uniqueAreaTitles.size;
}

function findCommonDevelopmentAreas(partners) {
  // Count occurrences of each area title
  const areaCounts = {};
  const areaDetails = {};
  
  partners.forEach(partner => {
    partner.developmentAreas.forEach(area => {
      const title = area.areaTitle;
      
      if (!areaCounts[title]) {
        areaCounts[title] = 0;
        areaDetails[title] = {
          title,
          description: area.objective,
          partners: [],
          cfMapping: area.cfMapping
        };
      }
      
      areaCounts[title]++;
      areaDetails[title].partners.push(partner.name);
    });
  });
  
  // Convert to array and sort by count
  return Object.entries(areaCounts)
    .map(([title, count]) => ({
      ...areaDetails[title],
      partnerCount: count
    }))
    .sort((a, b) => b.partnerCount - a.partnerCount);
}