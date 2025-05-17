// src/app/components/governance/GovernanceAnalysis.client.jsx
'use client';

import { useState, useEffect } from 'react';
import { AnalysisProvider, useAnalysis } from '../../contexts/AnalysisContext.client';
import PartnerListSidebar from './sidebar/PartnerListSidebar.client';
import UploadSection from './upload/UploadSection.client';
import DashboardContent from './dashboard/DashboardContent.client';
import ProcessingOverlay from './ProcessingOverlay.client';
import Header from './Header.client';

// Inner component that uses the context
function GovernanceAnalysisInner() {
  const { 
    activeView, 
    isProcessing, 
    selectedPartnerIds,
    selectedPartnerData,
    allSelectedPartnersData
  } = useAnalysis();
  
  // Determine what to show in the main content area
  let mainContent;
  
  if (activeView === 'upload') {
    mainContent = <UploadSection />;
  } else if (activeView === 'single-partner' && selectedPartnerData) {
    mainContent = <DashboardContent viewMode="single" partnerData={selectedPartnerData} />;
  } else if (activeView === 'multi-partner' && allSelectedPartnersData.length > 0) {
    mainContent = <DashboardContent viewMode="comparison" partnersData={allSelectedPartnersData} />;
  } else {
    // Fallback if there's an inconsistent state
    mainContent = <UploadSection />;
  }
  
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Partner selection sidebar */}
      <PartnerListSidebar />
      
      {/* Main content area with header */}
      <div className="flex-1 flex flex-col ">
        <Header />
        <div className="flex-1 overflow-auto px-6 py-4 bg-white z-[500] relative -top-0 -left-0 rounded-tl-lg">
          {mainContent}
          
        </div>
      </div>
      
      
      {/* Processing overlay - only shown during analysis */}
      <ProcessingOverlay />
    </div>
  );
}

// Provider wrapper component
export function GovernanceAnalysis() {
  return (
    <AnalysisProvider>
      <GovernanceAnalysisInner />
    </AnalysisProvider>
  );
}

export default GovernanceAnalysis;