// // src/app/components/governance/dashboard/charts/PieChart.client.jsx
// 'use client';

// const COLORS = [
//     '#E32434',  // Sport Wales Red
//     '#F6B207',  // Sport Wales Yellow
//     '#164B64',  // Sport Wales Blue
//     '#299D91',  // Sport Wales Green
//     '#E32434'   // Repeat red if 5th color needed
//   ];

// import { PieChart as RechartsChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="bg-white p-4 border rounded shadow">
//                 <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
//                 <p className="text-sm text-gray-600">{`${payload[0].payload.count} matches`}</p>
//             </div>
//         );
//     }
//     return null;
// };

// export function PieChart({ data }) {
//     return (
//         <ResponsiveContainer width="100%" height={300}>
//             <RechartsChart >
//                 <Pie
//                     data={data}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={80}
//                     fill="#8884d8"
//                     dataKey="percentage"
//                     nameKey="principle"
//                 >
//                     {data.map((entry, index) => (
//                         <Cell 
//                             key={`cell-${index}`} 
//                             fill={COLORS[index % COLORS.length]} 
//                         />
//                     ))}
//                 </Pie>
//                 <Tooltip content={<CustomTooltip />} />
//                 <Legend />
//             </RechartsChart>
//         </ResponsiveContainer>
//     );
// }




// // src/app/components/governance/charts/PieChart.client.jsx
// 'use client';

// import { useState } from 'react';
// import { PieChart as RechartsChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';

// // Sport Wales brand colors
// const COLORS = [
//   '#E32434',  // Sport Wales Red
//   '#F6B207',  // Sport Wales Yellow
//   '#164B64',  // Sport Wales Blue
//   '#299D91',  // Sport Wales Green
//   '#6A2E90',  // Purple - Additional color
// ];

// // Format the data for Recharts
// const formatChartData = (data) => {
//   if (!data || !data.principleDistribution) {
//     return [];
//   }
  
//   return data.principleDistribution.map(principle => ({
//     name: `Principle ${principle.principleId}: ${principle.principleName}`,
//     value: principle.percentage,
//     // Include the original data for tooltips and click handling
//     original: principle,
//     count: principle.partnerCount,
//     id: principle.principleId,
//   }));
// };

// // Custom tooltip component
// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     return (
//       <div className="bg-white p-4 border rounded shadow-md max-w-xs">
//         <p className="text-base font-medium text-gray-900">{data.name}</p>
//         <p className="text-sm text-gray-700">{`${data.value.toFixed(1)}% of improvement areas`}</p>
//         <p className="text-sm text-gray-600">{`${data.count} partners focused on this principle`}</p>
//         <div className="mt-2">
//           <p className="text-xs text-gray-500 font-medium">Key elements:</p>
//           <ul className="text-xs text-gray-500 mt-1 ml-2">
//             {data.original.elements.slice(0, 3).map(element => (
//               <li key={element.elementId} className="truncate">
//                 • {element.elementName} ({element.partnerCount})
//               </li>
//             ))}
//             {data.original.elements.length > 3 && (
//               <li className="text-xs italic">and {data.original.elements.length - 3} more...</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// // Active shape for when a segment is clicked/hovered
// const renderActiveShape = (props) => {
//   const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  
//   return (
//     <g>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius + 6}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//     </g>
//   );
// };

// // PieChart Component
// export default function PieChart({ 
//   data, 
//   height = 300,
//   onPrincipleSelect = () => {}
// }) {
//   const [activeIndex, setActiveIndex] = useState(null);
  
//   // Format data for the chart
//   const chartData = formatChartData(data);
  
//   // No data state
//   if (chartData.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
//         <p className="text-gray-500">No data available</p>
//       </div>
//     );
//   }
  
//   // Handlers for interaction
//   const handlePieClick = (_, index) => {
//     const selectedPrinciple = chartData[index].id;
//     onPrincipleSelect(selectedPrinciple);
//     setActiveIndex(index);
//   };
  
//   const handleMouseEnter = (_, index) => {
//     setActiveIndex(index);
//   };
  
