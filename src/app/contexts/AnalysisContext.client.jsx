// src/app/contexts/AnalysisContext.client.jsx
'use client';

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import singlePartnerAnalysis from '../../data/singlePartnerAnalysis';
import { partners as realPartners } from '../../data/partners';

// Flatten the partners structure into a single array
const flattenedPartners = [
  ...realPartners['National Governing Bodies'].map(p => ({ ...p, category: 'National Governing Bodies' })),
  ...realPartners['National Partners'].map(p => ({ ...p, category: 'National Partners' })),
  ...realPartners['Sport Partnerships'].map(p => ({ ...p, category: 'Sport Partnerships' }))
];

// Define initial context state
const initialState = {
  // Partners data - now using real partners
  partners: flattenedPartners.map(partner => ({
    id: partner.id,
    name: partner.name,
    category: partner.category,
    hasGip: false, // Initialize all as not having GIPs
    lastUpdated: null
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
  const [processingAnimationComplete, setProcessingAnimationComplete] = useState(true);
  
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
  
  // Select all partners with GIPs
  const selectAllPartnersWithGips = useCallback(() => {
    setState(prev => {
      const partnersWithGips = prev.partners
        .filter(p => p.hasGip)
        .map(p => p.id);
      
      return {
        ...prev,
        selectedPartnerIds: new Set(partnersWithGips),
        activeView: partnersWithGips.length === 1 ? 'single-partner' : 'multi-partner'
      };
    });
  }, []);
  
  // Select all partners
  const selectAllPartners = useCallback(() => {
    setState(prev => {


      const allPartnerIds = prev.partners.filter(p => p.hasGip).map(p => p.id);


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
  
  // Select partners by category
  const selectPartnersByCategory = useCallback((category) => {
    setState(prev => {
      const categoryPartnerIds = prev.partners
        .filter(p => p.category === category && p.hasGip)
        .map(p => p.id);
      
      return {
        ...prev,
        selectedPartnerIds: new Set(categoryPartnerIds),
        activeView: categoryPartnerIds.length === 1 ? 'single-partner' : 'multi-partner'
      };
    });
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
  
  // Check if a partner already has a GIP
  const partnerHasGip = useCallback((partnerId) => {
    return state.partners.find(p => p.id === partnerId)?.hasGip || false;
  }, [state.partners]);
  
  // ===== Analysis Functions =====
  
  // Simulated function for analysing GIPs
  const analyzeGips = useCallback(async () => {
    // Get assigned partners for this batch
    const assignedPartners = Object.values(state.fileToPartnerMap);
    const validAssignments = assignedPartners.filter(id => id);
    
    if (validAssignments.length === 0) return;
    
    // Start processing
    setState(prev => ({
      ...prev,
      isProcessing: true,
      processingProgress: 0,
      processingStage: 'preparing'
    }));
    
    // Define stages with their duration factors
    const stages = [
      { id: 'parsing', name: 'Parsing documents', durationFactor: 3.7 },
      { id: 'extracting', name: 'Extracting governance themes & practices', durationFactor: 3.2 },
      { id: 'mapping', name: 'Mapping to Capability Framework', durationFactor: 2.5 },
      { id: 'identifying', name: 'Identifying common themes', durationFactor: 1.3 },
      { id: 'generating', name: 'Generating insights', durationFactor: 1.0 }
    ];
    

    // Calculate base duration based on document count
    // 18-25 seconds for every 2 documents
    const docsCount = validAssignments.length;
    const baseTimePerTwoDocuments = Math.random() * 7000 + 18000; // 18-25 seconds
    const baseStageTime = (docsCount / 2) * baseTimePerTwoDocuments / stages.length;
    
    // Calculate total duration factor sum for percentage calculation
    const totalDurationFactor = stages.reduce((sum, stage) => sum + stage.durationFactor, 0);
    let completedDurationFactor = 0;
    
    // Initial "preparing" stage - shorter than others
    const preparingTime = Math.max(1500, baseStageTime * 0.5);
    await new Promise(resolve => setTimeout(resolve, preparingTime));
    
    // Simulate processing with varied delays
    for (let i = 0; i < stages.length; i++) {
      const stage = stages[i];
      
      // Calculate delay for this stage based on its factor
      const stageDelay = baseStageTime * stage.durationFactor;
      
      setState(prev => ({
        ...prev,
        processingStage: stage.id
      }));
      
      // For smoother progress, update multiple times during each stage
      const updateSteps = 10;
      const stepDelay = stageDelay / updateSteps;
      
      for (let step = 0; step < updateSteps; step++) {
        await new Promise(resolve => setTimeout(resolve, stepDelay));
        
        // Calculate progress percentage based on completed duration factors
        const stepProgress = (step + 1) / updateSteps;
        const stageFactor = stage.durationFactor * stepProgress;
        const progressPercentage = ((completedDurationFactor + stageFactor) / totalDurationFactor) * 100;
        
        setState(prev => ({
          ...prev,
          processingProgress: progressPercentage
        }));
      }
      
      // Update completed duration factor
      completedDurationFactor += stage.durationFactor;
    }
    
    // Set to complete stage
    setState(prev => ({
      ...prev,
      processingProgress: 100,
      processingStage: 'complete'
    }));
    
    // Wait for the animation to catch up before finishing
    // The 3000ms gives enough time for the staggered progress to reach 100%
    // and display the completed state for a moment
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Finally, finish processing and update the view
    setState(prev => {
      // Create a new partners array with updated hasGip property
      const updatedPartners = prev.partners.map(partner => {
        // Check if this partner had a file assigned to it
        if (validAssignments.includes(partner.id)) {
          return {
            ...partner,
            hasGip: true // Mark that this partner now has a GIP
          };
        }
        return partner;
      });
      
      // Determine view based on current partner selection
      const activeView = prev.selectedPartnerIds.size === 0 
        ? 'upload' 
        : prev.selectedPartnerIds.size === 1 
          ? 'single-partner' 
          : 'multi-partner';
          
      return {
        ...prev,
        partners: updatedPartners, // Update the partners list
        isProcessing: false,
        activeView,
        uploadedFiles: [] // Clear uploaded files after processing
      };
    });
  }, [state.fileToPartnerMap]);


// new function to mark animation as complete
  const markProcessingAnimationComplete = useCallback(() => {
    setProcessingAnimationComplete(true);
    
    // Now we can complete the processing and update the view
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
    
    // If the partner has a GIP, return its data, otherwise return null
    const partnerHasGip = state.partners.find(p => p.id === partnerId)?.hasGip || false;
    
    // For the demo, if it has a GIP and it's one we have dummy data for, use that
    if (partnerHasGip && singlePartnerAnalysis[partnerId]) {
      return singlePartnerAnalysis[partnerId];
    }
    
    // If it has a GIP but we don't have dummy data, create a simplified version
    if (partnerHasGip) {
      const partner = state.partners.find(p => p.id === partnerId);
      
      // Create simplified data structure similar to singlePartnerAnalysis
      return {
        id: partner.id,
        name: partner.name,
        documentDate: partner.lastUpdated,
        
        // Add minimum required data for the dashboard to not break
        frameworkAlignment: [],
        developmentAreas: [],
        supportRequests: [],
        implementationTimeline: {
          activities: []
        },
        gipExcerpts: []
      };
    }
    
    return null;
  }, [state.selectedPartnerIds, state.partners]);
  
  // All selected partners data (for multi-partner view)
  const allSelectedPartnersData = useMemo(() => {
    const selectedIds = Array.from(state.selectedPartnerIds);
    
    return selectedIds
      .filter(id => {
        const partner = state.partners.find(p => p.id === id);
        return partner?.hasGip || false;
      })
      .map(id => {
        // If we have dummy data, use it
        if (singlePartnerAnalysis[id]) {
          return singlePartnerAnalysis[id];
        }
        
        // Otherwise create simplified data
        const partner = state.partners.find(p => p.id === id);
        return {
          id: partner.id,
          name: partner.name,
          documentDate: partner.lastUpdated,
          frameworkAlignment: [],
          developmentAreas: [],
          supportRequests: [],
          implementationTimeline: { activities: [] },
          gipExcerpts: []
        };
      });
  }, [state.selectedPartnerIds, state.partners]);
  
  // Get partner categories for grouping
  const partnerCategories = useMemo(() => {
    const categories = [...new Set(state.partners.map(p => p.category))];
    return categories;
  }, [state.partners]);
  
  // Get partners with GIPs count
  const partnersWithGipsCount = useMemo(() => {
    return state.partners.filter(p => p.hasGip).length;
  }, [state.partners]);
  
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

    processingAnimationComplete,
    
    // Calculated values
    selectedPartnerData,
    allSelectedPartnersData,
    partnerCategories,
    partnersWithGipsCount,
    
    // Functions
    togglePartnerSelection,
    selectAllPartners,
    selectAllPartnersWithGips,
    selectPartnersByCategory,
    clearPartnerSelection,
    setUploadedFiles,
    assignFileToPartner,
    partnerHasGip,
    analyzeGips,
    setSelectedPrinciple,
    setActiveTab,
    setFilter,
    resetToUpload,
    updateState,
    
    markProcessingAnimationComplete
  }), [
    state,
    selectedPartnerData,
    allSelectedPartnersData,
    partnerCategories,
    partnersWithGipsCount,

    processingAnimationComplete,
    markProcessingAnimationComplete,

    togglePartnerSelection,
    selectAllPartners,
    selectAllPartnersWithGips,
    selectPartnersByCategory,
    clearPartnerSelection,
    setUploadedFiles,
    assignFileToPartner,
    partnerHasGip,
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