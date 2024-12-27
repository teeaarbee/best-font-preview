interface FontCategory {
  name: string;
  fonts: Array<{
    name: string;
    family: string;
    source: 'adobe' | 'google' | 'custom';
    weight?: number;
    style?: string;
  }>;
}

export const fontCategories: FontCategory[] = [
  {
    name: "Secondary Fonts",
    fonts: [
      {
        name: "Podium",
        family: "podium",
        source: "adobe"
      },
      {
        name: "Play Pen",
        family: "playpen-sans",
        source: "adobe"
      },
      {
        name: "Oh No BlazeFace",
        family: "ohno-blazeface",
        source: "adobe",
        weight: 700
      },
      {
        name: "Snug Sharp",
        family: "snug-sharp",
        source: "adobe"
      },
      {
        name: "Aptly",
        family: "aptly",
        source: "adobe",
        weight: 700
      },
      {
        name: "SZTOS",
        family: "sztos",
        source: "adobe",
        weight: 700
      },
      {
        name: "Obviously",
        family: "obviously",
        source: "adobe",
        weight: 700
      },
      {
        name: "Abril FatFace",
        family: "Abril Fatface",
        source: "google",
        weight: 400
      }
    ]
  }
];