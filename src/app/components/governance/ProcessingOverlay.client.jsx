// src/app/components/governance/ProcessingOverlay.client.jsx
'use client';

import { useAnalysis } from '@/app/contexts/AnalysisContext.client';
import { Loader2 } from 'lucide-react';

export default function ProcessingOverlay() {
  const { processingProgress, processingStage } = useAnalysis();
  
  // Define the processing stages for visualizing progress
  const stages = [
    'Preparing documents',
    'Parsing documents',
    'Extracting governance practices',
    'Mapping to Capability Framework',
    'Identifying common themes',
    'Generating insights'
  ];
  
  // Determine current stage index
  const currentStageIndex = stages.indexOf(processingStage);
  const normalizedProgress = Math.min(100, Math.max(0, processingProgress));
  
  return (
    <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-medium text-blue-600">{Math.round(normalizedProgress)}%</span>
            </div>
          </div>
          
          <h3 className="mt-6 text-xl font-semibold text-gray-900">
            Analyzing Documents
          </h3>
          
          <p className="mt-2 text-base text-gray-600">
            {processingStage}
          </p>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full mt-6 overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${normalizedProgress}%` }}
            ></div>
          </div>
          
          {/* Stage progression */}
          <div className="w-full mt-8">
            <div className="relative">
              {/* Stage connection line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200"></div>
              <div 
                className="absolute top-4 left-0 h-0.5 bg-blue-600 transition-all duration-500"
                style={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%` }}
              ></div>
              
              {/* Stage indicators */}
              <div className="relative flex justify-between">
                {stages.map((stage, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`
                      relative z-10 w-8 h-8 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${index <= currentStageIndex 
                        ? 'bg-blue-600' 
                        : 'bg-gray-200'}
                    `}>
                      <span className="text-xs font-medium text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}