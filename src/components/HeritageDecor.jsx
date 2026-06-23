// src/components/HeritageDecor.jsx
// ─── Reusable Classical Indian Heritage Decorative Elements ────────────────────

// ── Mandala ──────────────────────────────────────────────────────────────────
export function MandalaSVG({ size = 320, color = '#D4A017', opacity = 0.07, className = '', style = {} }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="0.6">
        {/* Outer ring */}
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="90" strokeDasharray="3 4" />
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="72" strokeDasharray="2 3" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="50" strokeDasharray="3 2" />
        <circle cx="100" cy="100" r="38" />
        <circle cx="100" cy="100" r="28" strokeDasharray="2 2" />
        <circle cx="100" cy="100" r="16" />
        <circle cx="100" cy="100" r="6" />
        {/* 8-point star petals outer */}
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = (a * Math.PI) / 180;
          const x1 = 100 + 95 * Math.cos(rad);
          const y1 = 100 + 95 * Math.sin(rad);
          const x2 = 100 + 60 * Math.cos(rad);
          const y2 = 100 + 60 * Math.sin(rad);
          const lx = 100 + 80 * Math.cos((a + 22.5) * Math.PI / 180);
          const ly = 100 + 80 * Math.sin((a + 22.5) * Math.PI / 180);
          return (
            <g key={a}>
              <line x1="100" y1="100" x2={x1} y2={y1} strokeWidth="0.4" />
              <path d={`M ${x1} ${y1} Q ${lx} ${ly} ${x2} ${y2}`} strokeWidth="0.5" />
            </g>
          );
        })}
        {/* 16-point radial lines inner */}
        {Array.from({length:16},(_,i)=>{
          const a = i*(360/16);
          const rad = (a*Math.PI)/180;
          return <line key={i} x1={100+28*Math.cos(rad)} y1={100+28*Math.sin(rad)} x2={100+50*Math.cos(rad)} y2={100+50*Math.sin(rad)} strokeWidth="0.4" key={i}/>;
        })}
        {/* Lotus petals inner ring */}
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = (a * Math.PI) / 180;
          const cx = 100 + 44 * Math.cos(rad);
          const cy = 100 + 44 * Math.sin(rad);
          return <ellipse key={a} cx={cx} cy={cy} rx="7" ry="12" transform={`rotate(${a} ${cx} ${cy})`} />;
        })}
        {/* Diamond accents */}
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map(a => {
          const rad = (a * Math.PI) / 180;
          const cx = 100 + 72 * Math.cos(rad);
          const cy = 100 + 72 * Math.sin(rad);
          return (
            <polygon key={a}
              points={`${cx},${cy-5} ${cx+4},${cy} ${cx},${cy+5} ${cx-4},${cy}`}
              transform={`rotate(${a} ${cx} ${cy})`}
            />
          );
        })}
      </g>
    </svg>
  );
}

