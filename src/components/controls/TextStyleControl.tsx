import React from 'react';
import { PreviewSettings } from '../../types';
import ColorPicker from './ColorPicker';
import { secondaryColors } from '../../constants/colors';
import TextCaseControl from './TextCaseControl';

interface TextStyleControlProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

export default function TextStyleControl({ settings, setSettings }: TextStyleControlProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-gray-700">Text Style</h3>
      
      <ColorPicker
        label="Text Color"
        value={settings.textColor}
        onChange={(color) => setSettings(prev => ({ ...prev, textColor: color }))}
        presetColors={secondaryColors}
      />

      <TextCaseControl settings={settings} setSettings={setSettings} />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="enableShadow"
          checked={settings.textShadow.enabled}
          onChange={(e) => setSettings(prev => ({
            ...prev,
            textShadow: { ...prev.textShadow, enabled: e.target.checked }
          }))}
          className="rounded"
        />
        <label htmlFor="enableShadow" className="text-sm text-gray-600">
          Enable Text Shadow
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">
          Stroke Width ({settings.strokeWidth}px)
        </label>
        <input
          type="range"
          min="0"
          max="4"
          step="0.5"
          value={settings.strokeWidth}
          onChange={(e) => setSettings(prev => ({ ...prev, strokeWidth: Number(e.target.value) }))}
          className="w-full"
        />
      </div>

      <ColorPicker
        label="Stroke Color"
        value={settings.strokeColor}
        onChange={(color) => setSettings(prev => ({ ...prev, strokeColor: color }))}
        presetColors={secondaryColors}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="showGradient"
          checked={settings.showGradient}
          onChange={(e) => setSettings(prev => ({ ...prev, showGradient: e.target.checked }))}
          className="rounded"
        />
        <label htmlFor="showGradient" className="text-sm text-gray-600">
          Show Background Gradient
        </label>
      </div>
    </div>
  );
}