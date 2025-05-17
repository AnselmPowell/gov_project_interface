
// src/app/components/governance/sidebar/PartnerListSidebar.client.jsx
'use client';

import { useState, useEffect } from 'react';
import { Search, CheckSquare, Square, ChevronLeft, ChevronRight, Users, Filter, Upload, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';

export default function PartnerListSidebar() {
  const { 
    partners, 
    selectedPartnerIds, 
    togglePartnerSelection,
    selectAllPartners,
    clearPartnerSelection,
    partnerCategories,
    selectPartnersByCategory,
    partnersWithGipsCount
  } = useAnalysis();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  
  // Add state to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState(
    partnerCategories.reduce((acc, category) => {
      acc[category] = true; // Initially expand all categories
      return acc;
    }, {})
  );
  
  // Toggle category expansion
  const toggleCategoryExpansion = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };
  
  // Filter partners based on search term and category
  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (categoryFilter === 'gip') {
      return matchesSearch && partner.hasGip === true;
    }
  
    const matchesCategory = categoryFilter === 'all' || partner.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  
  // Group partners by category for better organisation
  const partnersByCategory = {};
  partners.forEach(partner => {
    if (!partnersByCategory[partner.category]) {
      partnersByCategory[partner.category] = [];
    }
    partnersByCategory[partner.category].push(partner);
  });
  
  // Get selected partners names for display
  const selectedPartners = partners.filter(partner => selectedPartnerIds.has(partner.id));
  const headerText = selectedPartnerIds.size === 0 
    ? '' 
    : selectedPartnerIds.size === 1 
      ? selectedPartners[0].name
      : `${selectedPartnerIds.size} Partners Selected`;
      
  // Toggle to show either select all or clear button based on selection state
  const hasSelections = selectedPartnerIds.size > 0;
  
  return (
    <div 
      className={`
        relative h-screen transition-all duration-300 ease-out sw-bg-blue -mr-1
        ${isCollapsed ? 'w-16' : 'w-88'}
      `}
    >
      {/* Header section with logo */}
      <div className={`
        flex items-center px-4 py-3
        ${isCollapsed ? 'justify-center' : 'justify-between'}
      `}>
        {!isCollapsed && (
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              {/* Full Sport Wales Logo */}
              <a href="https://www.sport.wales/">
                <img
                  src="/sport_wales_logo_white.png"
                  alt="Sport Wales Logo"
                  className="h-24 w-30 sm:h-16 md:h-20"
                />
              </a>
            </div>
            <h2 className="text-2xl font-medium sw-text-grey truncate max-w-[180px]">
              {/* {headerText} */}
            </h2>
          </div>
        )}

        {isCollapsed && (
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
            {/* Icon */}
            <img
              src="/Sport Wales_Icon.png"
              alt="Sport Wales Icon"
              className="w-10 h-10 object-contain"
            />
          </div>
        )}

        
        {/* Collapse toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            p-1 rounded-md text-tertiary hover:sw-text-red
            hover:bg-tertiary/10 transition-colors
            ${isCollapsed ? 'mx-auto mt-3' : ''}
          `}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? 
            <ChevronRight size={20} /> : 
            <ChevronLeft size={20} />
          }
        </button>
      </div>
      
      {/* Only show content when not collapsed */}
      {!isCollapsed && (
        <div className="h-[calc(100vh-57px)] flex flex-col">
          <div className="px-4 py-3">
            {/* Search and filter controls */}
            <div className="space-y-3">
              {/* Search box */}
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                <input
                  type="text"
                  placeholder="Search partners..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-tertiary/20 
                             focus-highlight bg-white sw-text-blue"
                />
              </div>
              
              {/* Partner count and filter toggle */}
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm font-light">
                  <Users size={14} className="text-tertiary mr-1.5" />
                  <span className="text-tertiary text-sm font-light">
                    {selectedPartnerIds.size} of {partners.length}
                  </span>
                </div>
                
                <button 
                  onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                  className={`flex items-center sw-text-grey hover:sw-text-red transition-colors text-xs ${showCategoryFilter ? 'sw-text-red' : ''}`}
                >
                  <Filter size={14} className="mr-1" />
                  Filter
                </button>

                {/* Selection controls - toggle between Select All and Clear */}
                <div className="mt-1">
                  {hasSelections ? (
                    <button 
                      onClick={clearPartnerSelection}
                      className="w-full py-1.5 text-xs text-tertiary bg-tertiary/5 hover:bg-tertiary/10 transition-colors rounded"
                    >
                      Clear Selection
                    </button>
                  ) : (
                    <button 
                      onClick={selectAllPartners}
                      className="w-full py-1.5 text-xs sw-text-grey hover:sw-text-red bg-sw-red/5 hover:bg-sw-red/10 transition-colors rounded"
                    >
                      Select All
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category filter dropdown */}
            {showCategoryFilter && (
              <div className="py-2 bg-white rounded-md border border-tertiary/20 shadow-sm animate-fade-in mt-2">
                <div className="px-3 py-1 text-xs font-medium text-tertiary border-b border-tertiary/20 mb-1">Partner Type</div>
                <div className="space-y-1">
                  <button 
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${categoryFilter === 'all' ? 'sw-text-red font-medium' : 'text-tertiary hover:bg-tertiary/10'}`}
                    onClick={() => setCategoryFilter('all')}
                  >
                    <span>All Partners</span>
                    {categoryFilter === 'all' && <span className="w-2 h-2 bg-sw-red rounded-full"></span>}
                  </button>
                  <button 
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${categoryFilter === 'gip' ? 'sw-text-red font-medium' : 'text-tertiary hover:bg-tertiary/10'}`}
                    onClick={() => setCategoryFilter('gip')}
                  >
                    <span>All Partners with GIP ({partnersWithGipsCount})</span>
                    {categoryFilter === 'gip' && <span className="w-2 h-2 bg-sw-red rounded-full"></span>}
                  </button>

                  {/* Divider */}
                  <div className="border-t border-tertiary/20 my-1"></div>

                  {partnerCategories.map(category => (
                    <button 
                      key={category}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${categoryFilter === category ? 'sw-text-red font-medium' : 'text-tertiary hover:bg-tertiary/10'}`}
                      onClick={() => setCategoryFilter(category)}
                    >
                      <span>{category}</span>
                      {categoryFilter === category && <span className="w-2 h-2 bg-sw-red rounded-full"></span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Partner list - organized by category with expand/collapse */}
          <div className="flex-1 overflow-y-auto py-3 px-2 hide-scrollbar">
            {categoryFilter === 'all' ? (
              /* Show partners by category when not filtered */
              <>
                {partnerCategories.map(category => {
                  // Count partners with GIPs in this category
                  const partnersWithGipCount = partnersByCategory[category]?.filter(p => p.hasGip).length || 0;
                  
                  return (
                    <div key={category} className="mb-3">
                      {/* Category header with expand/collapse control */}
                      <div 
                        className="flex items-center justify-between px-3 py-2 bg-tertiary/5 rounded-md cursor-pointer hover:bg-tertiary/10 mb-1"
                        onClick={() => toggleCategoryExpansion(category)}
                      >
                        <div className="flex items-center">
                          {expandedCategories[category] ? (
                            <ChevronUp size={14} className="text-tertiary mr-2" />
                          ) : (
                            <ChevronDown size={14} className="text-tertiary mr-2" />
                          )}
                          <h3 className="text-xs font-semibold sw-text-grey">{category}</h3>
                          <span className="ml-2 text-xs text-tertiary">({partnersByCategory[category]?.length || 0})</span>
                        </div>
                        
                        {/* Only show Select button if at least one partner has a GIP */}
                        {partnersWithGipCount > 0 && (
                          <div className="flex items-center">
                            <span className="text-xs text-tertiary mr-2">
                              {partnersWithGipCount} GIP
                            </span>
                            <button 
                              className="text-xs sw-text-red hover:sw-text-grey transition-colors bg-sw-red/5 px-2 py-0.5 rounded"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent toggling category expansion
                                selectPartnersByCategory(category);
                              }}
                            >
                              Select
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {/* Partner list for this category - only show if expanded */}
                      {expandedCategories[category] && (
                        <ul className="space-y-1 ml-4">
                          {partnersByCategory[category]?.filter(partner => 
                            partner.name.toLowerCase().includes(searchTerm.toLowerCase())
                          ).map(partner => (
                            <PartnerListItem 
                              key={partner.id}
                              partner={partner}
                              isSelected={selectedPartnerIds.has(partner.id)}
                              onToggle={() => togglePartnerSelection(partner.id)}
                            />
                          ))}
                          
                          {/* Show message if no partners match search */}
                          {partnersByCategory[category]?.filter(partner => 
                            partner.name.toLowerCase().includes(searchTerm.toLowerCase())
                          ).length === 0 && (
                            <li className="py-2 px-2 text-center text-tertiary text-xs">
                              No matching partners in this category
                            </li>
                          )}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              /* Show flat list when filtered by category */
              <ul className="space-y-1">
                {filteredPartners.map(partner => (
                  <PartnerListItem 
                    key={partner.id}
                    partner={partner}
                    isSelected={selectedPartnerIds.has(partner.id)}
                    onToggle={() => togglePartnerSelection(partner.id)}
                  />
                ))}
                
                {filteredPartners.length === 0 && (
                  <li className="py-4 px-2 text-center text-tertiary">
                    No partners found
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
      
      {/* Collapsed view - show just icons */}
      {isCollapsed && (
        <div className="flex flex-col items-center pt-4">
          <div className="w-8 h-8 mb-3 flex items-center justify-center rounded-md hover:bg-tertiary/10 cursor-pointer">
            <Search size={20} className="text-tertiary" />
          </div>
          <div className="overflow-y-auto hide-scrollbar h-[calc(100vh-120px)] w-full flex flex-col items-center pt-2">
            {partners.slice(0, 15).map(partner => (
              <button
                key={partner.id}
                onClick={() => {
                  if(partner.hasGip) togglePartnerSelection(partner.id);
                  else alert('Please upload GIP first');
                }}
                className={`
                  w-10 h-10 rounded-full mb-2 flex items-center justify-center relative
                  ${selectedPartnerIds.has(partner.id) 
                    ? 'bg-sw-red-light/20 sw-text-red' 
                    : 'text-tertiary hover:bg-tertiary/10'}
                `}
                title={partner.name}
              >
                <span className="font-medium text-sm">
                  {partner.name.charAt(0)}
                </span>
                
                {/* Show document icon for partners with GIP */}
                {partner.hasGip && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-sw-green rounded-full flex items-center justify-center">
                    <FileText size={10} className="text-white" />
                  </div>
                )}
              </button>
            ))}
            
            {partners.length > 15 && (
              <div className="text-tertiary text-xs mt-2">
                +{partners.length - 15}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Improved partner list item component with clearer GIP status
function PartnerListItem({ partner, isSelected, onToggle }) {
  return (
    <li>
      <button
        onClick={() => {
          if(partner.hasGip) onToggle();
          else alert('Please upload GIP first');
        }}  
        className={`
          w-full flex items-center p-2 rounded-md text-left
          transition-colors duration-fast
          ${isSelected && partner.hasGip 
            ? 'bg-sw-red-light/20' 
            : 'hover:bg-tertiary/10'}
          
        `}
      >
        <div className="flex-1 min-w-0">
          {/* Partner name - bold if it has a GIP */}
          <p className={`text-lg truncate ${partner.hasGip ? 'font-bold' : 'font-normal'}
            ${isSelected && partner.hasGip ? 'sw-text-red' : 'sw-text-grey'}`}
          >
            {partner.name}
          </p>
          
          {/* Sport type and GIP status */}
          <div className="flex items-center justify-between mt-1">
            
            {/* GIP status indicator with improved visibility */}
            {partner.hasGip ? (
              <div className="flex items-center bg-sw-green/10 px-2 py-0.5 rounded text-xs">
                <FileText size={14} className="sw-text-green mr-1" />
                <span className="sw-text-green font-medium">GIP</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-xs text-tertiary mr-3">No GIP</span>
                <Upload size={14} className="text-tertiary hover:sw-text-red" title="Upload GIP" />
              </div>
            )}
          </div>
        </div>
        
        {/* Only show checkbox for partners with GIP */}
        {partner.hasGip && (
          isSelected ? (
            <CheckSquare size={20} className="sw-text-grey mr-2 flex-shrink-0" />
          ) : (
            <Square size={20} className="text-tertiary mr-2 flex-shrink-0" />
          )
        )}
      </button>
    </li>
  );
}