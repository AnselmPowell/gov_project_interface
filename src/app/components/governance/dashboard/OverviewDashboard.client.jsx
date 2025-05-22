// src/app/components/governance/dashboard/OverviewDashboard.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';
import PieChart from '../charts/PieChart.client';
import DevelopmentAreaDistribution from './DevelopmentAreaDistribution.client';
import AnomalyCard from './AnomalyCard.client';
import { calculateThemeDistribution, identifyAnomalies } from '../../../utils/dataTransformations';
import { Users, Clock, AlignJustify, Filter, X, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import singlePartnerAnalysis from '../../../../data/singlePartnerAnalysis';


export default function OverviewDashboard({ viewMode }) {
  const { 
    selectedPartnerData,
    allSelectedPartnersData,
    selectedPartnerIds,
    setSelectedPrinciple,
    selectedPrinciple
  } = useAnalysis();
  
  // State for various content views and filters
  const [showFilters, setShowFilters] = useState(false);
  const [activeDetailModal, setActiveDetailModal] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Load appropriate data based on view mode
  const data = viewMode === 'single' 
    ? selectedPartnerData 
    : allSelectedPartnersData;
  
  // Transform the data based on view mode
  const themeDistribution = viewMode === 'single'
    ? getPartnerThemeDistribution(data)
    : calculateThemeDistribution(Array.from(selectedPartnerIds));
  
  // Handle detail modal open/close
  const openDetailModal = (type, details) => {
    setActiveDetailModal({ type, details });
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const closeDetailModal = () => {
    setActiveDetailModal(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  // Handle section expansion
  const toggleSectionExpansion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  function getPartnerCountForPrinciple(partnersData, principleId) {
    if (!partnersData || !Array.isArray(partnersData)) return 0;
    
    return partnersData.filter(partner => 
      partner.frameworkAlignment?.some(p => p.principleId === principleId)
    ).length;
  }
  
  
  return (
    <div className="space-y-6">
      
      {/* Main overview metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <OverviewCard
          title="Focus Areas"
          value={viewMode === 'single' ? data?.developmentAreas?.length || 0 : getTotalUniqueAreas(data)}
          label={viewMode === 'single' ? 'areas of development' : 'unique areas across partners'}
          icon={<AlignJustify className="w-5 h-5 text-primary" />}
          onClick={() => openDetailModal('focusAreas', { data, viewMode })}
        />
        
        <OverviewCard
          title="Top Principle"
          value={getTopPrinciple(themeDistribution).name}
          label={`${getTopPrinciple(themeDistribution).percentage.toFixed(1)}% of focus areas`}
          icon={<Users className="w-5 h-5 text-primary" />}
          onClick={() => openDetailModal('topPrinciple', { 
            principle: getTopPrinciple(themeDistribution), 
            data, 
            viewMode 
          })}
        />
        
        <OverviewCard
          title="Support Requests"
          value={getTotalSupportRequests(data)}
          label={viewMode === 'single' ? 'requests from this partner' : 'across all selected partners'}
          icon={<Clock className="w-5 h-5 text-primary" />}
          onClick={() => openDetailModal('supportRequests', { data, viewMode })}
        />
      </div>
      
      {/* Advanced metrics and visualizations - 2 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Principle distribution chart */}
        <div>
        <div className="bg-background rounded-lg p-4 border border-tertiary/20">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-medium text-primary">
              Principle Distribution
            </h3>
            <button 
              onClick={() => openDetailModal('principleDistribution', { data, viewMode, themeDistribution })}
              className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
            >
              <ExternalLink size={14} className="mr-1" />
              Expand
            </button>
          </div>
          <PieChart 
            data={themeDistribution}
            height={200}
            onPrincipleSelect={setSelectedPrinciple}
          />
          
        </div>
        <div className="bg-background rounded-lg p-4 mt-3 border border-tertiary/20">
        <div>
  <h4 className="text-sm font-medium text-primary mb-2">
    {selectedPrinciple 
      ? `Principle ${selectedPrinciple}: ${getPrincipleName(selectedPrinciple)}` 
      : 'Top Principles Overview'}
  </h4>
  
  {selectedPrinciple ? (
    // Show details for selected principle
    <div className="space-y-2 max-h-[12rem] overflow-auto hide-scrollbar">
      {viewMode === 'single' ? (
        // Single partner view
        (() => {
          const principle = data?.frameworkAlignment?.find(p => p.principleId === selectedPrinciple);
          if (!principle) return <p className="text-xs text-tertiary">No data available for this principle</p>;
          
          return (
            <>
              <div className="flex justify-between items-center text-xs">
                <span className="text-tertiary">Status:</span>
                <span className={`
                  px-2 py-0.5 rounded-full
                  ${principle.implementationStatus === 'Completed' ? 'bg-success/10 text-success' :
                    principle.implementationStatus === 'In Progress' ? 'bg-info/10 text-info' :
                    'bg-tertiary/10 text-tertiary'}
                `}>
                  {principle.implementationStatus}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-tertiary">Completion:</span>
                <span className="text-secondary">{principle.completionPercentage}%</span>
              </div>
              <div className="mt-2">
                <p className="text-xs text-tertiary">Key elements:</p>
                <div className="mt-1 space-y-1">
                  {principle.elements.slice(0, 2).map((element, i) => (
                    <div key={i} className="text-xs px-2 py-1 bg-tertiary/5 rounded text-secondary">
                      {element}
                    </div>
                  ))}
                  {principle.elements.length > 2 && (
                    <div className="text-xs text-primary">
                      +{principle.elements.length - 2} more elements
                    </div>
                  )}
                </div>
              </div>
              {principle.gipExcerpts && principle.gipExcerpts.length > 0 && (
                <div className="mt-2 p-2 bg-primary/5 rounded border border-primary/10">
                  <p className="text-xs italic text-tertiary">
                    {principle.gipExcerpts[0]}
                  </p>
                </div>
              )}
            </>
          );
        })()
      ) : (
        // Multi-partner view
        (() => {
          const partnersWithPrinciple = data?.filter(partner => 
            partner.frameworkAlignment?.some(p => p.principleId === selectedPrinciple)
          ) || [];
          
          if (partnersWithPrinciple.length === 0) 
            return <p className="text-xs text-tertiary">No partners focusing on this principle</p>;
          
          return (
            <>
              <div className="text-xs text-tertiary mb-1">
                {partnersWithPrinciple.length} partners focusing on this principle
              </div>
              <div className="space-y-2">
                {partnersWithPrinciple.slice(0, 3).map((partner, idx) => {
                  const principle = partner.frameworkAlignment?.find(p => p.principleId === selectedPrinciple);
                  return (
                    <div key={idx} className="p-2 bg-tertiary/5 rounded text-xs">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-secondary">{partner.name}</span>
                        <span className={`
                          px-1.5 py-0.5 rounded-full text-xs
                          ${principle?.implementationStatus === 'Completed' ? 'bg-success/10 text-success' :
                            principle?.implementationStatus === 'In Progress' ? 'bg-info/10 text-info' :
                            'bg-tertiary/10 text-tertiary'}
                        `}>
                          {principle?.implementationStatus || 'Not Started'}
                        </span>
                      </div>
                      {principle?.elements && principle.elements.length > 0 && (
                        <div className="mt-1 text-tertiary truncate">
                          • {principle.elements[0]}
                        </div>
                      )}
                    </div>
                  );
                })}
                {partnersWithPrinciple.length > 3 && (
                  <div className="text-xs text-primary">
                    +{partnersWithPrinciple.length - 3} more partners
                  </div>
                )}
              </div>
            </>
          );
        })()
      )}
    </div>
  ) : (
    // Show overview of all principles
    <div className="space-y-2 max-h-[12rem] overflow-auto hide-scrollbar">
      {themeDistribution.slice(0, 3).map((item, idx) => (
        <div 
          key={idx} 
          className="p-2 bg-tertiary/5 rounded cursor-pointer hover:bg-tertiary/10 transition-colors"
          onClick={() => setSelectedPrinciple(item.principle)}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-secondary">
              Principle {item.principle}
            </span>
            <span className="text-xs text-tertiary">
              {item.percentage.toFixed(1)}%
            </span>
          </div>
          <div className="mt-1 text-xs text-tertiary">
            {item.principleName}
          </div>
          {viewMode === 'comparison' && (
            <div className="mt-1 text-xs">
              <span className="text-primary">{getPartnerCountForPrinciple(data, item.principle)}</span>
              <span className="text-tertiary"> partners focusing on this</span>
            </div>
          )}
        </div>
      ))}
      {themeDistribution.length > 3 && (
        <button 
          className="text-xs text-primary hover:underline w-full text-left"
          onClick={() => openDetailModal('principleDistribution', { data, viewMode, themeDistribution })}
        >
          View all {themeDistribution.length} principles
        </button>
      )}
    </div>
  )}
</div>
        </div>
        </div>
       
        
        <div className="bg-background rounded-lg p-4 border border-tertiary/20">

        {/* Development area distribution */}
        {viewMode === 'single' ? (
            <>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-medium text-primary">
                Development Areas 
              </h3>
              <button 
                onClick={() => openDetailModal('developmentAreas', {  data, viewMode })}
                className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
              >
                <ExternalLink size={14} className="mr-1" />
                View All
              </button>
            </div>
          
            <SinglePartnerDevelopmentAreas 
            areas={data?.developmentAreas || []} 
            onViewDetails={(area) => openDetailModal('developmentArea', { area, data, viewMode })}
            />
            </>
        ) : (
            <>
            <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-medium text-primary">Development Area Distribution</h3>
            <button 
                onClick={() => openDetailModal('developmentAreaDistribution', { data, viewMode })}
                className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
            >
                <ExternalLink size={14} className="mr-1" />
                Expand
            </button>
            </div>
            <DevelopmentAreaDistribution 
            data={data} 
            viewMode={viewMode} 
            onViewDetails={() => openDetailModal('developmentAreaDistribution', { data, viewMode })}
            />
            </>
        )}
        </div>
         
      </div>

      {viewMode === 'single' ? ( 
        null ) : (
        <>
      {/* Third row with 1:2 ratio */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">

        {/* Development areas summary */}
        <div className="lg:col-span-3">
          <div className="bg-background rounded-lg p-4 border border-tertiary/20 max-h-[52rem] ">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-medium text-primary">
                {viewMode === 'single' ? 'Development Areas' : 'Common Development Areas'}
              </h3>
              <button 
                onClick={() => openDetailModal('developmentAreas', {  data, viewMode })}
                className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
              >
                <ExternalLink size={14} className="mr-1" />
                View All
              </button>
            </div>
            
            {viewMode === 'single' ? (
              <SinglePartnerDevelopmentAreas 
                areas={data?.developmentAreas || []} 
                onViewDetails={(area) => openDetailModal('developmentArea', { area, data, viewMode })}
              />
            ) : (
              <MultiPartnerDevelopmentAreas 
                data={data} 
                onViewDetails={(area) => openDetailModal('commonDevelopmentArea', { area, data, viewMode })}
              />
            )}
          </div>
        </div>


        {/* Anomaly card */}
        <div className="lg:col-span-1  overflow-y-hidden ">
          {viewMode === 'comparison' && 
            identifyAnomalies(Array.from(selectedPartnerIds)).length > 0 && (
              <AnomalyCard 
                data={data} 
                viewMode={viewMode} 
                onViewDetails={(anomaly) => openDetailModal('anomaly', { anomaly, data, viewMode })}
              />
            )
          }
          
          {/* For single view or fallback if no anomalies */}
          {(viewMode === 'single' || 
              (viewMode === 'comparison' && 
                identifyAnomalies(Array.from(selectedPartnerIds)).length === 0)) && (
            <UpcomingTimelines 
              data={data} 
              viewMode={viewMode} 
              onViewDetails={() => openDetailModal('upcomingTimelines', { data, viewMode })}
            />
          )}
        </div>
        
      </div>
        </>
        )}

      {/* Support needs timeline */}
      <div className="bg-background rounded-lg p-4 border border-tertiary/20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-medium text-primary">
            Support Needs Timeline
          </h3>
          <button 
            onClick={() => openDetailModal('supportTimeline', { data, viewMode })}
            className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
          >
            <ExternalLink size={14} className="mr-1" />
            Expand
          </button>
        </div>
        <SupportNeedsTimeline 
          data={data} 
          viewMode={viewMode} 
          onViewDetails={(quarter) => openDetailModal('supportQuarter', { quarter, data, viewMode })}
        />
      </div>
      
      {/* Detail Modal - Conditionally rendered based on activeDetailModal state */}
      {activeDetailModal && (
        <DetailModal 
          type={activeDetailModal.type} 
          details={activeDetailModal.details} 
          onClose={closeDetailModal}
        />
      )}
    </div>
  );
}
























// Enhanced helper component for the overview cards
function OverviewCard({ title, value, label, icon, onClick }) {
  return (
    <div 
      className="bg-background rounded-lg p-4 border border-tertiary/20 transition-all duration-fast hover:shadow-md hover:border-primary/30 cursor-pointer"
      onClick={onClick}
    >
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
      <div className="mt-3 text-xs text-primary flex items-center justify-end">
        <span>Click for details</span>
        <ChevronDown size={12} className="ml-1" />
      </div>
    </div>
  );
}

// New component for upcoming timelines
function UpcomingTimelines({ data, viewMode, onViewDetails }) {
  // Extract upcoming milestones/activities
  let upcomingMilestones = [];
  
  if (viewMode === 'single') {
    // Extract from single partner
    const timeline = data?.implementationTimeline?.activities || [];
    
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
      ?.flatMap(partner => 
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
      .slice(0, 5) || [];
  }
  
  if (upcomingMilestones.length === 0) {
    return (
      <div className="bg-background rounded-lg p-4 border border-tertiary/20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-medium text-primary">
            Upcoming Milestones
          </h3>
          <button 
            onClick={onViewDetails}
            className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
          >
            <ExternalLink size={14} className="mr-1" />
            View All
          </button>
        </div>
        <p className="text-tertiary text-sm text-center py-4">
          No upcoming milestones in the next 90 days
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-background rounded-lg p-4 border border-tertiary/20">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-primary">
          Upcoming Milestones
        </h3>
        <button 
          onClick={onViewDetails}
          className="text-primary hover:text-primary-dark transition-colors text-sm flex items-center"
        >
          <ExternalLink size={14} className="mr-1" />
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {upcomingMilestones.map((milestone, index) => (
          <div key={index} className="border-l-2 border-primary pl-3 py-1 hover:bg-tertiary/5 cursor-pointer rounded-r"
            onClick={() => onViewDetails(milestone)}>
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
function SupportNeedsTimeline({ data, viewMode, onViewDetails }) {
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
    supportRequests = data?.supportRequests || [];
  } else {
    supportRequests = data?.flatMap(partner => 
      (partner.supportRequests || []).map(req => ({
        ...req,
        partnerName: partner.name,
        partnerId: partner.id
      }))
    ) || [];
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
            className="border border-tertiary/20 rounded-lg p-3 transition-all duration-fast hover:shadow-md hover:border-primary/30 group cursor-pointer"
            onClick={() => onViewDetails(quarterData)}
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
function SinglePartnerDevelopmentAreas({ areas, onViewDetails }) {
  // State to track if all areas are being shown
  const [showAll, setShowAll] = useState(false);
  
  // Determine how many areas to display
  const displayAreas = showAll ? areas : areas.slice(0, 3);
  
  // Toggle between showing limited vs all areas
  const toggleShowAll = (e) => {
    e.stopPropagation(); // Prevent triggering onViewDetails
    setShowAll(!showAll);
  };

  // Get status breakdown
  const statusBreakdown = {
    completed: 0,
    inProgress: 0,
    notStarted: 0
  };
  
  areas.forEach(area => {
    if (area.progressStatus === 'Completed') statusBreakdown.completed++;
    else if (area.progressStatus === 'In Progress') statusBreakdown.inProgress++;
    else statusBreakdown.notStarted++;
  });

  
 
  
  return (
    <div className="space-y-4 max-h-[50rem] overflow-auto hide-scrollbar">
       <div className="bg-background rounded-lg  border-b pb-2 border-tertiary/20">    
      <div className="flex justify-between items-center ">
        <div className="text-sm text-secondary mb-2 mt-4">
            <span className="text-lg font-bold text-primary mr-1">{areas.length}</span> Focus areas in this GIP
        </div>
      </div>
      
      {/* Status breakdown */}
      <div className="grid grid-cols-3">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <CheckCircle2 className="text-success w-4 h-4 mr-1" />
            <span className="text-sm">Completed</span>
          </div>
          <p className="font-medium">{statusBreakdown.completed}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Clock className="text-info w-4 h-4 mr-1" />
            <span className="text-sm">In Progress</span>
          </div>
          <p className="font-medium">{statusBreakdown.inProgress}</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center">
            <AlertCircle className="text-tertiary w-4 h-4 mr-1" />
            <span className="text-sm">Not Started</span>
          </div>
          <p className="font-medium">{statusBreakdown.notStarted}</p>
        </div>
      </div>
    </div>

      {displayAreas.map((area, index) => (
        <div 
          key={index} 
          className="p-4 border border-tertiary/20 rounded-lg hover:border-primary/30 transition-colors duration-fast hover:shadow-sm cursor-pointer"
          onClick={() => onViewDetails(area)}
        >
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
        <button 
          className="text-primary text-sm hover:text-primary-dark transition-colors w-full text-center py-2 border border-tertiary/20 rounded-lg hover:border-primary/30"
          onClick={toggleShowAll} // Now toggling visibility instead of opening modal
        >
          {showAll 
            ? "Show fewer areas" 
            : `View all ${areas.length} development areas`
          }
        </button>
      )}
    </div>
  );
}

// Component to show common development areas across partners
function MultiPartnerDevelopmentAreas({ data, onViewDetails }) {
  // State to track if all areas are being shown
  const [showAll, setShowAll] = useState(false);
  
  // Generate common areas
  const commonAreas = findCommonDevelopmentAreas(data);
  
  // Determine how many areas to display
  const displayAreas = showAll ? commonAreas : commonAreas.slice(0, 4);
  
  // Toggle between showing limited vs all areas
  const toggleShowAll = (e) => {
    e.stopPropagation(); // Prevent triggering onViewDetails
    setShowAll(!showAll);
  };
  
  return (
    <div className="space-y-4 max-h-[40rem] overflow-auto hide-scrollbar">
      {displayAreas.map((area, index) => (
        <div 
          key={index} 
          className="p-4 border border-tertiary/20 rounded-lg hover:border-primary/30 transition-colors duration-fast hover:shadow-sm cursor-pointer"
          onClick={() =>{ console.log({area}); onViewDetails(area)}}
        >
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
      
      {commonAreas.length > 4 && (
        <button 
          className="text-primary text-sm hover:text-primary-dark transition-colors w-full text-center py-2 border border-tertiary/20 rounded-lg hover:border-primary/30"
          onClick={toggleShowAll} // Now toggling visibility instead of opening modal
        >
          {showAll 
            ? "Show fewer areas" 
            : `View all ${commonAreas.length} common areas`
          }
        </button>
      )}
    </div>
  );
}








// Detail Modal Component for drill-downs
function DetailModal({ type, details, onClose }) {
  // Common modal wrapper
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in">
        <div className="p-4 border-b border-tertiary/20 flex justify-between items-center">
          <h2 className="text-xl font-medium text-primary">
            {getModalTitle(type, details)}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-tertiary/10 text-tertiary hover:text-primary transition-colors"
          > 
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto flex-1">
          {renderModalContent(type, details)}
        </div>
        
        <div className="p-3 border-t border-tertiary/20 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-tertiary/10 hover:bg-tertiary/20 text-secondary rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper function to get modal title
function getModalTitle(type, details) {
  switch (type) {
    case 'focusAreas':
      return details.viewMode === 'single' 
        ? `Focus Areas for ${details.data?.name || 'Partner'}` 
        : `Focus Areas Across ${details.data?.length || 0} Partners`;
    case 'topPrinciple':
      return `${details.principle.name} Details`;
    case 'supportRequests':
      return details.viewMode === 'single' 
        ? `Support Requests from ${details.data?.name || 'Partner'}` 
        : `Support Requests Across ${details.data?.length || 0} Partners`;
    case 'principleDistribution':
      return 'Principle Distribution Analysis';
    case 'developmentAreaDistribution':
      return 'Development Area Distribution Analysis';
    case 'developmentAreas':
      return details.viewMode === 'single' 
        ? `Development Areas for ${details.data?.name || 'Partner'}` 
        : `Common Development Areas Across Partners`;
    case 'developmentArea':
      return `Development Area: ${details.area?.areaTitle || 'Details'}`;
    case 'commonDevelopmentArea':
      return `Common Area: ${details.area?.title || 'Details'}`;
    case 'supportTimeline':
      return 'Support Needs Timeline';
    case 'supportQuarter':
      return `Support Requests in ${details.quarter?.name || 'Quarter'}`;
    case 'upcomingTimelines':
      return 'Upcoming Milestones';
    case 'anomaly':
      return `Unique Focus Area: ${details.anomaly?.areaTitle || 'Details'}`;
    default:
      return 'Details';
  }
}

// Helper function to render modal content based on type
function renderModalContent(type, details) {
  switch (type) {
    case 'focusAreas':
      return <FocusAreasDetailContent details={details} />;
    case 'topPrinciple':
      return <TopPrincipleDetailContent details={details} />;
    case 'supportRequests':
      return <SupportRequestsDetailContent details={details} />;
    case 'principleDistribution':
      return <PrincipleDistributionDetailContent details={details} />;
    case 'developmentAreaDistribution':
      return <DevelopmentAreaDistributionDetailContent details={details} />;
    case 'developmentAreas':
      return <DevelopmentAreasDetailContent details={details} />;
    case 'developmentArea':
      return <SingleDevelopmentAreaDetailContent details={details} />;
    case 'commonDevelopmentArea':
      return <CommonDevelopmentAreaDetailContent details={details} />;
    case 'supportTimeline':
      return <SupportTimelineDetailContent details={details} />;
    case 'supportQuarter':
      return <SupportQuarterDetailContent details={details} />;
    case 'upcomingTimelines':
      return <UpcomingTimelinesDetailContent details={details} />;
    case 'anomaly':
      return <AnomalyDetailContent details={details} />;
    default:
      return <div>No content available</div>;
  }
}





function FocusAreasDetailContent({ details }) {
  const { data, viewMode } = details;
  const [selectedPartner, setSelectedPartner] = useState(viewMode === 'comparison' ? 'all' : null);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPrinciple, setSelectedPrinciple] = useState('all');
  
  if (viewMode === 'single') {
    // Single partner focus areas
    const areas = data?.developmentAreas || [];
    const statusCounts = {
      'Completed': areas.filter(a => a.progressStatus === 'Completed').length,
      'In Progress': areas.filter(a => a.progressStatus === 'In Progress').length,
      'Not Started': areas.filter(a => a.progressStatus === 'Not Started').length || areas.filter(a => !a.progressStatus || a.progressStatus === '').length
    };
    
    // Filter areas by selected status
    const filteredAreas = selectedStatus === 'all' 
      ? areas 
      : areas.filter(area => area.progressStatus === selectedStatus);
    
    return (
      <div className="space-y-6">
        {/* Partner header with stats */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-sw-blue shadow-sm">
          <h3 className="text-xl font-bold sw-text-blue">
            {data?.name || 'Partner'} <span className="text-primary">Focus Areas</span>
          </h3>
          <p className="text-secondary mt-1">
            {areas.length} focus {areas.length === 1 ? 'area' : 'areas'} in their Governance Improvement Plan
          </p>
          
          {/* Status counts as badges */}
          <div className="flex flex-wrap gap-2 mt-3">
            <div 
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${selectedStatus === 'all' ? 'sw-bg-blue text-white font-weight-bold' : 'bg-white tex-black border-tertiary/30'}`}
              onClick={() => setSelectedStatus('all')}
            >
              All ({areas.length})
            </div>
            <div 
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${selectedStatus === 'Completed' ? 'sw-bg-green text-white font-weight-bold' : 'bg-white sw-text-green border-sw-green/30'}`}
              onClick={() => setSelectedStatus('Completed')}
            >
              Completed ({statusCounts['Completed']})
            </div>
            <div 
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${selectedStatus === 'In Progress' ? 'sw-bg-blue text-white font-weight-bold' : 'bg-white sw-text-blue border-sw-blue/30'}`}
              onClick={() => setSelectedStatus('In Progress')}
            >
              In Progress ({statusCounts['In Progress']})
            </div>
            <div 
              className={`px-3 py-1 rounded-full text-sm cursor-pointer border ${selectedStatus === 'Not Started' ? 'sw-bg-red text-white font-weight-bold' : 'bg-white sw-text-red border-sw-red/30'}`}
              onClick={() => setSelectedStatus('Not Started')}
            >
              Not Started ({statusCounts['Not Started']})
            </div>
          </div>
        </div>
        
        {/* Focus areas list */}
        <div className="space-y-6">
          {filteredAreas.length === 0 ? (
            <p className="text-center py-8 text-secondary bg-white rounded-lg shadow-sm">
              No focus areas match the selected filter
            </p>
          ) : (
            filteredAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                {/* Area title with status indicator */}
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-primary">{area.areaTitle}</h3>
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${
                    area.progressStatus === 'Completed' ? 'sw-bg-green' :
                    area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                    'sw-bg-red'
                  }`}>
                    {area.progressStatus || 'Not Started'}
                  </span>
                </div>
                
                {/* Capability Framework mapping */}
                <div className="mt-4 sw-bg-blue/5 p-3 rounded-md border border-sw-blue/20">
                  <h4 className="text-sm font-semibold sw-text-blue">Capability Framework</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                      Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
                    </span>
                    <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                      Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
                    </span>
                  </div>
                </div>
                
                {/* Objective */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-secondary">Objective</h4>
                  <p className="mt-1 text-secondary">{area.objective}</p>
                </div>
                
                {/* Timeline and lead */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border border-tertiary/20 rounded p-3">
                    <h4 className="text-sm font-semibold text-secondary">Timeline</h4>
                    <p className="text-secondary">
                      {formatDate(area.startDate)} - {formatDate(area.endDate)}
                    </p>
                    <p className="text-secondary mt-1">{area.timeframe}</p>
                  </div>
                  <div className="bg-white border border-tertiary/20 rounded p-3">
                    <h4 className="text-sm font-semibold text-secondary">Lead Person</h4>
                    <p className="text-secondary">{area.leadPerson}</p>
                  </div>
                </div>
                
                {/* Actions from GIP */}
                {area.actions && area.actions.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-secondary">Actions from GIP</h4>
                    <ul className="mt-2 space-y-2">
                      {area.actions.map((action, i) => (
                        <li key={i} className="flex items-start">
                          <span className="sw-text-red mr-2 mt-1">•</span>
                          <span className="text-secondary">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* GIP Excerpts - Highlighted */}
                {data?.gipExcerpts && data.gipExcerpts.filter(excerpt => 
                  excerpt.areaTitle === area.areaTitle).length > 0 && (
                  <div className="mt-6 p-4 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                    <h4 className="text-sm font-semibold sw-text-yellow">GIP Excerpts</h4>
                    {data.gipExcerpts
                      .filter(excerpt => excerpt.areaTitle === area.areaTitle)
                      .map((excerpt, i) => (
                        <div key={i} className="mt-3">
                          <p className="text-secondary italic">&quot;{excerpt.text}&quot;</p>
                          <div className="text-sm text-secondary mt-1">
                            From section: {excerpt.section} 
                            {excerpt.confidence && ` (Confidence: ${Math.round(excerpt.confidence * 100)}%)`}
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  } else {
    // Multi-partner view
    const uniqueAreas = getTotalUniqueAreas(data);
    const partnersWithAreas = data?.filter(p => p.developmentAreas && p.developmentAreas.length > 0) || [];
    const totalAreas = partnersWithAreas.reduce((sum, p) => sum + p.developmentAreas.length, 0);
    
    // Get all principles from all partners
    const principles = [];
    partnersWithAreas.forEach(partner => {
      partner.developmentAreas?.forEach(area => {
        if (area.cfMapping && !principles.some(p => p.id === area.cfMapping.principleId)) {
          principles.push({
            id: area.cfMapping.principleId,
            name: area.cfMapping.principleName
          });
        }
      });
    });
    
    // Get filtered partners
    const filteredPartners = selectedPartner === 'all' 
      ? partnersWithAreas 
      : partnersWithAreas.filter(p => p.id === selectedPartner);
    
    return (
      <div className="space-y-6">
        
        {/* Filter controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Filter by Partner</label>
              <select 
                className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
                value={selectedPartner}
                onChange={e => setSelectedPartner(e.target.value)}
              >
                <option value="all">All Partners</option>
                {partnersWithAreas.map(partner => (
                  <option key={partner.id} value={partner.id}>{partner.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">Filter by Principle</label>
              <select 
                className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
                value={selectedPrinciple}
                onChange={e => setSelectedPrinciple(e.target.value)}
              >
                <option value="all">All Principles</option>
                {principles.map(principle => (
                  <option key={principle.id} value={principle.id}>
                    Principle {principle.id}: {principle.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Partners with their focus areas */}
        <div className="space-y-8">
          {filteredPartners.map(partner => {
            // Filter areas by selected principle
            const partnerAreas = selectedPrinciple === 'all' 
              ? partner.developmentAreas 
              : partner.developmentAreas.filter(
                  area => area.cfMapping && area.cfMapping.principleId.toString() === selectedPrinciple
                );
            
            if (partnerAreas.length === 0) return null;
            
            return (
              <div key={partner.id} className="bg-white p-6 rounded-lg shadow-sm">
                {/* Partner header */}
                <div className="flex items-center justify-between border-b border-tertiary/20 pb-4">
                  <h3 className="text-lg font-bold sw-text-blue">{partner.name}</h3>
                  <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm">
                    {partnerAreas.length} focus {partnerAreas.length === 1 ? 'area' : 'areas'}
                  </span>
                </div>
                
                {/* Partner's focus areas */}
                <div className="mt-4 space-y-6">
                  {partnerAreas.map((area, areaIndex) => (
                    <div key={areaIndex} className="p-4 border border-tertiary/20 rounded-lg">
                      {/* Area header with status */}
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-primary">{area.areaTitle}</h4>
                        <span className={`px-3 py-1 rounded-full text-white text-sm ${
                          area.progressStatus === 'Completed' ? 'sw-bg-green' :
                          area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                          'sw-bg-red'
                        }`}>
                          {area.progressStatus || 'Not Started'}
                        </span>
                      </div>
                      
                      {/* CF mapping - prominently displayed */}
                      {area.cfMapping && (
                        <div className="mt-3 sw-bg-blue/5 p-2 rounded border border-sw-blue/20">
                          <span className="text-sm sw-text-blue">
                            Principle {area.cfMapping.principleId}: {area.cfMapping.principleName} • 
                            Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
                          </span>
                        </div>
                      )}
                      
                      {/* Objective */}
                      <div className="mt-3">
                        <p className="text-secondary">{area.objective}</p>
                      </div>
                      
                      {/* Implementation details */}
                      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-secondary font-medium">Timeline:</span>
                          <span className="text-secondary ml-1">{area.timeframe || 'Not specified'}</span>
                        </div>
                        <div>
                          <span className="text-secondary font-medium">Lead:</span>
                          <span className="text-secondary ml-1">{area.leadPerson || 'Not specified'}</span>
                        </div>
                        <div>
                          <span className="text-secondary font-medium">Date Range:</span>
                          <span className="text-secondary ml-1">
                            {formatDate(area.startDate)} - {formatDate(area.endDate)}
                          </span>
                        </div>
                      </div>
                      
                      {/* GIP Excerpts - if available for this partner */}
                      {partner.gipExcerpts && partner.gipExcerpts.filter(excerpt => 
                        excerpt.areaTitle === area.areaTitle).length > 0 && (
                        <div className="mt-4 p-3 sw-text-yellow/10 rounded border-l-4 border-sw-yellow">
                          <p className="text-secondary italic">
                            {partner.gipExcerpts.find(excerpt => excerpt.areaTitle === area.areaTitle).text}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          
          {filteredPartners.length === 0 && (
            <p className="text-center py-8 text-secondary bg-white rounded-lg shadow-sm">
              No partners match the selected filters
            </p>
          )}
        </div>
      </div>
    );
  }
}



function TopPrincipleDetailContent({ details }) {
  const { principle, data, viewMode } = details;
  
  // Extract principle number from the name
  const principleNumber = principle.name.split(' ')[1];
  
  // Filter areas related to the top principle
  let principleAreas = [];
  let principleExcerpts = [];
  
  if (viewMode === 'single') {
    principleAreas = data?.developmentAreas?.filter(
      area => area.cfMapping.principleId === parseInt(principleNumber)
    ) || [];
    principleExcerpts = data?.gipExcerpts?.filter(
      excerpt => excerpt.cfMapping.principleId === parseInt(principleNumber)
    ) || [];
  } else {
    // In multi-partner view, collect all areas related to the principle
    principleAreas = data?.flatMap(partner => 
      (partner.developmentAreas || [])
        .filter(area => area.cfMapping.principleId === parseInt(principleNumber))
        .map(area => ({ ...area, partnerName: partner.name, partnerId: partner.id }))
    ) || [];
  }
  
  // Get status counts for the principle
  const statusCounts = {
    completed: principleAreas.filter(a => a.progressStatus === 'Completed').length,
    inProgress: principleAreas.filter(a => a.progressStatus === 'In Progress').length,
    notStarted: principleAreas.filter(a => !a.progressStatus || a.progressStatus === 'Not Started').length
  };
  
  return (
    <div className="space-y-6">
      {/* Principle header */}
      <div className="bg-white rounded-lg p-5 border-l-4 border-sw-blue shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div className="sw-bg-blue w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {principleNumber}
          </div>
          <h3 className="text-xl font-bold sw-text-blue">
            {principle.name}
          </h3>
        </div>
        
        <p className="text-secondary">
          {viewMode === 'single' 
            ? `This principle represents ${principle.percentage.toFixed(1)}% of ${data?.name || 'this partner'}'s focus areas.`
            : `This principle is a focus area for ${principle.percentage.toFixed(1)}% of selected partners.`
          }
        </p>
        
        {/* Status counts */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="sw-bg-green/10 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-green">{statusCounts.completed}</p>
            <p className="text-sm text-secondary">Completed</p>
          </div>
          <div className="sw-bg-blue/10 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">{statusCounts.inProgress}</p>
            <p className="text-sm text-secondary">In Progress</p>
          </div>
          <div className="sw-bg-red/10 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-red">{statusCounts.notStarted}</p>
            <p className="text-sm text-secondary">Not Started</p>
          </div>
        </div>
      </div>
      
      {/* Principle description */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="font-bold text-primary mb-3">Principle Description</h4>
        <p className="text-secondary">
          {getPrincipleDescription(principleNumber)}
        </p>
        
        {/* Key elements */}
        <div className="mt-4">
          <h5 className="font-semibold text-primary mb-2">Key Elements</h5>
          <div className="flex flex-wrap gap-2">
            {getPrincipleElements(principleNumber).map((element, i) => (
              <span key={i} className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-md text-sm">
                {element}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Related development areas */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="font-bold text-primary mb-4">
          Related Development Areas 
          <span className="text-secondary font-normal ml-2">
            ({principleAreas.length})
          </span>
        </h4>
        
        {principleAreas.length === 0 ? (
          <p className="text-secondary text-center py-4">
            No specific development areas found for this principle.
          </p>
        ) : (
          <div className="space-y-4">
            {principleAreas.map((area, index) => (
              <div key={index} className="border border-tertiary/20 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h5 className="font-semibold text-primary">{area.areaTitle}</h5>
                    {viewMode === 'comparison' && (
                      <p className="text-sm sw-text-blue mt-1">{area.partnerName}</p>
                    )}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${
                    area.progressStatus === 'Completed' ? 'sw-bg-green' :
                    area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                    'sw-bg-red'
                  }`}>
                    {area.progressStatus || 'Not Started'}
                  </span>
                </div>
                
                <p className="text-secondary text-sm mt-1">{area.objective}</p>
                
                <div className="flex items-center mt-3 text-sm">
                  <span className="text-secondary font-medium">Element:</span>
                  <span className="ml-2 px-2 py-0.5 sw-bg-blue/10 sw-text-blue rounded">
                    {area.cfMapping.elementId}: {area.cfMapping.elementName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* GIP Excerpts (for single partner view) */}
      {viewMode === 'single' && principleExcerpts.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-4">GIP Excerpts</h4>
          <div className="space-y-4">
            {principleExcerpts.map((excerpt, i) => (
              <div key={i} className="p-4 sw-text-yellow/10 rounded-lg border-l-4 border-sw-yellow">
                <p className="text-secondary italic">{excerpt.text}</p>
                <div className="mt-2 text-sm text-secondary">
                  <span className="font-medium">From:</span> {excerpt.areaTitle} / {excerpt.section}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


// function SupportRequestsDetailContent({ details }) {
//   const { data, viewMode } = details;
  
//   // Get support requests
//   let supportRequests = [];
  
//   if (viewMode === 'single') {
//     supportRequests = data?.supportRequests || [];
//   } else {
//     supportRequests = data?.flatMap(partner => 
//       (partner.supportRequests || []).map(req => ({
//         ...req,
//         partnerName: partner.name,
//         partnerId: partner.id
//       }))
//     ) || [];
//   }
  
//   // Group requests by type
//   const requestsByType = {};
//   supportRequests.forEach(request => {
//     if (!requestsByType[request.supportArea]) {
//       requestsByType[request.supportArea] = [];
//     }
//     requestsByType[request.supportArea].push(request);
//   });
  
//   // Sort types by number of requests
//   const sortedTypes = Object.keys(requestsByType).sort(
//     (a, b) => requestsByType[b].length - requestsByType[a].length
//   );
  
//   return (
//     <div className="space-y-6">
//       <p className="text-secondary">
//         {viewMode === 'single' 
//           ? `${data?.name || 'This partner'} has ${supportRequests.length} support ${supportRequests.length === 1 ? 'request' : 'requests'}.`
//           : `There are ${supportRequests.length} support requests across ${data?.length || 0} partners.`
//         }
//       </p>
      
//       {/* Support requests by type */}
//       <div>
//         <h3 className="text-lg font-medium text-primary mb-3">Support Requests by Type</h3>
//         <div className="space-y-4">
//           {sortedTypes.map(type => (
//             <div key={type} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//               <div className="flex justify-between items-center">
//                 <h4 className="font-medium text-primary">{type}</h4>
//                 <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
//                   {requestsByType[type].length} {requestsByType[type].length === 1 ? 'request' : 'requests'}
//                 </span>
//               </div>
              
//               <div className="mt-3 space-y-3">
//                 {requestsByType[type].map((request, i) => (
//                   <div key={i} className="p-3 bg-background rounded-md border border-tertiary/20">
//                     {viewMode === 'comparison' && (
//                       <div className="text-xs font-medium text-secondary mb-1">
//                         {request.partnerName}
//                       </div>
//                     )}
//                     <p className="text-sm text-secondary">{request.context}</p>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-xs text-tertiary">
//                         {request.developmentArea}
//                       </span>
//                       <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded">
//                         {formatDate(request.requestedTimeline)}
//                       </span>
//                     </div>
//                     {request.gipExcerpt && (
//                       <div className="mt-2 text-xs text-tertiary italic bg-tertiary/5 p-2 rounded">
//                         &quot;{request.gipExcerpt}&quot;
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Timeline section */}
//       <div>
//         <h3 className="text-lg font-medium text-primary mb-3">Support Request Timeline</h3>
//         <div className="relative pb-10 pt-1">
//           {/* Timeline line */}
//           <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-tertiary/20"></div>
          
//           {supportRequests
//             .sort((a, b) => a.requestedTimeline.localeCompare(b.requestedTimeline))
//             .map((request, index) => (
//               <div key={index} className="relative pl-10 mb-4">
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
//                   <div className="w-2 h-2 rounded-full bg-background"></div>
//                 </div>
                
//                 <div className="bg-tertiary/5 p-3 rounded-lg border border-tertiary/20">
//                   <div className="text-xs text-tertiary mb-1">
//                     {formatDate(request.requestedTimeline)}
//                   </div>
//                   <div className="flex justify-between items-start">
//                     <h4 className="font-medium text-secondary">{request.supportArea}</h4>
//                     {viewMode === 'comparison' && (
//                       <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded">
//                         {request.partnerName}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm text-tertiary mt-1">{request.context}</p>
//                   {request.gipExcerpt && (
//                     <div className="mt-2 text-xs italic bg-tertiary/10 p-2 rounded">
//                       &quot;{request.gipExcerpt}&quot;
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }






function SupportRequestsDetailContent({ details }) {
  const { data, viewMode } = details;
  const [selectedType, setSelectedType] = useState('all');
  const [selectedQuarter, setSelectedQuarter] = useState('all');
  
  // Get support requests
  let supportRequests = [];
  
  if (viewMode === 'single') {
    supportRequests = data?.supportRequests || [];
  } else {
    supportRequests = data?.flatMap(partner => 
      (partner.supportRequests || []).map(req => ({
        ...req,
        partnerName: partner.name,
        partnerId: partner.id
      }))
    ) || [];
  }
  
  // Group requests by type
  const requestsByType = {};
  supportRequests.forEach(request => {
    if (!requestsByType[request.supportArea]) {
      requestsByType[request.supportArea] = [];
    }
    requestsByType[request.supportArea].push(request);
  });
  
  // Sort types by number of requests
  const sortedTypes = Object.keys(requestsByType).sort(
    (a, b) => requestsByType[b].length - requestsByType[a].length
  );
  
  // Group by quarter
  const quarters = {
    'Q4-2024-25': { name: 'Q4 2024-25', start: '2025-01', end: '2025-03', requests: [] },
    'Q1-2025-26': { name: 'Q1 2025-26', start: '2025-04', end: '2025-06', requests: [] },
    'Q2-2025-26': { name: 'Q2 2025-26', start: '2025-07', end: '2025-09', requests: [] },
    'Q3-2025-26': { name: 'Q3 2025-26', start: '2025-10', end: '2025-12', requests: [] },
    'Q4-2025-26': { name: 'Q4 2025-26', start: '2026-01', end: '2026-03', requests: [] }
  };
  
  supportRequests.forEach(request => {
    const timeline = request.requestedTimeline;
    if (!timeline) return;
    
    // Find which quarter this request falls into
    Object.values(quarters).forEach(quarter => {
      if (timeline >= quarter.start && timeline <= quarter.end) {
        quarter.requests.push(request);
      }
    });
  });
  
  // Apply filters
  const filteredRequests = supportRequests.filter(request => {
    if (selectedType !== 'all' && request.supportArea !== selectedType) return false;
    
    if (selectedQuarter !== 'all') {
      const quarter = quarters[selectedQuarter];
      if (!quarter) return false;
      
      const timeline = request.requestedTimeline;
      if (!timeline) return false;
      
      if (!(timeline >= quarter.start && timeline <= quarter.end)) return false;
    }
    
    return true;
  });
  
  return (
    <div className="space-y-6">
      
      {/* Filter controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Support Type</label>
            <select 
              className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
            >
              <option value="all">All Support Types</option>
              {sortedTypes.map(type => (
                <option key={type} value={type}>
                  {type} ({requestsByType[type].length})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Time Period</label>
            <select 
              className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
              value={selectedQuarter}
              onChange={e => setSelectedQuarter(e.target.value)}
            >
              <option value="all">All Time Periods</option>
              {Object.entries(quarters).map(([id, quarter]) => (
                <option key={id} value={id}>
                  {quarter.name} ({quarter.requests.length})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Support requests by type */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-4">Support Requests {filteredRequests.length > 0 && `(${filteredRequests.length})`}</h4>
        
        {filteredRequests.length === 0 ? (
          <p className="text-center py-6 text-secondary">
            No support requests match the selected filters
          </p>
        ) : (
          <div className="space-y-6">
            {/* Group by type for better organization */}
            {sortedTypes.filter(type => 
              filteredRequests.some(r => r.supportArea === type)
            ).map(type => {
              const typeRequests = filteredRequests.filter(r => r.supportArea === type);
              
              return (
                <div key={type} className="border border-tertiary/20 rounded-lg overflow-hidden">
                  {/* Type header */}
                  <div className="sw-bg-blue/5 p-3 border-b border-tertiary/20 flex justify-between items-center">
                    <h5 className="font-semibold sw-text-blue">{type}</h5>
                    <div className="px-3 py-1 sw-bg-blue text-white rounded-full text-sm">
                      {typeRequests.length} {typeRequests.length === 1 ? 'request' : 'requests'}
                    </div>
                  </div>
                  
                  {/* Type requests */}
                  <div className="divide-y divide-tertiary/10">
                    {typeRequests.map((request, i) => (
                      <div key={i} className="p-4">
                        {/* Partner info for comparison view */}
                        {viewMode === 'comparison' && (
                          <div className="mb-2">
                            <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-md text-sm">
                              {request.partnerName}
                            </span>
                          </div>
                        )}
                        
                        {/* Request context */}
                        <p className="text-secondary">{request.context}</p>
                        
                        {/* Request metadata */}
                        <div className="flex flex-wrap gap-4 mt-3 text-sm">
                          <div>
                            <span className="text-secondary font-medium">Timeline:</span>
                            <span className="ml-1 text-secondary">{formatDate(request.requestedTimeline)}</span>
                          </div>
                          
                          <div>
                            <span className="text-secondary font-medium">For:</span>
                            <span className="ml-1 text-secondary">{request.developmentArea}</span>
                          </div>
                          
                          <div>
                            <span className="text-secondary font-medium">Status:</span>
                            <span className="ml-1 text-secondary">{request.status || 'Requested'}</span>
                          </div>
                        </div>
                        
                        {/* GIP excerpt */}
                        {request.gipExcerpt && (
                          <div className="mt-3 p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                            <p className="text-secondary italic text-sm">{request.gipExcerpt}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Quarter distribution */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-4">Support Request Distribution</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(quarters).map(([id, quarter]) => (
            <div 
              key={id} 
              className={`p-3 rounded-lg border text-center cursor-pointer ${
                selectedQuarter === id 
                  ? 'border-sw-blue sw-bg-blue/5' 
                  : 'border-tertiary/20 hover:border-sw-blue/30'
              }`}
              onClick={() => setSelectedQuarter(selectedQuarter === id ? 'all' : id)}
            >
              <h5 className="font-medium text-primary mb-1">{quarter.name}</h5>
              <p className="text-2xl font-bold sw-text-blue">{quarter.requests.length}</p>
              <p className="text-sm text-secondary mt-1">
                {quarter.requests.length === 1 ? 'Request' : 'Requests'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}






// // PrincipleDistributionDetailContent - Expanded view of the principle distribution chart
// function PrincipleDistributionDetailContent({ details }) {
//   const { data, viewMode, themeDistribution } = details;
  
//   // For multi-partner view, calculate which partners contribute to each principle
//   const partnersByPrinciple = {};
  
//   if (viewMode === 'comparison') {
//     data.forEach(partner => {
//       partner.frameworkAlignment.forEach(alignment => {
//         const principleId = alignment.principleId;
//         if (!partnersByPrinciple[principleId]) {
//           partnersByPrinciple[principleId] = [];
//         }
//         partnersByPrinciple[principleId].push({
//           partnerId: partner.id,
//           partnerName: partner.name,
//           elements: alignment.elements,
//           focusAreaCount: alignment.focusAreaCount,
//           status: alignment.implementationStatus,
//           percentage: alignment.completionPercentage
//         });
//       });
//     });
//   }
  
//   return (
//     <div className="space-y-6">
//       {/* Overview description */}
//       <p className="text-secondary">
//         {viewMode === 'single' 
//           ? `This chart shows how ${data?.name || 'the partner'}'s focus areas are distributed across the 5 Capability Framework principles.`
//           : `This chart shows how the selected partners' focus areas are distributed across the 5 Capability Framework principles.`
//         }
//       </p>
      
//       {/* Principle distribution table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full border-collapse">
//           <thead>
//             <tr className="border-b border-tertiary/20 bg-tertiary/5">
//               <th className="py-3 px-4 text-left text-sm font-medium text-primary">Principle</th>
//               <th className="py-3 px-4 text-right text-sm font-medium text-primary">Focus Areas</th>
//               <th className="py-3 px-4 text-right text-sm font-medium text-primary">Percentage</th>
//               {viewMode === 'comparison' && (
//                 <th className="py-3 px-4 text-right text-sm font-medium text-primary">Partners</th>
//               )}
//             </tr>
//           </thead>
//           <tbody>
//             {themeDistribution.map((item, index) => (
//               <tr key={index} className="border-b border-tertiary/10 hover:bg-tertiary/5">
//                 <td className="py-3 px-4 text-sm text-secondary">
//                   Principle {item.principle}: {item.principleName}
//                 </td>
//                 <td className="py-3 px-4 text-right text-sm text-secondary">{Math.round(item.count)}</td>
//                 <td className="py-3 px-4 text-right text-sm text-secondary">{item.percentage.toFixed(1)}%</td>
//                 {viewMode === 'comparison' && (
//                   <td className="py-3 px-4 text-right text-sm text-secondary">
//                     {partnersByPrinciple[item.principle]?.length || 0}
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Principle details - show for each principle */}
//       <div className="space-y-6 pt-4">
//         {themeDistribution.map((item, index) => (
//           <div key={index} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//             <h3 className="text-lg font-medium text-primary">Principle {item.principle}: {item.principleName}</h3>
//             <p className="text-sm text-tertiary mt-1">
//               {getPrincipleDescription(item.principle.toString())}
//             </p>
            
//             {viewMode === 'comparison' && partnersByPrinciple[item.principle] && (
//               <div className="mt-4">
//                 <h4 className="text-sm font-medium text-secondary mb-2">Partners focusing on this principle</h4>
//                 <div className="space-y-3">
//                   {partnersByPrinciple[item.principle].map((partner, i) => (
//                     <div key={i} className="p-3 bg-background rounded-md border border-tertiary/20">
//                       <div className="flex justify-between items-start mb-1">
//                         <h5 className="font-medium text-secondary">{partner.partnerName}</h5>
//                         <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
//                           {partner.focusAreaCount} area{partner.focusAreaCount !== 1 ? 's' : ''}
//                         </div>
//                       </div>
//                       <div className="text-sm text-tertiary">
//                         <div>Status: {partner.status || 'Not specified'}</div>
//                         {partner.percentage !== undefined && (
//                           <div>Completion: {partner.percentage}%</div>
//                         )}
//                       </div>
//                       {partner.elements && partner.elements.length > 0 && (
//                         <div className="mt-2 pt-2 border-t border-tertiary/10">
//                           <div className="text-xs text-tertiary mb-1">Elements:</div>
//                           <div className="flex flex-wrap gap-1">
//                             {partner.elements.map((element, elemIdx) => (
//                               <span key={elemIdx} className="text-xs bg-tertiary/10 text-tertiary px-2 py-0.5 rounded">
//                                 {element}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {viewMode === 'single' && (
//               <div className="mt-4">
//                 <h4 className="text-sm font-medium text-secondary mb-2">Elements in focus</h4>
//                 <div className="space-y-1">
//                   {data?.frameworkAlignment
//                     .find(p => p.principleId === item.principle)?.elements.map((element, i) => (
//                     <div key={i} className="p-2 bg-background rounded-md text-sm text-tertiary">
//                       {element}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }







function PrincipleDistributionDetailContent({ details }) {
  const { data, viewMode, themeDistribution } = details;
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);
  
  // For multi-partner view, calculate which partners contribute to each principle
  const partnersByPrinciple = {};
  
  if (viewMode === 'comparison') {
    data.forEach(partner => {
      partner.frameworkAlignment.forEach(alignment => {
        const principleId = alignment.principleId;
        if (!partnersByPrinciple[principleId]) {
          partnersByPrinciple[principleId] = [];
        }
        partnersByPrinciple[principleId].push({
          partnerId: partner.id,
          partnerName: partner.name,
          elements: alignment.elements,
          focusAreaCount: alignment.focusAreaCount,
          status: alignment.implementationStatus,
          percentage: alignment.completionPercentage
        });
      });
    });
  }
  
  return (
    <div className="space-y-6">
      {/* Header with overview */}
      <div className="bg-white p-5 rounded-lg border-l-4 border-sw-blue shadow-sm">
        <h3 className="text-xl font-bold sw-text-blue">
          Principle Distribution Analysis
        </h3>
        <p className="text-secondary mt-1">
          {viewMode === 'single' 
            ? `This chart shows how ${data?.name || 'the partner'}'s focus areas are distributed across the 5 Capability Framework principles.`
            : `This chart shows how the selected partners' focus areas are distributed across the 5 Capability Framework principles.`
          }
        </p>
      </div>
      
      {/* Primary table - Kept and enhanced */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-4">Principle Distribution</h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="sw-bg-blue/5 border-b-2 border-sw-blue/20">
                <th className="py-3 px-4 text-left text-sm font-bold text-primary">Principle</th>
                <th className="py-3 px-4 text-center text-sm font-bold text-primary">Focus Areas</th>
                <th className="py-3 px-4 text-center text-sm font-bold text-primary">Percentage</th>
                {viewMode === 'comparison' && (
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">Partners</th>
                )}
                <th className="py-3 px-4 text-center text-sm font-bold text-primary">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tertiary/10">
              {themeDistribution.map((item, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-tertiary/10 hover:bg-tertiary/5 cursor-pointer ${
                    selectedPrinciple === item.principle ? 'sw-bg-blue/5' : ''
                  }`}
                  onClick={() => setSelectedPrinciple(
                    selectedPrinciple === item.principle ? null : item.principle
                  )}
                >
                  <td className="py-3 px-4">
                    <div className="font-medium text-primary">
                      Principle {item.principle}
                    </div>
                    <div className="text-sm text-secondary">
                      {item.principleName}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-lg font-bold text-primary">{Math.round(item.count)}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="flex items-center justify-center">
                      <div className="w-full max-w-[100px] bg-tertiary/10 h-3 rounded-full overflow-hidden">
                        <div 
                          className="h-full sw-bg-blue" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-primary font-medium">
                        {item.percentage.toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  {viewMode === 'comparison' && (
                    <td className="py-3 px-4 text-center">
                      <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full">
                        {partnersByPrinciple[item.principle]?.length || 0}
                      </span>
                    </td>
                  )}
                  <td className="py-3 px-4 text-center">
                    <button className="p-1 rounded-full sw-text-blue hover:sw-bg-blue/10">
                      {selectedPrinciple === item.principle ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Selected principle details */}
      {selectedPrinciple && (
        <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-sw-blue animate-expand">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-primary">
              Principle {selectedPrinciple} Details
            </h4>
            <button 
              className="text-sm sw-text-blue hover:underline"
              onClick={() => setSelectedPrinciple(null)}
            >
              Close
            </button>
          </div>
          
          {/* Principle description */}
          <div className="p-4 sw-bg-blue/5 rounded-lg mb-4">
            <p className="text-secondary">
              {getPrincipleDescription(selectedPrinciple.toString())}
            </p>
          </div>
          
          {/* Elements in this principle */}
          <div className="mb-6">
            <h5 className="font-semibold text-primary mb-2">Key Elements</h5>
            <div className="flex flex-wrap gap-2">
              {getPrincipleElements(selectedPrinciple.toString()).map((element, i) => (
                <div key={i} className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-lg text-sm">
                  {element}
                </div>
              ))}
            </div>
          </div>
          
          {/* Partner focus in this principle - for comparison view */}
          {viewMode === 'comparison' && partnersByPrinciple[selectedPrinciple] && (
            <div>
              <h5 className="font-semibold text-primary mb-3">Partners focusing on this principle</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {partnersByPrinciple[selectedPrinciple].map((partner, i) => (
                  <div key={i} className="p-4 border border-tertiary/20 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h6 className="font-medium sw-text-blue">{partner.partnerName}</h6>
                      <span className="px-2 py-0.5 sw-bg-blue/10 sw-text-blue rounded text-sm">
                        {partner.focusAreaCount} area{partner.focusAreaCount !== 1 ? 's' : ''}
                      </span>
                    </div>
                    
                    {/* Status and completion */}
                    {partner.status && (
                      <div className="mt-2 text-sm">
                        <span className="text-secondary font-medium">Status:</span>
                        <span className={`ml-2 ${
                          partner.status === 'Completed' ? 'sw-text-green' :
                          partner.status === 'In Progress' ? 'sw-text-blue' :
                          'sw-text-red'
                        }`}>
                          {partner.status}
                        </span>
                      </div>
                    )}
                    
                    {partner.percentage !== undefined && (
                      <div className="mt-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-secondary font-medium">Completion:</span>
                          <span className="text-secondary">{partner.percentage}%</span>
                        </div>
                        <div className="w-full bg-tertiary/10 h-2 rounded-full overflow-hidden">
                          <div 
                            className="h-full sw-bg-blue" 
                            style={{ width: `${partner.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    
                    {/* Elements this partner is focusing on */}
                    {partner.elements && partner.elements.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-tertiary/10">
                        <p className="text-sm text-secondary font-medium mb-1">Elements in focus:</p>
                        <div className="flex flex-wrap gap-1">
                          {partner.elements.map((element, elemIdx) => (
                            <span key={elemIdx} className="text-xs bg-tertiary/10 text-secondary px-2 py-0.5 rounded">
                              {element}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Elements focus for single partner view */}
          {viewMode === 'single' && (
            <div>
              <h5 className="font-semibold text-primary mb-3">Elements in focus</h5>
              <div className="space-y-2">
                {data?.frameworkAlignment
                  .find(p => p.principleId === selectedPrinciple)?.elements.map((element, i) => (
                  <div key={i} className="p-3 bg-white border border-tertiary/20 rounded-lg">
                    <p className="text-primary">{element}</p>
                    
                    {/* Look for excerpts related to this element */}
                    {data?.gipExcerpts?.filter(excerpt => 
                      excerpt.cfMapping.principleId === selectedPrinciple && 
                      excerpt.cfMapping.elementId === element.split(' ')[0]
                    ).map((excerpt, j) => (
                      <div key={j} className="mt-2 p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                        <p className="text-secondary italic text-sm">{excerpt.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}








// // DevelopmentAreaDistributionDetailContent - Shows distribution of development areas across partners
// function DevelopmentAreaDistributionDetailContent({ details }) {
//   const { data, viewMode } = details;
  
//   if (viewMode === 'single') {
//     // For single partner, show areas by status
//     const areas = data?.developmentAreas || [];
//     const statusGroups = {
//       'Completed': [],
//       'In Progress': [],
//       'Not Started': []
//     };
    
//     // Group by status
//     areas.forEach(area => {
//       if (statusGroups[area.progressStatus]) {
//         statusGroups[area.progressStatus].push(area);
//       } else {
//         statusGroups['Not Started'].push(area);
//       }
//     });
    
//     return (
//       <div className="space-y-6">
//         <p className="text-secondary">
//           {data?.name || 'This partner'} has {areas.length} focus {areas.length === 1 ? 'area' : 'areas'} with the following status distribution:
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {Object.entries(statusGroups).map(([status, statusAreas]) => (
//             <div key={status} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//               <h3 className="text-lg font-medium text-primary flex justify-between items-center">
//                 <span>{status}</span>
//                 <span className="text-2xl">{statusAreas.length}</span>
//               </h3>
              
//               <div className="mt-3 space-y-2">
//                 {statusAreas.map((area, i) => (
//                   <div key={i} className="p-2 bg-background rounded-md border border-tertiary/10">
//                     <div className="text-sm font-medium text-secondary">{area.areaTitle}</div>
//                     <div className="text-xs text-tertiary mt-1">
//                       Timeline: {area.timeframe || 'Not specified'}
//                     </div>
//                   </div>
//                 ))}
                
//                 {statusAreas.length === 0 && (
//                   <p className="text-sm text-tertiary italic">No areas with this status</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Timeline view */}
//         <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//           <h3 className="text-lg font-medium text-primary mb-3">Development Timeline</h3>
          
//           <div className="relative pb-10 pt-1">
//             {/* Timeline line */}
//             <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-tertiary/20"></div>
            
//             {areas
//               .sort((a, b) => parseDate(a.endDate) - parseDate(b.endDate))
//               .map((area, index) => (
//                 <div key={index} className="relative pl-10 mb-4">
//                   {/* Timeline dot */}
//                   <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
//                     <div className="w-2 h-2 rounded-full bg-background"></div>
//                   </div>
                  
//                   <div className="bg-tertiary/5 p-3 rounded-lg border border-tertiary/20">
//                     <div className="text-xs text-tertiary mb-1">
//                       {formatDate(area.startDate)} - {formatDate(area.endDate)}
//                     </div>
//                     <div className="text-sm font-medium text-secondary">{area.areaTitle}</div>
//                     <p className="text-sm text-tertiary mt-1">{area.objective}</p>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-xs text-tertiary">
//                         Led by: {area.leadPerson}
//                       </span>
//                       <span className={`text-xs px-2 py-1 rounded-full ${
//                         area.progressStatus === 'Completed' ? 'bg-success/10 text-success' :
//                         area.progressStatus === 'In Progress' ? 'bg-info/10 text-info' :
//                         'bg-tertiary/10 text-tertiary'
//                       }`}>
//                         {area.progressStatus}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     // For multi-partner view, show distribution
//     const distribution = calculateDevelopmentAreaDistribution(data.map(partner => partner.id));
    
//     return (
//       <div className="space-y-6">
//         <p className="text-secondary">
//           This chart shows how many development areas each partner is focusing on in their GIP.
//         </p>
        
//         <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20 overflow-x-auto">
//           <table className="min-w-full border-collapse">
//             <thead>
//               <tr className="border-b border-tertiary/20">
//                 <th className="py-3 px-4 text-left text-sm font-medium text-primary">Number of Areas</th>
//                 <th className="py-3 px-4 text-center text-sm font-medium text-primary">Partners</th>
//                 <th className="py-3 px-4 text-center text-sm font-medium text-primary">Completed</th>
//                 <th className="py-3 px-4 text-center text-sm font-medium text-primary">In Progress</th>
//                 <th className="py-3 px-4 text-center text-sm font-medium text-primary">Not Started</th>
//               </tr>
//             </thead>
//             <tbody>
//               {distribution.map((item, index) => (
//                 <tr key={index} className="border-b border-tertiary/10 hover:bg-tertiary/10">
//                   <td className="py-3 px-4 text-sm font-medium text-secondary">{item.areaCount} Areas</td>
//                   <td className="py-3 px-4 text-center text-sm text-secondary">{item.partnerCount}</td>
//                   <td className="py-3 px-4 text-center text-sm text-success">
//                     {item.statusTotals.completed}
//                   </td>
//                   <td className="py-3 px-4 text-center text-sm text-info">
//                     {item.statusTotals.inProgress}
//                   </td>
//                   <td className="py-3 px-4 text-center text-sm text-tertiary">
//                     {item.statusTotals.notStarted}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
        
//         {/* Partner details */}
//         <div className="space-y-4">
//           <h3 className="text-lg font-medium text-primary">Partner Details</h3>
          
//           {distribution.map((group, groupIndex) => (
//             <div key={groupIndex} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//               <h4 className="font-medium text-primary">Partners with {group.areaCount} Areas</h4>
              
//               <div className="mt-4 space-y-4">
//                 {group.partners.map((partner, partnerIndex) => (
//                   <div key={partnerIndex} className="p-3 bg-background rounded-md border border-tertiary/20">
//                     <div className="flex justify-between items-start">
//                       <h5 className="font-medium text-secondary">{partner.partnerName}</h5>
//                       <div className="flex items-center space-x-2 text-xs">
//                         <span className="bg-success/10 text-success px-2 py-0.5 rounded">
//                           {partner.statusBreakdown.completed} Completed
//                         </span>
//                         <span className="bg-info/10 text-info px-2 py-0.5 rounded">
//                           {partner.statusBreakdown.inProgress} In Progress
//                         </span>
//                         <span className="bg-tertiary/10 text-tertiary px-2 py-0.5 rounded">
//                           {partner.statusBreakdown.notStarted} Not Started
//                         </span>
//                       </div>
//                     </div>
                    
//                     <div className="mt-3 space-y-1">
//                       {partner.areas.map((area, areaIndex) => (
//                         <div key={areaIndex} className="p-2 bg-tertiary/5 rounded text-sm text-tertiary flex justify-between">
//                           <span>{area.areaTitle}</span>
//                           <span className={
//                             area.status === 'Completed' ? 'text-success' :
//                             area.status === 'In Progress' ? 'text-info' :
//                             'text-tertiary'
//                           }>
//                             {area.status}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }



function DevelopmentAreaDistributionDetailContent({ details }) {
  const { data, viewMode } = details;
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPrinciple, setSelectedPrinciple] = useState('all');
  const [selectedDistribution, setSelectedDistribution] = useState(null);
  
  if (viewMode === 'single') {
    // For single partner, show areas by status
    const areas = data?.developmentAreas || [];
    
    // Get all principles represented in areas
    const principles = [...new Set(areas.map(area => area.cfMapping.principleId))].sort();
    
    // Status groups
    const statusGroups = {
      'Completed': areas.filter(a => a.progressStatus === 'Completed'),
      'In Progress': areas.filter(a => a.progressStatus === 'In Progress'),
      'Not Started': areas.filter(a => !a.progressStatus || a.progressStatus === 'Not Started')
    };
    
    // Filter areas based on selected filters
    const filteredAreas = areas.filter(area => {
      if (selectedStatus !== 'all' && area.progressStatus !== selectedStatus) {
        if (selectedStatus === 'Not Started' && (!area.progressStatus || area.progressStatus === '')) {
          // Allow empty status to match "Not Started"
          return true;
        }
        return false;
      }
      
      if (selectedPrinciple !== 'all' && area.cfMapping.principleId !== parseInt(selectedPrinciple)) {
        return false;
      }
      
      return true;
    });
    
    return (
      <div className="space-y-6">
        {/* Overview header */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-sw-blue shadow-sm">
          <h3 className="text-xl font-bold sw-text-blue">
            Development Areas for {data?.name || 'Partner'}
          </h3>
          <p className="text-secondary mt-1">
            {areas.length} focus {areas.length === 1 ? 'area' : 'areas'} with the following status distribution
          </p>
          
          {/* Status summary */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'Completed' ? 'sw-bg-green/20 border border-sw-green' : 'sw-bg-green/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'Completed' ? 'all' : 'Completed')}>
              <p className="text-xl font-bold sw-text-green">{statusGroups['Completed'].length}</p>
              <p className="text-sm text-secondary">Completed</p>
            </div>
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'In Progress' ? 'sw-bg-blue/20 border border-sw-blue' : 'sw-bg-blue/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'In Progress' ? 'all' : 'In Progress')}>
              <p className="text-xl font-bold sw-text-blue">{statusGroups['In Progress'].length}</p>
              <p className="text-sm text-secondary">In Progress</p>
            </div>
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'Not Started' ? 'sw-bg-red/20 border border-sw-red' : 'sw-bg-red/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'Not Started' ? 'all' : 'Not Started')}>
              <p className="text-xl font-bold sw-text-red">{statusGroups['Not Started'].length}</p>
              <p className="text-sm text-secondary">Not Started</p>
            </div>
          </div>
        </div>
        
        {/* Additional filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-primary">Filters</h4>
            {(selectedStatus !== 'all' || selectedPrinciple !== 'all') && (
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => {
                  setSelectedStatus('all');
                  setSelectedPrinciple('all');
                }}
              >
                Clear All
              </button>
            )}
          </div>
          
          {/* Principle filter */}
          <div>
            <label className="block text-sm text-secondary mb-1">Principle</label>
            <select 
              className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
              value={selectedPrinciple}
              onChange={e => setSelectedPrinciple(e.target.value)}
            >
              <option value="all">All Principles</option>
              {principles.map(principleId => (
                <option key={principleId} value={principleId}>
                  Principle {principleId}: {getPrincipleName(principleId)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Areas list */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-primary">Development Areas</h4>
            <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm">
              {filteredAreas.length} of {areas.length}
            </span>
          </div>
          
          {filteredAreas.length === 0 ? (
            <p className="text-center py-8 text-secondary">
              No areas match the selected filters
            </p>
          ) : (
            <div className="space-y-5">
              {filteredAreas.map((area, index) => (
                <div key={index} className="border border-tertiary/20 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="font-semibold text-primary">{area.areaTitle}</h5>
                    <span className={`px-3 py-1 rounded-full text-white text-sm ${
                      area.progressStatus === 'Completed' ? 'sw-bg-green' :
                      area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                      'sw-bg-red'
                    }`}>
                      {area.progressStatus || 'Not Started'}
                    </span>
                  </div>
                  
                  <p className="text-secondary mb-3">{area.objective}</p>
                  
                  {/* CF mapping */}
                  <div className="p-3 sw-bg-blue/5 rounded-md mb-3">
                    <div className="flex items-center">
                      <span className="text-sm font-medium sw-text-blue">Capability Framework:</span>
                      <span className="ml-2 text-sm text-secondary">
                        Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
                      </span>
                    </div>
                    <div className="text-sm text-secondary mt-1">
                      Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
                    </div>
                  </div>
                  
                  {/* Implementation details */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                
                    <div className="p-2 bg-tertiary/5 rounded-md">
                      <p className="text-sm font-medium text-secondary">Lead Person</p>
                      <p className="text-sm text-secondary">{area.leadPerson}</p>
                    </div>
                  </div>
                  
                  {/* GIP excerpts */}
                  {data?.gipExcerpts?.some(e => e.areaTitle === area.areaTitle) && (
                    <div className="p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                      <p className="text-sm font-medium sw-text-yellow mb-1">From GIP</p>
                      <p className="text-sm text-secondary italic">
                        {data.gipExcerpts.find(e => e.areaTitle === area.areaTitle)?.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    // For multi-partner view, show distribution
    const distribution = calculateDevelopmentAreaDistribution(data.map(partner => partner.id));
    
    // Get all principles for filtering
    const allPrinciples = new Set();
    data.forEach(partner => {
      partner.developmentAreas?.forEach(area => {
        if (area.cfMapping && area.cfMapping.principleId) {
          allPrinciples.add(area.cfMapping.principleId);
        }
      });
    });
    const principles = [...allPrinciples].sort();
    
    // Filter by selected principle
    const filteredDistribution = selectedPrinciple === 'all'
      ? distribution
      : distribution.map(group => {
          const filteredPartners = group.partners.map(partner => ({
            ...partner,
            areas: partner.areas.filter(area => 
              area.cfMapping && area.cfMapping.principleId.toString() === selectedPrinciple
            )
          })).filter(partner => partner.areas.length > 0);
          
          return {
            ...group,
            partners: filteredPartners
          };
        }).filter(group => group.partners.length > 0);
    
    return (
      <div className="space-y-6">
        
        
        {/* Filter controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-primary">Principle Filters</h4>
            {selectedPrinciple !== 'all' && (
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => setSelectedPrinciple('all')}
              >
                Clear
              </button>
            )}
          </div>
          
          <div>
        
            <select 
              className="w-auto p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
              value={selectedPrinciple}
              onChange={e => setSelectedPrinciple(e.target.value)}
            >
              <option value="all">All Principles</option>
              {principles.map(principleId => (
                <option key={principleId} value={principleId}>
                  Principle {principleId}: {getPrincipleName(principleId)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Distribution overview */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-primary mb-4">Area Distribution</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="sw-bg-blue/5 border-b-2 border-sw-blue/20">
                  <th className="py-3 px-4 text-left text-sm font-bold text-primary">Number of Areas</th>
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">Partners</th>
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">Completed</th>
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">In Progress</th>
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">Not Started</th>
                  <th className="py-3 px-4 text-center text-sm font-bold text-primary">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tertiary/10">
                {filteredDistribution.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-4 text-center text-secondary">
                      No data available for the selected filters
                    </td>
                  </tr>
                ) : (
                  filteredDistribution.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-tertiary/10 hover:bg-tertiary/5 cursor-pointer ${
                        selectedDistribution === item.areaCount ? 'sw-bg-blue/5' : ''
                      }`}
                      onClick={() => setSelectedDistribution(
                        selectedDistribution === item.areaCount ? null : item.areaCount
                      )}
                    >
                      <td className="py-3 px-4">
                        <span className="font-medium text-primary">{item.areaCount} Areas</span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full">
                          {item.partnerCount}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="sw-text-green font-medium">
                          {item.statusTotals.completed}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="sw-text-blue font-medium">
                          {item.statusTotals.inProgress}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="sw-text-red font-medium">
                          {item.statusTotals.notStarted}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button className="p-1 rounded-full sw-text-blue hover:sw-bg-blue/10">
                          {selectedDistribution === item.areaCount ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Expanded detail view */}
        {selectedDistribution !== null && (
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-sw-blue animate-expand">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-primary">
                Partners with {selectedDistribution} Focus Areas
              </h4>
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => setSelectedDistribution(null)}
              >
                Close
              </button>
            </div>
            
            <div className="space-y-6">
              {filteredDistribution
                .find(d => d.areaCount === selectedDistribution)
                ?.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="border border-tertiary/20 rounded-lg overflow-hidden">
                    <div className="sw-bg-blue/5 p-3 border-b border-tertiary/20">
                      <div className="flex justify-between items-center">
                        <h5 className="font-semibold sw-text-blue">{partner.partnerName}</h5>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="px-2 py-0.5 sw-bg-green/10 sw-text-green rounded">
                            {partner.statusBreakdown.completed} Completed
                          </span>
                          <span className="px-2 py-0.5 sw-bg-blue/10 sw-text-blue rounded">
                            {partner.statusBreakdown.inProgress} In Progress
                          </span>
                          <span className="px-2 py-0.5 sw-bg-red/10 sw-text-red rounded">
                            {partner.statusBreakdown.notStarted} Not Started
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="divide-y divide-tertiary/10">
                      {partner.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h6 className="font-medium text-primary">{area.areaTitle}</h6>
                              
                              {/* CF mapping */}
                              {area.cfMapping && (
                                <div className="mt-1 text-sm sw-text-blue">
                                  Principle {area.cfMapping.principleId}: {area.cfMapping.elementName || area.cfMapping.principleName}
                                </div>
                              )}
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-white text-xs ${
                              area.status === 'Completed' ? 'sw-bg-green' :
                              area.status === 'In Progress' ? 'sw-bg-blue' :
                              'sw-bg-red'
                            }`}>
                              {area.status || 'Not Started'}
                            </span>
                          </div>
                          
                          {/* Find GIP excerpts if available */}
                          {(() => {
                            const partnerData = data.find(p => p.id === partner.partnerId);
                            if (!partnerData) return null;
                            
                            const excerpt = partnerData.gipExcerpts?.find(e => 
                              e.areaTitle === area.areaTitle
                            );
                            
                            if (!excerpt) return null;
                            
                            return (
                              <div className="mt-2 p-2 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                                <p className="text-xs text-secondary italic">{excerpt.text}</p>
                              </div>
                            );
                          })()}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}


function DevelopmentAreasDetailContent({ details }) {
  const { data, viewMode } = details;
  const [selectedPrinciple, setSelectedPrinciple] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [expandedArea, setExpandedArea] = useState(null);
  
  if (viewMode === 'single') {
    // Single partner development areas
    const areas = data?.developmentAreas || [];
    
    // Get all principles for filtering
    const principles = [...new Set(areas.map(area => area.cfMapping.principleId))].sort();
    
    // Apply filters
    const filteredAreas = areas.filter(area => {
      if (selectedPrinciple !== 'all' && area.cfMapping.principleId.toString() !== selectedPrinciple) {
        return false;
      }
      
      if (selectedStatus !== 'all' && area.progressStatus !== selectedStatus) {
        if (selectedStatus === 'Not Started' && (!area.progressStatus || area.progressStatus === '')) {
          // Allow empty status to match "Not Started"
          return true;
        }
        return false;
      }
      
      return true;
    });
    
    // Count status for statistics
    const statusCounts = {
      'Completed': areas.filter(a => a.progressStatus === 'Completed').length,
      'In Progress': areas.filter(a => a.progressStatus === 'In Progress').length,
      'Not Started': areas.filter(a => !a.progressStatus || a.progressStatus === 'Not Started').length
    };
    
    return (
      <div className="space-y-6">
        {/* Header with overview stats */}
        <div className="bg-white rounded-lg p-5 border-l-4 border-sw-blue shadow-sm">
          <h3 className="text-xl font-bold sw-text-blue">
            {data?.name || 'Partner'} Development Areas
          </h3>
          <p className="text-secondary mt-1">
            {areas.length} development {areas.length === 1 ? 'area' : 'areas'} in this Governance Improvement Plan
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'Completed' ? 'sw-bg-green/20 border border-sw-green' : 'sw-bg-green/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'Completed' ? 'all' : 'Completed')}>
              <p className="text-xl font-bold sw-text-green">{statusCounts['Completed']}</p>
              <p className="text-sm text-secondary">Completed</p>
            </div>
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'In Progress' ? 'sw-bg-blue/20 border border-sw-blue' : 'sw-bg-blue/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'In Progress' ? 'all' : 'In Progress')}>
              <p className="text-xl font-bold sw-text-blue">{statusCounts['In Progress']}</p>
              <p className="text-sm text-secondary">In Progress</p>
            </div>
            <div className={`p-3 rounded-lg text-center cursor-pointer ${
              selectedStatus === 'Not Started' ? 'sw-bg-red/20 border border-sw-red' : 'sw-bg-red/5'
            }`} onClick={() => setSelectedStatus(selectedStatus === 'Not Started' ? 'all' : 'Not Started')}>
              <p className="text-xl font-bold sw-text-red">{statusCounts['Not Started']}</p>
              <p className="text-sm text-secondary">Not Started</p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-primary">Filters</h4>
            {(selectedPrinciple !== 'all' || selectedStatus !== 'all') && (
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => {
                  setSelectedPrinciple('all');
                  setSelectedStatus('all');
                }}
              >
                Clear All
              </button>
            )}
          </div>
          
          <div>
            <label className="block text-sm text-secondary mb-1">Filter by Principle</label>
            <select 
              className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
              value={selectedPrinciple}
              onChange={e => setSelectedPrinciple(e.target.value)}
            >
              <option value="all">All Principles</option>
              {principles.map(principleId => (
                <option key={principleId} value={principleId}>
                  Principle {principleId}: {getPrincipleName(principleId)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Development areas list */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-primary">Development Areas</h4>
            <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm">
              {filteredAreas.length} of {areas.length}
            </span>
          </div>
          
          {filteredAreas.length === 0 ? (
            <p className="text-center py-8 text-secondary bg-tertiary/5 rounded-lg">
              No development areas match the selected filters
            </p>
          ) : (
            <div className="space-y-8">
              {filteredAreas.map((area, index) => (
                <div key={index} className="border border-tertiary/20 rounded-lg overflow-hidden">
                  {/* Area header with title and status */}
                  <div className="p-4 border-b border-tertiary/20 bg-tertiary/5">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold text-primary text-lg">{area.areaTitle}</h5>
                      <span className={`px-3 py-1 rounded-full text-white text-sm ${
                        area.progressStatus === 'Completed' ? 'sw-bg-green' :
                        area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                        'sw-bg-red'
                      }`}>
                        {area.progressStatus || 'Not Started'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    {/* CF Mapping - prominently displayed */}
                    <div className="p-3 sw-bg-blue/5 rounded-md mb-4 border border-sw-blue/20">
                      <h6 className="text-sm font-semibold sw-text-blue mb-1">Capability Framework Mapping</h6>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                          Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
                        </span>
                        <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                          Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
                        </span>
                      </div>
                    </div>
                    
                    {/* Objective */}
                    <div className="mb-4">
                      <h6 className="text-sm font-semibold text-primary mb-1">Objective</h6>
                      <p className="text-secondary">{area.objective}</p>
                    </div>
                    
                    {/* Implementation details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      
                      <div>
                        <h6 className="text-sm font-semibold text-primary mb-1">Lead Person</h6>
                        <div className="p-3 bg-tertiary/5 rounded-md">
                          <p className="text-secondary">{area.leadPerson}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions from GIP */}
                    {area.actions && area.actions.length > 0 && (
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold text-primary mb-1">Actions from GIP</h6>
                        <ul className="space-y-2 bg-tertiary/5 p-3 rounded-md">
                          {area.actions.map((action, i) => (
                            <li key={i} className="flex items-start">
                              <span className="sw-text-red flex-shrink-0 mr-2">•</span>
                              <span className="text-secondary">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* GIP Excerpts - Highlighted to be prominent */}
                    {data?.gipExcerpts && data.gipExcerpts.filter(excerpt => 
                      excerpt.areaTitle === area.areaTitle).length > 0 && (
                      <div className="p-4 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                        <h6 className="text-sm font-semibold sw-text-yellow mb-2">GIP Excerpts</h6>
                        {data.gipExcerpts
                          .filter(excerpt => excerpt.areaTitle === area.areaTitle)
                          .map((excerpt, i) => (
                            <div key={i} className={i > 0 ? 'mt-3 pt-3 border-t border-sw-yellow/10' : ''}>
                              <p className="text-secondary italic">{excerpt.text}</p>
                              <div className="text-xs text-secondary mt-1">
                                From section: {excerpt.section}
                                {excerpt.confidence && 
                                  <span className="ml-2">
                                    (Confidence: {Math.round(excerpt.confidence * 100)}%)
                                  </span>
                                }
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    // Multi-partner common development areas
    const commonAreas = findCommonDevelopmentAreas(data);
    
    
    // Get all principles for filtering
    const principles = new Set();
    commonAreas.forEach(area => {
      if (area.cfMapping && area.cfMapping.principleId) {
        principles.add(area.cfMapping.principleId);
      }
    });
    
    // Apply filters
    const filteredAreas = commonAreas.filter(area => {
      if (selectedPrinciple !== 'all' && (!area.cfMapping || area.cfMapping.principleId.toString() !== selectedPrinciple)) {
        return false;
      }
      return true;
    });
    
    return (
      <div className="space-y-6">
        {/* Header with overview */}
        <div className="bg-white rounded-lg p-5 border-l-4 border-sw-blue shadow-sm">
          <h3 className="text-xl font-bold sw-text-blue">
            Common Development Areas
          </h3>
          <p className="text-secondary mt-1">
            {commonAreas.length} distinct development {commonAreas.length === 1 ? 'area' : 'areas'} across {data?.length || 0} partners
          </p>
          
          {/* Summary statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="p-3 sw-bg-blue/5 rounded-lg text-center">
              <p className="text-xl font-bold sw-text-blue">
                {commonAreas.filter(a => a.partnerCount > 1).length}
              </p>
              <p className="text-sm text-secondary">Shared Areas</p>
            </div>
            <div className="p-3 sw-bg-blue/5 rounded-lg text-center">
              <p className="text-xl font-bold sw-text-blue">
                {commonAreas.filter(a => a.partnerCount === 1).length}
              </p>
              <p className="text-sm text-secondary">Unique Areas</p>
            </div>
            <div className="p-3 sw-bg-blue/5 rounded-lg text-center">
              <p className="text-xl font-bold sw-text-blue">
                {Math.max(...commonAreas.map(a => a.partnerCount), 0)}
              </p>
              <p className="text-sm text-secondary">Most Common Area Count</p>
            </div>
          </div>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-primary">Filters</h4>
            {selectedPrinciple !== 'all' && (
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => setSelectedPrinciple('all')}
              >
                Clear
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-secondary mb-1">Filter by Principle</label>
              <select 
                className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
                value={selectedPrinciple}
                onChange={e => setSelectedPrinciple(e.target.value)}
              >
                <option value="all">All Principles</option>
                {[...principles].sort().map(principleId => (
                  <option key={principleId} value={principleId}>
                    Principle {principleId}: {getPrincipleName(principleId)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-secondary mb-1">Sort By</label>
              <select 
                className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
                onChange={e => {
                  // This would be implemented to sort the areas
                  // For now, just a placeholder
                }}
              >
                <option value="popularity">Popularity (Most Common First)</option>
                <option value="principle">Principle (1-5)</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Common areas list */}
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-primary">Development Areas</h4>
            <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm">
              {filteredAreas.length} of {commonAreas.length}
            </span>
          </div>
          
          {filteredAreas.length === 0 ? (
            <p className="text-center py-8 text-secondary bg-tertiary/5 rounded-lg">
              No common areas match the selected filters
            </p>
          ) : (
            <div className="space-y-6">
              {filteredAreas.map((area, index) => (
                <div key={index} className="border border-tertiary/20 rounded-lg overflow-hidden">
                  {/* Area header */}
                  <div 
                    className="p-4 border-b border-tertiary/20 bg-tertiary/5 flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedArea(expandedArea === index ? null : index)}
                  >
                    <div>
                      <h5 className="font-semibold text-primary">{area.title}</h5>
                      {area.cfMapping && (
                        <p className="text-sm sw-text-blue mt-1">
                          Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm mr-3">
                        {area.partnerCount} {area.partnerCount === 1 ? 'partner' : 'partners'}
                      </span>
                      <button className="p-1 rounded-full sw-text-blue hover:sw-bg-blue/10">
                        {expandedArea === index ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Expanded area details */}
                  {expandedArea === index && (
                    <div className="p-4 animate-expand">
                      {/* Description */}
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold text-primary mb-1">Description</h6>
                        <p className="text-secondary">{area.description}</p>
                      </div>
                      
                      {/* CF mapping if available */}
                      {area.cfMapping && (
                        <div className="p-3 sw-bg-blue/5 rounded-md mb-4 border border-sw-blue/20">
                          <h6 className="text-sm font-semibold sw-text-blue mb-1">Capability Framework</h6>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                              Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
                            </span>
                            {area.cfMapping.elementId && (
                              <span className="px-2 py-1 sw-bg-blue/10 sw-text-blue rounded text-sm">
                                Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Partners working on this area */}
                      <div className="mb-4">
                        <h6 className="text-sm font-semibold text-primary mb-2">Partners working on this area</h6>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {area.partners.map((partnerName, i) => {
                            // Find the partner data
                            const partnerData = data.find(p => p.name === partnerName);
                            if (!partnerData) return null;
                            
                            // Find the specific area in this partner
                            const partnerArea = partnerData.developmentAreas.find(a => 
                              a.areaTitle.toLowerCase() === area.title.toLowerCase()
                            );
                            
                            return (
                              <div key={i} className="border border-tertiary/20 rounded-md p-3">
                                <div className="flex justify-between items-start">
                                  <h6 className="font-medium text-primary">{partnerName}</h6>
                                  {partnerArea && (
                                    <span className={`px-2 py-0.5 rounded-full text-white text-xs ${
                                      partnerArea.progressStatus === 'Completed' ? 'sw-bg-green' :
                                      partnerArea.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                                      'sw-bg-red'
                                    }`}>
                                      {partnerArea.progressStatus || 'Not Started'}
                                    </span>
                                  )}
                                </div>
                                
                                {partnerArea && (
                                  <>
                                    <p className="text-sm text-secondary mt-2 line-clamp-2">
                                      {partnerArea.objective}
                                    </p>
                                    
                                    <div className="mt-2 flex flex-wrap text-xs text-secondary gap-x-4">
                                      {partnerArea.timeframe && (
                                        <span>Timeline: {partnerArea.timeframe}</span>
                                      )}
                                      {partnerArea.leadPerson && (
                                        <span>Lead: {partnerArea.leadPerson}</span>
                                      )}
                                    </div>
                                    
                                    {/* GIP excerpt */}
                                    {partnerData.gipExcerpts?.some(e => e.areaTitle === partnerArea.areaTitle) && (
                                      <div className="mt-2 p-2 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                                        <p className="text-xs text-secondary italic">
                                          {partnerData.gipExcerpts.find(e => e.areaTitle === partnerArea.areaTitle)?.text}
                                        </p>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

// Helper function to calculate progress percentage based on dates
function calculateProgress(startDateStr, endDateStr) {
  const startDate = parseDate(startDateStr);
  const endDate = parseDate(endDateStr);
  const now = new Date();
  
  // If dates are invalid, return 0
  if (!startDate || !endDate) return 0;
  
  // If end date is in the past, return 100%
  if (endDate < now) return 100;
  
  // If start date is in the future, return 0%
  if (startDate > now) return 0;
  
  // Calculate percentage
  const totalDuration = endDate - startDate;
  const elapsedDuration = now - startDate;
  
  if (totalDuration <= 0) return 0;
  
  return Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
}



// // SingleDevelopmentAreaDetailContent - Shows details for a specific development area
// function SingleDevelopmentAreaDetailContent({ details }) {
//   const { area, data, viewMode } = details;
  
//   // Find any GIP excerpts related to this area
//   const relatedExcerpts = data?.gipExcerpts?.filter(excerpt => 
//     excerpt.areaTitle === area?.areaTitle
//   ) || [];
  
//   // Find related support requests
//   const relatedSupport = data?.supportRequests?.filter(request => 
//     request.developmentArea === area?.areaTitle
//   ) || [];
  
//   return (
//     <div className="space-y-6">
//       {/* Area header */}
//       <div className="bg-primary/5 p-4 rounded-lg">
//         <h3 className="text-xl font-medium text-primary">{area?.areaTitle}</h3>
        
//         <div className="mt-2 flex flex-wrap gap-2">
//           <span className={`text-xs px-2 py-1 rounded-full ${
//             area.progressStatus === 'Completed' ? 'bg-success/10 text-success' :
//             area.progressStatus === 'In Progress' ? 'bg-info/10 text-info' :
//             'bg-tertiary/10 text-tertiary'
//           }`}>
//             {area.progressStatus}
//           </span>
          
//           <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded-full">
//             {area.timeframe}
//           </span>
          
//           <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
//             Principle {area.cfMapping.principleId}
//           </span>
//         </div>
//       </div>
      
//       {/* Objective and details */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <h4 className="text-lg font-medium text-primary mb-3">Objective</h4>
//           <p className="text-secondary">{area.objective}</p>
          
//           {area.actions && area.actions.length > 0 && (
//             <div className="mt-4">
//               <h5 className="text-sm font-medium text-primary mb-2">Actions</h5>
//               <ul className="space-y-2">
//                 {area.actions.map((action, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="text-primary mr-2">•</span>
//                     <span className="text-secondary text-sm">{action}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
        
//         <div>
//           <h4 className="text-lg font-medium text-primary mb-3">Implementation Details</h4>
//           <div className="space-y-3">
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <span className="text-sm text-tertiary">Lead Person:</span>
//                 <p className="text-secondary">{area.leadPerson || 'Not specified'}</p>
//               </div>
//               <div>
//                 <span className="text-sm text-tertiary">Timeline:</span>
//                 <p className="text-secondary">{formatDate(area.startDate)} - {formatDate(area.endDate)}</p>
//               </div>
//             </div>
            
//             <div>
//               <span className="text-sm text-tertiary">Capability Framework Mapping:</span>
//               <p className="text-secondary">
//                 Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}
//                 <br />
//                 <span className="text-sm">
//                   Element {area.cfMapping.elementId}: {area.cfMapping.elementName}
//                 </span>
//               </p>
//             </div>
            
//             {area.completionPercentage !== undefined && (
//               <div>
//                 <span className="text-sm text-tertiary">Completion:</span>
//                 <div className="w-full bg-tertiary/10 rounded-full h-2 mt-1">
//                   <div 
//                     className="bg-primary h-2 rounded-full"
//                     style={{ width: `${area.completionPercentage}%` }}
//                   ></div>
//                 </div>
//                 <div className="text-right text-xs text-tertiary mt-1">
//                   {area.completionPercentage}%
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* GIP excerpts section */}
//       {relatedExcerpts.length > 0 && (
//         <div>
//           <h4 className="text-lg font-medium text-primary mb-3">GIP Excerpts</h4>
//           <div className="space-y-3">
//             {relatedExcerpts.map((excerpt, i) => (
//               <div key={i} className="p-3 bg-primary/5 rounded-md border border-primary/10">
//                 <p className="text-secondary italic">{excerpt.text}</p>
//                 <div className="text-xs text-tertiary mt-2">
//                   From: {excerpt.section || 'Document'} 
//                   {excerpt.page && ` - Page ${excerpt.page}`}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
      
//       {/* Related support requests */}
//       {relatedSupport.length > 0 && (
//         <div>
//           <h4 className="text-lg font-medium text-primary mb-3">Related Support Requests</h4>
//           <div className="space-y-3">
//             {relatedSupport.map((support, i) => (
//               <div key={i} className="p-3 bg-tertiary/5 rounded-md border border-tertiary/20">
//                 <div className="flex justify-between items-start mb-1">
//                   <h5 className="font-medium text-secondary">{support.supportArea}</h5>
//                   <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded">
//                     {formatDate(support.requestedTimeline)}
//                   </span>
//                 </div>
//                 <p className="text-sm text-tertiary">{support.context}</p>
//                 {support.gipExcerpt && (
//                   <div className="mt-2 p-2 bg-tertiary/10 rounded text-xs text-tertiary italic">
//                     {support.gipExcerpt}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




function SingleDevelopmentAreaDetailContent({ details }) {
  const { area, data, viewMode } = details;
  
  // Find any GIP excerpts related to this area
  const relatedExcerpts = data?.gipExcerpts?.filter(excerpt => 
    excerpt.areaTitle === area?.areaTitle
  ) || [];
  
  // Find related support requests
  const relatedSupport = data?.supportRequests?.filter(request => 
    request.developmentArea === area?.areaTitle
  ) || [];
  
  // Find related timeline activities
  const relatedActivities = data?.implementationTimeline?.activities?.filter(activity => 
    activity.areaTitle === area?.areaTitle
  )?.sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) || [];
  
  return (
    <div className="space-y-6">
      {/* Area header with key metadata */}
      <div className="bg-white rounded-lg p-5 border-l-4 border-sw-blue shadow-sm">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm sw-bg-blue/10 sw-text-blue rounded-md px-2 py-1">
              {data?.name || 'Partner'}
            </span>
            <h3 className="text-xl font-bold text-primary mt-2">{area?.areaTitle}</h3>
          </div>
          <span className={`px-3 py-1 text-white rounded-full ${
            area.progressStatus === 'Completed' ? 'sw-bg-green' :
            area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
            'sw-bg-red'
          }`}>
            {area.progressStatus || 'Not Started'}
          </span>
        </div>
        
        {/* Capability Framework mapping - Prominently displayed */}
        <div className="mt-4 p-3 sw-bg-blue/5 rounded-md border border-sw-blue/20">
          <h4 className="text-sm font-semibold sw-text-blue">Capability Framework Mapping</h4>
          <div className="mt-2">
            <div className="text-secondary">
              <span className="font-medium">Principle {area.cfMapping.principleId}:</span> {area.cfMapping.principleName}
            </div>
            <div className="text-secondary mt-1">
              <span className="font-medium">Element {area.cfMapping.elementId}:</span> {area.cfMapping.elementName}
            </div>
          </div>
        </div>
      </div>
      
      {/* GIP Excerpts - Highlighted to show actual content from GIP */}
      {relatedExcerpts.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-sw-yellow">
          <h4 className="font-bold text-primary mb-3">GIP Excerpts</h4>
          <div className="space-y-4">
            {relatedExcerpts.map((excerpt, i) => (
              <div key={i} className="p-4 sw-text-yellow/10 rounded-md">
                <p className="text-secondary italic">&quot;{excerpt.text}&quot;</p>
                <div className="flex justify-between items-center mt-2 text-sm">
                  <div className="text-secondary">
                    <span className="font-medium">From:</span> {excerpt.section || 'Document'}
                  </div>
                  {excerpt.confidence && (
                    <div className="text-secondary">
                      <span className="font-medium">Confidence:</span> {Math.round(excerpt.confidence * 100)}%
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Objective and Details */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="font-bold text-primary mb-3">Development Objective</h4>
        <p className="text-secondary">{area.objective}</p>
        
        {/* Key implementation details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-3 bg-tertiary/5 rounded-lg">
            <h5 className="text-sm font-semibold text-secondary mb-1">Timeframe</h5>
            <p className="text-primary font-medium">{area.timeframe}</p>
            <p className="text-sm text-secondary mt-1">
              {formatDate(area.startDate)} to {formatDate(area.endDate)}
            </p>
          </div>
          
          <div className="p-3 bg-tertiary/5 rounded-lg">
            <h5 className="text-sm font-semibold text-secondary mb-1">Lead Person</h5>
            <p className="text-primary font-medium">{area.leadPerson}</p>
          </div>
          
          <div className="p-3 bg-tertiary/5 rounded-lg">
            <h5 className="text-sm font-semibold text-secondary mb-1">Completion</h5>
            <div className="flex items-center">
              <div className="w-full bg-tertiary/20 h-2.5 rounded-full mr-2">
                <div 
                  className={`h-full rounded-full ${
                    area.progressStatus === 'Completed' ? 'sw-bg-green' :
                    area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                    'sw-bg-red'
                  }`}
                  style={{ width: `${area.completionPercentage || 0}%` }}
                ></div>
              </div>
              <span className="text-primary font-medium">{area.completionPercentage || 0}%</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actions from GIP */}
      {area.actions && area.actions.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-3">Actions from GIP</h4>
          <ul className="space-y-3">
            {area.actions.map((action, i) => (
              <li key={i} className="flex items-start p-3 bg-tertiary/5 rounded-lg">
                <div className="w-6 h-6 sw-bg-red text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  {i + 1}
                </div>
                <span className="text-secondary">{action}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Implementation Timeline */}
      {relatedActivities.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-4">Implementation Timeline</h4>
          <div className="relative pl-8">
            {/* Timeline vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-tertiary/20"></div>
            
            {relatedActivities.map((activity, i) => (
              <div key={i} className="mb-6 relative">
                {/* Timeline dot */}
                <div className={`absolute left-[-8px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  activity.status === 'Completed' ? 'sw-bg-green border-sw-green' :
                  activity.status === 'In Progress' ? 'sw-bg-blue border-sw-blue' :
                  'bg-white border-sw-red'
                }`}></div>
                
                <div className="pb-2">
                  <div className="text-sm text-tertiary mb-1">
                    {formatDate(activity.startDate)} — {formatDate(activity.endDate)}
                  </div>
                  <h5 className="font-medium text-primary">{activity.activity}</h5>
                  
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      activity.status === 'Completed' ? 'sw-bg-green/10 sw-text-green' :
                      activity.status === 'In Progress' ? 'sw-bg-blue/10 sw-text-blue' :
                      'sw-bg-red/10 sw-text-red'
                    }`}>
                      {activity.status || 'Not Started'} ({activity.statusPercentage || 0}%)
                    </span>
                    
                    {activity.milestone && (
                      <span className="text-xs px-2 py-0.5 sw-text-yellow/10 sw-text-yellow rounded-full">
                        Milestone: {activity.milestone}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Related Support Requests */}
      {relatedSupport.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-3">Related Support Requests</h4>
          <div className="space-y-4">
            {relatedSupport.map((support, i) => (
              <div key={i} className="p-4 border border-tertiary/20 rounded-lg">
                <div className="flex justify-between items-start">
                  <h5 className="font-medium text-primary">{support.supportArea}</h5>
                  <span className="text-xs bg-tertiary/10 text-secondary px-2 py-0.5 rounded">
                    Needed by: {formatDate(support.requestedTimeline)}
                  </span>
                </div>
                
                <p className="text-secondary mt-2">{support.context}</p>
                
                {support.gipExcerpt && (
                  <div className="mt-3 p-3 sw-text-yellow/10 rounded-md border-l-3 border-sw-yellow">
                    <p className="text-secondary italic text-sm">&quot;{support.gipExcerpt}&quot;</p>
                  </div>
                )}
                
                <div className="mt-3 text-sm">
                  <span className="text-secondary font-medium">Status:</span>
                  <span className="ml-2 text-secondary">{support.status || 'Requested'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}







function CommonDevelopmentAreaDetailContent({ details }) {
  const { area, data, viewMode } = details;
  const [selectedPartner, setSelectedPartner] = useState(null);
  
  // Find instances of this area across partners
  const areaInstances = [];
  data.forEach(partner => {
    const matchingArea = partner.developmentAreas.find(a => 
      a.areaTitle.toLowerCase() === area?.title.toLowerCase()
    );
    
    if (matchingArea) {
      areaInstances.push({
        partnerId: partner.id,
        partnerName: partner.name,
        area: matchingArea
      });
    }
  });
  
  // Get status breakdowns
  const statusCounts = {
    completed: areaInstances.filter(i => i.area.progressStatus === 'Completed').length,
    inProgress: areaInstances.filter(i => i.area.progressStatus === 'In Progress').length,
    notStarted: areaInstances.filter(i => !i.area.progressStatus || i.area.progressStatus === 'Not Started').length
  };
  
  // Get earliest and latest timeframes
  const timeframes = areaInstances
    .filter(i => i.area.timeframe)
    .map(i => i.area.timeframe);
  
  // Extract unique actions across all partners
  const allActions = new Set();
  areaInstances.forEach(instance => {
    (instance.area.actions || []).forEach(action => {
      allActions.add(action);
    });
  });
  
  return (
    <div className="space-y-6">
      {/* Area header with key metadata */}
      <div className="bg-white rounded-lg p-5 border-l-4 border-sw-blue shadow-sm">
        <div className="flex flex-wrap justify-between items-start gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-primary">{area?.title}</h3>
              <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full">
                {area.partnerCount} partners
              </span>
            </div>
            <p className="text-secondary mt-2">{area.description}</p>
          </div>
          
          {area.cfMapping && (
            <div className="p-3 sw-bg-blue/5 rounded-md border border-sw-blue/20">
              <div className="text-sm font-medium sw-text-blue">Capability Framework</div>
              <div className="text-secondary mt-1">
                <div>Principle {area.cfMapping.principleId}: {area.cfMapping.principleName}</div>
                <div>Element {area.cfMapping.elementId}: {area.cfMapping.elementName}</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Status breakdown */}
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="p-3 sw-bg-green/10 rounded-md text-center">
            <p className="text-xl font-bold sw-text-green">{statusCounts.completed}</p>
            <p className="text-sm text-secondary">Completed</p>
          </div>
          <div className="p-3 sw-bg-blue/10 rounded-md text-center">
            <p className="text-xl font-bold sw-text-blue">{statusCounts.inProgress}</p>
            <p className="text-sm text-secondary">In Progress</p>
          </div>
          <div className="p-3 sw-bg-red/10 rounded-md text-center">
            <p className="text-xl font-bold sw-text-red">{statusCounts.notStarted}</p>
            <p className="text-sm text-secondary">Not Started</p>
          </div>
        </div>
      </div>
      
      {/* Common Actions - Highlight similarities across partners */}
      {allActions.size > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-3">Common Actions</h4>
          <div className="space-y-3">
            {Array.from(allActions).map((action, i) => {
              // Count how many partners have this action
              const partnersWithAction = areaInstances.filter(instance => 
                (instance.area.actions || []).some(a => a === action)
              );
              
              return (
                <div key={i} className="p-3 border border-tertiary/20 rounded-lg">
                  <div className="flex justify-between">
                    <p className="text-secondary">{action}</p>
                    <div>
                      <span className="px-2 py-0.5 sw-bg-blue/10 sw-text-blue rounded text-sm">
                        {partnersWithAction.length} of {areaInstances.length} partners
                      </span>
                    </div>
                  </div>
                  
                  {/* Partner badges for this action */}
                  {partnersWithAction.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {partnersWithAction.map((p, pi) => (
                        <span key={pi} className="px-2 py-0.5 bg-tertiary/10 text-secondary rounded text-xs">
                          {p.partnerName}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Timeline comparison */}
      {timeframes.length > 0 && (
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <h4 className="font-bold text-primary mb-3">Implementation Timeframes</h4>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-tertiary/20">
              <thead>
                <tr className="bg-tertiary/5">
                  <th className="px-4 py-3 text-left text-sm font-medium text-primary">Partner</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-primary">Timeframe</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-primary">Lead Person</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-primary">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tertiary/10">
                {areaInstances
                  .sort((a, b) => {
                    // Sort by date if available, otherwise by partner name
                    if (a.area.startDate && b.area.startDate) {
                      return new Date(a.area.startDate) - new Date(b.area.startDate);
                    }
                    return a.partnerName.localeCompare(b.partnerName);
                  })
                  .map((instance, i) => (
                  <tr 
                    key={i} 
                    className={`cursor-pointer hover:bg-tertiary/5 ${
                      selectedPartner === instance.partnerId ? 'sw-bg-blue/5' : ''
                    }`}
                    onClick={() => setSelectedPartner(
                      selectedPartner === instance.partnerId ? null : instance.partnerId
                    )}
                  >
                    <td className="px-4 py-3 text-primary font-medium">{instance.partnerName}</td>
                    <td className="px-4 py-3 text-secondary">{instance.area.timeframe || '—'}</td>
                    <td className="px-4 py-3 text-secondary">{instance.area.leadPerson || '—'}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-white text-xs ${
                        instance.area.progressStatus === 'Completed' ? 'sw-bg-green' :
                        instance.area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                        'sw-bg-red'
                      }`}>
                        {instance.area.progressStatus || 'Not Started'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Partner-specific details for the selected partner */}
      {selectedPartner && (
        <div className="bg-white rounded-lg p-5 shadow-sm border-t-4 border-sw-blue animate-fade-in">
          {areaInstances
            .filter(instance => instance.partnerId === selectedPartner)
            .map((instance, i) => {
              // Find the full partner data
              const partner = data.find(p => p.id === instance.partnerId);
              
              // Find GIP excerpts for this area
              const partnerExcerpts = partner?.gipExcerpts?.filter(excerpt => 
                excerpt.areaTitle === instance.area.areaTitle
              ) || [];
              
              return (
                <div key={i}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-primary">
                      {instance.partnerName}
                    </h4>
                    <button 
                      className="text-sm sw-text-blue hover:underline"
                      onClick={() => setSelectedPartner(null)}
                    >
                      Close
                    </button>
                  </div>
                  
                  {/* Area objective */}
                  <div className="p-4 bg-tertiary/5 rounded-lg mb-4">
                    <h5 className="font-medium text-secondary mb-2">Objective</h5>
                    <p className="text-secondary">{instance.area.objective}</p>
                  </div>
                  
                  {/* Implementation details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 border border-tertiary/20 rounded-lg">
                      <h5 className="text-sm font-medium text-secondary mb-1">Timeline</h5>
                      <p className="text-primary">{instance.area.timeframe || 'Not specified'}</p>
                      <p className="text-sm text-secondary mt-1">
                        {formatDate(instance.area.startDate)} to {formatDate(instance.area.endDate)}
                      </p>
                    </div>
                    
                    <div className="p-3 border border-tertiary/20 rounded-lg">
                      <h5 className="text-sm font-medium text-secondary mb-1">Lead Person</h5>
                      <p className="text-primary">{instance.area.leadPerson || 'Not specified'}</p>
                    </div>
                    
                    <div className="p-3 border border-tertiary/20 rounded-lg">
                      <h5 className="text-sm font-medium text-secondary mb-1">Completion</h5>
                      <div className="flex items-center">
                        <div className="w-full bg-tertiary/20 h-2.5 rounded-full mr-2">
                          <div 
                            className={`h-full rounded-full ${
                              instance.area.progressStatus === 'Completed' ? 'sw-bg-green' :
                              instance.area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                              'sw-bg-red'
                            }`}
                            style={{ width: `${instance.area.completionPercentage || 0}%` }}
                          ></div>
                        </div>
                        <span className="text-primary font-medium">{instance.area.completionPercentage || 0}%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  {instance.area.actions && instance.area.actions.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-medium text-secondary mb-2">Actions</h5>
                      <ul className="space-y-2">
                        {instance.area.actions.map((action, ai) => (
                          <li key={ai} className="flex items-start">
                            <span className="sw-text-red mr-2">•</span>
                            <span className="text-secondary">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* GIP Excerpts */}
                  {partnerExcerpts.length > 0 && (
                    <div>
                      <h5 className="font-medium text-secondary mb-2">GIP Excerpts</h5>
                      <div className="space-y-3">
                        {partnerExcerpts.map((excerpt, ei) => (
                          <div key={ei} className="p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                            <p className="text-secondary italic">{excerpt.text}</p>
                            <div className="text-xs text-secondary mt-1">
                              From: {excerpt.section || 'Document'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
      
      {/* GIP excerpts comparison - Shows how different partners described the same area */}
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="font-bold text-primary mb-3">How Partners Describe This Area</h4>
        
        <div className="space-y-4">
          {areaInstances.map((instance, i) => {
            // Find the full partner data
            const partner = data.find(p => p.id === instance.partnerId);
            
            // Find the first GIP excerpt for this area
            const excerpt = partner?.gipExcerpts?.find(e => 
              e.areaTitle === instance.area.areaTitle
            );
            
            if (!excerpt) return null;
            
            return (
              <div key={i} className="p-4 border border-tertiary/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-medium text-primary">{instance.partnerName}</h5>
                  <span className={`px-2 py-0.5 rounded-full text-white text-xs ${
                    instance.area.progressStatus === 'Completed' ? 'sw-bg-green' :
                    instance.area.progressStatus === 'In Progress' ? 'sw-bg-blue' :
                    'sw-bg-red'
                  }`}>
                    {instance.area.progressStatus || 'Not Started'}
                  </span>
                </div>
                
                <div className="p-3 sw-text-yellow/10 rounded-md">
                  <p className="text-secondary italic">{excerpt.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// // SupportTimelineDetailContent - Shows a detailed timeline of support requests
// function SupportTimelineDetailContent({ details }) {
//   const { data, viewMode } = details;
  
//   // Define time periods (quarters)
//   const quarters = [
//     { id: "Q4-2024-25", name: "Q4 2024-25", start: "2025-01", end: "2025-03" },
//     { id: "Q1-2025-26", name: "Q1 2025-26", start: "2025-04", end: "2025-06" },
//     { id: "Q2-2025-26", name: "Q2 2025-26", start: "2025-07", end: "2025-09" },
//     { id: "Q3-2025-26", name: "Q3 2025-26", start: "2025-10", end: "2025-12" },
//     { id: "Q4-2025-26", name: "Q4 2025-26", start: "2026-01", end: "2026-03" }
//   ];
  
//   // Get support requests
//   let supportRequests = [];
  
//   if (viewMode === 'single') {
//     supportRequests = data?.supportRequests || [];
//   } else {
//     supportRequests = data?.flatMap(partner => 
//       (partner.supportRequests || []).map(req => ({
//         ...req,
//         partnerName: partner.name,
//         partnerId: partner.id
//       }))
//     ) || [];
//   }
  
//   // Group requests by quarter
//   const requestsByQuarter = {};
  
//   // Initialize quarters
//   quarters.forEach(quarter => {
//     requestsByQuarter[quarter.id] = {
//       ...quarter,
//       requests: []
//     };
//   });
  
//   // Assign requests to quarters
//   supportRequests.forEach(request => {
//     const timeline = request.requestedTimeline;
//     if (!timeline) return;
    
//     // Find which quarter this request falls into
//     const quarter = quarters.find(q => timeline >= q.start && timeline <= q.end);
//     if (quarter) {
//       requestsByQuarter[quarter.id].requests.push(request);
//     }
//   });
  
//   // Group requests by type overall
//   const requestsByType = {};
//   supportRequests.forEach(request => {
//     if (!requestsByType[request.supportArea]) {
//       requestsByType[request.supportArea] = [];
//     }
//     requestsByType[request.supportArea].push(request);
//   });
  
//   // Sort types by number of requests
//   const sortedTypes = Object.keys(requestsByType).sort(
//     (a, b) => requestsByType[b].length - requestsByType[a].length
//   );
  
//   return (
//     <div className="space-y-6">
//       <p className="text-secondary">
//         This timeline shows when support is needed across the year, allowing for better resource planning.
//       </p>
      
//       {/* Heat map chart visualization */}
//       <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//         <h3 className="text-lg font-medium text-primary mb-4">Support Requests by Quarter</h3>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full border-collapse">
//             <thead>
//               <tr className="border-b border-tertiary/20">
//                 <th className="py-3 px-4 text-left text-sm font-medium text-primary">Quarter</th>
//                 <th className="py-3 px-4 text-center text-sm font-medium text-primary">Requests</th>
//                 <th className="py-3 px-4 text-left text-sm font-medium text-primary">Top Support Types</th>
//                 {viewMode === 'comparison' && (
//                   <th className="py-3 px-4 text-center text-sm font-medium text-primary">Partners</th>
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {quarters.map(quarter => {
//                 const quarterData = requestsByQuarter[quarter.id];
//                 const supportTypes = getSupportTypes(quarterData.requests);
//                 const uniquePartners = new Set(
//                   quarterData.requests.map(req => req.partnerName || '').filter(Boolean)
//                 );
                
//                 return (
//                   <tr key={quarter.id} className="border-b border-tertiary/10 hover:bg-tertiary/5">
//                     <td className="py-3 px-4 text-sm font-medium text-secondary">{quarter.name}</td>
//                     <td className="py-3 px-4 text-center">
//                       <div className="text-xl font-bold text-primary">{quarterData.requests.length}</div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="space-y-1">
//                         {supportTypes.slice(0, 3).map((type, i) => (
//                           <div key={i} className="flex justify-between">
//                             <span className="text-xs text-tertiary">{type.type}</span>
//                             <span className="text-xs text-secondary font-medium">{type.count}</span>
//                           </div>
//                         ))}
//                         {supportTypes.length === 0 && (
//                           <span className="text-xs text-tertiary italic">None</span>
//                         )}
//                       </div>
//                     </td>
//                     {viewMode === 'comparison' && (
//                       <td className="py-3 px-4 text-center">
//                         <span className="text-sm text-secondary">{uniquePartners.size}</span>
//                       </td>
//                     )}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       {/* Support types breakdown */}
//       <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//         <h3 className="text-lg font-medium text-primary mb-4">Support Types Breakdown</h3>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {sortedTypes.map(type => (
//             <div key={type} className="bg-background p-3 rounded-md border border-tertiary/20">
//               <div className="flex justify-between items-center">
//                 <h4 className="font-medium text-secondary">{type}</h4>
//                 <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
//                   {requestsByType[type].length}
//                 </span>
//               </div>
              
//               <div className="mt-2 text-xs text-tertiary">
//                 <div className="space-y-1">
//                   <div className="flex justify-between">
//                     <span>Requested Timeline:</span>
//                     <span>
//                       {requestsByType[type]
//                         .map(r => formatDate(r.requestedTimeline))
//                         .filter((v, i, a) => a.indexOf(v) === i) // Unique timelines
//                         .slice(0, 2)
//                         .join(', ')}
//                       {requestsByType[type]
//                         .map(r => formatDate(r.requestedTimeline))
//                         .filter((v, i, a) => a.indexOf(v) === i).length > 2 && '...'}
//                     </span>
//                   </div>
//                   {viewMode === 'comparison' && (
//                     <div className="flex justify-between">
//                       <span>Partners:</span>
//                       <span>
//                         {Array.from(new Set(requestsByType[type].map(r => r.partnerName))).length}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Timeline visualization */}
//       <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
//         <h3 className="text-lg font-medium text-primary mb-4">Support Timeline</h3>
        
//         <div className="relative pb-10 pt-1">
//           {/* Timeline line */}
//           <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-tertiary/20"></div>
          
//           {supportRequests
//             .sort((a, b) => a.requestedTimeline.localeCompare(b.requestedTimeline))
//             .map((request, index) => (
//               <div key={index} className="relative pl-10 mb-4">
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
//                   <div className="w-2 h-2 rounded-full bg-background"></div>
//                 </div>
                
//                 <div className="bg-background p-3 rounded-lg border border-tertiary/20">
//                   <div className="text-xs text-tertiary mb-1">
//                     {formatDate(request.requestedTimeline)}
//                   </div>
//                   <div className="flex justify-between items-start">
//                     <h4 className="font-medium text-secondary">{request.supportArea}</h4>
//                     {viewMode === 'comparison' && (
//                       <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded">
//                         {request.partnerName}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-sm text-tertiary mt-1">{request.context}</p>
//                   {request.gipExcerpt && (
//                     <div className="mt-2 text-xs italic bg-tertiary/10 p-2 rounded">
//                       {request.gipExcerpt}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }



function SupportTimelineDetailContent({ details }) {
  const { data, viewMode } = details;
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const [selectedType, setSelectedType] = useState('all');
  
  // Define time periods (quarters)
  const quarters = [
    { id: "Q4-2024-25", name: "Q4 2024-25", start: "2025-01", end: "2025-03", color: "sw-blue" },
    { id: "Q1-2025-26", name: "Q1 2025-26", start: "2025-04", end: "2025-06", color: "sw-green" },
    { id: "Q2-2025-26", name: "Q2 2025-26", start: "2025-07", end: "2025-09", color: "sw-yellow" },
    { id: "Q3-2025-26", name: "Q3 2025-26", start: "2025-10", end: "2025-12", color: "sw-red" },
    { id: "Q4-2025-26", name: "Q4 2025-26", start: "2026-01", end: "2026-03", color: "sw-blue" }
  ];
  
  // Get support requests
  let supportRequests = [];
  
  if (viewMode === 'single') {
    supportRequests = data?.supportRequests || [];
  } else {
    supportRequests = data?.flatMap(partner => 
      (partner.supportRequests || []).map(req => ({
        ...req,
        partnerName: partner.name,
        partnerId: partner.id
      }))
    ) || [];
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
  
  // Group requests by type
  const requestsByType = {};
  supportRequests.forEach(request => {
    if (!requestsByType[request.supportArea]) {
      requestsByType[request.supportArea] = [];
    }
    requestsByType[request.supportArea].push(request);
  });
  
  // Sort types by number of requests
  const sortedTypes = Object.keys(requestsByType).sort(
    (a, b) => requestsByType[b].length - requestsByType[a].length
  );
  
  // Calculate max count for intensity
  const quarterCounts = Object.values(requestsByQuarter).map(q => q.requests.length);
  const maxCount = Math.max(...quarterCounts, 1);
  
  // Filter requests by selected type
  const filteredQuarters = {};
  Object.entries(requestsByQuarter).forEach(([id, quarter]) => {
    const filteredRequests = selectedType === 'all' 
      ? quarter.requests 
      : quarter.requests.filter(req => req.supportArea === selectedType);
    
    filteredQuarters[id] = {
      ...quarter,
      requests: filteredRequests
    };
  });
  
  return (
    <div className="space-y-6">
      {/* Header with summary */}
      <div className="bg-white p-5 rounded-lg border-l-4 border-sw-blue shadow-sm">
        <h3 className="text-xl font-bold sw-text-blue">Support Needs Timeline</h3>
        <p className="text-secondary mt-1">
          This timeline shows when support is needed across the year, allowing for better resource planning 
          and preparation.
        </p>
        
        {/* Quick stats */}
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">{supportRequests.length}</p>
            <p className="text-sm text-secondary">Total Support Requests</p>
          </div>
          <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">{sortedTypes.length}</p>
            <p className="text-sm text-secondary">Support Types</p>
          </div>
          <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">
              {Object.values(requestsByQuarter).filter(q => q.requests.length > 0).length}
            </p>
            <p className="text-sm text-secondary">Active Quarters</p>
          </div>
        </div>
      </div>
      
      {/* Filter control */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-sm font-medium text-secondary mb-2">Filter by Support Type</label>
        <select 
          className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        >
          <option value="all">All Support Types</option>
          {sortedTypes.map(type => (
            <option key={type} value={type}>
              {type} ({requestsByType[type].length})
            </option>
          ))}
        </select>
      </div>
      
      {/* Timeline visualization */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-5">
          Year Timeline
          {selectedType !== 'all' && (
            <span className="ml-2 font-normal text-secondary">
              (Filtered by: {selectedType})
            </span>
          )}
        </h4>
        
        {/* Visual timeline with quarter blocks */}
        <div className="relative mb-10">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-tertiary/20 -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {quarters.map(quarter => {
              const quarterData = filteredQuarters[quarter.id];
              const count = quarterData.requests.length;
              const intensity = count / maxCount;
              const selectedClass = selectedQuarter === quarter.id ? 'ring-2 ring-offset-2 ring-sw-blue' : '';
              
              return (
                <div 
                  key={quarter.id} 
                  className={`relative flex-1 mx-1 cursor-pointer ${selectedClass}`}
                  onClick={() => setSelectedQuarter(selectedQuarter === quarter.id ? null : quarter.id)}
                >
                  {/* Quarter circle */}
                  <div className={`
                    relative z-10 w-10 h-10 mx-auto rounded-full 
                    bg-white border-2 border-${quarter.color}
                    flex items-center justify-center
                    transition-all duration-200
                    ${count > 0 ? `bg-${quarter.color} sw-text-green` : 'text-secondary'}
                  `}>
                    <span className="text-xs font-bold">Q{quarter.id.split('-')[0].substring(1)}</span>
                  </div>
                  
                  {/* Request count */}
                  <div className="mt-3 text-center">
                    <p className={`text-lg font-bold ${count > 0 ? `text-${quarter.color}` : 'text-secondary'}`}>
                      {count}
                    </p>
                    <p className="text-xs text-secondary">{quarter.name}</p>
                  </div>
                  
                  {/* Request visualization */}
                  {count > 0 && (
                    <div 
                      className={`
                        absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                        w-14 bg-${quarter.color}/90 rounded-t-lg
                        transition-all duration-300
                      `}
                      style={{ height: `${Math.max(intensity * 100, 15)}px` }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Quarter detail - only shown when a quarter is selected */}
        {selectedQuarter && (
          <div className="mt-6 animate-fade-in">
            <div className="flex justify-between items-center border-b border-tertiary/20 pb-3 mb-4">
              <h5 className="font-semibold text-primary">
                {requestsByQuarter[selectedQuarter].name} Support Details
                <span className="ml-2 text-secondary font-normal">
                  ({filteredQuarters[selectedQuarter].requests.length} requests)
                </span>
              </h5>
              <button 
                className="text-sm sw-text-blue hover:underline"
                onClick={() => setSelectedQuarter(null)}
              >
                Close
              </button>
            </div>
            
            {filteredQuarters[selectedQuarter].requests.length === 0 ? (
              <p className="text-center py-6 text-secondary">
                No support requests for this quarter match the current filter
              </p>
            ) : (
              <div className="space-y-4">
                {filteredQuarters[selectedQuarter].requests.map((request, i) => (
                  <div key={i} className="p-4 border border-tertiary/20 rounded-lg">
                    {/* Request header */}
                    <div className="flex justify-between items-start">
                      <div>
                        <h6 className="font-medium text-primary">{request.supportArea}</h6>
                        {viewMode === 'comparison' && (
                          <p className="text-sm sw-text-blue mt-1">{request.partnerName}</p>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-tertiary/10 text-secondary rounded-full text-sm">
                        {formatDate(request.requestedTimeline)}
                      </span>
                    </div>
                    
                    {/* Request context */}
                    <p className="text-secondary mt-2">{request.context}</p>
                    
                    {/* Related development area */}
                    <div className="mt-3 pt-3 border-t border-tertiary/10">
                      <p className="text-sm">
                        <span className="text-secondary font-medium">For:</span>
                        <span className="ml-2 text-secondary">{request.developmentArea}</span>
                      </p>
                    </div>
                    
                    {/* GIP excerpt */}
                    {request.gipExcerpt && (
                      <div className="mt-3 p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                        <p className="text-secondary italic text-sm">{request.gipExcerpt}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Support distribution by type */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-4">Support Types by Quarter</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="sw-bg-blue/5 border-b-2 border-sw-blue/20">
                <th className="py-3 px-4 text-left text-sm font-bold text-primary">Support Type</th>
                {quarters.map(quarter => (
                  <th key={quarter.id} className="py-3 px-4 text-center text-sm font-bold text-primary">
                    {quarter.name}
                  </th>
                ))}
                <th className="py-3 px-4 text-center text-sm font-bold text-primary">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-tertiary/10">
              {sortedTypes.map(type => (
                <tr key={type} className="border-b border-tertiary/10 hover:bg-tertiary/5">
                  <td className="py-3 px-4 font-medium text-secondary">
                    {type}
                  </td>
                  {quarters.map(quarter => {
                    const count = requestsByQuarter[quarter.id].requests.filter(
                      req => req.supportArea === type
                    ).length;
                    
                    return (
                      <td key={quarter.id} className="py-3 px-4 text-center">
                        {count > 0 ? (
                          <span className={`px-2 py-1 rounded-full sw-text-green text-sm bg-${quarter.color}`}>
                            {count}
                          </span>
                        ) : (
                          <span className="text-tertiary">—</span>
                        )}
                      </td>
                    );
                  })}
                  <td className="py-3 px-4 text-center font-bold text-primary">
                    {requestsByType[type].length}
                  </td>
                </tr>
              ))}
              {/* Totals row */}
              <tr className="border-t-2 border-tertiary/20 bg-tertiary/5">
                <td className="py-3 px-4 font-bold text-primary">
                  Total
                </td>
                {quarters.map(quarter => (
                  <td key={quarter.id} className="py-3 px-4 text-center font-bold text-primary">
                    {requestsByQuarter[quarter.id].requests.length}
                  </td>
                ))}
                <td className="py-3 px-4 text-center font-bold text-primary">
                  {supportRequests.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function SupportQuarterDetailContent({ details }) {
  const { quarter, data, viewMode } = details;
  const [selectedType, setSelectedType] = useState('all');
  
  if (!quarter || !quarter.requests) {
    return (
      <div className="text-center text-secondary py-8 bg-white rounded-lg shadow-sm">
        No support requests in this quarter
      </div>
    );
  }
  
  // Group requests by type
  const requestsByType = {};
  quarter.requests.forEach(request => {
    if (!requestsByType[request.supportArea]) {
      requestsByType[request.supportArea] = [];
    }
    requestsByType[request.supportArea].push(request);
  });
  
  // Sort types by number of requests
  const sortedTypes = Object.keys(requestsByType).sort(
    (a, b) => requestsByType[b].length - requestsByType[a].length
  );
  
  // Group requests by partner (for multi-partner view)
  const requestsByPartner = {};
  if (viewMode === 'comparison') {
    quarter.requests.forEach(request => {
      if (!request.partnerName) return;
      
      if (!requestsByPartner[request.partnerName]) {
        requestsByPartner[request.partnerName] = [];
      }
      requestsByPartner[request.partnerName].push(request);
    });
  }
  
  // Filter requests
  const filteredRequests = selectedType === 'all' 
    ? quarter.requests 
    : quarter.requests.filter(req => req.supportArea === selectedType);
  
  // Get date range
  const startDate = formatDate(quarter.start);
  const endDate = formatDate(quarter.end);
  
  return (
    <div className="space-y-6">
      {/* Quarter header */}
      <div className="bg-white p-5 rounded-lg border-l-4 border-sw-blue shadow-sm">
        <h3 className="text-xl font-bold sw-text-blue">
          {quarter.name}
        </h3>
        <p className="text-secondary mt-1">
          Support requests for period: {startDate} to {endDate}
        </p>
        
        {/* Quick stats */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">{quarter.requests.length}</p>
            <p className="text-sm text-secondary">Support Requests</p>
          </div>
          <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
            <p className="text-xl font-bold sw-text-blue">{sortedTypes.length}</p>
            <p className="text-sm text-secondary">Support Types</p>
          </div>
          {viewMode === 'comparison' && (
            <div className="sw-bg-blue/5 p-3 rounded-lg text-center">
              <p className="text-xl font-bold sw-text-blue">{Object.keys(requestsByPartner).length}</p>
              <p className="text-sm text-secondary">Partners</p>
            </div>
          )}
        </div>
      </div>

      
      {/* Filter control */}
      {sortedTypes.length > 3 ? ( 
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <label className="block text-sm font-medium text-secondary mb-2">Filter by Support Type</label>
        <select 
          className="w-full p-2 border border-tertiary/30 rounded-md bg-white text-secondary"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        >
          <option value="all">All Support Types</option>
          {sortedTypes.map(type => (
            <option key={type} value={type}>
              {type} ({requestsByType[type].length})
            </option>
          ))}
        </select>
      </div>)
     : 
      // Support types summary 
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h4 className="font-bold text-primary mb-4">Support Types</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedTypes.map(type => {
            const typeRequests = requestsByType[type];
            const matchesFilter = selectedType === 'all' || selectedType === type;
            
            return (
              <div 
                key={type} 
                className={`
                  border rounded-lg p-4 transition-all duration-200
                  ${matchesFilter ? 'border-sw-blue/30 sw-bg-blue/5' : 'border-tertiary/20'}
                  ${!matchesFilter ? 'opacity-60' : 'opacity-100'}
                  cursor-pointer
                `}
                onClick={() => setSelectedType(selectedType === type ? 'all' : type)}
              >
                <div className="flex justify-between items-start">
                  <h5 className="font-medium text-primary">{type}</h5>
                  <span className={`
                    px-3 py-1 rounded-full text-white text-sm
                    ${matchesFilter ? 'sw-bg-blue' : 'bg-tertiary'}
                  `}>
                    {typeRequests.length}
                  </span>
                </div>
                
                {typeRequests.length > 0 && (
                  <div className="mt-2 text-sm text-secondary">
                    {viewMode === 'comparison' ? (
                      <p>{getUniquePartnerCount(typeRequests)} partners requesting</p>
                    ) : (
                      <p>For: {getUniqueDevelopmentAreas(typeRequests)}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
}
      {/* Support requests list */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-primary">
            Support Requests
            <span className="ml-2 font-normal text-secondary">
              ({filteredRequests.length})
            </span>
          </h4>
          
          {selectedType !== 'all' && (
            <button 
              className="text-sm sw-text-blue hover:underline"
              onClick={() => setSelectedType('all')}
            >
              Clear Filter
            </button>
          )}
        </div>
        
        {filteredRequests.length === 0 ? (
          <p className="text-center py-6 text-secondary">
            No support requests match the selected filter
          </p>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request, i) => (
              <div key={i} className="border border-tertiary/20 rounded-lg overflow-hidden">
                {/* Request header */}
                <div className="sw-bg-blue/5 p-3 border-b border-tertiary/20 flex justify-between items-center">
                  <div>
                    <h5 className="font-semibold sw-text-blue">{request.supportArea}</h5>
                    {viewMode === 'comparison' && (
                      <p className="text-sm text-secondary">{request.partnerName}</p>
                    )}
                  </div>
                  <span className="px-3 py-1 sw-bg-blue text-white rounded-full text-sm">
                    {formatDate(request.requestedTimeline)}
                  </span>
                </div>
                
                {/* Request content */}
                <div className="p-4">
                  {/* GIP excerpt - highlighted prominently */}
                  {request.gipExcerpt && (
                    <div className="mb-4 p-3 sw-text-yellow/10 rounded-md border-l-4 border-sw-yellow">
                      <p className="text-secondary italic">{request.gipExcerpt}</p>
                    </div>
                  )}
                  
                  {/* Request context */}
                  <div className="mb-4">
                    <h6 className="text-sm font-medium text-secondary mb-1">Details:</h6>
                    <p className="text-secondary">{request.context}</p>
                  </div>
                  
                  {/* Additional metadata */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-secondary font-medium">For:</span>
                      <span className="ml-2 text-secondary">{request.developmentArea}</span>
                    </div>
                    <div>
                      <span className="text-secondary font-medium">Status:</span>
                      <span className="ml-2 text-secondary">{request.status || 'Requested'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Partner breakdown (for multi-partner view) */}
      {viewMode === 'comparison' && (
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-bold text-primary mb-4">Partner Breakdown</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(requestsByPartner)
              .sort((a, b) => b[1].length - a[1].length)
              .map(([partnerName, requests], index) => (
                <div key={index} className="border border-tertiary/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h5 className="font-medium text-primary">{partnerName}</h5>
                    <span className="px-3 py-1 sw-bg-blue/10 sw-text-blue rounded-full text-sm">
                      {requests.length} request{requests.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="mt-3 space-y-2">
                    {requests
                      .filter(req => selectedType === 'all' || req.supportArea === selectedType)
                      .map((req, i) => (
                        <div key={i} className="p-2 bg-tertiary/5 rounded text-sm">
                          <div className="flex justify-between">
                            <span className="text-secondary">{req.supportArea}</span>
                            <span className="text-tertiary">{formatDate(req.requestedTimeline)}</span>
                          </div>
                          {req.developmentArea && (
                            <p className="text-tertiary text-xs mt-1 truncate">
                              For: {req.developmentArea}
                            </p>
                          )}
                        </div>
                      ))
                    }
                    
                    {requests.filter(req => selectedType === 'all' || req.supportArea === selectedType).length === 0 && (
                      <p className="text-xs text-tertiary italic">
                        No matching requests with current filter
                      </p>
                    )}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
}


// Helper functions
function getUniquePartnerCount(requests) {
  const partnerSet = new Set();
  requests.forEach(req => {
    if (req.partnerName) partnerSet.add(req.partnerName);
  });
  return partnerSet.size;
}

function getUniqueDevelopmentAreas(requests) {
  const areas = requests
    .map(req => req.developmentArea)
    .filter(Boolean);
  
  if (areas.length === 0) return 'N/A';
  
  if (areas.length === 1) return areas[0];
  
  // Show first area and count of others
  return `${areas[0]} +${areas.length - 1} more`;
}



// UpcomingTimelinesDetailContent - Shows details for upcoming milestones
function UpcomingTimelinesDetailContent({ details }) {
  const { data, viewMode } = details;
  
  // Extract all milestones
  let allMilestones = [];
  
  if (viewMode === 'single') {
    // Extract from single partner
    const timeline = data?.implementationTimeline?.activities || [];
    
    allMilestones = timeline
      .filter(activity => activity.milestone && activity.milestoneDate)
      .map(activity => ({
        date: activity.milestoneDate,
        title: activity.milestone,
        area: activity.areaTitle,
        status: activity.status,
        activity: activity.activity
      }))
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  } else {
    // Extract from multiple partners
    allMilestones = data
      ?.flatMap(partner => 
        (partner.implementationTimeline?.activities || [])
          .filter(activity => activity.milestone && activity.milestoneDate)
          .map(activity => ({
            date: activity.milestoneDate,
            title: activity.milestone,
            area: activity.areaTitle,
            status: activity.status,
            activity: activity.activity,
            partner: partner.name,
            partnerId: partner.id
          }))
      )
      .sort((a, b) => parseDate(a.date) - parseDate(b.date)) || [];
  }
  
  // Group milestones by month
  const milestonesByMonth = {};
  allMilestones.forEach(milestone => {
    const date = parseDate(milestone.date);
    const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
    
    if (!milestonesByMonth[monthKey]) {
      milestonesByMonth[monthKey] = {
        month: date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
        date: date,
        milestones: []
      };
    }
    
    milestonesByMonth[monthKey].milestones.push(milestone);
  });
  
  // Sort months
  const sortedMonths = Object.values(milestonesByMonth).sort(
    (a, b) => a.date - b.date
  );
  
  return (
    <div className="space-y-6">
      <p className="text-secondary">
        {viewMode === 'single' 
          ? `Showing ${allMilestones.length} upcoming milestones for ${data?.name || 'this partner'}`
          : `Showing ${allMilestones.length} upcoming milestones across ${data?.length || 0} partners`
        }
      </p>
      
      {/* Month-by-month timeline */}
      <div className="space-y-6">
        {sortedMonths.map((monthData, monthIndex) => (
          <div key={monthIndex} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
            <h3 className="text-lg font-medium text-primary mb-3">{monthData.month}</h3>
            
            <div className="space-y-3">
              {monthData.milestones.map((milestone, milestoneIndex) => (
                <div key={milestoneIndex} className="bg-background p-3 rounded-md border border-tertiary/20">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-secondary">{milestone.title}</h4>
                    {viewMode === 'comparison' && (
                      <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded">
                        {milestone.partner}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-tertiary mt-1">
                    {milestone.area} - {milestone.activity}
                  </p>
                  
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-tertiary">
                      {formatDate(milestone.date)}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      milestone.status === 'Completed' ? 'bg-success/10 text-success' :
                      milestone.status === 'In Progress' ? 'bg-info/10 text-info' :
                      'bg-tertiary/10 text-tertiary'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {sortedMonths.length === 0 && (
          <div className="text-center text-tertiary py-8">
            No upcoming milestones found
          </div>
        )}
      </div>
      
      {/* Milestone Stats */}
      {allMilestones.length > 0 && (
        <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
          <h3 className="text-lg font-medium text-primary mb-3">Milestone Stats</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background p-3 rounded-md border border-tertiary/20">
              <div className="text-sm text-tertiary mb-1">By Status</div>
              <div className="space-y-1">
                {(() => {
                  const statusCounts = {
                    'Completed': 0,
                    'In Progress': 0,
                    'Not Started': 0
                  };
                  
                  allMilestones.forEach(milestone => {
                    if (statusCounts[milestone.status] !== undefined) {
                      statusCounts[milestone.status]++;
                    } else {
                      statusCounts['Not Started']++;
                    }
                  });
                  
                  return Object.entries(statusCounts).map(([status, count], i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-xs text-tertiary">{status}</span>
                      <span className="text-xs text-secondary font-medium">{count}</span>
                    </div>
                  ));
                })()}
              </div>
            </div>
            
            <div className="bg-background p-3 rounded-md border border-tertiary/20">
              <div className="text-sm text-tertiary mb-1">By Month</div>
              <div className="space-y-1">
                {sortedMonths.slice(0, 5).map((month, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-xs text-tertiary">{month.month}</span>
                    <span className="text-xs text-secondary font-medium">{month.milestones.length}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {viewMode === 'comparison' && (
              <div className="bg-background p-3 rounded-md border border-tertiary/20">
                <div className="text-sm text-tertiary mb-1">By Partner</div>
                <div className="space-y-1">
                  {(() => {
                    const partnerCounts = {};
                    
                    allMilestones.forEach(milestone => {
                      if (!milestone.partner) return;
                      
                      if (!partnerCounts[milestone.partner]) {
                        partnerCounts[milestone.partner] = 0;
                      }
                      partnerCounts[milestone.partner]++;
                    });
                    
                    return Object.entries(partnerCounts)
                      .sort((a, b) => b[1] - a[1]) // Sort by count, descending
                      .slice(0, 5) // Top 5
                      .map(([partner, count], i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-xs text-tertiary truncate max-w-[70%]">{partner}</span>
                          <span className="text-xs text-secondary font-medium">{count}</span>
                        </div>
                      ));
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// AnomalyDetailContent - Shows details for unique/anomalous focus areas
function AnomalyDetailContent({ details }) {
  const { anomaly, data, viewMode } = details;
  
  if (!anomaly) {
    return (
      <div className="text-center text-tertiary py-8">
        No anomaly details available
      </div>
    );
  }
  
  // Find all instances of this anomaly across partners
  const anomalyInstances = anomaly.partners || [];
  
  return (
    <div className="space-y-6">
      {/* Anomaly header */}
      <div className="bg-primary/5 p-4 rounded-lg">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-primary">{anomaly.areaTitle}</h3>
          <div className={`
            px-2 py-1 rounded-full text-xs
            ${anomaly.rarityLevel === 'Unique' ? 'bg-primary/10 text-primary' : 
              anomaly.rarityLevel === 'Very Rare' ? 'bg-warning/10 text-warning' : 
              'bg-info/10 text-info'}
          `}>
            {anomaly.rarityLevel}
          </div>
        </div>
        
        <div className="mt-2 text-sm text-secondary">
          {anomaly.partnerCount} {anomaly.partnerCount === 1 ? 'partner' : 'partners'} 
          {' '}({anomaly.percentage.toFixed(1)}% of selected partners)
        </div>
        
        {anomaly.cfMapping && (
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs bg-tertiary/10 text-tertiary px-2 py-1 rounded-full">
              {anomaly.cfMapping.principleName}
            </span>
          </div>
        )}
      </div>
      
      {/* Anomaly significance */}
      <div className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
        <h3 className="text-lg font-medium text-primary mb-2">Significance</h3>
        <p className="text-secondary">
          This is a {anomaly.rarityLevel.toLowerCase()} focus area that only appears in 
          {anomaly.partnerCount === 1 
            ? ' one partner\'s GIP.' 
            : ` ${anomaly.partnerCount} partners' GIPs (${anomaly.percentage.toFixed(1)}% of selected partners).`
          }
        </p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-secondary mb-2">Potential Reasons</h4>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-tertiary text-sm">
                Specialized requirements or challenges unique to these partners
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-tertiary text-sm">
                Innovation or proactive approach in specific governance areas
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span className="text-tertiary text-sm">
                Response to specific incidents or external requirements
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Partner details */}
      <div>
        <h3 className="text-lg font-medium text-primary mb-3">Partner Details</h3>
        
        <div className="space-y-4">
          {anomalyInstances.map((instance, index) => (
            <div key={index} className="bg-tertiary/5 p-4 rounded-lg border border-tertiary/20">
              <h4 className="font-medium text-secondary">{instance.partnerName}</h4>
              
              <div className="mt-3">
                <h5 className="text-sm font-medium text-tertiary">Objective</h5>
                <p className="text-sm text-secondary mt-1">{instance.objective}</p>
              </div>
              
              {/* Find more details about this anomaly from the partner data */}
              {(() => {
                const partner = data.find(p => p.id === instance.partnerId || p.name === instance.partnerName);
                if (!partner) return null;
                
                const area = partner.developmentAreas.find(a => 
                  a.areaTitle.toLowerCase() === anomaly.areaTitle.toLowerCase()
                );
                
                if (!area) return null;
                
                return (
                  <div className="mt-4 space-y-3">
                    {area.actions && area.actions.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-tertiary">Actions</h5>
                        <ul className="mt-1 space-y-1">
                          {area.actions.map((action, i) => (
                            <li key={i} className="text-xs text-tertiary pl-3 relative">
                              <span className="absolute left-0 top-1.5 w-1 h-1 rounded-full bg-primary"></span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-sm font-medium text-tertiary">Status</h5>
                        <div className="text-xs text-secondary mt-1">
                          {area.progressStatus}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-tertiary">Timeframe</h5>
                        <div className="text-xs text-secondary mt-1">
                          {area.timeframe || 'Not specified'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Find any GIP excerpts related to this area for this partner */}
                    {partner.gipExcerpts?.filter(excerpt => 
                      excerpt.areaTitle === area.areaTitle
                    ).length > 0 && (
                      <div className="p-3 bg-primary/5 rounded-md border border-primary/10">
                        <h5 className="text-xs font-medium text-secondary">GIP Excerpt</h5>
                        {partner.gipExcerpts
                          .filter(excerpt => excerpt.areaTitle === area.areaTitle)
                          .slice(0, 1) // Just show the first excerpt for space
                          .map((excerpt, i) => (
                            <div key={i} className="mt-1">
                              <p className="text-xs text-tertiary italic">{excerpt.text}</p>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}








// Helper function to calculate development area distribution
function calculateDevelopmentAreaDistribution(selectedPartnerIds) {
  // Count areas and track progress for each partner
  const partnerAreaCounts = [];
  
  selectedPartnerIds.forEach(partnerId => {
    const partnerData = singlePartnerAnalysis[partnerId];
    if (!partnerData) return;
    
    const areas = partnerData.developmentAreas || [];
    
    // Calculate average progress
    let totalProgress = 0;
    let completedCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;
    
    areas.forEach(area => {
      // Count by status
      if (area.progressStatus === "Completed") completedCount++;
      else if (area.progressStatus === "In Progress") inProgressCount++;
      else notStartedCount++;
      
      // Add to total progress (if available)
      if (area.completionPercentage !== undefined) {
        totalProgress += area.completionPercentage;
      }
    });
    
    const avgProgress = areas.length > 0 ? totalProgress / areas.length : 0;
    
    partnerAreaCounts.push({
      partnerId,
      partnerName: partnerData.name,
      areaCount: areas.length,
      avgProgress,
      statusBreakdown: {
        completed: completedCount,
        inProgress: inProgressCount,
        notStarted: notStartedCount
      },
      areas: areas.map(area => ({
        areaTitle: area.areaTitle,
        status: area.progressStatus,
        cfMapping: area.cfMapping
      }))
    });
  });
  
  // Group by area count
  const countGroups = {};
  partnerAreaCounts.forEach(partner => {
    const count = partner.areaCount;
    if (!countGroups[count]) {
      countGroups[count] = {
        areaCount: count,
        partnerCount: 0,
        partners: [],
        avgProgress: 0,
        statusTotals: {
          completed: 0,
          inProgress: 0,
          notStarted: 0
        }
      };
    }
    
    countGroups[count].partnerCount++;
    countGroups[count].partners.push({
      partnerId: partner.partnerId,
      partnerName: partner.partnerName,
      avgProgress: partner.avgProgress,
      statusBreakdown: partner.statusBreakdown,
      areas: partner.areas
    });
    
    // Update averages and totals
    countGroups[count].avgProgress += partner.avgProgress;
    countGroups[count].statusTotals.completed += partner.statusBreakdown.completed;
    countGroups[count].statusTotals.inProgress += partner.statusBreakdown.inProgress;
    countGroups[count].statusTotals.notStarted += partner.statusBreakdown.notStarted;
  });
  
  // Calculate final averages for each group
  Object.values(countGroups).forEach(group => {
    group.avgProgress = group.partnerCount > 0 ? 
      group.avgProgress / group.partnerCount : 0;
  });
  
  // Convert to array and sort by area count
  const distributionData = Object.values(countGroups)
    .sort((a, b) => a.areaCount - b.areaCount);
  
  return distributionData;
}






// Helper functions for the main component
function getPartnerThemeDistribution(partnerData) {
  if (!partnerData || !partnerData.frameworkAlignment) return [];
  
  // Extract theme data from a single partner's framework alignment
  return partnerData.frameworkAlignment.map(principle => ({
    principle: principle.principleId,
    principleName: principle.principleName,
    count: principle.focusAreaCount,
    percentage: (principle.focusAreaCount / getTotalFocusAreas(partnerData)) * 100
  }));
}

function getTotalFocusAreas(partnerData) {
  if (!partnerData || !partnerData.frameworkAlignment) return 0;
  
  return partnerData.frameworkAlignment.reduce((sum, principle) => {
    return sum + principle.focusAreaCount;
  }, 0);
}

function getTopPrinciple(themeDistribution) {
  if (!themeDistribution || themeDistribution.length === 0) {
    return { name: 'None', percentage: 0 };
  }
  
  const sorted = [...themeDistribution].sort((a, b) => b.percentage - a.percentage);
  return {
    name: `Principle ${sorted[0].principle}`,
    percentage: sorted[0].percentage
  };
}

function getTotalSupportRequests(data) {
  if (!data) return 0;
  
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
  if (!partners || partners.length === 0) return 0;
  
  // This is a simplified version - in reality we would do more sophisticated deduplication
  const allAreas = partners.flatMap(partner => partner.developmentAreas || []);
  const uniqueAreaTitles = new Set(allAreas.map(area => area.areaTitle));
  return uniqueAreaTitles.size;
}

function findCommonDevelopmentAreas(partners) {
  if (!partners || partners.length === 0) return [];
  
  // Count occurrences of each area title
  const areaCounts = {};
  const areaDetails = {};
  
  partners.forEach(partner => {
    (partner.developmentAreas || []).forEach(area => {
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
  if (!dateStr) return 'N/A';
  
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

// Helper functions for principle descriptions
function getPrincipleDescription(principleId) {
  const descriptions = {
    '1': 'Organisational/Legal Compliance covers governance standards like constitution, safeguarding, insurance, and legal compliance.',
    '2': 'People and Cultures focuses on the board structure, roles, culture, and succession planning.',
    '3': 'Insight, Engagement & Strategy addresses strategic planning, EDI initiatives, and stakeholder engagement.',
    '4': 'Effectively Run Organisation covers operational aspects like meetings, decision-making, risk management, and policies.',
    '5': 'Finance focuses on financial management, compliance, budgeting, and reporting.'
  };
  
  return descriptions[principleId] || 'No description available';
}

function getPrincipleElements(principleId) {
  const elements = {
    '1': ['Governing Document(s) and Review', 'Safeguarding Children and Adults', 'Insurance', 'Complaints and Whistleblowing'],
    '2': ['Directors - Clear Understanding of Roles', 'Chair', 'Directors Recruitment/Appointment', 'Organisational Culture'],
    '3': ['Strategic Plan', 'Operational/Business Plan', 'EDI (Equality, Diversity & Inclusion)'],
    '4': ['Effective Meetings', 'Effective Board Decision-Making', 'Risk and Opportunity Management'],
    '5': ['Financial Compliance', 'Financial Procedures', 'Budgeting', 'Management Accounts']
  };
  
  return elements[principleId] || [];
}