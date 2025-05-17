// // src/app/components/governance/PrincipleBreakdown.client.jsx
// 'use client';

// import { ChevronRight, ChevronDown } from 'lucide-react';

// export function PrincipleBreakdown({ 
//     results, 
//     selectedPrinciple,
//     onPrincipleSelect,
//     filterType 
// }) {
//     // Filter and transform data based on filterType
//     const getFilteredData = () => {
//         if (filterType === 'support') {
//             return results.documents.map(doc => ({
//                 ...doc,
//                 framework_matches: Object.entries(doc.framework_matches)
//                     .reduce((acc, [key, practices]) => ({
//                         ...acc,
//                         [key]: Object.entries(practices)
//                             .filter(([_, practice]) => practice.support_requested)
//                             .reduce((p, [k, v]) => ({ ...p, [k]: v }), {})
//                     }), {})
//             }));
//         }
//         return results.documents;
//     };

//     const filteredData = getFilteredData();

//     return (
//         <div className="space-y-4">
//             {filteredData.map(doc => (
//                 <div key={doc.document_id} className="border rounded-lg">
//                     {/* Partner Header */}
//                     <div className="p-4 bg-gray-50 rounded-t-lg">
//                         <h4 className="font-medium text-gray-900">
//                             {doc.partner_name}
//                         </h4>
//                     </div>

//                     {/* Principles List */}
//                     <div className="divide-y">
//                         {Object.entries(doc.framework_matches).map(([principle, practices]) => (
//                             <div key={principle} className="p-4">
//                                 <button
//                                     onClick={() => onPrincipleSelect(principle)}
//                                     className="w-full flex items-center justify-between"
//                                 >
//                                     <div>
//                                         <span className="font-medium text-gray-900">
//                                             Principle {principle.split('_')[1]}
//                                         </span>
//                                         <span className="ml-2 text-sm text-gray-500">
//                                             ({Object.keys(practices).length} practices)
//                                         </span>
//                                     </div>
//                                     {selectedPrinciple === principle ? 
//                                         <ChevronDown className="h-5 w-5" /> : 
//                                         <ChevronRight className="h-5 w-5" />
//                                     }
//                                 </button>

//                                 {selectedPrinciple === principle && (
//                                     <div className="mt-4 space-y-3">
//                                         {Object.entries(practices).map(([practice, details]) => (
//                                             <div 
//                                                 key={practice}
//                                                 className="ml-4 p-3 bg-gray-50 rounded-lg"
//                                             >
//                                                 <div className="flex justify-between">
//                                                     <span className="font-medium text-gray-900">
//                                                         {practice}
//                                                     </span>
//                                                     {details.priority_level && (
//                                                         <span className={`
//                                                             px-2 py-1 rounded-full text-xs
//                                                             ${details.priority_level === 'High' 
//                                                                 ? 'bg-red-100 text-red-800'
//                                                                 : 'bg-yellow-100 text-yellow-800'
//                                                             }
//                                                         `}>
//                                                             {details.priority_level}
//                                                         </span>
//                                                     )}
//                                                 </div>
//                                                 <p className="mt-1 text-sm text-gray-500">
//                                                     {details.description}
//                                                 </p>
//                                                 {details.support_requested && (
//                                                     <div className="mt-2 text-sm text-blue-600">
//                                                         Support requested
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }