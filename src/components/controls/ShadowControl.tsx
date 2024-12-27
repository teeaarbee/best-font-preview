import React from 'react';
import { PreviewSettings } from '../../types';

interface ShadowControlProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

export default function ShadowControl({ settings, setSettings }: ShadowControlProps) {
  const updateShadow = (key: keyof PreviewSettings['textShadow'], value: string | number) => {
    setSettings(prev => ({
      ...prev,
      textShadow: {
        ...prev.textShadow,
        [key]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Text Shadow</h3>
      
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Offset X ({settings.textShadow.offsetX}px)
        </label>
        <input
          type="range"
          min="-10"
          max="10"
          value={settings.textShadow.offsetX}
          onChange={(e) => updateShadow('offsetX', Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Offset Y ({settings.textShadow.offsetY}px)
        </label>
        <input
          type="range"
          min="-10"
          max="10"
          value={settings.textShadow.offsetY}
          onChange={(e) => updateShadow('offsetY', Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Blur ({settings.textShadow.blur}px)
        </label>
        <input
          type="range"
          min="0"
          max="20"
          value={settings.textShadow.blur}
          onChange={(e) => updateShadow('blur', Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Shadow Color
        </label>
        <input
          type="color"
          value={settings.textShadow.color}
          onChange={(e) => updateShadow('color', e.target.value)}
          className="w-full h-10 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
}