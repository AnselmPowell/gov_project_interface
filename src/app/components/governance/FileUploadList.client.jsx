// // src/app/components/governance/FileUploadList.client.jsx
// 'use client';

// import { FileText, X, AlertCircle } from 'lucide-react';

// export function FileUploadList({ files, onRemove, errors = {} }) {
//     return (
//         <div className="mt-8">
//             <h3 className="font-medium text-gray-900">Selected Documents</h3>
//             <ul className="mt-4 space-y-3">
//                 {files.map(file => (
//                     <li 
//                         key={file.name}
//                         className={`
//                             p-4 rounded-lg flex items-center justify-between
//                             ${errors[file.name] ? 'bg-red-50 border border-red-200' : 'bg-gray-50'}
//                         `}
//                     >
//                         <div className="flex items-center min-w-0">
//                             <FileText className={`
//                                 h-5 w-5 flex-shrink-0
//                                 ${errors[file.name] ? 'text-red-400' : 'text-gray-400'}
//                             `} />
//                             <div className="ml-3 flex-1 min-w-0">
//                                 <p className={`
//                                     text-sm font-medium truncate
//                                     ${errors[file.name] ? 'text-red-900' : 'text-gray-900'}
//                                 `}>
//                                     {file.name}
//                                 </p>
//                                 {errors[file.name] && (
//                                     <p className="text-xs text-red-600 mt-1">
//                                         {errors[file.name]}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => onRemove(file)}
//                             className={`
//                                 ml-4 p-1 rounded-full
//                                 ${errors[file.name] 
//                                     ? 'hover:bg-red-100 text-red-500' 
//                                     : 'hover:bg-gray-100 text-gray-500'
//                                 }
//                             `}
//                         >
//                             <X className="h-4 w-4" />
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }