// src/app/components/governance/dashboard/DashboardContent.client.jsx
'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, Filter, Download } from 'lucide-react';
import { useAnalysis } from '@/app/contexts/AnalysisContext.client';
import PrinciplesSummary from './PrinciplesSummary.client';
import SupportAnalysis from './SupportAnalysis.client';
import TimelineView from './TimelineView.client';
import OverviewDashboard from './OverviewDashboard.client';

// This component acts as a container for all dashboard visualizations
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
    ? `Analysis for ${selectedPartnerData?.name || 'Partner'}`
    : `Comparative Analysis (${selectedPartnerIds.size} Partners)`;
  
  // Load appropriate data based on view mode
  const dashboardData = viewMode === 'single' 
    ? selectedPartnerData 
    : allSelectedPartnersData;
  
  // Handle mode where there's no data
  if (!dashboardData || (Array.isArray(dashboardData) && dashboardData.length === 0)) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <p className="text-gray-500">No data available for selected partner(s)</p>
        <button
          onClick={resetToUpload}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Upload
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm max-w-7xl mx-auto">
      {/* Dashboard header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center">
          <button
            onClick={resetToUpload}
            className="mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Governance analysis based on submitted GIPs
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            <Download size={16} className="mr-2" />
            Export
          </button>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'overview'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('principles')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'principles'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Principles
          </button>
          <button
            onClick={() => setActiveTab('support')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'support'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            Support Needs
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === 'timeline'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
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
  );
}