// ── Temple Gopuram Silhouette ─────────────────────────────────────────────────
export function TempleSVG({ width = 260, height = 340, color = '#D4A017', opacity = 0.08, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 260 340" style={{ display: 'block', ...style }} aria-hidden="true">
      <g opacity={opacity} fill={color}>
        {/* Kalasha (finial) */}
        <ellipse cx="130" cy="12" rx="10" ry="6" />
        <rect x="127" y="18" width="6" height="12" rx="2" />
        <ellipse cx="130" cy="32" rx="14" ry="7" />
        {/* Tiers of temple tower */}
        <rect x="118" y="38" width="24" height="14" rx="1" />
        <rect x="112" y="52" width="36" height="14" rx="1" />
        <rect x="106" y="66" width="48" height="14" rx="1" />
        <rect x="100" y="80" width="60" height="14" rx="1" />
        <rect x="94" y="94" width="72" height="14" rx="1" />
        <rect x="88" y="108" width="84" height="14" rx="1" />
        <rect x="82" y="122" width="96" height="14" rx="1" />
        <rect x="76" y="136" width="108" height="14" rx="1" />
        <rect x="70" y="150" width="120" height="16" rx="1" />
        {/* Decorative notches on tiers */}
        {[42,56,70,84,98,112,126,140].map((y, i) => (
          <g key={i}>
            <rect x={118-i*6+4} y={y} width="4" height="4" opacity="0.6" />
            <rect x={130} y={y} width="4" height="4" opacity="0.6" />
            <rect x={118+i*6+4} y={y} width="4" height="4" opacity="0.6" />
          </g>
        ))}
        {/* Main hall */}
        <rect x="60" y="166" width="140" height="60" rx="2" />
        {/* Pillars */}
        {[72,94,116,138,160,182].map(x => (
          <g key={x}>
            <rect x={x} y="170" width="10" height="52" rx="2" />
            <rect x={x-2} y="170" width="14" height="6" rx="1" />
            <rect x={x-2} y="216" width="14" height="6" rx="1" />
          </g>
        ))}
        {/* Arch */}
        <path d="M 85 166 Q 130 148 175 166" fill="none" stroke={color} strokeWidth="2" opacity={opacity*8} />
        {/* Entrance */}
        <rect x="110" y="196" width="40" height="30" rx="3" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity*8}/>
        <path d="M 110 196 Q 130 184 150 196" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity*8} />
        {/* Steps */}
        <rect x="50" y="226" width="160" height="8" rx="1" />
        <rect x="40" y="234" width="180" height="8" rx="1" />
        <rect x="30" y="242" width="200" height="8" rx="1" />
        <rect x="20" y="250" width="220" height="10" rx="1" />
        {/* Ground */}
        <rect x="0" y="260" width="260" height="6" rx="2" />
      </g>
    </svg>
  );
}

