'use client';

interface GlassFiltersProps {
  scale?: number;
  strongScale?: number;
  baseFrequency?: string;
  numOctaves?: number;
  seed?: number;
}

export function GlassFilters({
  scale = 8,
  strongScale = 16,
  baseFrequency = '0.015 0.012',
  numOctaves = 2,
  seed = 42,
}: GlassFiltersProps) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 0,
        height: 0,
        overflow: 'hidden',
      }}
    >
      <defs>
        {/* Subtle refraction filter */}
        <filter id="glass-refract" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Strong refraction filter */}
        <filter id="glass-refract-strong" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            seed={seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={strongScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Glow filter for icons and accents */}
        <filter id="glow-red" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
