// src/app/components/governance/dashboard/AnomalyCard.client.jsx
'use client';

import { useState } from 'react';
import { identifyAnomalies } from '../../../utils/dataTransformations';
import { AlertTriangle, ArrowRight, PlusCircle } from 'lucide-react';

export default function AnomalyCard({ data, viewMode }) {
  const [expandedAnomaly, setExpandedAnomaly] = useState(null);
  
  // Only applicable in multi-partner view
  if (viewMode === 'single') {
    return null;
  }
  
  // Get anomalies
  const anomalies = identifyAnomalies(data.map(partner => partner.id));
  
  if (!anomalies || anomalies.length === 0) {
    return null;
  }
  
  return (
    <div className="bg-background rounded-lg p-4 border border-tertiary/20 overflow-y-auto">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-primary flex items-center">
          <AlertTriangle className="text-warning w-5 h-5 mr-2" />
          Unique Focus Areas
        </h3>
        <span className="text-sm text-tertiary">
          {anomalies.length} found
        </span>
      </div>
      
      <div className="space-y-3 max-h-[50rem]  overflow-auto hide-scrollbar">
        {anomalies.slice(0, expandedAnomaly ? anomalies.length : 3).map((anomaly, index) => (
          <div 
            key={index} 
            className={`
              p-3 rounded-lg cursor-pointer transition-colors duration-fast
              ${expandedAnomaly === index ? 'bg-primary/10 border border-primary/20' : 'bg-tertiary/5 hover:bg-tertiary/10 border border-transparent'}
            `}
            onClick={() => setExpandedAnomaly(expandedAnomaly === index ? null : index)}
          >
            <div className="flex justify-between items-start mb-1">
              <div className="font-medium text-primary">{anomaly.areaTitle}</div>
              <div className={`
                px-2 py-0.5 rounded-full text-xs
                ${anomaly.rarityLevel === 'Unique' ? 'bg-primary/10 text-primary' : 
                  anomaly.rarityLevel === 'Very Rare' ? 'bg-warning/10 text-warning' : 
                  'bg-info/10 text-info'}
              `}>
                {anomaly.rarityLevel}
              </div>
            </div>
            
            <div className="text-sm text-tertiary mb-2 flex items-center">
              <span className="text-xs px-2 py-0.5 rounded bg-tertiary/10 mr-2">
                {anomaly.cfMapping.principleName}
              </span>
              <span>{anomaly.partnerCount} partner{anomaly.partnerCount !== 1 ? 's' : ''}</span>
            </div>
            
            {expandedAnomaly === index && (
              <div className="mt-3 space-y-3 animate-fade-in">
                {anomaly.partners.map((partner, i) => (
                  <div key={i} className="bg-background rounded-md p-2 border border-tertiary/20">
                    <div className="font-medium text-secondary text-sm">{partner.partnerName}</div>
                    <p className="text-sm text-tertiary mt-1">{partner.objective}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {anomalies.length > 3 && expandedAnomaly === null && (
          <button 
            className="w-full text-center py-2 text-primary hover:text-primary-dark transition-colors flex items-center justify-center text-sm"
            onClick={() => setExpandedAnomaly('all')}
          >
            <PlusCircle className="w-4 h-4 mr-1" />
            Show {anomalies.length - 3} more anomalies
          </button>
        )}
      </div>
    </div>
  );
}