import React from 'react';
import { Upload, AlignLeft, AlignCenter, AlignRight, ArrowUp, ArrowDown } from 'lucide-react';
import { PreviewSettings } from '../types';

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
        {/* Text Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preview Text
          </label>
          <textarea
            value={settings.text}
            onChange={(e) => setSettings(prev => ({ ...prev, text: e.target.value }))}
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>

        {/* Typography Controls */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-700">Typography</h3>
          
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Font Size ({settings.fontSize}px)
            </label>
            <input
              type="range"
              min="12"
              max="72"
              value={settings.fontSize}
              onChange={(e) => setSettings(prev => ({ ...prev, fontSize: Number(e.target.value) }))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Text Alignment</label>
            <div className="flex gap-2">
              {(['left', 'center', 'right'] as const).map((align) => (
                <button
                  key={align}
                  onClick={() => setSettings(prev => ({ ...prev, textAlign: align }))}
                  className={`p-2 rounded ${settings.textAlign === align ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  {align === 'left' && <AlignLeft size={20} />}
                  {align === 'center' && <AlignCenter size={20} />}
                  {align === 'right' && <AlignRight size={20} />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Letter Spacing ({settings.letterSpacing}px)
            </label>
            <input
              type="range"
              min="-2"
              max="10"
              step="0.5"
              value={settings.letterSpacing}
              onChange={(e) => setSettings(prev => ({ ...prev, letterSpacing: Number(e.target.value) }))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Line Height ({settings.lineHeight})
            </label>
            <input
              type="range"
              min="0.8"
              max="2"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) => setSettings(prev => ({ ...prev, lineHeight: Number(e.target.value) }))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Font Weight ({settings.fontWeight})
            </label>
            <input
              type="range"
              min="100"
              max="900"
              step="100"
              value={settings.fontWeight}
              onChange={(e) => setSettings(prev => ({ ...prev, fontWeight: Number(e.target.value) }))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-2">Text Position</label>
            <div className="flex gap-2">
              {(['top', 'center', 'bottom'] as const).map((position) => (
                <button
                  key={position}
                  onClick={() => setSettings(prev => ({ ...prev, textPosition: position }))}
                  className={`p-2 rounded ${settings.textPosition === position ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  {position === 'top' && <ArrowUp size={20} />}
                  {position === 'center' && <AlignCenter size={20} />}
                  {position === 'bottom' && <ArrowDown size={20} />}
                </button>
              ))}
            </div>
          </div>
        </div>

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