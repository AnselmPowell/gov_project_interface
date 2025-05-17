// src/app/components/governance/dashboard/SupportAnalysis.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';
import { generateSupportRequestMatrix } from '../../../utils/dataTransformations';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export default function SupportAnalysis({ data, viewMode }) {
  const { selectedPrinciple } = useAnalysis();
  const [selectedSupportType, setSelectedSupportType] = useState(null);
  
  // For single partner view
  const supportRequests = viewMode === 'single' ? data.supportRequests : null;
  
  // For multi-partner view
  const supportMatrix = viewMode === 'comparison' 
    ? generateSupportRequestMatrix(data.map(partner => partner.id))
    : null;
  
  // Filter by principle if selected
  const filteredRequests = viewMode === 'single' && selectedPrinciple
    ? supportRequests?.filter(req => req.cfMapping.principleId === selectedPrinciple)
    : supportRequests;
    
  const filteredMatrix = viewMode === 'comparison' && selectedPrinciple
    ? supportMatrix?.filter(item => item.principleId === selectedPrinciple)
    : supportMatrix;
  
  return (
    <div className="space-y-8">
      {/* Support request visualisation based on view */}
      {viewMode === 'single' ? (
        <SinglePartnerSupportView 
          requests={filteredRequests} 
          selectedSupportType={selectedSupportType}
          setSelectedSupportType={setSelectedSupportType}
        />
      ) : (
        <MultiPartnerSupportView 
          supportMatrix={filteredMatrix}
          selectedSupportType={selectedSupportType}
          setSelectedSupportType={setSelectedSupportType}
        />
      )}
    </div>
  );
}

// Component for single partner support view
function SinglePartnerSupportView({ 
  requests, 
  selectedSupportType,
  setSelectedSupportType
}) {
  // Group requests by support area
  const supportTypes = {};
  
  // Count each support type
  requests?.forEach(req => {
    if (!supportTypes[req.supportArea]) {
      supportTypes[req.supportArea] = [];
    }
    supportTypes[req.supportArea].push(req);
  });
  
  // Filter requests if a support type is selected
  const filteredRequests = selectedSupportType
    ? requests?.filter(req => req.supportArea === selectedSupportType)
    : requests;
  
  return (
    <div>
      {/* Support type filter pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(supportTypes).map(([type, typeRequests]) => (
          <button
            key={type}
            onClick={() => setSelectedSupportType(selectedSupportType === type ? null : type)}
            className={`
              px-3 py-1 rounded-full text-sm
              ${selectedSupportType === type 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
          >
            {type} ({typeRequests.length})
          </button>
        ))}
        
        {Object.keys(supportTypes).length > 0 && (
          <button
            onClick={() => setSelectedSupportType(null)}
            className={`
              px-3 py-1 rounded-full text-sm
              ${!selectedSupportType 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
          >
            All requests
          </button>
        )}
      </div>
      
      {/* Support requests list */}
      {filteredRequests && filteredRequests.length > 0 ? (
        <div className="space-y-4">
          {filteredRequests.map((request, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">{request.supportArea}</h3>
                
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {formatDate(request.requestedTimeline)}
                  </span>
                </div>
              </div>
              
              <div className="mt-2">
                <p className="text-gray-700">{request.context}</p>
                
                <div className="mt-3 flex items-center text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs mr-2">
                    {request.cfMapping.principleId}.{request.cfMapping.elementId}
                  </span>
                  <span>{request.cfMapping.elementName}</span>
                </div>
                
                {request.gipExcerpt && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-md text-sm text-gray-600 italic">
                    &quot;{request.gipExcerpt}&quot;
                  </div>
                )}
                
                <div className="mt-4 text-sm text-gray-500">
                  Related to: <span className="text-blue-600">{request.developmentArea}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-500">
            {selectedSupportType 
              ? `No support requests found for "${selectedSupportType}"` 
              : 'No support requests found'
            }
          </p>
        </div>
      )}
    </div>
  );
}

// Component for multi-partner support view
function MultiPartnerSupportView({ 
  supportMatrix,
  selectedSupportType,
  setSelectedSupportType
}) {
  // Group all support types across elements
  const allSupportTypes = new Set();
  supportMatrix?.forEach(element => {
    element.requests.forEach(req => {
      allSupportTypes.add(req.type);
    });
  });
  
  // Filter matrix elements if a support type is selected
  const filteredMatrix = selectedSupportType 
    ? supportMatrix?.map(element => ({
        ...element,
        requests: element.requests.filter(req => req.type === selectedSupportType)
      })).filter(element => element.requests.length > 0)
    : supportMatrix;
  
  return (
    <div>
      {/* Support type filter pills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Array.from(allSupportTypes).map(type => (
          <button
            key={type}
            onClick={() => setSelectedSupportType(selectedSupportType === type ? null : type)}
            className={`
              px-3 py-1 rounded-full text-sm
              ${selectedSupportType === type 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
          >
            {type}
          </button>
        ))}
        
        {allSupportTypes.size > 0 && (
          <button
            onClick={() => setSelectedSupportType(null)}
            className={`
              px-3 py-1 rounded-full text-sm
              ${!selectedSupportType 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
            `}
          >
            All types
          </button>
        )}
      </div>
      
      {/* Support matrix visualisation */}
      {filteredMatrix && filteredMatrix.length > 0 ? (
        <div className="space-y-6">
          {filteredMatrix.map(element => (
            <div key={`${element.principleId}.${element.elementId}`} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">
                    {element.principleId}.{element.elementId} {element.elementName}
                  </h3>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-500 mr-1" />
                    <span className="text-sm text-gray-600">
                      {element.partnerCount} partner{element.partnerCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {element.requests.map(request => (
                  <div key={request.type} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{request.type}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {request.partnerCount} partner{request.partnerCount !== 1 ? 's' : ''} • 
                          {Math.round(request.percentage)}% of selected partners
                        </p>
                      </div>
                    </div>
                    
                    {/* Examples */}
                    <div className="mt-4 space-y-3">
                      {request.examples.slice(0, 2).map((example, i) => (
                        <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {example.partnerName.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{example.partnerName}</p>
                            <p className="text-sm text-gray-600 mt-1">{example.context}</p>
                            
                            {example.timeline && (
                              <div className="mt-2 flex items-center text-xs text-gray-500">
                                <Calendar className="w-3 h-3 mr-1" />
                                {formatDate(example.timeline)}
                              </div>
                            )}
                            
                            {example.gipExcerpt && (
                              <p className="mt-2 text-xs text-gray-500 italic">&quot;{example.gipExcerpt}&quot;</p>
                            )}
                          </div>
                        </div>
                      ))}
                      
                      {request.examples.length > 2 && (
                        <button className="w-full text-center py-2 text-sm text-blue-600 hover:text-blue-800">
                          Show {request.examples.length - 2} more examples <ArrowRight className="inline w-3 h-3 ml-1" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-500">
            {selectedSupportType 
              ? `No support requests found for "${selectedSupportType}"` 
              : 'No support requests found'
            }
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to format dates
function formatDate(dateString) {
  try {
    // Handle YYYY-MM format
    if (/^\d{4}-\d{2}$/.test(dateString)) {
      const [year, month] = dateString.split('-');
      const date = new Date(year, month - 1);
      return date.toLocaleDateString('en-GB', { 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    // Handle full ISO date format
    if (dateString.includes('T')) {
      return new Date(dateString).toLocaleDateString('en-GB', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    // Default to original string if not a recognized format
    return dateString;
  } catch (e) {
    return dateString;
  }
}