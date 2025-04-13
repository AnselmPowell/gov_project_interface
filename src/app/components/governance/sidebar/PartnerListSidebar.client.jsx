// src/app/components/governance/sidebar/PartnerListSidebar.client.jsx
'use client';

import { useState } from 'react';
import { Search, CheckSquare, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAnalysis } from '@/app/contexts/AnalysisContext.client';

export default function PartnerListSidebar() {
  const { 
    partners, 
    selectedPartnerIds, 
    togglePartnerSelection,
    selectAllPartners,
    clearPartnerSelection
  } = useAnalysis();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Filter partners based on search term
  const filteredPartners = partners.filter(partner => 
    partner.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div 
      className={`
        relative bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-12' : 'w-80'}
      `}
    >
      {/* Collapse toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 top-3 bg-white border border-gray-200 rounded-l-none rounded-r-md p-1 -mr-3 z-10"
      >
        {isCollapsed ? 
          <ChevronRight size={16} className="text-gray-500" /> : 
          <ChevronLeft size={16} className="text-gray-500" />
        }
      </button>
      
      {/* Only show content when not collapsed */}
      {!isCollapsed && (
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Partners</h2>
            
            {/* Search box */}
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search partners..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Selection controls */}
            <div className="flex items-center justify-between mt-3 text-sm">
              <div>
                <span className="text-gray-500">
                  {selectedPartnerIds.size} of {partners.length} selected
                </span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={selectAllPartners}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Select All
                </button>
                <button 
                  onClick={clearPartnerSelection}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          
          {/* Partner list */}
          <div className="flex-1 overflow-y-auto p-2">
            <ul className="space-y-1">
              {filteredPartners.map(partner => (
                <li key={partner.id}>
                  <button
                    onClick={() => togglePartnerSelection(partner.id)}
                    className={`
                      w-full flex items-center p-2 rounded-md text-left
                      ${selectedPartnerIds.has(partner.id) ? 'bg-blue-50' : 'hover:bg-gray-100'}
                    `}
                  >
                    {selectedPartnerIds.has(partner.id) ? (
                      <CheckSquare size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                    ) : (
                      <Square size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{partner.name}</p>
                      <div className="flex items-center mt-1">
                        <span className={`
                          inline-block w-2 h-2 rounded-full mr-1
                          ${partner.fundingLevel === 'high' ? 'bg-green-500' : 
                            partner.fundingLevel === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'}
                        `}></span>
                        <p className="text-xs text-gray-500 truncate">{partner.sportType}</p>
                      </div>
                    </div>
                    {!partner.hasGip && (
                      <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full">
                        No GIP
                      </span>
                    )}
                  </button>
                </li>
              ))}
              
              {filteredPartners.length === 0 && (
                <li className="py-4 px-2 text-center text-gray-500">
                  No partners found
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}