import React from 'react';
import { PreviewSettings } from '../../types';

interface FontWeightSelectProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

const fontWeights = [
  { value: 400, label: 'Regular' },
  { value: 700, label: 'Bold' }
];

export default function FontWeightSelect({ settings, setSettings }: FontWeightSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-600">Font Weight</label>
      <select
        value={settings.fontWeight}
        onChange={(e) => setSettings(prev => ({ ...prev, fontWeight: Number(e.target.value) }))}
        className="w-full p-2 border rounded-md bg-white"
      >
        {fontWeights.map(({ value, label }) => (
          <option key={value} value={value}>
            {label} ({value})
          </option>
        ))}
      </select>
    </div>
  );
}