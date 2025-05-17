
// src/app/components/governance/upload/UploadSection.client.jsx
'use client';

import { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, AlertCircle, Info, Search, ChevronDown, CheckCircle, FilePlus } from 'lucide-react';
import { useAnalysis } from '../../../contexts/AnalysisContext.client';


export default function UploadSection() {
  const { 
    partners,
    uploadedFiles,
    fileToPartnerMap,
    setUploadedFiles,
    assignFileToPartner,
    analyzeGips,
    partnerHasGip,
    partnerCategories
  } = useAnalysis();
  
  const [error, setError] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchTerms, setSearchTerms] = useState({});
  const [confirmOverwrite, setConfirmOverwrite] = useState(null);
  
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  // useClickOutside(dropdownRef, () => {
  //   setOpenDropdown(null);
  // });
  
  // File drop handler using react-dropzone
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setUploadedFiles(acceptedFiles);
      setError(null);
      
      // Initialize search terms for each file
      const newSearchTerms = {};
      acceptedFiles.forEach(file => {
        newSearchTerms[file.name] = '';
      });
      setSearchTerms(newSearchTerms);
    }
  }, [setUploadedFiles]);
  
  // File upload interface 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/plain': ['.txt']
    },
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024 // 10MB
  });
  
  // Remove file handler
  const removeFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter(file => file.name !== fileName));
    
    // Also remove from search terms
    setSearchTerms(prev => {
      const updated = {...prev};
      delete updated[fileName];
      return updated;
    });
  };
  
  // Handle partner selection with confirmation for existing GIPs
  const handlePartnerSelect = (fileName, partnerId) => {
    // Check if partner already has a GIP
    if (partnerHasGip(partnerId)) {
      setConfirmOverwrite({
        fileName,
        partnerId,
        partnerName: partners.find(p => p.id === partnerId)?.name
      });
    } else {
      assignFileToPartner(fileName, partnerId);
      setOpenDropdown(null);
    }
  };
  
  // Confirm overwrite
  const confirmPartnerAssignment = () => {
    if (confirmOverwrite) {
      assignFileToPartner(confirmOverwrite.fileName, confirmOverwrite.partnerId);
      setConfirmOverwrite(null);
      setOpenDropdown(null);
    }
  };
  
  // Cancel overwrite
  const cancelPartnerAssignment = () => {
    setConfirmOverwrite(null);
  };
  
  // Update search term for a file
  const updateSearchTerm = (fileName, term) => {
    setSearchTerms(prev => ({
      ...prev,
      [fileName]: term
    }));
  };
  
  // Filter partners by search term
  const filterPartners = (partners, searchTerm) => {
    if (!searchTerm) return partners;
    
    return partners.filter(partner => 
      partner.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Validate before submitting
  const handleSubmit = () => {
    // Check if files have been uploaded
    if (uploadedFiles.length === 0) {
      setError('Please upload at least one file before proceeding');
      return;
    }
    
    // Check if all files have been assigned to partners
    const unassignedFiles = uploadedFiles.filter(file => !fileToPartnerMap[file.name]);
    
    if (unassignedFiles.length > 0) {
      setError(`Please assign partners to all files before proceeding (${unassignedFiles.length} unassigned)`);
      return;
    }
    
    // Start the analysis process
    analyzeGips();
  };
  
  // Organize partners by category
  const partnersByCategory = {};
  partners.forEach(partner => {
    if (!partnersByCategory[partner.category]) {
      partnersByCategory[partner.category] = [];
    }
    partnersByCategory[partner.category].push(partner);
  });
  
  return (
    <div className="sw-card p-6 max-w-4xl mx-auto mt-48 items-center justify-center">
      <h2 className="sw-heading-primary sw-text-blue mb-4 text-center">
        Upload Governance Improvement Plans
      </h2>
      
      <p className="text-secondary mb-12 text-center ">
        Upload Partner Governance Improvement Plans and assign each to the correct partner.
      </p>
      
      {/* Error message if any */}
      {error && (
        <div className="sw-notice mb-6 text-error">
          <div className="flex items-start">
            <AlertCircle size={20} className="text-error mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-error text-sm">{error}</p>
          </div>
        </div>
      )}
      
      {/* Confirmation dialog for overwriting GIP */}
      {confirmOverwrite && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-primary mb-2">Confirm Replacement</h3>
              <p className="text-secondary">
                {confirmOverwrite.partnerName} already has a GIP uploaded. 
                Do you want to replace it with the new file?
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-tertiary/20 rounded-md text-secondary hover:bg-tertiary/10"
                onClick={cancelPartnerAssignment}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 sw-bg-red text-white rounded-md hover:sw-bg-red-dark"
                onClick={confirmPartnerAssignment}
              >
                Replace
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* File drop area */}
      <div
        {...getRootProps({
          className: `
            border-2 border-dashed rounded-lg p-6 
            ${isDragActive ? 'border-sw-blue bg-sw-blue-light/10' : 'border-tertiary hover:border-sw-blue'}
            transition-colors duration-200 cursor-pointer text-center
          `
        })}
      >
        <input {...getInputProps()} />
        <Upload size={30} className={`mx-auto ${isDragActive ? 'sw-text-blue' : 'text-tertiary'}`} />
        <p className="mt-3 text-secondary">
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop GIP files here, or click to select files'}
        </p>
        <p className="mt-2 text-sm text-tertiary">
            Supported formats: PDF, DOCX, XLSX, XLS, TXT (Max 10 files, 10MB each)
        </p>
      </div>
      
      {/* Selected files list with partner assignment */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="sw-heading-secondary sw-text-blue mb-3">Selected Files</h3>
          <p className="text-sm text-secondary mb-4">
            Please assign each file to the correct partner organisation.
          </p>
          
          <ul className="space-y-2 mb-6">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center p-2 bg-light-grey justify-between rounded-md">
                
                
                {/* Partner selector dropdown */}
                <div className="relative mr-6 " ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === file.name ? null : file.name)}
                    className={`
                      flex items-center justify-between w-64 p-2 text-sm border rounded-md bg-white
                      ${fileToPartnerMap[file.name] ? 'border-sw-blue' : 'border-tertiary/20'}
                      ${openDropdown === file.name ? 'ring-2 ring-sw-blue/20' : ''}
                    `}
                  >
                    <span className={fileToPartnerMap[file.name] ? 'sw-text-blue' : 'text-tertiary'}>
                      {fileToPartnerMap[file.name] 
                        ? partners.find(p => p.id === fileToPartnerMap[file.name])?.name 
                        : 'Select partner...'}
                    </span>
                    <ChevronDown size={16} className="text-tertiary" />
                  </button>
                  
                  {/* Dropdown menu */}
                  {openDropdown === file.name && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-tertiary/20 rounded-md shadow-lg max-h-82 overflow-auto">
                      {/* Search input */}
                      <div className="sticky top-0 p-2 bg-white border-b border-tertiary/20">
                        <div className="relative">
                          <Search size={14} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-tertiary" />
                          <input
                            type="text"
                            placeholder="Search partners..."
                            value={searchTerms[file.name] || ''}
                            onChange={(e) => updateSearchTerm(file.name, e.target.value)}
                            className="w-full pl-8 pr-3 py-1.5 text-sm border border-tertiary/20 rounded-md"
                          />
                        </div>
                      </div>
                      
                      {/* Partner list by category */}
                      <div className="p-1">
                        {partnerCategories.map(category => {
                          const categoryPartners = filterPartners(
                            partnersByCategory[category] || [], 
                            searchTerms[file.name] || ''
                          );
                          
                          if (categoryPartners.length === 0) return null;
                          
                          return (
                            <div key={category} className="mb-2">
                              <div className="px-3 py-1 text-xs font-semibold text-tertiary bg-tertiary/5">
                                {category}
                              </div>
                              
                              {categoryPartners.map(partner => (
                                <button
                                  key={partner.id}
                                  onClick={() => handlePartnerSelect(file.name, partner.id)}
                                  className="w-full px-3 py-2 text-left text-sm flex items-center justify-between hover:bg-tertiary/5 rounded-md"
                                >
                                  <div className="flex items-center">
                                    <span className="text-secondary font-medium">{partner.name}</span>
                                 
                                  </div>
                                  
                                  {/* Show indicator if partner already has GIP */}
                                  {partner.hasGip && (
                                    <div className="flex items-center text-xs text-tertiary">
                                      <FilePlus size={12} className="mr-1" />
                                      <span>Has GIP</span>
                                    </div>
                                  )}
                                  
                                  {/* Show check if this partner is selected */}
                                  {fileToPartnerMap[file.name] === partner.id && (
                                    <CheckCircle size={14} className="sw-text-blue" />
                                  )}
                                </button>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className='flex'>
                  {/* File Name and Details */}

                  <File size={20} className="text-tertiaryflex-shrink-0 mr-2" />
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="text-sm font-medium sw-text-blue truncate">{file.name}</p>
                    <p className="text-xs text-tertiary">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFile(file.name)}
                    className="p-1 ml-2 text-tertiary hover:sw-text-red focus:outline-none"
                    >
                    <X size={18} />
                  </button>
                  </div>
              </li>
            ))}
          </ul>
          
          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="sw-button sw-button-primary"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}