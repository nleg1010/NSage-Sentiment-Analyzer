import React from 'react';
import SentimentChart from './analytics/SentimentChart';
import MetricsCard from './analytics/MetricsCard';
import { TrendingUp, BarChart2, Percent } from 'lucide-react';

const mockChartData = [
  { name: 'Positive', value: 65 },
  { name: 'Neutral', value: 25 },
  { name: 'Negative', value: 10 },
];

const RightPanel: React.FC = () => {
  return (
    <div className="w-80 bg-[#0D0D0D] border-l border-[#524F8F]/20 p-4">
      <h3 className="text-white font-semibold text-sm mb-6 flex items-center gap-2">
        <BarChart2 size={16} className="text-[#FF9913]" />
        AMZN Sentiment Analytics
      </h3>
      
      <div className="h-64 mb-6">
        <SentimentChart data={mockChartData} />
      </div>

      <div className="space-y-4">
        <MetricsCard
          title="Overall Sentiment"
          value="Bullish"
          color="orange"
          icon={<TrendingUp size={16} className="text-[#FF9913]" />}
        />
        <MetricsCard
          title="Confidence Score"
          value="85.7%"
          color="pink"
          icon={<Percent size={16} className="text-[#EF5278]" />}
        />
      </div>
    </div>
  );
};

export default RightPanel;