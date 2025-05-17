



// // src/app/components/governance/dashboard/DevelopmentAreaDistribution.client.jsx
// 'use client';

// import { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
// import { calculateDevelopmentAreaDistribution } from '@/app/utils/dataTransformations';
// import { CheckCircle2, Clock, AlertCircle, ExternalLink } from 'lucide-react';

// export default function DevelopmentAreaDistribution({ data, viewMode, onViewDetails }) {
//  const [expandedGroup, setExpandedGroup] = useState(null);
 
//  // Process the data based on view mode
//  const distributionData = viewMode === 'comparison' 
//    ? calculateDevelopmentAreaDistribution(data.map(partner => partner.id))
//    : null;
 
//  // For single partner view, we just show their development areas count
//  const singlePartnerCount = viewMode === 'single' 
//    ? data.developmentAreas.length
//    : null;
 
//  // If no data or single partner with no development areas
//  if ((viewMode === 'comparison' && (!distributionData || distributionData.length === 0)) ||
//      (viewMode === 'single' && singlePartnerCount === 0)) {
//    return (
//      <div className="bg-background rounded-lg p-4 text-center border border-tertiary/20">
//        <p className="text-tertiary">No development area data available</p>
//      </div>
//    );
//  }
 
//  // For single partner view, show simple card
//  if (viewMode === 'single') {
//    // Get status breakdown
//    const statusBreakdown = {
//      completed: 0,
//      inProgress: 0,
//      notStarted: 0
//    };
   
//    data.developmentAreas.forEach(area => {
//      if (area.progressStatus === 'Completed') statusBreakdown.completed++;
//      else if (area.progressStatus === 'In Progress') statusBreakdown.inProgress++;
//      else statusBreakdown.notStarted++;
//    });
   
//    return (
//      <div className="bg-background rounded-lg p-4 border border-tertiary/20">
//        <div className="flex justify-between items-center mb-3">
//          <h3 className="text-lg font-medium text-primary">Development Areas</h3>
//          <button 
//            onClick={onViewDetails}
//            className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
//          >
//            <ExternalLink size={14} className="mr-1" />
//            Explore
//          </button>
//        </div>
//        <div className="flex justify-between items-center mb-3">
//          <p className="text-3xl font-bold text-primary">{singlePartnerCount}</p>
//          <div className="text-sm text-secondary">
//            Focus areas in this GIP
//          </div>
//        </div>
       
//        {/* Status breakdown */}
//        <div className="mt-4 grid grid-cols-3 gap-2">
//          <div className="text-center">
//            <div className="flex items-center justify-center mb-1">
//              <CheckCircle2 className="text-success w-4 h-4 mr-1" />
//              <span className="text-sm">Completed</span>
//            </div>
//            <p className="font-medium">{statusBreakdown.completed}</p>
//          </div>
//          <div className="text-center">
//            <div className="flex items-center justify-center mb-1">
//              <Clock className="text-info w-4 h-4 mr-1" />
//              <span className="text-sm">In Progress</span>
//            </div>
//            <p className="font-medium">{statusBreakdown.inProgress}</p>
//          </div>
//          <div className="text-center">
//            <div className="flex items-center justify-center mb-1">
//              <AlertCircle className="text-tertiary w-4 h-4 mr-1" />
//              <span className="text-sm">Not Started</span>
//            </div>
//            <p className="font-medium">{statusBreakdown.notStarted}</p>
//          </div>
//        </div>
//      </div>
//    );
//  }
 
//  // For multi-partner view, show distribution chart with improved visualisation
 
//  // Prepare data for stacked bar chart (reformatting existing distribution data)
//  const stackedChartData = distributionData.map(item => ({
//    areaCount: `${item.areaCount} Areas`,
//    completed: item.statusTotals.completed,
//    inProgress: item.statusTotals.inProgress,
//    notStarted: item.statusTotals.notStarted,
//    partnerCount: item.partnerCount,
//    originalData: item // Keep reference to original data for click handling
//  }));
 
//  // Calculate total areas and their status distribution
//  const totalAreas = distributionData.reduce((sum, item) => (
//    sum + (item.statusTotals.completed + item.statusTotals.inProgress + item.statusTotals.notStarted)
//  ), 0);
 
//  const totalStatusCounts = distributionData.reduce((counts, item) => {
//    counts.completed += item.statusTotals.completed;
//    counts.inProgress += item.statusTotals.inProgress;
//    counts.notStarted += item.statusTotals.notStarted;
//    return counts;
//  }, { completed: 0, inProgress: 0, notStarted: 0 });
 
//  // Find the most common area count
//  const mostCommonItem = [...distributionData].sort((a, b) => b.partnerCount - a.partnerCount)[0];
 
// // Enhanced tooltip for stacked bar chart
// const StackedBarTooltip = ({ active, payload, label }) => {
//   // We'll need to use a state and ref in the parent component to manage this
//   // This is just the tooltip content component
  
//   if (active && payload && payload.length) {
//     // Find the original data item that matches this bar
//     const originalItem = distributionData.find(item => `${item.areaCount} Areas` === label);
    
//     if (!originalItem) return null;
    
//     // Calculate status totals
//     const totalPartners = originalItem.partnerCount;
//     const totalAreas = originalItem.areaCount * totalPartners;
//     const statusTotals = originalItem.statusTotals;
    
//     return (
//       <div className="bg-background shadow-lg border border-tertiary/20 p-4 rounded-md max-w-xs">
//         <h4 className="font-medium text-primary mb-1">{label}</h4>
//         <div className="text-sm text-secondary mb-3">
//           <p>
//             <span className="font-medium">{totalPartners}</span> {totalPartners === 1 ? 'partner has' : 'partners have'} exactly <span className="font-medium">{originalItem.areaCount}</span> focus {originalItem.areaCount === 1 ? 'area' : 'areas'} each
//           </p>
//           <p className="mt-1 text-xs text-tertiary">
//             Total of <span className="font-medium">{totalAreas}</span> areas across these partners
//           </p>
//         </div>
        
