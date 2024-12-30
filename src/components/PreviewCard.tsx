import React, { useEffect, useRef } from 'react';
import { PreviewSettings } from '../types';

interface PreviewCardProps {
  font: {
    name: string;
    family: string;
    source: 'adobe' | 'google' | 'custom';
    weight?: number;
    style?: string;
  };
  settings: PreviewSettings;
}

export default function PreviewCard({ font, settings }: PreviewCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current && window.twemoji) {
      window.twemoji.parse(previewRef.current);
    }
  }, [settings.text]);

  const { textShadow } = settings;
  
  const backgroundStyle = settings.imageUrl
    ? {
        backgroundImage: `url(${settings.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        backgroundColor: settings.backgroundColor,
      };

  const getTextContainerClass = () => {
    const baseClasses = 'absolute left-0 right-0 p-4';
    const positionClasses = {
      top: 'top-0',
      center: 'top-1/2 -translate-y-1/2',
      bottom: 'bottom-0'
    };
    const gradientClasses = settings.showGradient ? {
      top: 'bg-gradient-to-b from-black/70 to-transparent',
      center: 'bg-black/50',
      bottom: 'bg-gradient-to-t from-black/70 to-transparent'
    } : '';

    return `${baseClasses} ${positionClasses[settings.textPosition]} ${settings.showGradient ? gradientClasses[settings.textPosition] : ''}`;
  };

  const getFontFamily = () => {
    const family = font.family.includes(' ') ? `"${font.family}"` : font.family;
    return `${family}, sans-serif`;
  };

  const getDisplayText = () => {
    switch (settings.textCase) {
      case 'uppercase':
        return settings.text.toUpperCase();
      case 'lowercase':
        return settings.text.toLowerCase();
      default:
        return settings.text;
    }
  };

  const textStyle = {
    fontFamily: getFontFamily(),
    fontSize: `${settings.fontSize}px`,
    color: settings.textColor,
    textShadow: textShadow.enabled ? 
      `${textShadow.offsetX}px ${textShadow.offsetY}px ${textShadow.blur}px ${textShadow.color}` : 
      'none',
    lineHeight: settings.lineHeight,
    letterSpacing: `${settings.letterSpacing}px`,
    textAlign: settings.textAlign,
    fontWeight: font.weight || settings.fontWeight,
    fontStyle: font.style || 'normal',
    WebkitTextStroke: settings.strokeWidth ? `${settings.strokeWidth}px ${settings.strokeColor}` : 'none',
  };

  return (
    <div
      className="relative aspect-square rounded-lg overflow-hidden"
      style={backgroundStyle}
      ref={previewRef}
    >
      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {font.name}
      </div>
      <div className={getTextContainerClass()}>
        <p ref={textRef} style={textStyle}>{getDisplayText()}</p>
      </div>
    </div>
  );
}