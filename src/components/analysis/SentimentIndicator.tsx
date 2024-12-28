import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Props {
  score: number;
  confidence: number;
}

const SentimentIndicator: React.FC<Props> = ({ score, confidence }) => {
  const getIndicator = () => {
    if (score > 0.6) return { icon: TrendingUp, color: 'text-green-400', text: 'Bullish' };
    if (score < 0.4) return { icon: TrendingDown, color: 'text-red-400', text: 'Bearish' };
    return { icon: Minus, color: 'text-gray-400', text: 'Neutral' };
  };

  const { icon: Icon, color, text } = getIndicator();

  return (
    <div className="flex items-center space-x-4 bg-[#0D0D0D] p-4 rounded-lg mb-6">
      <div className={`flex items-center space-x-2 ${color}`}>
        <Icon size={20} />
        <span className="font-semibold">{text}</span>
      </div>
      <div className="text-gray-400">
        <span className="text-white font-mono">{(confidence * 100).toFixed(1)}%</span> confidence
      </div>
    </div>
  );
};

export default SentimentIndicator;