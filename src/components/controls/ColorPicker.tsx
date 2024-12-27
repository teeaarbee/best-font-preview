import React from 'react';
import { ColorOption } from '../../constants/colors';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  presetColors: ColorOption[];
}

export default function ColorPicker({ label, value, onChange, presetColors }: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-600">
        {label}
      </label>
      <div className="flex flex-wrap gap-2 mb-2">
        {presetColors.map((color) => (
          <button
            key={color.hex}
            onClick={() => onChange(color.hex)}
            className={`w-8 h-8 rounded-full border-2 ${
              value === color.hex ? 'border-blue-500' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-16 h-10 rounded-md cursor-pointer"
        />
        <input
          type="text"
          value={value.toUpperCase()}
          onChange={(e) => {
            const hex = e.target.value;
            if (/^#[0-9A-Fa-f]{0,6}$/.test(hex)) {
              onChange(hex);
            }
          }}
          placeholder="#000000"
          className="flex-1 px-3 py-2 border rounded-md"
        />
      </div>
    </div>
  );
}