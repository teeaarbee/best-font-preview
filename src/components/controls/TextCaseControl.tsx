import React from 'react';
import { Type, Text, TextQuote } from 'lucide-react';
import { PreviewSettings } from '../../types';

interface TextCaseControlProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

export default function TextCaseControl({ settings, setSettings }: TextCaseControlProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-600">Text Case</label>
      <div className="flex gap-2">
        {[
          { value: 'normal', icon: Type, label: 'Normal' },
          { value: 'uppercase', icon: Text, label: 'Uppercase' },
          { value: 'lowercase', icon: TextQuote, label: 'Lowercase' }
        ].map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setSettings(prev => ({ ...prev, textCase: value as PreviewSettings['textCase'] }))}
            className={`p-2 rounded flex items-center gap-1 ${
              settings.textCase === value ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}
            title={label}
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}