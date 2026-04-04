const CHIP_ORANGE = "#ff5e00";

/** AI chip with pins + “AI” label — matches provided 980×980 artwork; scales via viewBox. */
export function AiRegulationChipIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 980 980" fill="none" aria-hidden>
      <g
        fill="none"
        stroke={CHIP_ORANGE}
        strokeWidth={52}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="302" y="302" width="376" height="376" rx="42" ry="42" />
        <line x1="382" y1="302" x2="382" y2="206" />
        <circle cx="382" cy="196" r="22" />
        <line x1="490" y1="302" x2="490" y2="106" />
        <circle cx="490" cy="96" r="22" />
        <line x1="598" y1="302" x2="598" y2="206" />
        <circle cx="598" cy="196" r="22" />
        <line x1="382" y1="678" x2="382" y2="774" />
        <circle cx="382" cy="784" r="22" />
        <line x1="490" y1="678" x2="490" y2="838" />
        <circle cx="490" cy="852" r="22" />
        <line x1="598" y1="678" x2="598" y2="774" />
        <circle cx="598" cy="784" r="22" />
        <line x1="302" y1="388" x2="210" y2="388" />
        <circle cx="198" cy="388" r="22" />
        <line x1="302" y1="490" x2="122" y2="490" />
        <circle cx="110" cy="490" r="22" />
        <line x1="302" y1="592" x2="210" y2="592" />
        <circle cx="198" cy="592" r="22" />
        <line x1="678" y1="388" x2="770" y2="388" />
        <circle cx="782" cy="388" r="22" />
        <line x1="678" y1="490" x2="858" y2="490" />
        <circle cx="870" cy="490" r="22" />
        <line x1="678" y1="592" x2="770" y2="592" />
        <circle cx="782" cy="592" r="22" />
      </g>
      <text
        x="490"
        y="490"
        fill={CHIP_ORANGE}
        stroke="none"
        fontFamily="system-ui, Arial, Helvetica, sans-serif"
        fontSize="180"
        fontWeight={700}
        textAnchor="middle"
        dominantBaseline="central"
      >
        AI
      </text>
    </svg>
  );
}
