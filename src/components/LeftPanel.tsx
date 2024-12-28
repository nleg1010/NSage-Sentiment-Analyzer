import React from 'react';
import { Filter, Settings, History } from 'lucide-react';

const LeftPanel: React.FC = () => {
  return (
    <div className="w-64 bg-[#1F274B] border-r border-[#524F8F]/20 p-4">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-white font-semibold mb-3">Filters</h3>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF9913] cursor-pointer">
            <Filter size={18} />
            <span>Sentiment Type</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF9913] cursor-pointer">
            <History size={18} />
            <span>Date Range</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF9913] cursor-pointer">
            <Settings size={18} />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;