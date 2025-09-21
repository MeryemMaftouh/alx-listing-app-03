// components/common/Pill.tsx
import React from "react";
import type { PillProps } from "@/interfaces";

export default function Pill({ label, active, onClick, className }: PillProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex items-center rounded-full px-4 py-2 text-sm transition",
        "ring-1",
        active
          ? "bg-emerald-600 text-white ring-emerald-600"
          : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50",
        className || "",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
