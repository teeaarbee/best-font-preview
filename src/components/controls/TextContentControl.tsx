import React from 'react';
import { PreviewSettings } from '../../types';
import EmojiPicker from './EmojiPicker';

interface TextContentControlProps {
  settings: PreviewSettings;
  setSettings: React.Dispatch<React.SetStateAction<PreviewSettings>>;
}

export default function TextContentControl({ settings, setSettings }: TextContentControlProps) {
  const handleEmojiSelect = (emoji: string) => {
    setSettings(prev => ({
      ...prev,
      text: prev.text + emoji
    }));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Preview Text
      </label>
      <div className="flex gap-2">
        <textarea
          value={settings.text}
          onChange={(e) => setSettings(prev => ({ ...prev, text: e.target.value }))}
          className="flex-1 p-2 border rounded-md"
          rows={3}
        />
        <EmojiPicker onEmojiSelect={handleEmojiSelect} />
      </div>
    </div>
  );
}