// ── Lotus Pattern ─────────────────────────────────────────────────────────────
export function LotusSVG({ size = 120, color = '#D4A017', opacity = 0.1, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block', ...style }} aria-hidden="true">
      <g opacity={opacity} fill={color}>
        {/* Outer petals */}
        {[0,45,90,135,180,225,270,315].map(a => {
          const rad = (a * Math.PI) / 180;
          const cx = 60 + 38 * Math.cos(rad);
          const cy = 60 + 38 * Math.sin(rad);
          return <ellipse key={a} cx={cx} cy={cy} rx="10" ry="22" transform={`rotate(${a+90} ${cx} ${cy})`} />;
        })}
        {/* Middle petals */}
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map(a => {
          const rad = (a * Math.PI) / 180;
          const cx = 60 + 24 * Math.cos(rad);
          const cy = 60 + 24 * Math.sin(rad);
          return <ellipse key={a} cx={cx} cy={cy} rx="7" ry="16" transform={`rotate(${a+90} ${cx} ${cy})`} />;
        })}
        {/* Inner circle */}
        <circle cx="60" cy="60" r="10" />
        <circle cx="60" cy="60" r="6" fill="none" stroke={color} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// ── Temple Bell ───────────────────────────────────────────────────────────────
export function BellSVG({ width = 60, height = 90, color = '#D4A017', opacity = 0.12, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 60 90" style={{ display: 'block', ...style }} aria-hidden="true">
      <g opacity={opacity} fill={color} stroke={color} strokeWidth="0.8">
        {/* Hanging chain */}
        <line x1="30" y1="0" x2="30" y2="8" strokeWidth="1.5" />
        <ellipse cx="30" cy="10" rx="6" ry="3" fill="none" />
        {/* Bell body */}
        <path d="M 24 12 Q 10 16 8 40 Q 6 58 14 66 Q 22 72 38 72 Q 46 72 52 66 Q 56 58 52 40 Q 50 16 36 12 Z" />
        {/* Bell rim */}
        <ellipse cx="30" cy="68" rx="20" ry="5" />
        {/* Decorative band */}
        <ellipse cx="30" cy="30" rx="16" ry="3" fill="none" strokeWidth="1.5" />
        <ellipse cx="30" cy="48" rx="19" ry="3" fill="none" strokeWidth="1.5" />
        {/* Clapper */}
        <line x1="30" y1="30" x2="30" y2="78" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="30" cy="80" r="3" />
        {/* Decorative dots */}
        {[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5].map((a,i) => {
          const rad = (a * Math.PI) / 180;
          return <circle key={i} cx={30 + 12*Math.cos(rad)} cy={30 + 4*Math.sin(rad)} r="1" />;
        })}
      </g>
    </svg>
  );
}

// ── Peacock Feather ───────────────────────────────────────────────────────────
export function PeacockFeatherSVG({ width = 60, height = 200, color = '#D4A017', opacity = 0.1, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 60 200" style={{ display: 'block', ...style }} aria-hidden="true">
      <g opacity={opacity} stroke={color} fill="none" strokeWidth="0.7">
        {/* Main quill */}
        <line x1="30" y1="200" x2="30" y2="20" strokeWidth="1.2" stroke={color} />
        {/* Eye of feather */}
        <ellipse cx="30" cy="22" rx="14" ry="18" stroke={color} />
        <ellipse cx="30" cy="22" rx="10" ry="13" stroke={color} />
        <ellipse cx="30" cy="22" rx="6" ry="8" stroke={color} fill={color} fillOpacity="0.3" />
        <circle cx="30" cy="22" r="3" fill={color} />
        {/* Barbs left side */}
        {Array.from({length:20},(_,i)=>{
          const y = 35 + i*7;
          const len = 6 + i * 0.8;
          return <path key={i} d={`M 30 ${y} Q ${30-len*0.6} ${y-2} ${30-len} ${y+3}`} strokeWidth="0.6" />;
        })}
        {/* Barbs right side */}
        {Array.from({length:20},(_,i)=>{
          const y = 35 + i*7;
          const len = 6 + i * 0.8;
          return <path key={i} d={`M 30 ${y} Q ${30+len*0.6} ${y-2} ${30+len} ${y+3}`} strokeWidth="0.6" />;
        })}
      </g>
    </svg>
  );
}

// ── Dancer Silhouette ─────────────────────────────────────────────────────────
export function DancerSilhouetteSVG({ width = 120, height = 200, color = '#D4A017', opacity = 0.08, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 200" style={{ display: 'block', ...style }} aria-hidden="true">
      <g opacity={opacity} fill={color}>
        {/* Headdress */}
        <ellipse cx="68" cy="16" rx="14" ry="6" />
        <rect x="62" y="8" width="12" height="10" rx="3" />
        <ellipse cx="68" cy="8" rx="8" ry="3" />
        {/* Head */}
        <ellipse cx="68" cy="32" rx="12" ry="14" />
        {/* Neck */}
        <rect x="63" y="44" width="10" height="8" rx="2" />
        {/* Body / costume */}
        <path d="M 55 52 Q 40 60 38 85 Q 36 100 45 110 Q 55 118 68 116 Q 82 114 78 100 Q 80 85 80 70 Q 80 60 68 52 Z" />
        {/* Raised right arm */}
        <path d="M 75 58 Q 90 48 105 28 Q 108 22 106 18 Q 104 14 102 16 Q 100 18 98 24 Q 88 42 76 54" />
        {/* Left arm on waist */}
        <path d="M 55 70 Q 42 72 34 76 Q 30 78 32 80 Q 34 82 38 80 Q 46 76 56 74" />
        {/* Hands */}
        <ellipse cx="104" cy="16" rx="5" ry="4" />
        <ellipse cx="31" cy="80" rx="4" ry="3" />
        {/* Raised leg (tribhangi pose) */}
        <path d="M 62 116 Q 55 130 50 148 Q 46 162 52 170 Q 58 176 64 168 Q 68 160 66 145 Q 65 130 68 116" />
        {/* Standing leg */}
        <path d="M 70 116 Q 74 130 74 150 Q 74 165 70 178 Q 66 185 68 190 Q 70 195 75 190 Q 80 182 78 165 Q 76 148 76 130 Q 76 118 72 116" />
        {/* Feet / ghungroo */}
        <ellipse cx="69" cy="165" rx="8" ry="4" transform="rotate(-20 69 165)" />
        <ellipse cx="73" cy="190" rx="7" ry="3" />
        {/* Costume pleats */}
        <path d="M 55 90 Q 50 110 48 130 Q 52 134 56 128 Q 58 110 62 92" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
        <path d="M 82 90 Q 86 110 86 130 Q 82 134 80 128 Q 78 110 76 92" fill="none" stroke={color} strokeWidth="1" opacity="0.5" />
        {/* Jewelry accents */}
        <circle cx="68" cy="52" r="2" />
        <circle cx="60" cy="54" r="1.5" />
        <circle cx="76" cy="54" r="1.5" />
      </g>
    </svg>
  );
}

// ── Corner Ornament ───────────────────────────────────────────────────────────
export function CornerOrnamentSVG({ size = 100, color = '#D4A017', opacity = 0.12, flip = false, style = {} }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 100 100"
      style={{ display: 'block', transform: flip ? 'scaleX(-1)' : 'none', ...style }}
      aria-hidden="true"
    >
      <g opacity={opacity} fill="none" stroke={color} strokeWidth="0.9">
        {/* Main L-shape frame */}
        <path d="M 5 5 L 5 95" strokeWidth="1.2" />
        <path d="M 5 5 L 95 5" strokeWidth="1.2" />
        <path d="M 5 5 L 5 45 Q 5 50 10 50 L 50 50" strokeWidth="0.6" />
        {/* Decorative scrollwork */}
        <path d="M 5 20 Q 15 20 15 30 Q 15 38 8 38" />
        <path d="M 20 5 Q 20 15 30 15 Q 38 15 38 8" />
        {/* Lotus corner motif */}
        <circle cx="5" cy="5" r="12" />
        <circle cx="5" cy="5" r="8" />
        <circle cx="5" cy="5" r="4" fill={color} fillOpacity="0.3" />
        {/* Petal decorations */}
        <ellipse cx="20" cy="5" rx="7" ry="4" />
        <ellipse cx="5" cy="20" rx="4" ry="7" />
        <ellipse cx="15" cy="15" rx="6" ry="6" />
        {/* Chain dots along edges */}
        {Array.from({length:8},(_,i)=>
          <circle key={i} cx={5} cy={28+i*8} r="1" fill={color} />
        )}
        {Array.from({length:8},(_,i)=>
          <circle key={i} cx={28+i*8} cy={5} r="1" fill={color} />
        )}
      </g>
    </svg>
  );
}

