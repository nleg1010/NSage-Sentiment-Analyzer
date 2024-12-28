import React from 'react';
import CommandInput from './CommandInput';
import { COMMANDS } from '../../utils/constants';

const Terminal: React.FC = () => {
  const handleCommand = (command: string, output: string) => {
    // Handle commands without storing history
    if (command.toLowerCase() === COMMANDS.HELP) {
      // Handle help command
      console.log('Available commands: analyze <ticker>, sentiment <ticker>, clear, help, export');
    }
  };

  return (
    <div className="bg-[#0D0D0D]/95 p-4 font-mono">
      <CommandInput onCommand={handleCommand} />
    </div>
  );
};

export default Terminal;