import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { type ChartData } from '../../types';

interface Props {
  data: ChartData[];
}

const SentimentChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barSize={32}>
        <XAxis 
          dataKey="name" 
          stroke="#FFFFFF"
          fontSize={12}
          tickLine={false}
        />
        <YAxis 
          stroke="#FFFFFF"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            background: '#1F274B',
            border: '1px solid #524F8F',
            borderRadius: '4px',
            fontSize: '12px',
            color: '#FFFFFF'
          }}
        />
        <Bar 
          dataKey="value" 
          fill="#FF9913"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SentimentChart;