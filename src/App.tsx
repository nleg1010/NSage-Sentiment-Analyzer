import React from 'react';
import LeftPanel from './components/LeftPanel';
import MainPanel from './components/MainPanel';
import RightPanel from './components/RightPanel';
import CommandBar from './components/CommandBar';
import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#1F274B]">
      {/* Header */}
      <div className="h-14 bg-[#0D0D0D] flex items-center px-4 border-b border-[#524F8F]/20">
        <div className="flex items-center space-x-2">
          <Brain size={24} className="text-[#FF9913]" />
          <span className="text-white font-semibold">NSage.ai Sentiment Analyzer</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>

      {/* Command Bar */}
      <CommandBar />
    </div>
  );
}

export default App;