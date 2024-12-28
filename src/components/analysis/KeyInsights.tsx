import React from 'react';
import { KeyInsight } from '../../types/analysis';

interface Props {
  insights: KeyInsight[];
}

const KeyInsights: React.FC<Props> = ({ insights }) => {
  return (
    <div className="bg-[#0D0D0D] p-4 rounded-lg mb-6">
      <h3 className="text-[#FF9913] text-sm font-semibold mb-2">KEY INSIGHTS</h3>
      <div className="space-y-2 text-sm text-gray-300">
        {insights.map((insight, index) => (
          <p key={index} className={insight.category === 'primary' ? 'text-white' : ''}>
            • {insight.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default KeyInsights;