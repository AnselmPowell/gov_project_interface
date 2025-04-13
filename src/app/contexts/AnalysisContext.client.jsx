// src/app/contexts/AnalysisContext.client.jsx
'use client';

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import singlePartnerAnalysis from '../../data/singlePartnerAnalysis';

// Define initial context state
const initialState = {
  // Partners data
  partners: Object.keys(singlePartnerAnalysis).map(id => ({
    id,
    name: singlePartnerAnalysis[id].name,
    sportType: singlePartnerAnalysis[id].sportType,
    fundingLevel: singlePartnerAnalysis[id].fundingLevel,
    hasGip: true // In our dummy data, all partners have GIPs
  })),
  
  // Selection state
  selectedPartnerIds: new Set(),
  
  // Upload state
  uploadedFiles: [],
  fileToPartnerMap: {}, // Maps file names to partner IDs
  
  // Processing state
  isProcessing: false,
  processingProgress: 0,
  processingStage: '', // For displaying what's happening
  
  // View state
  activeView: 'upload', // 'upload', 'single-partner', 'multi-partner'
  
  // Dashboard state
  selectedPrinciple: null,
  activeTab: 'overview', // 'overview', 'principles', 'support', 'timeline'
  
  // Filters
  filters: {
    principle: null,
    timeframe: null,
    supportType: null
  }
};

// Create context
const AnalysisContext = createContext(null);

// Provider component
export function AnalysisProvider({ children }) {
  const [state, setState] = useState(initialState);
  
  // Helper function to update state partially
  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);
  
  // ===== Partner Selection Functions =====
  
  // Toggle selection of a single partner
  const togglePartnerSelection = useCallback((partnerId) => {
    setState(prev => {
      const newSelection = new Set(prev.selectedPartnerIds);
      if (newSelection.has(partnerId)) {
        newSelection.delete(partnerId);
      } else {
        newSelection.add(partnerId);
      }
      
      // Determine the view based on selection count
      const activeView = newSelection.size === 0 
        ? 'upload' 
        : newSelection.size === 1 
          ? 'single-partner' 
          : 'multi-partner';
          
      return { 
        ...prev, 
        selectedPartnerIds: newSelection,
        activeView
      };
    });
  }, []);
  
  // Select all partners
  const selectAllPartners = useCallback(() => {
    setState(prev => {
      const allPartnerIds = prev.partners.map(p => p.id);
      return {
        ...prev,
        selectedPartnerIds: new Set(allPartnerIds),
        activeView: 'multi-partner'
      };
    });
  }, []);
  
  // Clear all partner selections
  const clearPartnerSelection = useCallback(() => {
    setState(prev => ({
      ...prev,
      selectedPartnerIds: new Set(),
      activeView: 'upload'
    }));
  }, []);
  
  // ===== File Upload Functions =====
  
  // Handle file uploads
  const setUploadedFiles = useCallback((files) => {
    setState(prev => ({ 
      ...prev, 
      uploadedFiles: files,
      // Initialize empty partner mapping for each file
      fileToPartnerMap: files.reduce((map, file) => {
        map[file.name] = '';
        return map;
      }, {})
    }));
  }, []);
  
  // Map a file to a partner
  const assignFileToPartner = useCallback((fileName, partnerId) => {
    setState(prev => ({
      ...prev,
      fileToPartnerMap: {
        ...prev.fileToPartnerMap,
        [fileName]: partnerId
      }
    }));
  }, []);
  
  // ===== Analysis Functions =====
  
  // Simulated function for analyzing GIPs
  const analyzeGips = useCallback(async () => {
    // Start processing
    setState(prev => ({
      ...prev,
      isProcessing: true,
      processingProgress: 0,
      processingStage: 'Preparing documents'
    }));
    
    // Simulate different processing stages
    const stages = [
      'Parsing documents',
      'Extracting governance practices',
      'Mapping to Capability Framework',
      'Identifying common themes',
      'Generating insights'
    ];
    
    // Simulate processing with delays
    for (let i = 0; i < stages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setState(prev => ({
        ...prev,
        processingProgress: (i + 1) / stages.length * 100,
        processingStage: stages[i]
      }));
    }
    
    // Complete processing
    setState(prev => {
      // Determine view based on current partner selection
      const activeView = prev.selectedPartnerIds.size === 0 
        ? 'upload' 
        : prev.selectedPartnerIds.size === 1 
          ? 'single-partner' 
          : 'multi-partner';
          
      return {
        ...prev,
        isProcessing: false,
        processingProgress: 100,
        processingStage: 'Complete',
        activeView,
        uploadedFiles: [] // Clear uploaded files after processing
      };
    });
  }, []);
  
  // ===== Dashboard Functions =====
  
  // Update dashboard filters and selection
  const setSelectedPrinciple = useCallback((principleId) => {
    setState(prev => ({
      ...prev,
      selectedPrinciple: principleId
    }));
  }, []);
  
  const setActiveTab = useCallback((tab) => {
    setState(prev => ({
      ...prev,
      activeTab: tab
    }));
  }, []);
  
  const setFilter = useCallback((filterType, value) => {
    setState(prev => ({
      ...prev,
      filters: {
        ...prev.filters,
        [filterType]: value
      }
    }));
  }, []);
  
  // Reset to upload view
  const resetToUpload = useCallback(() => {
    setState(prev => ({
      ...prev,
      activeView: 'upload',
      uploadedFiles: [],
      fileToPartnerMap: {}
    }));
  }, []);
  
  // ===== Calculated Values =====
  
  // Single selected partner data (when exactly one partner is selected)
  const selectedPartnerData = useMemo(() => {
    if (state.selectedPartnerIds.size !== 1) return null;
    
    const partnerId = Array.from(state.selectedPartnerIds)[0];
    return singlePartnerAnalysis[partnerId] || null;
  }, [state.selectedPartnerIds]);
  
  // All selected partners data (for multi-partner view)
  const allSelectedPartnersData = useMemo(() => {
    const selectedIds = Array.from(state.selectedPartnerIds);
    return selectedIds.map(id => singlePartnerAnalysis[id]).filter(Boolean);
  }, [state.selectedPartnerIds]);
  
  // ===== Expose Context Values =====
  
  const contextValue = useMemo(() => ({
    // State values
    partners: state.partners,
    selectedPartnerIds: state.selectedPartnerIds,
    uploadedFiles: state.uploadedFiles,
    fileToPartnerMap: state.fileToPartnerMap,
    isProcessing: state.isProcessing,
    processingProgress: state.processingProgress,
    processingStage: state.processingStage,
    activeView: state.activeView,
    selectedPrinciple: state.selectedPrinciple,
    activeTab: state.activeTab,
    filters: state.filters,
    
    // Calculated values
    selectedPartnerData,
    allSelectedPartnersData,
    
    // Functions
    togglePartnerSelection,
    selectAllPartners,
    clearPartnerSelection,
    setUploadedFiles,
    assignFileToPartner,
    analyzeGips,
    setSelectedPrinciple,
    setActiveTab,
    setFilter,
    resetToUpload,
    updateState
  }), [
    state,
    selectedPartnerData,
    allSelectedPartnersData,
    togglePartnerSelection,
    selectAllPartners,
    clearPartnerSelection,
    setUploadedFiles,
    assignFileToPartner,
    analyzeGips,
    setSelectedPrinciple,
    setActiveTab,
    setFilter,
    resetToUpload,
    updateState
  ]);
  
  return (
    <AnalysisContext.Provider value={contextValue}>
      {children}
    </AnalysisContext.Provider>
  );
}

// Custom hook for using the context
export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
}