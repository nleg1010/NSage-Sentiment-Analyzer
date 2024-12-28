import React from 'react';

interface Props {
  title: string;
  value: string | number;
  color: 'orange' | 'pink' | 'purple';
  icon?: React.ReactNode;
}

const colorMap = {
  orange: '#FF9913',
  pink: '#EF5278',
  purple: '#524F8F'
};

const MetricsCard: React.FC<Props> = ({ title, value, color, icon }) => {
  return (
    <div className="bg-[#0D0D0D] border border-[#524F8F]/20 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h4 style={{ color: colorMap[color] }} className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="text-white font-mono text-lg">{value}</p>
    </div>
  );
};

export default MetricsCard;