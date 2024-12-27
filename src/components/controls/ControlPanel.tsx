import React from 'react';
import { Upload } from 'lucide-react';
import { PreviewSettings } from '../../types';
import TextContentControl from './TextContentControl';
import TypographyControl from './TypographyControl';
import TextStyleControl from './TextStyleControl';
import ShadowControl from './ShadowControl';

interface ControlPanelProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

export default function ControlPanel({ settings, setSettings }: ControlPanelProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSettings(prev => ({ ...prev, imageUrl: url }));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      
      <div className="space-y-6">
        <TextContentControl settings={settings} setSettings={setSettings} />
        <TypographyControl settings={settings} setSettings={setSettings} />
        <TextStyleControl settings={settings} setSettings={setSettings} />
        <ShadowControl settings={settings} setSettings={setSettings} />

        {/* Background Controls */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Background</h3>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Color
            </label>
            <input
              type="color"
              value={settings.backgroundColor}
              onChange={(e) => setSettings(prev => ({ ...prev, backgroundColor: e.target.value }))}
              className="w-full h-10 rounded-md cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex items-center justify-center w-full p-2 border-2 border-dashed rounded-md cursor-pointer hover:border-gray-400"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload Image
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}