import React, { useState } from 'react';
import { Smile } from 'lucide-react';
import Picker from '@emoji-mart/react';

interface EmojiPickerProps {
  onEmojiSelect: (emoji: string) => void;
}

export default function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="p-2 rounded hover:bg-gray-100 transition-colors"
        title="Add emoji"
      >
        <Smile size={20} />
      </button>
      
      {showPicker && (
        <div className="absolute z-50 bottom-full mb-2">
          <div className="relative">
            <div 
              className="fixed inset-0" 
              onClick={() => setShowPicker(false)}
            />
            <Picker
              onEmojiSelect={(emoji: any) => {
                onEmojiSelect(emoji.native);
                setShowPicker(false);
              }}
              theme="light"
              set="apple"
              emojiSize={20}
              emojiButtonSize={28}
              maxFrequentRows={2}
            />
          </div>
        </div>
      )}
    </div>
  );
}