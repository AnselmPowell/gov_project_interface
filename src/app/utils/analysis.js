// // src/utils/analysis.js
// export function calculatePrincipleStats(results) {
//     if (!results) return [];

//     // Initialize counters for each principle
//     const principleCounts = {
//         'Principle 1': 0,
//         'Principle 2': 0,
//         'Principle 3': 0,
//         'Principle 4': 0,
//     };

//     // Count matches for each principle across all organisations
//     Object.values(results).forEach(org => {
//         const matches = org.framework_matches;
//         if (matches) {
//             if (matches.principle_1) principleCounts['Principle 1']++;
//             if (matches.principle_2) principleCounts['Principle 2']++;
//             if (matches.principle_3) principleCounts['Principle 3']++;
//             if (matches.principle_4) principleCounts['Principle 4']++;
//         }
//     });

//     // Calculate total for percentages
//     const total = Object.values(principleCounts).reduce((sum, count) => sum + count, 0);

//     // Format data for PieChart
//     return Object.entries(principleCounts)
//         .map(([principle, count]) => ({
//             principle,
//             count,
//             percentage: Math.round((count / total) * 100) || 0
//         }))
//         .filter(item => item.count > 0); // Only include principles with matches
// }