// src/app/components/governance/dashboard/DevelopmentAreaDistribution.client.jsx
'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { calculateDevelopmentAreaDistribution } from '../../../utils/dataTransformations';
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