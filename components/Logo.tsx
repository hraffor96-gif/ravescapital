import React from "react";

type LogoVariant = "primary" | "white" | "navy" | "compact";

interface LogoProps {
  variant?: LogoVariant;
  height?: number;
}

export default function Logo({ variant = "primary", height = 52 }: LogoProps) {
  const configs = {
    primary: {
      bg: "transparent",
      raves: "#F7F5F0",
      rule: "rgba(247,245,240,0.22)",
      capital: "rgba(247,245,240,0.46)",
    },
    white: {
      bg: "transparent",
      raves: "#0A0A0A",
      rule: "rgba(10,10,10,0.22)",
      capital: "rgba(10,10,10,0.52)",
    },
    navy: {
      bg: "transparent",
      raves: "#E8EFF8",
      rule: "rgba(180,200,230,0.26)",
      capital: "rgba(180,200,230,0.50)",
    },
    compact: {
      bg: "transparent",
      raves: "#F7F5F0",
      rule: "transparent",
      capital: "#F7F5F0",
    },
  };

  const c = configs[variant];

  if (variant === "compact") {
    return (
      <svg
        height={height * 0.4}
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Raves Capital"
        role="img"
        style={{ display: "block" }}
      >
        <text
          x="100"
          y="15"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="300"
          letterSpacing="8"
          fill={c.raves}
          textAnchor="middle"
        >
          RAVES  CAPITAL
        </text>
      </svg>
    );
  }

  return (
    <svg
      height={height}
      viewBox="0 0 160 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raves Capital"
      role="img"
      style={{ display: "block" }}
    >
      {/* RAVES */}
      <text
        x="80"
        y="32"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="300"
        letterSpacing="10"
        fill={c.raves}
        textAnchor="middle"
      >
        RAVES
      </text>

      {/* Divider rule — shortened 25% */}
      <line
        x1="28" y1="38.5"
        x2="132" y2="38.5"
        stroke={c.rule}
        strokeWidth="0.5"
      />

      {/* CAPITAL */}
      <text
        x="80"
        y="48"
        fontFamily="Inter, sans-serif"
        fontSize="6"
        fontWeight="400"
        letterSpacing="5"
        fill={c.capital}
        textAnchor="middle"
      >
        C A P I T A L
      </text>
    </svg>
  );
}
