import React, { PureComponent } from 'react';
// import {
//   PieChart, Pie, Cell, ResponsiveContainer
// } from 'recharts';

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);
//   const value = (percent * 100).toFixed(0);
//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {value > 0 ? `${value}%` : ''}
//     </text>
//   );
// };

// export default class PieUI extends PureComponent {
//   render() {
//     const { data, colors } = this.props;
//     return (
//       <div style={{ width: '100%', height: 300 }}>
//         <ResponsiveContainer>
//           <PieChart>
//             <Pie
//               data={data ? data : []}
//               labelLine={false}
//               outerRadius={80}
//               fill="#8884d8"
//               label={renderCustomizedLabel}
//               dataKey="value"
//             >
//               {
//                 data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)
//               }
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }
// }
import { Pie } from 'react-chartjs-2';

class PieChart extends PureComponent {
  render() {
    const { datasets, label, height }= this.props;
    let data = {
      labels: label,
      datasets: datasets,
      legends:{
        padding: 20
      }
    }
    return (
      <Pie data={data} height={height}/>
    );
  }
}

export default PieChart;