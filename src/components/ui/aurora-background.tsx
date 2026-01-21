"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      {/* Aurora Layer 1 - Main accent glow */}
      <div
        className="absolute -inset-[100px] animate-aurora"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,77,77,0.15) 0%, rgba(255,77,77,0.05) 50%, rgba(255,77,77,0.2) 100%)",
          backgroundSize: "400% 400%",
          filter: "blur(100px)",
        }}
      />

      {/* Aurora Layer 2 - Subtle movement */}
      <div
        className="absolute -inset-[100px]"
        style={{
          background:
            "linear-gradient(225deg, rgba(255,77,77,0.1) 0%, transparent 40%, rgba(255,77,77,0.15) 100%)",
          backgroundSize: "400% 400%",
          filter: "blur(120px)",
          animation: "aurora 50s ease infinite reverse",
        }}
      />

      {/* Aurora Layer 3 - Top accent glow */}
      <div
        className="absolute top-0 left-0 w-[60%] h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,77,77,0.25) 0%, transparent 60%)",
          filter: "blur(80px)",
          animation: "aurora 40s ease infinite",
        }}
      />

      {children}
    </div>
  );
};
