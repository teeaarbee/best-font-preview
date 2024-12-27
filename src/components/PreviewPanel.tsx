import React from 'react';
import { PreviewSettings } from '../types';
import { fontCategories } from '../constants';
import PreviewCard from './PreviewCard';

interface PreviewPanelProps {
  settings: PreviewSettings;
}

export default function PreviewPanel({ settings }: PreviewPanelProps) {
  return (
    <div className="lg:col-span-2">
      {fontCategories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {category.fonts.map((font) => (
              <PreviewCard
                key={`${category.name}-${font.name}-${font.family}`}
                font={font}
                settings={settings}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}