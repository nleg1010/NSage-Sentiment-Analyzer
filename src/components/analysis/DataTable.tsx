import React from 'react';

interface DataRow {
  metric: string;
  value: string | number;
  change?: string;
}

interface Props {
  title: string;
  data: DataRow[];
}

const DataTable: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="mb-6">
      <h3 className="text-[#FF9913] text-sm font-semibold mb-2">{title}</h3>
      <div className="bg-[#0D0D0D] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#524F8F]/10">
            <tr>
              <th className="px-4 py-2 text-left text-sm text-gray-400">Metric</th>
              <th className="px-4 py-2 text-left text-sm text-gray-400">Value</th>
              <th className="px-4 py-2 text-left text-sm text-gray-400">Change</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-[#524F8F]/20">
                <td className="px-4 py-2 text-sm text-gray-300">{row.metric}</td>
                <td className="px-4 py-2 text-sm text-white font-mono">{row.value}</td>
                <td className="px-4 py-2 text-sm font-mono">
                  {row.change && (
                    <span className={row.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                      {row.change}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;