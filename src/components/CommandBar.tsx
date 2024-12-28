import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const CommandBar: React.FC = () => {
  const [command, setCommand] = useState('');

  return (
    <div className="h-12 bg-[#0D0D0D] border-t border-[#524F8F]/20 flex items-center px-4">
      <Terminal size={18} className="text-[#FF9913] mr-2" />
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="flex-1 bg-transparent text-white focus:outline-none"
        placeholder="Type a command..."
      />
    </div>
  );
};

export default CommandBar;