// src/app/components/governance/Header.client.jsx
'use client';

import { useState } from 'react';
import { useAnalysis } from '../../contexts/AnalysisContext.client';
import { 
  BarChart2, 
  Upload, 
  Users, 
  ChevronDown, 
  Clock,
  Settings,
  HelpCircle,
  User
} from 'lucide-react';

export default function Header() {
  const { 
    activeView, 
    selectedPartnerIds,
    resetToUpload
  } = useAnalysis();
  
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Determine what the main header title should be
  let headerTitle = '';
  let headerIcon = null;
  
  switch (activeView) {
    case 'upload':
      headerTitle = 'Upload & Analyze Documents';
      headerIcon = <Upload size={20} className="sw-text-red mr-2" />;
      break;
    case 'single-partner':
      headerTitle = 'Single Partner Analysis';
      headerIcon = <User size={20} className="sw-text-red mr-2" />;
      break;
    case 'multi-partner':
      headerTitle = 'Comparative Analysis';
      headerIcon = <Users size={20} className="sw-text-red mr-2" />;
      break;
    default:
      headerTitle = 'Governance Analysis';
      headerIcon = <BarChart2 size={20} className="sw-text-red mr-2" />;
  }
  
  return (
    <header className="h-20 -mb-2 border-b border-tertiary/20 sw-bg-blue flex items-center justify-between px-6">
      <div className="flex items-center">
        
        {activeView !== 'upload' && (
          <button 
            onClick={resetToUpload} 
            className="ml-4 text-sm sw-text-grey hover:sw-text-red transition-colors"
          >
            Back to Upload
          </button>
        )}
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Last updated indicator */}
        <div className="flex items-center sw-text-grey text-sm">
          <Clock size={14} className="mr-1" />
          <span>Last updated: Today, 10:45</span>
        </div>
        
        {/* Settings button */}
        <button className="p-2 sw-text-grey  hover:sw-text-red transition-colors rounded-md hover:bg-tertiary/10">
          <Settings size={18} />
        </button>
        
        {/* User menu */}
        <div className="relative">
          <button 
            className="flex items-center space-x-2 sw-text-grey py-1 px-2 rounded-md hover:bg-tertiary/10 transition-colors"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <div className="w-8 h-8 rounded-full sw-bg-red flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <ChevronDown size={16} className="sw-text-grey " />
          </button>
          
          {showUserMenu && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-tertiary/20 rounded-md shadow-md z-10 animate-fade-in">
              <div className="p-3 border-b border-tertiary/20">
                <p className="text-sm font-medium sw-text-blue">Jane Doe</p>
                <p className="text-xs text-tertiary">Governance Team</p>
              </div>
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm sw-text-blue hover:bg-tertiary/10 transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left px-4 py-2 text-sm sw-text-blue hover:bg-tertiary/10 transition-colors">
                  Help & Support
                </button>
                <button className="w-full text-left px-4 py-2 text-sm sw-text-blue hover:bg-tertiary/10 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}