//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <div className="w-full">
//       <ResponsiveContainer width="100%" height={height}>
//         <RechartsChart>
//           <Pie
//             activeIndex={activeIndex}
//             activeShape={renderActiveShape}
//             data={chartData}
//             cx="50%"
//             cy="50%"
//             innerRadius={60}
//             outerRadius={80}
//             fill="#8884d8"
//             dataKey="value"
//             nameKey="name"
//             paddingAngle={2}
//             onClick={handlePieClick}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             {chartData.map((entry, index) => (
//               <Cell 
//                 key={`cell-${index}`} 
//                 fill={COLORS[index % COLORS.length]} 
//                 className="transition-opacity duration-300 hover:opacity-80"
//               />
//             ))}
//           </Pie>
//           <Tooltip content={<CustomTooltip />} />
//           <Legend 
//             layout="vertical" 
//             verticalAlign="middle" 
//             align="right"
//             formatter={(value, entry, index) => {
//               return (
//                 <span className="text-sm text-gray-700 ml-2">
//                   {`Principle ${entry.payload.id}`}
//                 </span>
//               );
//             }}
//           />
//         </RechartsChart>
//       </ResponsiveContainer>
      
//       {/* Additional Legend Detail */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mt-4">
//         {chartData.map((entry, index) => (
//           <div 
//             key={`legend-${index}`}
//             className={`p-2 rounded border transition-all duration-200 cursor-pointer
//               ${activeIndex === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}
//             onClick={() => handlePieClick(null, index)}
//           >
//             <div className="flex items-center">
//               <div 
//                 className="w-3 h-3 rounded-full mr-2"
//                 style={{ backgroundColor: COLORS[index % COLORS.length] }}
//               ></div>
//               <span className="text-xs font-medium text-gray-700 truncate">
//                 Principle {entry.id}
//               </span>
//             </div>
//             <p className="mt-1 text-xs text-gray-500 truncate">
//               {entry.count} partners • {entry.value.toFixed(1)}%
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// src/app/components/governance/charts/PieChart.client.jsx
'use client';

import { useState } from 'react';
import { PieChart as RechartsChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sport Wales brand colors
const COLORS = [
  '#E32434',  // Sport Wales Red
  '#F6B207',  // Sport Wales Yellow
  '#164B64',  // Sport Wales Blue
  '#299D91',  // Sport Wales Green
  '#6A2E90',  // Purple - Additional color
];

// Custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border rounded shadow-md">
        <p className="text-base font-medium text-gray-900">{data.principleName}</p>
        <p className="text-sm text-gray-700">{`${data.percentage.toFixed(1)}% of focus areas`}</p>
        {data.partnerCount && (
          <p className="text-sm text-gray-600">{`${data.partnerCount} partners focusing on this`}</p>
        )}
      </div>
    );
  }
  return null;
};

export default function PieChart({ 
  data, 
  height = 300,
  onPrincipleSelect
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }
  
  // Prepare data for the chart - ensure it has the right format
  const chartData = data.map(item => ({
    principle: item.principle,
    principleName: item.principleName,
    value: item.percentage,
    percentage: item.percentage,
    partnerCount: item.partnerCount
  }));
  
  // Event handlers
  const handleClick = (_, index) => {
    onPrincipleSelect(chartData[index].principle);
    setActiveIndex(index);
  };
  
  const handleMouseEnter = (_, index) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={height}>
        <RechartsChart>
          <Pie
            activeIndex={activeIndex}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            layout="vertical" 
            verticalAlign="middle"
            align="right"
            formatter={(value, entry, index) => (
              <span className="text-sm text-gray-700">
                {entry.payload.principleName}
              </span>
            )}
          />
        </RechartsChart>
      </ResponsiveContainer>
      
      {/* Additional Legend with more detail */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4">
        {chartData.map((entry, index) => (
          <div 
            key={`legend-${index}`}
            className={`
              p-2 rounded border cursor-pointer transition-all duration-200
              ${activeIndex === index ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}
            `}
            onClick={() => handleClick(null, index)}
          >
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-xs font-medium text-gray-700 truncate">
                Principle {entry.principle}
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {entry.percentage.toFixed(1)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}