// // src/app/components/governance/dashboard/DashboardContent.client.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { ChevronLeft, Filter, Download } from 'lucide-react';
// import { useAnalysis } from '@/app/contexts/AnalysisContext.client';
// import PrinciplesSummary from './PrinciplesSummary.client';
// import SupportAnalysis from './SupportAnalysis.client';
// import TimelineView from './TimelineView.client';
// import OverviewDashboard from './OverviewDashboard.client';

// // This component acts as a container for all dashboard visualisations
// export default function DashboardContent({ viewMode = 'single' }) {
//   const { 
//     selectedPartnerData,
//     allSelectedPartnersData,
//     selectedPartnerIds,
//     resetToUpload,
//     activeTab,
//     setActiveTab
//   } = useAnalysis();
  
//   // Determine title based on view mode
//   const title = viewMode === 'single' 
//     ? `${selectedPartnerData?.name || 'Partner'}`
//     : `Comparative Analysis (${selectedPartnerIds.size} Partners)`;
  
//   // Load appropriate data based on view mode
//   const dashboardData = viewMode === 'single' 
//     ? selectedPartnerData 
//     : allSelectedPartnersData;
  
//   // Handle mode where there's no data
//   if (!dashboardData || (Array.isArray(dashboardData) && dashboardData.length === 0)) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm p-6 text-center">
//         <p className="text-gray-500">No data available for selected partner(s)</p>
//         <button
//           onClick={resetToUpload}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Back to Upload
//         </button>
//       </div>
//     );
//   }
  
//   return (
//     <div className="bg-white rounded-lg shadow-sm max-w-7xl mx-auto">
//       {/* Dashboard header */}
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-200">
//         <div className="flex items-center">
//           <button
//             onClick={resetToUpload}
//             className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900">
//               {title}
//             </h2>
//             <p className="text-sm text-gray-500 mt-1">
//               Governance analysis based on submitted GIPs
//             </p>
//           </div>
//         </div>
        
//         <div className="flex items-center space-x-3 mt-4 sm:mt-0">
//           <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
//             <Filter size={16} className="mr-2" />
//             Filters
//           </button>
//           <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
//             <Download size={16} className="mr-2" />
//             Export
//           </button>
//         </div>
//       </div>
      
//       {/* Tab navigation */}
//       <div className="border-b border-gray-200">
//         <nav className="-mb-px flex space-x-8 px-6">
//           <button
//             onClick={() => setActiveTab('overview')}
//             className={`
//               whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//               ${activeTab === 'overview'
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//             `}
//           >
//             Overview
//           </button>
//           <button
//             onClick={() => setActiveTab('principles')}
//             className={`
//               whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//               ${activeTab === 'principles'
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//             `}
//           >
//             Principles
//           </button>
//           <button
//             onClick={() => setActiveTab('support')}
//             className={`
//               whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//               ${activeTab === 'support'
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//             `}
//           >
//             Support Needs
//           </button>
//           <button
//             onClick={() => setActiveTab('timeline')}
//             className={`
//               whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
//               ${activeTab === 'timeline'
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
//             `}
//           >
//             Timeline
//           </button>
//         </nav>
//       </div>
      
//       {/* Dashboard content based on active tab */}
//       <div className="p-6">
//         {activeTab === 'overview' && (
//           <OverviewDashboard 
//             data={dashboardData} 
//             viewMode={viewMode} 
//           />
//         )}
        
//         {activeTab === 'principles' && (
//           <PrinciplesSummary 
//             data={dashboardData} 
//             viewMode={viewMode} 
//           />
//         )}
        
//         {activeTab === 'support' && (
//           <SupportAnalysis 
//             data={dashboardData} 
//             viewMode={viewMode} 
//           />
//         )}
        
//         {activeTab === 'timeline' && (
//           <TimelineView 
//             data={dashboardData} 
//             viewMode={viewMode} 
//           />
//         )}
//       </div>
//     </div>
//   );
// }



