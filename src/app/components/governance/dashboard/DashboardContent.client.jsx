


// src/app/components/governance/dashboard/DashboardContent.client.jsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, Filter, Download } from 'lucide-react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';
import PrinciplesSummary from './PrinciplesSummary.client';
import SupportAnalysis from './SupportAnalysis.client';
import TimelineView from './TimelineView.client';
import OverviewDashboard from './OverviewDashboard.client';

// This component acts as a container for all dashboard visualisations
export default function DashboardContent({ viewMode = 'single' }) {
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
  const dashboardData = viewMode === 'single' 
    ? selectedPartnerData 
    : allSelectedPartnersData;
  
  // Handle mode where there's no data
  if (!dashboardData || (Array.isArray(dashboardData) && dashboardData.length === 0)) {
    return (
      <div className="sw-card sw-bg-blue text-background p-6 text-center">
        <p className="text-lg">No data available for selected partner(s)</p>
        <button
          onClick={resetToUpload}
          className="mt-4 sw-button sw-button-primary"
        >
          Back to Upload
        </button>
      </div>
    );
  }
  
  
  return (
    // <div className="sw-card max-w-8xl mx-auto">
    <div className="group sw-card max-w-8xl mx-auto transition-shadow duration-300">
      <div className="shadow-none group-hover:shadow-xl border border-transparent group-hover:border-gray-300 rounded-lg p-4 transition-all duration-300">
      {/* Dashboard header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-tertiary/20">
        <div className="flex items-center">
          <button
            onClick={resetToUpload}
            className="mr-4 p-2 text-tertiary hover:text-primary rounded-full hover:bg-tertiary/10 transition-fast"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="sw-heading-primary text-primary">
              {title}
            </h2>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <button className="flex items-center px-4 py-2 border border-tertiary/20 rounded-md text-sm text-secondary hover:bg-tertiary/10 transition-fast">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
          <button className="sw-button sw-button-primary flex items-center">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>



       {/* Filter bar */}
      {/* <div className="bg-background rounded-lg p-3 border border-tertiary/20 flex justify-between items-center">
        <h2 className="text-lg font-medium text-primary">
          {viewMode === 'single' 
            ? `Overview: ${data?.name || 'Partner'}` 
            : `Comparative Overview: ${selectedPartnerIds.size} Partners`}
        </h2>
        
        <button 
          className="flex items-center text-sm text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-tertiary/10"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={16} className="mr-2" />
          Filters
        </button>
      </div> */}
      
      {/* Filter options - only shown when filters are toggled
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
      )} */}
      
      {/* Tab navigation */}
      <div className="border-b border-tertiary/20">
        <nav className="-mb-px flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-fast
              ${activeTab === 'overview'
                ? 'border-sw-red text-sw-red'
                : 'border-transparent text-tertiary hover:text-secondary hover:border-tertiary/50'}
            `}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-fast
              ${activeTab === 'principles'
                ? 'border-sw-red text-sw-red'
                : 'border-transparent text-tertiary hover:text-secondary hover:border-tertiary/50'}
            `}
          >
            Principles
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-fast
              ${activeTab === 'support'
                ? 'border-sw-red text-sw-red'
                : 'border-transparent text-tertiary hover:text-secondary hover:border-tertiary/50'}
            `}
          >
            Support Needs
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-fast
              ${activeTab === 'timeline'
                ? 'border-sw-red text-sw-red'
                : 'border-transparent text-tertiary hover:text-secondary hover:border-tertiary/50'}
            `}
          >
            Timeline
          </button>
        </nav>
      </div>
      
      {/* Dashboard content based on active tab */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <OverviewDashboard 
            data={dashboardData} 
            viewMode={viewMode} 
          />
        )}
        
        {activeTab === 'principles' && (
          <PrinciplesSummary 
            data={dashboardData} 
            viewMode={viewMode} 
          />
        )}
        
        {activeTab === 'support' && (
          <SupportAnalysis 
            data={dashboardData} 
            viewMode={viewMode} 
          />
        )}
        
        {activeTab === 'timeline' && (
          <TimelineView 
            data={dashboardData} 
            viewMode={viewMode} 
          />
        )}
      </div>
      </div>
    </div>
  );
}