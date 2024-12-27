export interface TextShadow {
  offsetX: number;
  offsetY: number;
  blur: number;
  color: string;
  enabled: boolean;
}

export interface PreviewSettings {
  text: string;
  fontSize: number;
  backgroundColor: string;
  imageUrl: string | null;
  textAlign: 'left' | 'center' | 'right';
  letterSpacing: number;
  lineHeight: number;
  textPosition: 'top' | 'center' | 'bottom';
  fontWeight: number;
  textColor: string;
  textShadow: TextShadow;
  strokeWidth: number;
  strokeColor: string;
  showGradient: boolean;
  textCase: 'normal' | 'uppercase' | 'lowercase';
}