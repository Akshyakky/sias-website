// Logo.tsx - Enhanced with animation and better styling
import React from "react";

interface LogoProps {
  variant?: "default" | "small" | "hero";
  className?: string;
}

const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const sizes = {
    small: "h-6 w-auto",
    default: "h-10 w-auto",
    hero: "w-32 md:w-40 h-auto",
  };

  const containerStyles = {
    small: "bg-white/95 backdrop-blur-sm p-1.5 rounded-lg shadow-sm",
    default: "bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300",
    hero: "bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl mx-auto",
  };

  const dimensions = {
    small: { width: 24, height: 24 },
    default: { width: 40, height: 40 },
    hero: { width: 160, height: 160 },
  };

  const basePath = process.env.NODE_ENV === "production" ? "." : "";

  return (
    <div className={`inline-block ${containerStyles[variant]} ${className} group`}>
      <picture>
        <source srcSet={`${basePath}/images/Sias_4C.svg`} type="image/svg+xml" />
        <source srcSet={`${basePath}/images/Sias_4C.png`} type="image/png" />
        <img
          src={`${basePath}/images/Sias_4C.jpg`}
          alt="SIAS Accounting"
          className={`${sizes[variant]} object-contain transition-transform duration-300 group-hover:scale-105`}
          width={dimensions[variant].width}
          height={dimensions[variant].height}
          loading={variant === "hero" ? "eager" : "lazy"}
        />
      </picture>
    </div>
  );
};

export default Logo;
