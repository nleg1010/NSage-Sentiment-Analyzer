import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface Props {
  ticker: string;
  date: string;
  tags: string[];
}

const AnalysisHeader: React.FC<Props> = ({ ticker, date, tags }) => {
  return (
    <div className="border-b border-[#524F8F]/20 pb-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">{ticker} Analysis</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Tag size={14} />
            <div className="flex space-x-2">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 rounded bg-[#524F8F]/20 text-[#FF9913]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisHeader;