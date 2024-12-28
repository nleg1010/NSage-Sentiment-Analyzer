import React, { useState, KeyboardEvent } from 'react';
import { getCommandOutput } from '../../utils/terminalHelpers';

interface Props {
  onCommand: (command: string, output: string) => void;
}

const CommandInput: React.FC<Props> = ({ onCommand }) => {
  const [command, setCommand] = useState('');

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && command.trim()) {
      const output = getCommandOutput(command);
      onCommand(command, output);
      setCommand('');
    }
  };

  return (
    <div className="flex items-center space-x-2 w-full">
      <span className="text-[#FF9913]">❯</span>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none"
        placeholder="Type a command (e.g., analyze, help, clear)"
      />
    </div>
  );
};

export default CommandInput;