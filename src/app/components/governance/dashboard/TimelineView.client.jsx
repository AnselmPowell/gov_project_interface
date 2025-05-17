// src/app/components/governance/dashboard/TimelineView.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';
import { Check, Clock, AlertTriangle } from 'lucide-react';

export default function TimelineView({ data, viewMode }) {
  const { selectedPrinciple } = useAnalysis();
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  
  // Single partner timeline
  const timelineData = viewMode === 'single' ? data.implementationTimeline : null;
  
  // Get all activities, filtered by principle if needed
  const activities = timelineData?.activities.filter(activity => 
    !selectedPrinciple || activity.cfMapping.principleId === selectedPrinciple
  ) || [];
  
  // Define quarters
  const quarters = [
    { id: "Q4-2024-25", name: "Q4 2024-25", start: "2025-01", end: "2025-03" },
    { id: "Q1-2025-26", name: "Q1 2025-26", start: "2025-04", end: "2025-06" },
    { id: "Q2-2025-26", name: "Q2 2025-26", start: "2025-07", end: "2025-09" },
    { id: "Q3-2025-26", name: "Q3 2025-26", start: "2025-10", end: "2025-12" },
    { id: "Q4-2025-26", name: "Q4 2025-26", start: "2026-01", end: "2026-03" },
    { id: "Q1-2026-27", name: "Q1 2026-27", start: "2026-04", end: "2026-06" }
  ];
  
  // Count activities per quarter
  const activityCounts = {};
  quarters.forEach(quarter => {
    activityCounts[quarter.id] = 0;
  });
  
  activities.forEach(activity => {
    // Check which quarter(s) this activity spans
    quarters.forEach(quarter => {
      if (
        (activity.startDate >= quarter.start && activity.startDate <= quarter.end) ||
        (activity.endDate >= quarter.start && activity.endDate <= quarter.end) ||
        (activity.startDate <= quarter.start && activity.endDate >= quarter.end)
      ) {
        activityCounts[quarter.id]++;
      }
    });
  });
  
  // Get max count for scaling
  const maxCount = Math.max(...Object.values(activityCounts), 1);
  
  // Filter activities by quarter if selected
  const filteredActivities = selectedQuarter
    ? activities.filter(activity => {
        const quarter = quarters.find(q => q.id === selectedQuarter);
        return (
          (activity.startDate >= quarter.start && activity.startDate <= quarter.end) ||
          (activity.endDate >= quarter.start && activity.endDate <= quarter.end) ||
          (activity.startDate <= quarter.start && activity.endDate >= quarter.end)
        );
      })
    : activities;
    
  return (
    <div className="space-y-8">
      {viewMode === 'single' ? (
        <>
          {/* Quarters timeline */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 overflow-x-auto">
            <div className="flex space-x-4">
              {quarters.map(quarter => {
                const count = activityCounts[quarter.id] || 0;
                const intensity = count > 0 ? (count / maxCount) : 0;
                
                return (
                  <button
                    key={quarter.id}
                    onClick={() => setSelectedQuarter(selectedQuarter === quarter.id ? null : quarter.id)}
                    className={`
                      min-w-[120px] p-3 rounded-lg transition-all
                      ${selectedQuarter === quarter.id 
                        ? 'border-2 border-blue-500 bg-blue-50' 
                        : 'border border-gray-200 hover:border-blue-200'}
                    `}
                  >
                    <div className="text-center">
                      <h4 className="font-medium text-gray-900">{quarter.name}</h4>
                      <div className="mt-2 h-10 flex items-end justify-center">
                        <div 
                          className={`
                            w-8 rounded-t-sm 
                            ${intensity > 0 ? 'bg-blue-500' : 'bg-gray-200'}
                          `}
                          style={{ height: `${Math.max(intensity * 100, 5)}%` }}
                        ></div>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {count} {count === 1 ? 'activity' : 'activities'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Activities list */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedQuarter 
                ? `Activities in ${quarters.find(q => q.id === selectedQuarter).name}` 
                : 'All Activities'}
            </h3>
            
            {filteredActivities.length > 0 ? (
              <div className="space-y-6">
                {/* Group activities by area */}
                {groupActivitiesByArea(filteredActivities).map(group => (
                  <div key={group.areaTitle} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-medium text-gray-900">{group.areaTitle}</h4>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {group.activities.map((activity, index) => (
                        <div key={index} className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-gray-900">{activity.activity}</h5>
                              <p className="text-sm text-gray-600 mt-1">
                                {formatDateRange(activity.startDate, activity.endDate)}
                              </p>
                            </div>
                            <StatusBadge status={activity.status} percentage={activity.statusPercentage} />
                          </div>
                          
                          <div className="mt-3 flex items-center text-xs text-gray-500">
                            <div className="bg-gray-100 px-2 py-1 rounded">
                              Principle {activity.cfMapping.principleId}
                            </div>
                            {activity.leadPerson && (
                              <div className="ml-2">
                                Lead: {activity.leadPerson}
                              </div>
                            )}
                          </div>
                          
                          {activity.milestone && (
                            <div className="mt-3 flex items-center text-xs text-gray-500 p-2 bg-blue-50 rounded">
                              <AlertTriangle className="w-3 h-3 text-blue-600 mr-1" />
                              Milestone: {activity.milestone}
                              {activity.milestoneDate && ` (${formatDate(activity.milestoneDate)})`}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <p className="text-gray-500">No activities found for the selected filters</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <MultiPartnerTimelineView 
          data={data} 
          quarters={quarters}
          selectedPrinciple={selectedPrinciple}
          selectedQuarter={selectedQuarter}
          setSelectedQuarter={setSelectedQuarter}
        />
      )}
    </div>
  );
}

// Component for multi-partner timeline view
function MultiPartnerTimelineView({ 
  data, 
  quarters,
  selectedPrinciple,
  selectedQuarter,
  setSelectedQuarter
}) {
  // This would use combined timeline data from multiple partners
  // For now, show a simplified version with activity counts by quarter
  
  // Count activities per quarter per principle
  const quarterCounts = {};
  
  // Initialize counts
  quarters.forEach(quarter => {
    quarterCounts[quarter.id] = {
      total: 0,
      principles: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0
      },
      partners: {}
    };
  });
  
  // Count activities across all partners
  data.forEach(partner => {
    if (!partner.implementationTimeline) return;
    
    partner.implementationTimeline.activities.forEach(activity => {
      // Skip if filtered by principle
      if (selectedPrinciple && activity.cfMapping.principleId !== selectedPrinciple) return;
      
      // Check which quarter(s) this activity spans
      quarters.forEach(quarter => {
        if (
          (activity.startDate >= quarter.start && activity.startDate <= quarter.end) ||
          (activity.endDate >= quarter.start && activity.endDate <= quarter.end) ||
          (activity.startDate <= quarter.start && activity.endDate >= quarter.end)
        ) {
          // Increment total count
          quarterCounts[quarter.id].total++;
          
          // Increment principle count
          quarterCounts[quarter.id].principles[activity.cfMapping.principleId]++;
          
          // Initialize partner count if needed
          if (!quarterCounts[quarter.id].partners[partner.id]) {
            quarterCounts[quarter.id].partners[partner.id] = 0;
          }
          
          // Increment partner count
          quarterCounts[quarter.id].partners[partner.id]++;
        }
      });
    });
  });
  
  // Find partners with activities in selected quarter
  const partnersInQuarter = selectedQuarter
    ? Object.entries(quarterCounts[selectedQuarter].partners)
        .filter(([_, count]) => count > 0)
        .map(([partnerId, _]) => data.find(p => p.id === partnerId))
        .filter(Boolean)
    : [];
  
  return (
    <div className="space-y-8">
      {/* Quarters heatmap */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 overflow-x-auto">
        <div className="flex space-x-4">
          {quarters.map(quarter => {
            const counts = quarterCounts[quarter.id];
            const totalActivities = counts.total;
            
            // Calculate principle distribution for this quarter
            const principles = Object.entries(counts.principles)
              .filter(([_, count]) => count > 0)
              .sort((a, b) => b[1] - a[1]);
            
            return (
              <button
                key={quarter.id}
                onClick={() => setSelectedQuarter(selectedQuarter === quarter.id ? null : quarter.id)}
                className={`
                  min-w-[140px] p-3 rounded-lg transition-all
                  ${selectedQuarter === quarter.id 
                    ? 'border-2 border-blue-500 bg-blue-50' 
                    : 'border border-gray-200 hover:border-blue-200'}
                `}
              >
                <div className="text-center">
                  <h4 className="font-medium text-gray-900">{quarter.name}</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {totalActivities} {totalActivities === 1 ? 'activity' : 'activities'}
                  </p>
                  
                  {/* Small principle distribution */}
                  <div className="mt-3 h-4 flex rounded-full overflow-hidden">
                    {principles.map(([principleId, count], index) => (
                      <div 
                        key={principleId} 
                        style={{ 
                          width: `${(count / Math.max(totalActivities, 1)) * 100}%`,
                          backgroundColor: getPrincipleColor(parseInt(principleId))
                        }}
                        className="h-full"
                      ></div>
                    ))}
                  </div>
                  
                  {/* Partner count */}
                  <p className="mt-2 text-xs text-gray-500">
                    {Object.keys(counts.partners).filter(p => counts.partners[p] > 0).length} partners
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Partners with activities in selected quarter */}
      {selectedQuarter && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">
            Partners with activities in {quarters.find(q => q.id === selectedQuarter).name}
          </h3>
          
          {partnersInQuarter.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {partnersInQuarter.map(partner => {
                // Get activities in this quarter
                const activities = partner.implementationTimeline.activities.filter(activity => {
                  const quarter = quarters.find(q => q.id === selectedQuarter);
                  return (
                    (!selectedPrinciple || activity.cfMapping.principleId === selectedPrinciple) &&
                    ((activity.startDate >= quarter.start && activity.startDate <= quarter.end) ||
                    (activity.endDate >= quarter.start && activity.endDate <= quarter.end) ||
                    (activity.startDate <= quarter.start && activity.endDate >= quarter.end))
                  );
                });
                
                return (
                  <div key={partner.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-medium text-gray-900">{partner.name}</h4>
                      <p className="text-sm text-gray-600">
                        {activities.length} {activities.length === 1 ? 'activity' : 'activities'}
                      </p>
                    </div>
                    
                    <div className="p-4 max-h-80 overflow-y-auto">
                      <ul className="space-y-3">
                        {activities.map((activity, index) => (
                          <li key={index} className="text-sm border-l-2 pl-3 py-1" style={{
                            borderLeftColor: getPrincipleColor(activity.cfMapping.principleId)
                          }}>
                            <div className="font-medium text-gray-900">{activity.activity}</div>
                            <div className="flex justify-between items-center mt-1">
                              <span className="text-xs text-gray-600">
                                {formatDateRange(activity.startDate, activity.endDate)}
                              </span>
                              <span className={`
                                text-xs px-2 py-0.5 rounded
                                ${activity.status === "Completed" ? "bg-green-100 text-green-800" :
                                  activity.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                                  "bg-gray-100 text-gray-800"}
                              `}>
                                {activity.status}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <p className="text-gray-500">No partners have activities in this quarter</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Component for status badge
function StatusBadge({ status, percentage }) {
  if (status === "Completed") {
    return (
      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
        <Check className="w-3 h-3 mr-1" />
        Completed
      </div>
    );
  }
  
  if (status === "In Progress") {
    return (
      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center">
        <Clock className="w-3 h-3 mr-1" />
        In Progress {percentage ? `(${percentage}%)` : ''}
      </div>
    );
  }
  
  return (
    <div className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
      Not Started
    </div>
  );
}

// Helper function to group activities by area
function groupActivitiesByArea(activities) {
  const areas = {};
  
  activities.forEach(activity => {
    if (!areas[activity.areaTitle]) {
      areas[activity.areaTitle] = {
        areaTitle: activity.areaTitle,
        activities: []
      };
    }
    
    areas[activity.areaTitle].activities.push(activity);
  });
  
  return Object.values(areas);
}

// Helper function to format date range
function formatDateRange(startDate, endDate) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  
  return `${start} - ${end}`;
}

// Helper function to format date
function formatDate(dateString) {
  try {
    // Handle YYYY-MM format
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const date = new Date(year, month - 1);
      return date.toLocaleDateString('en-GB', { 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    // Default to original string if not a recognized format
    return dateString;
  } catch (e) {
    return dateString;
  }
}

// Helper function to get principle color
function getPrincipleColor(principleId) {
  const colors = {
    1: '#E32434', // Red
    2: '#F6B207', // Yellow
    3: '#164B64', // Blue
    4: '#299D91', // Green
    5: '#6A2E90'  // Purple
  };
  
  return colors[principleId] || '#9CA3AF'; // Gray fallback
}