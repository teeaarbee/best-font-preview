import React, { useState } from 'react';
import { PreviewSettings } from '../types';
import ControlPanel from './controls/ControlPanel';
import PreviewPanel from './PreviewPanel';

export default function FontPreview() {
  const [settings, setSettings] = useState<PreviewSettings>({
    text: "The quick brown fox jumps over the lazy dog",
    fontSize: 32,
    backgroundColor: "#f3f4f6",
    imageUrl: null,
    textAlign: 'left',
    letterSpacing: 0,
    lineHeight: 1.2,
    textPosition: 'bottom',
    fontWeight: 400,
    textColor: "#ffffff",
    textShadow: {
      offsetX: 2,
      offsetY: 2,
      blur: 4,
      color: "rgba(0,0,0,0.5)",
      enabled: true
    },
    strokeWidth: 0,
    strokeColor: "#000000",
    showGradient: true,
    textCase: 'normal'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Font Preview Tool</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ControlPanel settings={settings} setSettings={setSettings} />
          <PreviewPanel settings={settings} />
        </div>
      </div>
    </div>
  );
}