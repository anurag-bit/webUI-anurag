"use client";

import { useRef, useEffect, useState, memo } from "react";
import { motion, useInView } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{ lat: number; lng: number }>;
  lineColor?: string;
  className?: string;
  animateLines?: boolean;
}

export default memo(function WorldMap({
  dots = [],
  lineColor = "#f59e0b",
  className = "",
  animateLines = false,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    amount: 0.1,  // Reduced threshold - triggers earlier
    margin: "100px 0px 0px 0px" // Pre-loads animation when approaching viewport
  });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { theme } = useTheme();
  
  const map = new DottedMap({ height: 100, grid: "diagonal" });
  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#404040",
    shape: "circle",
    backgroundColor: "#000000",
  });

  useEffect(() => {
    if (isInView && animateLines) {
      // Immediate state update when in view
      requestAnimationFrame(() => {
        setShouldAnimate(true);
      });
    }
  }, [isInView, animateLines]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const distance = Math.sqrt(
      Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
    );
    const curvature = Math.min(distance * 0.2, 50);
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - curvature;
    
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full aspect-[2/1] bg-black rounded-lg relative font-sans ${className}`}
    >
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full opacity-75 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
        priority // Added priority loading for the map image
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {shouldAnimate && dots.map((dot, i) => {
          if (i < dots.length - 1) {
            const startPoint = projectPoint(dot.lat, dot.lng);
            const endPoint = projectPoint(dots[i + 1].lat, dots[i + 1].lng);
            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    pathLength: {
                      duration: 0.8, // Reduced duration
                      delay: 0.08 * i, // Reduced delay between lines
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 0.2, // Faster fade-in
                      delay: 0.08 * i,
                    }
                  }}
                />
              </g>
            );
          }
          return null;
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`point-group-${i}`}>
            <motion.circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r="6"
              fill={lineColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isInView ? 0.8 : 0,
                scale: isInView ? 1 : 0
              }}
              transition={{
                duration: 0.3, // Faster point appearance
                delay: 0.05 * i, // Reduced delay
                ease: "easeOut"
              }}
            />
            <motion.circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r="6"
              fill={lineColor}
              opacity="0.5"
              initial={{ scale: 0 }}
              animate={{ scale: isInView ? 1 : 0 }}
              transition={{
                duration: 0.3,
                delay: 0.05 * i,
                ease: "easeOut"
              }}
            >
              <animate
                attributeName="r"
                from="6"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </motion.circle>
          </g>
        ))}
      </svg>
    </div>
  );
});