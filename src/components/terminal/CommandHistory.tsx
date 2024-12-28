import React from 'react';
import { type HistoryItem } from '../../types';

interface Props {
  history: HistoryItem[];
}

const CommandHistory: React.FC<Props> = ({ history }) => {
  return (
    <div className="space-y-2 font-mono text-sm">
      {history.map((item, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-[#524F8F]">❯</span>
            <span className="text-gray-400">{item.command}</span>
          </div>
          <div className="pl-4 text-white">{item.output}</div>
        </div>
      ))}
    </div>
  );
};

export default CommandHistory;