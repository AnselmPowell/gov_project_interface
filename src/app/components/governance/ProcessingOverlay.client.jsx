// src/app/components/governance/ProcessingOverlay.client.jsx
'use client';

import { useEffect, useState, useRef } from 'react';
import { useAnalysis } from '../../contexts/AnalysisContext.client';
import { AlertCircle } from 'lucide-react';

export default function ProcessingOverlay() {
  const { 
    processingProgress, 
    processingStage, 
    fileToPartnerMap,
    partners,
    isProcessing
  } = useAnalysis();

  const [staggeredProgress, setStaggeredProgress] = useState(0);
  const [prevStage, setPrevStage] = useState(null);
  const [currentStage, setCurrentStage] = useState(null);
  const [animationState, setAnimationState] = useState('idle'); // 'fadeOut', 'fadeIn', 'idle'
  
  const fileCount = Object.values(fileToPartnerMap).filter(Boolean).length;

  // Define stages with varied durations based on complexity
  const stages = [
    { id: 'preparing', name: 'Preparing documents', description: 'Validating file formats and extracting text', durationFactor: 2.7 },
    { id: 'parsing', name: 'Parsing documents', description: 'Identifying structure and key sections', durationFactor: 3.2 },
    { id: 'extracting', name: 'Extracting governance practices', description: 'Identifying themes, development areas and support', durationFactor: 3.8 },
    { id: 'mapping', name: 'Mapping to Capability Framework', description: 'Aligning content with governance principles', durationFactor: 2.5 },
    { id: 'identifying', name: 'Identifying common themes', description: 'Finding patterns across partners', durationFactor: 1.3 },
    { id: 'generating', name: 'Generating insights', description: 'Preparing visualisation data', durationFactor: 1.0 },
    { id: 'complete', name: 'Process complete', description: 'Analysis has been successfully completed', durationFactor: 2.5 }
  ];

  // Calculate base duration - scale with number of documents
  // 18-25 seconds for every 2 documents as requested
  const getBaseDuration = () => {
    const baseTimePerTwoDocuments = Math.random() * 7000 + 18000; // 18-25 seconds
    return (fileCount / 2) * baseTimePerTwoDocuments / stages.length;
  };

  // Reset the staggered progress when processing starts
  useEffect(() => {
    if (isProcessing && staggeredProgress > 0) {
      setStaggeredProgress(0);
    }
  }, [isProcessing]);

  // Handle stage transitions with proper animation sequence
  useEffect(() => {
    // Find stage by ID
    const findStage = (id) => stages.find(stage => stage.id === id) || stages[0];
    
    // Initial setup
    if (!prevStage && !currentStage) {
      setCurrentStage(findStage(processingStage));
      return;
    }
    
    // If stage changed
    if (processingStage !== currentStage?.id) {
      // Start fade out sequence with slightly randomized duration
      setAnimationState('fadeOut');
      
      // Random variation for animation timing (300-500ms)
      const animationDuration = Math.random() * 200 + 300;
      
      // After fade out completes, update stages and start fade in
      const fadeOutTimer = setTimeout(() => {
        setPrevStage(currentStage);
        setCurrentStage(findStage(processingStage));
        setAnimationState('fadeIn');
        
        // After fade in completes, return to idle state
        const fadeInTimer = setTimeout(() => {
          setAnimationState('idle');
        }, animationDuration);
        
        return () => clearTimeout(fadeInTimer);
      }, animationDuration);
      
      return () => clearTimeout(fadeOutTimer);
    }
  }, [processingStage, currentStage, prevStage]);

  // Smooth continuous progress animation
  useEffect(() => {
    let interval = null;

    if (isProcessing) {
      // Use a shorter interval for smoother animation
      interval = setInterval(() => {
        setStaggeredProgress(prev => {
          // If we're near the target progress, approach it more gradually
          const distanceToTarget = processingProgress - prev;
          
          if (distanceToTarget <= 0) return prev;
          
          // Calculate increment based on distance to target
          // Smaller increments as we get closer
          const increment = distanceToTarget > 10 
            ? Math.random() * 1.5 + 0.5 
            : Math.random() * 0.5 + 0.1;
          
          // Add slight random variation
          const newProgress = Math.min(prev + increment, processingProgress);
          
          return newProgress;
        });
      }, 80); // Faster updates for smoother animation
    }

    return () => clearInterval(interval);
  }, [isProcessing, processingProgress]);

  // Find current stage index for progress visualization
  const currentStageIndex = stages.findIndex(stage => stage.id === processingStage);
  const normalizedProgress = Math.min(100, Math.max(0, staggeredProgress));

  // Only show overlay when processing
  if (!isProcessing) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden animate-fade-in z-[600]">
      <div className="sw-card w-full max-w-md shadow-xl overflow-hidden">
        <div className="sw-bg-blue p-6 text-white text-center">
          <h3 className="sw-heading-secondary text-white text-xl mb-1">
            Analyzing Documents
          </h3>
          <p className="text-sm text-white/90">
            Processing {fileCount} {fileCount === 1 ? 'document' : 'documents'}
          </p>
        </div>

        <div className="p-8 flex flex-col items-center">
          {/* Circular Progress Indicator */}
          <div className="relative w-32 h-32 mb-10">
            <div className="absolute inset-0 rounded-full border-4 border-tertiary/20"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="transparent" strokeWidth="4" />
              <circle 
                cx="50" cy="50" r="48" 
                fill="none" 
                stroke="var(--color-sw-blue)" 
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${normalizedProgress * 3}, 300`}
                transform="rotate(-90 50 50)"
                className="transition-all duration-150 ease-out" // Faster updates for smoother animation
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl font-bold sw-text-blue">{Math.round(normalizedProgress)}%</span>
              </div>
            </div>
          </div>

          {/* Improved Rolodex-style stage indicator with sequential animation */}
          <div className="relative h-24 w-full mb-10">
            {/* Current stage container */}
            <div 
              className={`
                absolute inset-0 flex flex-col items-center justify-center transition-all duration-800 ease-in-out
                ${animationState === 'fadeOut' ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
              `}
            >
              {currentStage && (
                <>
                  <h4 className="text-xl font-semibold sw-text-blue mb-2">
                    {currentStage.name}
                  </h4>
                  <p className="text-sm text-tertiary text-center max-w-xs">
                    {currentStage.description}
                  </p>
                </>
              )}
            </div>
            
            {/* Previous stage for animation (only shown during transition) */}
            {animationState !== 'idle' && prevStage && (
              <div 
                className={`
                  absolute inset-0 flex flex-col items-center justify-center transition-all duration-800 ease-in-out
                  ${animationState === 'fadeOut' ? 'opacity-0 transform -translate-y-8' : 'opacity-0 transform translate-y-0'}
                `}
              >
                <h4 className="text-xl font-semibold sw-text-blue mb-2">
                  {prevStage.name}
                </h4>
                <p className="text-sm text-tertiary text-center max-w-xs">
                  {prevStage.description}
                </p>
              </div>
            )}
          </div>

          {/* Horizontal Progress Bar */}
          <div className="w-full h-2 bg-tertiary/10 rounded-full overflow-hidden mb-8">
            <div 
              className="h-full sw-bg-blue rounded-full transition-all duration-150 ease-out" // Faster updates for smoother animation
              style={{ width: `${normalizedProgress}%` }}
            ></div>
          </div>

          {/* Simplified document processing info */}
          <div className="w-full px-4 py-3 bg-tertiary/5 rounded-lg border border-tertiary/20 text-center mb-6">
            <p className="text-sm text-secondary">
              <span className="font-medium">Stage {currentStageIndex + 1}</span> of {stages.length} · Processing {fileCount} {fileCount === 1 ? 'file' : 'files'}
            </p>
          </div>

          {/* Expectation notice */}
          <div className="flex items-start space-x-3 p-3 bg-sw-yellow/10 rounded-md border border-sw-yellow/30">
            <AlertCircle size={18} className="text-sw-yellow flex-shrink-0" />
            <p className="text-xs text-secondary">
              Complex documents may take longer to process. Analysis is running in the background and will complete shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}