//         <div className="space-y-2 mb-3">
//           <h5 className="text-xs font-medium text-tertiary">Status Breakdown:</h5>
//           {payload.map((entry, index) => (
//             <div key={index} className="flex justify-between items-center">
//               <div className="flex items-center">
//                 <div 
//                   className="w-3 h-3 rounded-full mr-2" 
//                   style={{ backgroundColor: entry.color }}
//                 ></div>
//                 <span className="text-xs text-secondary">
//                   {entry.name === 'completed' ? 'Completed' : 
//                    entry.name === 'inProgress' ? 'In Progress' : 'Not Started'}
//                 </span>
//               </div>
//               <div className="text-xs font-medium text-secondary flex items-center">
//                 <span>{entry.value}</span>
//                 <span className="text-tertiary ml-1">
//                   ({Math.round((entry.value / totalAreas) * 100)}%)
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {originalItem.partners && originalItem.partners.length > 0 && (
//           <div className="mt-3 pt-2 border-t border-tertiary/10">
//             <h5 className="text-xs font-medium text-tertiary mb-1">
//               Partners in this group:
//             </h5>
//             <div className="text-xs text-secondary grid grid-cols-2 gap-x-2 gap-y-1 mt-1">
//               {originalItem.partners.slice(0, 6).map((p, i) => (
//                 <div key={i} className="truncate">• {p.partnerName}</div>
//               ))}
//             </div>
//             {originalItem.partners.length > 6 && (
//               <div className="text-primary text-xs mt-1">
//                 + {originalItem.partners.length - 6} more partners
//               </div>
//             )}
//           </div>
//         )}
        
//         <div className="mt-3 pt-2 border-t border-tertiary/10 text-center">
//           <span className="text-xs text-primary">
//             Click for detailed breakdown
//           </span>
//         </div>
//       </div>
//     );
//   }
  
//   return null;
// };
 
//  // Handle bar click
//  const handleBarClick = (data) => {
//    // Find the original data item from our distribution data
//    const areaCount = parseInt(data.areaCount?.split(' ')[0]);
//    setExpandedGroup(expandedGroup === areaCount ? null : areaCount);
//  };
 
//  return (
//    <div className="bg-background rounded-lg p-4 border border-tertiary/20">
//      <div className="flex justify-between items-center mb-2">
//        <h3 className="text-lg font-medium text-primary">Development Area Distribution</h3>
//        <button 
//          onClick={onViewDetails}
//          className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
//        >
//          <ExternalLink size={14} className="mr-1" />
//          Expand
//        </button>
//      </div>
     
//      {/* Informational header with key insights */}
//      <div className="text-sm text-tertiary mb-3">
//        This chart shows how many partners are focusing on each number of development areas
//        {mostCommonItem && (
//          <span className="block mt-1">
//            Most common: <span className="text-secondary">{mostCommonItem.partnerCount} partners</span> have <span className="text-secondary">{mostCommonItem.areaCount} areas</span>
//          </span>
//        )}
//      </div>
     
//      <div className="h-56">
//        <ResponsiveContainer width="100%" height="100%">
//          <BarChart
//            data={stackedChartData}
//            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
//            onClick={handleBarClick}
//          >
//            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-tertiary-20)" vertical={false} />
//            <XAxis 
//              dataKey="areaCount" 
//              tick={{ fill: 'var(--color-tertiary)' }}
//            />
//            <YAxis 
//              label={{ 
//                value: 'Number of Partners', 
//                angle: -90, 
//                position: 'left',
//                fill: 'var(--color-tertiary)'
//              }}
//              tick={{ fill: 'var(--color-tertiary)' }}
//            />
//            <Tooltip content={<StackedBarTooltip />} />
//            <Legend 
//              formatter={(value) => {
//                return value === 'completed' ? 'Completed' : 
//                       value === 'inProgress' ? 'In Progress' : 'Not Started';
//              }}
//            />
//            <Bar 
//              dataKey="completed" 
//              stackId="a" 
//              fill="var(--color-success)" 
//              name="completed"
//              cursor="pointer"
//            />
//            <Bar 
//              dataKey="inProgress" 
//              stackId="a" 
//              fill="var(--color-info)" 
//              name="inProgress"
//              cursor="pointer"
//            />
//            <Bar 
//              dataKey="notStarted" 
//              stackId="a" 
//              fill="var(--color-tertiary)" 
//              name="notStarted"
//              cursor="pointer"
//            />
//          </BarChart>
//        </ResponsiveContainer>
//      </div>
     
//      {/* Status summary below chart */}
//      <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs border-t border-tertiary/10 pt-2">
//        <div>
//          <div className="flex items-center justify-center">
//            <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
//            <span>Completed</span>
//          </div>
//          <div className="text-secondary mt-1">
//            {Math.round((totalStatusCounts.completed / totalAreas) * 100)}%
//          </div>
//        </div>
//        <div>
//          <div className="flex items-center justify-center">
//            <div className="w-2 h-2 bg-info rounded-full mr-1"></div>
//            <span>In Progress</span>
//          </div>
//          <div className="text-secondary mt-1">
//            {Math.round((totalStatusCounts.inProgress / totalAreas) * 100)}%
//          </div>
//        </div>
//        <div>
//          <div className="flex items-center justify-center">
//            <div className="w-2 h-2 bg-tertiary rounded-full mr-1"></div>
//            <span>Not Started</span>
//          </div>
//          <div className="text-secondary mt-1">
//            {Math.round((totalStatusCounts.notStarted / totalAreas) * 100)}%
//          </div>
//        </div>
//      </div>
     
//      {/* Expanded details when a bar is clicked */}
//      {expandedGroup !== null && (
//        <div className="mt-4 border-t border-tertiary/20 pt-3 animate-fade-in">
//          <h4 className="text-sm font-medium text-primary mb-2">
//            Partners with {expandedGroup} Development Areas
//          </h4>
         
//          <div className="space-y-2 max-h-60 overflow-auto hide-scrollbar">
//            {distributionData
//              .find(item => item.areaCount === expandedGroup)?.partners
//              .map((partner, index) => (
//                <div key={index} className="p-2 bg-tertiary/5 rounded-md">
//                  <div className="flex justify-between items-center">
//                    <p className="font-medium text-secondary">{partner.partnerName}</p>
//                    <div className="flex items-center text-xs">
//                      <span className="text-success mr-1">{partner.statusBreakdown.completed}</span> /
//                      <span className="text-info mx-1">{partner.statusBreakdown.inProgress}</span> /
//                      <span className="text-tertiary ml-1">{partner.statusBreakdown.notStarted}</span>
//                    </div>
//                  </div>
                 
//                  <div className="mt-1 text-xs text-tertiary">
//                    {partner.areas.slice(0, 2).map((area, i) => (
//                      <div key={i} className="truncate">• {area.areaTitle}</div>
//                    ))}
//                    {partner.areas.length > 2 && (
//                      <div className="text-primary text-xs">+ {partner.areas.length - 2} more</div>
//                    )}
//                  </div>
//                </div>
//              ))}
//          </div>
//        </div>
//      )}
//    </div>
//  );
// }






// src/app/components/governance/dashboard/DevelopmentAreaDistribution.client.jsx
'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { calculateDevelopmentAreaDistribution } from '@/app/utils/dataTransformations';
import { CheckCircle2, Clock, AlertCircle, ExternalLink } from 'lucide-react';

export default function DevelopmentAreaDistribution({ data, viewMode, onViewDetails }) {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [expandedPartners, setExpandedPartners] = useState({});
  
  // Toggle function for a specific partner's areas
  const togglePartnerAreas = (partnerId) => {
    setExpandedPartners(prev => ({
      ...prev,
      [partnerId]: !prev[partnerId]
    }));
  };


  
  // Process the data based on view mode
  const distributionData = viewMode === 'comparison' 
    ? calculateDevelopmentAreaDistribution(data.map(partner => partner.id))
    : null;
  
  // For single partner view, we just show their development areas count
  const singlePartnerCount = viewMode === 'single' 
    ? data.developmentAreas.length
    : null;
  
  // If no data or single partner with no development areas
  if ((viewMode === 'comparison' && (!distributionData || distributionData.length === 0)) ||
      (viewMode === 'single' && singlePartnerCount === 0)) {
    return (
      <div className="bg-background rounded-lg p-4 text-center border border-tertiary/20">
        <p className="text-tertiary">No development area data available</p>
      </div>
    );
  }
  
  
  // For multi-partner view, transform data for stacked bar chart
  const stackedBarData = distributionData.map(item => ({
    areaCount: `${item.areaCount} ${item.areaCount === 1 ? 'Area' : 'Areas'}`,
    numberOfPartners: item.partnerCount,
    completed: item.statusTotals.completed,
    inProgress: item.statusTotals.inProgress,
    notStarted: item.statusTotals.notStarted,
    partners: item.partners,
    originalData: item
  }));
  
  // Calculate totals for the info panel
  const totalPartners = distributionData.reduce((sum, item) => sum + item.partnerCount, 0);
  const totalAreas = distributionData.reduce((sum, item) => 
    sum + (item.areaCount * item.partnerCount), 0);
  const totalCompleted = distributionData.reduce((sum, item) => 
    sum + item.statusTotals.completed, 0);
  const totalInProgress = distributionData.reduce((sum, item) => 
    sum + item.statusTotals.inProgress, 0);
  const totalNotStarted = distributionData.reduce((sum, item) => 
    sum + item.statusTotals.notStarted, 0);
  
  // Find most common pattern
  const mostCommonPattern = [...distributionData]
    .sort((a, b) => b.partnerCount - a.partnerCount)[0];
  
  // Custom tooltip for the stacked bar chart
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const partnerCount = data.numberOfPartners;
      const areaCount = parseInt(data.areaCount);
      
      return (
        <div className="bg-background shadow-lg border border-tertiary/20 p-3 rounded-md">
          <p className="text-sm font-medium">{partnerCount} {partnerCount === 1 ? 'partner has' : 'partners have'} {areaCount} {areaCount === 1 ? 'area' : 'areas'}</p>
          
          <div className="mt-2 space-y-1 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-success mr-1"></div>
                <span>Completed:</span>
              </div>
              <span className="font-medium">{data.completed}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-info mr-1"></div>
                <span>In Progress:</span>
              </div>
              <span className="font-medium">{data.inProgress}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-tertiary mr-1"></div>
                <span>Not Started:</span>
              </div>
              <span className="font-medium">{data.notStarted}</span>
            </div>
          </div>
          
          <div className="mt-2 pt-2 border-t border-tertiary/10 text-xs text-tertiary">
            Click to see partner details
          </div>
        </div>
      );
    }
    return null;
  };
  
  // This custom legend helps explain the stacked colors
  const CustomLegend = ({ payload }) => {
    return (
      <div className="flex justify-center items-center gap-4 text-xs mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-success mr-1"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full sw-bg-yellow mr-1"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-tertiary mr-1"></div>
          <span>Not Started</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background rounded-lg p-4 border border-tertiary/20">

      {/* Info panel to explain the chart */}
      <div className="mb-4 p-3 bg-tertiary/5 rounded-md text-sm text-secondary">
        <p>
          This chart shows how many partners are focusing on each number of development areas. 
          {mostCommonPattern && (
            <span className="font-medium"> Most common: {mostCommonPattern.partnerCount} partners have {mostCommonPattern.areaCount} areas.</span>
          )}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <div>
            <span className="text-tertiary font-semibold mr-1">Total areas: </span>
            <span className="font-medium text-lg">{totalAreas}</span>
          </div>
          <div>
            <span className="text-tertiary  font-semibold mr-1">Completion rate: </span>
            <span className="font-medium text-lg">
              {totalAreas ? Math.round((totalCompleted / totalAreas) * 100) : 0}%
            </span>
          </div>
          <div>
            <span className="text-tertiary font-semibold mr-1">In progress rate: </span>
            <span className="font-medium text-lg">
              {totalAreas ? Math.round((totalInProgress / totalAreas) * 100) : 0}%
            </span>
          </div>
        </div>
      </div>
      
      {/* The improved chart */}
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={stackedBarData}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}

            onClick={(data) => {
              if (data && data.activePayload && data.activePayload.length) {
                const clickedData = data.activePayload[0].payload;
                const areaCount = parseInt(clickedData.areaCount);
                setExpandedGroup(expandedGroup === areaCount ? null : areaCount);
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-tertiary-20)" vertical={false} />
            <XAxis 
              dataKey="areaCount" 

              tick={{ fill: 'var(--color-secondary)' }}
              axisLine={{ stroke: 'var(--color-tertiary-20)' }}
              tickLine={{ stroke: 'var(--color-tertiary-20)' }}
            />
            <YAxis 
              label={{ 
                value: 'Number of Partners', 
                angle: -90, 
                position: 'insideLeft',
                fill: 'var(--color-tertiary)',
                style: { textAnchor: 'middle' }
              }}
              tick={{ fill: 'var(--color-secondary)' }}
              axisLine={{ stroke: 'var(--color-tertiary-20)' }}
              tickLine={{ stroke: 'var(--color-tertiary-20)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="notStarted" 
              stackId="a" 
              fill="var(--color-tertiary)" 
              name="Not Started"
              cursor="pointer"
            />
            <Bar 
              dataKey="inProgress" 
              stackId="a" 
              fill="var(--color-sw-yellow)" 
              name="In Progress"
              cursor="pointer"
            />
            <Bar 
              dataKey="completed" 
              stackId="a" 
              fill="var(--color-sw-green)" 
              name="Completed"
              cursor="pointer"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend for the chart */}
      <CustomLegend />
      
      {/* Expanded details when a bar is clicked */}
      {expandedGroup !== null && (
        <div className="mt-4 border-t border-tertiary/20 pt-3 animate-fade-in">
          <h4 className="text-sm font-medium text-primary mb-2">
            Partners with {expandedGroup} Development {expandedGroup === 1 ? 'Area' : 'Areas'}
          </h4>
          
          <div className="mb-2 flex items-center text-xs text-tertiary justify-between ">
            <span className="mr-3">Status key:</span>
            <div className='flex items-center'>
              <span className="flex items-center mr-2 text-success">
                
                Completed
              </span>
              <span className="flex items-center mr-2 sw-text-yellow">
              
                In Progress
              </span>
              <span className="flex items-center text-tertiary">
                
                Not Started
              </span>
            </div>
          </div>
          
          <div className="space-y-2 max-h-60 overflow-auto hide-scrollbar">
            {distributionData
              .find(item => item.areaCount === expandedGroup)?.partners
              .map((partner, index) => {
                // Determine which areas to display
                const isExpanded = expandedPartners[partner.partnerId];
                const displayedAreas = isExpanded ? partner.areas : partner.areas.slice(0, 2);
                
                return (
                  <div key={index} className="p-2 bg-tertiary/5 rounded-md">
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-secondary">{partner.partnerName}</p>
                      <div className="flex items-center bg-tertiary/10 px-2 py-1 rounded text-xs">
                        <div className="flex items-center text-success mr-1" title="Completed">
                         
                          {partner.statusBreakdown.completed}
                        </div>
                        <span className="mx-1">/</span>
                        <div className="flex items-center text-info mr-1" title="In Progress">
                       
                          {partner.statusBreakdown.inProgress}
                        </div>
                        <span className="mx-1">/</span>
                        <div className="flex items-center text-tertiary" title="Not Started">
                         
                          {partner.statusBreakdown.notStarted}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-1 text-xs text-tertiary">
                      {displayedAreas.map((area, i) => (
                        <div key={i} className="truncate py-0.5">• {area.areaTitle}</div>
                      ))}
                      {partner.areas.length > 2 && !isExpanded && (
                        <button 
                          onClick={() => togglePartnerAreas(partner.partnerId)}
                          className="text-primary text-xs hover:underline mt-1"
                        >
                          + {partner.areas.length - 2} more areas
                        </button>
                      )}
                      {isExpanded && (
                        <button 
                          onClick={() => togglePartnerAreas(partner.partnerId)}
                          className="text-primary text-xs hover:underline mt-1"
                        >
                          Show fewer areas
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}