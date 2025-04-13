// src/app/components/governance/upload/UploadSection.client.jsx
'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X, AlertCircle } from 'lucide-react';
import { useAnalysis } from '@/app/contexts/AnalysisContext.client';

export default function UploadSection() {
  const { 
    partners,
    uploadedFiles,
    fileToPartnerMap,
    setUploadedFiles,
    assignFileToPartner,
    analyzeGips
  } = useAnalysis();
  
  const [error, setError] = useState(null);
  
  // File drop handler using react-dropzone
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
      setUploadedFiles(acceptedFiles);
      setError(null);
    }
  }, [setUploadedFiles]);
  
  // File upload interface 
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    maxFiles: 10,
    maxSize: 10 * 1024 * 1024 // 10MB
  });
  
  // Remove file handler
  const removeFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter(file => file.name !== fileName));
  };
  
  // Validate before submitting
  const handleSubmit = () => {
    // Check if all files have been assigned to partners
    const unassignedFiles = uploadedFiles.filter(file => !fileToPartnerMap[file.name]);
    
    if (unassignedFiles.length > 0) {
      setError(`Please assign partners to all files before proceeding (${unassignedFiles.length} unassigned)`);
      return;
    }
    
    // Start the analysis process
    analyzeGips();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Upload Governance Improvement Plans
      </h2>
      
      <p className="text-gray-600 mb-6">
        Upload partner Governance Improvement Plans (GIPs) and assign each to the correct partner.
        The system will analyze the documents and provide insights mapped to the Capability Framework.
      </p>
      
      {/* Error message if any */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
          <AlertCircle size={20} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
      
      {/* File drop area */}
      <div
        {...getRootProps({
          className: `
            border-2 border-dashed rounded-lg p-8 
            ${isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}
            transition-colors duration-200 cursor-pointer text-center
          `
        })}
      >
        <input {...getInputProps()} />
        <Upload size={40} className={`mx-auto ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`} />
        <p className="mt-4 text-gray-600">
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop GIP files here, or click to select files'}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Supported formats: PDF, DOCX, TXT (Max 10 files, 10MB each)
        </p>
      </div>
      
      {/* Selected files list with partner assignment */}
      {uploadedFiles.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Files</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please assign each file to the correct partner organization.
          </p>
          
          <ul className="space-y-3 mb-6">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                <File size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                <div className="flex-1 min-w-0 mr-3">
                  <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                
                {/* Partner selector dropdown */}
                <select
                  value={fileToPartnerMap[file.name] || ''}
                  onChange={(e) => assignFileToPartner(file.name, e.target.value)}
                  className="p-2 border border-gray-300 rounded-md text-sm mr-3 bg-white"
                >
                  <option value="">Select partner...</option>
                  {partners.map(partner => (
                    <option key={partner.id} value={partner.id}>
                      {partner.name}
                    </option>
                  ))}
                </select>
                
                <button
                  type="button"
                  onClick={() => removeFile(file.name)}
                  className="p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
          
          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Upload & Analyze
            </button>
          </div>
        </div>
      )}
    </div>
  );
}