// src/app/components/governance/dashboard/OverviewDashboard.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '@/app/contexts/AnalysisContext.client';
import PieChart from '../charts/PieChart.client';
import DevelopmentAreaDistribution from './DevelopmentAreaDistribution.client';
import AnomalyCard from './AnomalyCard.client';
import { calculateThemeDistribution, identifyAnomalies } from '@/app/utils/dataTransformations';
import { Users, Clock, AlignJustify, Filter } from 'lucide-react';

export default function OverviewDashboard({ viewMode }) {
  const { setSelectedPrinciple } = useAnalysis();
  const [showFilters, setShowFilters] = useState(false);

    const { 
    selectedPartnerData,
    allSelectedPartnersData,
    selectedPartnerIds,
    resetToUpload,
    activeTab,
    setActiveTab
  } = useAnalysis();
  
  // Determine title based on view mode
  const title = viewMode === 'single' 
    ? `${selectedPartnerData?.name || 'Partner'}`
    : `Comparative Analysis (${selectedPartnerIds.size} Partners)`;
  
  // Load appropriate data based on view mode
  const data = viewMode === 'single' 
    ? selectedPartnerData 
    : allSelectedPartnersData;
  
  // Transform the data based on view mode
  const themeDistribution = viewMode === 'single'
    ? getPartnerThemeDistribution(data)
    : calculateThemeDistribution(data.map(partner => partner.id));
  
  return (
    <div className="space-y-6">
      {/* Filter bar */}
      <div className="bg-background rounded-lg p-3 border border-tertiary/20 flex justify-between items-center">
      <h2 className="text-lg font-medium text-primary">
        {viewMode === 'single' 
          ? `Overview: ${data?.name || 'Partner'}` 
          : `Comparative Overview: ${data?.length} Partners`}
      </h2>
        
        <button 
          className="flex items-center text-sm text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-tertiary/10"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={16} className="mr-2" />
          Filters
        </button>
      </div>
      
      {/* Filter options - only shown when filters are toggled */}
      {showFilters && (
        <div className="bg-background rounded-lg p-4 border border-tertiary/20 animate-fade-in">
          <h3 className="text-sm font-medium text-primary mb-3">Filter Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-tertiary mb-1">Time Period</label>
              <select className="w-full p-2 text-sm border border-tertiary/20 rounded-md bg-background">
                <option>All time periods</option>
                <option>Q1 2025-26</option>
                <option>Q2 2025-26</option>
                <option>Q3 2025-26</option>
                <option>Q4 2025-26</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-tertiary mb-1">Progress Status</label>
              <select className="w-full p-2 text-sm border border-tertiary/20 rounded-md bg-background">
                <option>All statuses</option>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-tertiary mb-1">Support Type</label>
              <select className="w-full p-2 text-sm border border-tertiary/20 rounded-md bg-background">
                <option>All support types</option>
                <option>Strategy consultant</option>
                <option>Legal consultation</option>
                <option>HR expertise</option>
                <option>Board engagement</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Main overview metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard
          title="Focus Areas"
          value={viewMode === 'single' ? data?.developmentAreas.length : getTotalUniqueAreas(data)}
          label={viewMode === 'single' ? 'areas of development' : 'unique areas across partners'}
          icon={<AlignJustify className="w-5 h-5 text-primary" />}
        />
        
        <OverviewCard
          title="Top Principle"
          value={getTopPrinciple(themeDistribution).name}
          label={`${getTopPrinciple(themeDistribution).percentage.toFixed(1)}% of focus areas`}
          icon={<Users className="w-5 h-5 text-primary" />}
        />
        
        <OverviewCard
          title="Support Requests"
          value={getTotalSupportRequests(data)}
          label={viewMode === 'single' ? 'requests from this partner' : 'across all selected partners'}
          icon={<Clock className="w-5 h-5 text-primary" />}
        />
      </div>
      
      {/* Advanced metrics and visualisations - 2 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Principle distribution chart */}
        <div className="bg-background rounded-lg p-4 border border-tertiary/20">
          <h3 className="text-lg font-medium text-primary mb-3">
            Principle Distribution
          </h3>
          <PieChart 
            data={themeDistribution}
            height={320}
            onPrincipleSelect={setSelectedPrinciple}
          />
        </div>
        
        {/* Development area distribution */}
        <DevelopmentAreaDistribution data={data} viewMode={viewMode} />
      </div>
      
      {/* Third row with 1:2 ratio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Anomaly card */}
        <div className="lg:col-span-2">
          {viewMode === 'comparison' && <AnomalyCard data={data} viewMode={viewMode} />}
          
          {/* For single view or fallback if no anomalies */}
          {(viewMode === 'single' || (viewMode === 'comparison' && !identifyAnomalies(data.map(partner => partner.id)).length)) && (
            <UpcomingTimelines data={data} viewMode={viewMode} />
          )}
        </div>
        
        {/* Development areas summary */}
        <div className="lg:col-span-2">
          <div className="bg-background rounded-lg p-4 border border-tertiary/20">
            <h3 className="text-lg font-medium text-primary mb-3">
              {viewMode === 'single' ? 'Development Areas' : 'Common Development Areas'}
            </h3>
            
            {viewMode === 'single' ? (
              <SinglePartnerDevelopmentAreas areas={data.developmentAreas} />
            ) : (
              <MultiPartnerDevelopmentAreas data={data} />
            )}
          </div>
        </div>
      </div>
      
      {/* Support needs timeline */}
      <div className="bg-background rounded-lg p-4 border border-tertiary/20">
        <h3 className="text-lg font-medium text-primary mb-3">
          Support Needs Timeline
        </h3>
        <SupportNeedsTimeline data={data} viewMode={viewMode} />
      </div>
    </div>
  );
}

// Enhanced helper component for the overview cards
function OverviewCard({ title, value, label, icon }) {
  return (
    <div className="bg-background rounded-lg p-4 border border-tertiary/20 transition-all duration-fast hover:shadow-md hover:border-primary/30">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-primary mb-2">
            {title}
          </h3>
          <p className="text-3xl font-bold text-primary">
            {value}
          </p>
          <p className="text-sm text-tertiary mt-1">
            {label}
          </p>
        </div>
        <div className="p-2 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}

// New component for upcoming timelines
function UpcomingTimelines({ data, viewMode }) {
  // Extract upcoming milestones/activities
  let upcomingMilestones = [];
  
  if (viewMode === 'single') {
    // Extract from single partner
    const timeline = data.implementationTimeline?.activities || [];
    
    // Find milestones in the next 90 days
    const now = new Date();
    const futureDate = new Date();
    futureDate.setDate(now.getDate() + 90);
    
    upcomingMilestones = timeline
      .filter(activity => activity.milestone && activity.milestoneDate)
      .map(activity => ({
        date: activity.milestoneDate,
        title: activity.milestone,
        area: activity.areaTitle,
        status: activity.status
      }))
      .filter(milestone => {
        const milestoneDate = parseDate(milestone.date);
        return milestoneDate >= now && milestoneDate <= futureDate;
      })
      .sort((a, b) => parseDate(a.date) - parseDate(b.date))
      .slice(0, 3);
  } else {
    // Extract from multiple partners - simplified for now
    upcomingMilestones = data
      .flatMap(partner => 
        (partner.implementationTimeline?.activities || [])
          .filter(activity => activity.milestone && activity.milestoneDate)
          .map(activity => ({
            date: activity.milestoneDate,
            title: activity.milestone,
            area: activity.areaTitle,
            status: activity.status,
            partner: partner.name
          }))
      )
      .filter(milestone => {
        const now = new Date();
        const futureDate = new Date();
        futureDate.setDate(now.getDate() + 90);
        const milestoneDate = parseDate(milestone.date);
        return milestoneDate >= now && milestoneDate <= futureDate;
      })
      .sort((a, b) => parseDate(a.date) - parseDate(b.date))
      .slice(0, 5);
  }
  
  if (upcomingMilestones.length === 0) {
    return (
      <div className="bg-background rounded-lg p-4 border border-tertiary/20">
        <h3 className="text-lg font-medium text-primary mb-3">
          Upcoming Milestones
        </h3>
        <p className="text-tertiary text-sm text-center py-4">
          No upcoming milestones in the next 90 days
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-background rounded-lg p-4 border border-tertiary/20">
      <h3 className="text-lg font-medium text-primary mb-3">
        Upcoming Milestones
      </h3>
      
      <div className="space-y-3">
        {upcomingMilestones.map((milestone, index) => (
          <div key={index} className="border-l-2 border-primary pl-3 py-1">
            <div className="text-xs text-tertiary">
              {formatDate(milestone.date)}
            </div>
            <div className="text-sm font-medium text-secondary">
              {milestone.title}
            </div>
            <div className="text-xs text-tertiary mt-0.5 flex items-center justify-between">
              <span>{milestone.area}</span>
              {milestone.partner && (
                <span className="bg-tertiary/10 px-1.5 py-0.5 rounded text-xs">
                  {milestone.partner}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Support needs timeline component
function SupportNeedsTimeline({ data, viewMode }) {
  // Define time periods (quarters)
  const quarters = [
    { id: "Q4-2024-25", name: "Q4 2024-25", start: "2025-01", end: "2025-03" },
    { id: "Q1-2025-26", name: "Q1 2025-26", start: "2025-04", end: "2025-06" },
    { id: "Q2-2025-26", name: "Q2 2025-26", start: "2025-07", end: "2025-09" },
    { id: "Q3-2025-26", name: "Q3 2025-26", start: "2025-10", end: "2025-12" },
    { id: "Q4-2025-26", name: "Q4 2025-26", start: "2026-01", end: "2026-03" }
  ];
  
  // Get support requests
  let supportRequests = [];
  
  if (viewMode === 'single') {
    supportRequests = data.supportRequests || [];
  } else {
    supportRequests = data.flatMap(partner => 
      (partner.supportRequests || []).map(req => ({
        ...req,
        partnerName: partner.name
      }))
    );
  }
  
  // Group requests by quarter
  const requestsByQuarter = {};
  
  // Initialize quarters
  quarters.forEach(quarter => {
    requestsByQuarter[quarter.id] = {
      ...quarter,
      requests: []
    };
  });
  
  // Assign requests to quarters
  supportRequests.forEach(request => {
    const timeline = request.requestedTimeline;
    if (!timeline) return;
    
    // Find which quarter this request falls into
    const quarter = quarters.find(q => timeline >= q.start && timeline <= q.end);
    if (quarter) {
      requestsByQuarter[quarter.id].requests.push(request);
    }
  });
  
  // Calculate max count for intensity
  const quarterCounts = Object.values(requestsByQuarter).map(q => q.requests.length);
  const maxCount = Math.max(...quarterCounts, 1);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
      {quarters.map(quarter => {
        const quarterData = requestsByQuarter[quarter.id];
        const count = quarterData.requests.length;
        const intensity = count / maxCount;
        
        return (
          <div 
            key={quarter.id} 
            className="border border-tertiary/20 rounded-lg p-3 transition-all duration-fast hover:shadow-md hover:border-primary/30 group"
          >
            <div className="text-sm font-medium text-primary mb-2">
              {quarter.name}
            </div>
            
            {/* Bar visualization */}
            <div className="h-20 flex items-end justify-center mb-2">
              <div 
                className="w-16 bg-primary/80 group-hover:bg-primary transition-all duration-fast rounded-t"
                style={{ height: `${Math.max(intensity * 100, 5)}%` }}
              ></div>
            </div>
            
            <div className="text-center">
              <div className="text-xl font-bold text-primary">
                {count}
              </div>
              <div className="text-xs text-tertiary">
                Support {count === 1 ? 'request' : 'requests'}
              </div>
            </div>
            
            {/* Preview most common request types */}
            {count > 0 && (
              <div className="mt-2 pt-2 border-t border-tertiary/10">
                {getSupportTypes(quarterData.requests).slice(0, 2).map((type, i) => (
                  <div key={i} className="text-xs text-tertiary truncate">
                    • {type.type} ({type.count})
                  </div>
                ))}
                {getSupportTypes(quarterData.requests).length > 2 && (
                  <div className="text-xs text-primary mt-0.5">
                    +{getSupportTypes(quarterData.requests).length - 2} more
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
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
        <div key={index} className="p-4 border border-tertiary/20 rounded-lg hover:border-primary/30 transition-colors duration-fast hover:shadow-sm">
          <h4 className="font-medium text-primary">{area.areaTitle}</h4>
          <p className="text-sm text-secondary mt-1">{area.objective}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-tertiary">
              {area.progressStatus} • {area.leadPerson}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              area.progressStatus === 'Completed' ? 'bg-success/10 text-success' :
              area.progressStatus === 'In Progress' ? 'bg-info/10 text-info' :
              'bg-tertiary/10 text-tertiary'
            }`}>
              {area.timeframe}
            </span>
          </div>
        </div>
      ))}
      
      {areas.length > 3 && (
        <button className="text-primary text-sm hover:text-primary-dark transition-colors">
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
        <div key={index} className="p-4 border border-tertiary/20 rounded-lg hover:border-primary/30 transition-colors duration-fast hover:shadow-sm">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-primary">{area.title}</h4>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {area.partnerCount} partners
            </span>
          </div>
          <p className="text-sm text-secondary mt-1">{area.description}</p>
          <div className="mt-2">
            <div className="flex flex-wrap gap-1 mt-1">
              {area.partners.map((partner, i) => (
                <span key={i} className="text-xs bg-tertiary/10 text-tertiary px-1.5 py-0.5 rounded">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      {commonAreas.length > 3 && (
        <button className="text-primary text-sm hover:text-primary-dark transition-colors">
          View all {commonAreas.length} common areas
        </button>
      )}
    </div>
  );
}

// Helper functions
function getPartnerThemeDistribution(partnerData) {
  // Check if partnerData and frameworkAlignment exist
  if (!partnerData || !partnerData.frameworkAlignment || !Array.isArray(partnerData.frameworkAlignment)) {
    return []; // Return empty array if data is missing
  }
  
  // Extract theme data from a single partner's framework alignment
  return partnerData.frameworkAlignment.map(principle => ({
    principle: principle.principleId,
    principleName: principle.principleName,
    count: principle.focusAreaCount,
    percentage: (principle.focusAreaCount / getTotalFocusAreas(partnerData)) * 100
  }));
}

function getTotalFocusAreas(partnerData) {
  // Check if partnerData and frameworkAlignment exist
  if (!partnerData || !partnerData.frameworkAlignment || !Array.isArray(partnerData.frameworkAlignment)) {
    return 0; // Return 0 if data is missing
  }
  
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

function getSupportTypes(requests) {
  // Group requests by support type
  const typeCounts = {};
  
  requests.forEach(request => {
    if (!typeCounts[request.supportArea]) {
      typeCounts[request.supportArea] = 0;
    }
    typeCounts[request.supportArea]++;
  });
  
  // Convert to array and sort by count
  return Object.entries(typeCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);
}

function parseDate(dateStr) {
  // Handle YYYY-MM format
  if (/^\d{4}-\d{2}$/.test(dateStr)) {
    const [year, month] = dateStr.split('-');
    return new Date(year, month - 1, 1);
  }
  
  // Handle YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return new Date(dateStr);
  }
  
  // Default to current date if format is unknown
  return new Date();
}

function formatDate(dateStr) {
  try {
    // Handle YYYY-MM format
    if (/^\d{4}-\d{2}$/.test(dateStr)) {
      const [year, month] = dateStr.split('-');
      const date = new Date(year, month - 1);
      return date.toLocaleDateString('en-GB', { 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    // Handle full ISO date format
    if (dateStr.includes('-')) {
      return new Date(dateStr).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    // Default to original string if not a recognized format
    return dateStr;
  } catch (e) {
    return dateStr;
  }
}