// ── Ornamental Horizontal Divider ─────────────────────────────────────────────
export function OrnamentalDivider({ light = false, style = {} }) {
  const c = light ? 'rgba(255,255,255,0.25)' : 'rgba(212,160,23,0.4)';
  const goldC = light ? 'rgba(255,255,255,0.5)' : '#D4A017';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', ...style }}>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${c})` }} />
      <svg width="80" height="20" viewBox="0 0 80 20" aria-hidden="true">
        <g fill={goldC} opacity={light ? 0.5 : 0.8}>
          <polygon points="40,2 43,9 50,9 44,14 47,21 40,16 33,21 36,14 30,9 37,9" transform="scale(0.7) translate(17,0)" />
          <circle cx="8" cy="10" r="3" />
          <circle cx="72" cy="10" r="3" />
          <circle cx="18" cy="10" r="2" />
          <circle cx="62" cy="10" r="2" />
          <line x1="22" y1="10" x2="30" y2="10" stroke={goldC} strokeWidth="1" />
          <line x1="50" y1="10" x2="58" y2="10" stroke={goldC} strokeWidth="1" />
        </g>
      </svg>
      <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${c})` }} />
    </div>
  );
}

// ── Border Pattern Strip ──────────────────────────────────────────────────────
export function BorderPatternSVG({ width = '100%', height = 24, color = '#D4A017', opacity = 0.18, style = {} }) {
  return (
    <svg
      width={width} height={height}
      preserveAspectRatio="xMidYMid slice"
      style={{ display: 'block', ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="heritage-border" x="0" y="0" width="48" height={height} patternUnits="userSpaceOnUse">
          <g opacity={opacity} fill={color} stroke={color} strokeWidth="0.5">
            <polygon points="24,2 27,9 34,9 29,14 31,21 24,17 17,21 19,14 14,9 21,9" />
            <circle cx="4" cy="12" r="3" fill="none" />
            <circle cx="44" cy="12" r="3" fill="none" />
            <line x1="7" y1="12" x2="14" y2="12" />
            <line x1="34" y1="12" x2="41" y2="12" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height={height} fill="url(#heritage-border)" />
    </svg>
  );
}

// ── Geometric Heritage Pattern (tiled background fill) ────────────────────────
export function HeritagePatternBg({ color = '#D4A017', opacity = 0.04, style = {} }) {
  const patternId = `hp-${Math.random().toString(36).slice(2,7)}`;
  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, ...style }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <g opacity={opacity} fill="none" stroke={color} strokeWidth="0.6">
            <rect x="5" y="5" width="50" height="50" />
            <rect x="15" y="15" width="30" height="30" transform="rotate(45 30 30)" />
            <circle cx="30" cy="30" r="8" />
            <circle cx="5" cy="5" r="3" />
            <circle cx="55" cy="5" r="3" />
            <circle cx="5" cy="55" r="3" />
            <circle cx="55" cy="55" r="3" />
            <line x1="5" y1="30" x2="15" y2="30" />
            <line x1="45" y1="30" x2="55" y2="30" />
            <line x1="30" y1="5" x2="30" y2="15" />
            <line x1="30" y1="45" x2="30" y2="55" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

// ── Hanging Bells Row ─────────────────────────────────────────────────────────
export function HangingBellsRow({ count = 5, color = '#D4A017', opacity = 0.12, style = {} }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', ...style }}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', animation: `bellSwing ${2.5 + i * 0.4}s ease-in-out infinite alternate` }}>
          <div style={{ width: '1px', height: `${24 + i % 3 * 12}px`, background: `rgba(212,160,23,${opacity * 2})` }} />
          <BellSVG width={20 + (i % 3) * 4} height={32 + (i % 3) * 6} color={color} opacity={opacity} />
        </div>
      ))}
      <style>{`
        @keyframes bellSwing {
          0%   { transform: rotate(-4deg); }
          100% { transform: rotate(4deg); }
        }
      `}</style>
    </div>
  );
}

// ── Compact Decorative Row (eyebrow for section headings) ─────────────────────
export function HeritageEyebrow({ children, light = false }) {
  const c = light ? 'rgba(212,160,23,0.7)' : '#D4A017';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center', marginBottom: '1.2rem' }}>
      <svg width="30" height="8" viewBox="0 0 30 8" aria-hidden="true">
        <line x1="0" y1="4" x2="20" y2="4" stroke={c} strokeWidth="1" />
        <polygon points="22,4 26,1 30,4 26,7" fill={c} />
      </svg>
      <p style={{
        fontFamily: 'var(--font-cinzel)',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: c,
        margin: 0,
      }}>{children}</p>
      <svg width="30" height="8" viewBox="0 0 30 8" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
        <line x1="0" y1="4" x2="20" y2="4" stroke={c} strokeWidth="1" />
        <polygon points="22,4 26,1 30,4 26,7" fill={c} />
      </svg>
    </div>
  );
}
