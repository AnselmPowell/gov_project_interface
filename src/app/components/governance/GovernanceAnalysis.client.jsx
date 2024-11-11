
// // src/app/components/governance/GovernanceAnalysis.client.jsx
// 'use client';

// import { useState } from 'react';
// import { UploadForm } from './UploadForm.client';
// import { ProcessingStatus } from './ProcessingStatus.client';
// import { BestPractices } from './BestPractices.client';
// import { toast } from '../ui/Toast.client';

// import { getFileType } from '@/app/utils/file/fileConfig';

// export function GovernanceAnalysis() {
//     const [status, setStatus] = useState({ status: null });
//     const [analysisResult, setAnalysisResult] = useState(null);
//     const [isProcessing, setIsProcessing] = useState(false);
    
//     const handleUpload = async (files) => {
//       try {
//         setIsProcessing(true);
//         setStatus({ status: 'processing' });
//         const file = files[0];
//         const fileType = getFileType(file);
  
//         const formData = new FormData();
//         formData.append('file', file); 
//         formData.append('fileType', fileType.type);
  
//         const analysisResponse = await fetch('/api/governance/analysis', {
//           method: 'POST',
//           body: formData,
//         });
  
//         if (!analysisResponse.ok) {
//           throw new Error('Failed to analyze document');
//         }
  
//         const result = await analysisResponse.json();
//         setAnalysisResult(result);
//         setStatus({
//           status: 'complete',
//           message: `Processed document successfully, found ${result.best_practices.length} best practices`,
//         });
  
//         toast.success('Document analyzed successfully');
//       } catch (error) {
//         console.error('Analysis error:', error);
//         setStatus({
//           status: 'error',
//           message: error.message,
//         });
//         toast.error('Failed to analyze document');
//       } finally {
//         setIsProcessing(false);
//       }
//     };
  
//     return (
//       <div className="max-w-4xl mx-auto p-6 space-y-6">
//         <UploadForm onUpload={handleUpload} isProcessing={isProcessing} />
//         <ProcessingStatus status={status} />
//         {analysisResult && <BestPractices analysisResult={analysisResult} />}
//       </div>
//     );
//   }

// src/app/components/governance/GovernanceAnalysis.client.jsx
'use client';

import { useState } from 'react';
import { UploadForm } from './UploadForm.client';
import { ProcessingStatus } from './ProcessingStatus.client';
import { AnalysisResults } from './AnalysisResults.client';
import { toast } from '../ui/Toast.client';

export function GovernanceAnalysis() {
    const [analysisResults, setAnalysisResults] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [status, setStatus] = useState({ 
        status: null, 
        currentFile: null,
        processedCount: 0,
        totalFiles: 0 
    });

    const handleUpload = async (files) => {
        try {
            setIsProcessing(true);
            setStatus({ 
                status: 'processing', 
                currentFile: files[0].name,
                processedCount: 0,
                totalFiles: files.length 
            });

            const formData = new FormData();
            files.forEach(file => {
                formData.append('files', file);
            });

            const response = await fetch('/api/governance/analysis', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to analyze documents');
            }

            const result = await response.json();

            setAnalysisResults(result);
            setStatus({
                status: 'complete',
                processedCount: files.length,
                totalFiles: files.length,
                message: `Successfully analyzed ${files.length} documents`
            });

            toast.success(`Successfully analyzed ${files.length} documents`);

        } catch (error) {
            console.error('Analysis error:', error);
            setStatus({
                status: 'error',
                message: error.message
            });
            toast.error('Failed to analyze documents');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <UploadForm 
                onUpload={handleUpload} 
                isProcessing={isProcessing} 
            />
            <ProcessingStatus status={status} />
            {analysisResults && (
                <AnalysisResults results={analysisResults} />
            )}
        </div>
    );
}