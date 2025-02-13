"use client";
import React, { memo, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

const WorldMap = dynamic(
  () => import("@/components/cs/ui/world-map").then((mod) => mod.default),
  { 
    ssr: false, 
    loading: () => <div className="h-80 w-full bg-black"></div> // Add placeholder
  }
);

const About = memo(() => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const dots = useMemo(() => [
    { lat: 60.0, lng: -135.0 }, // Alaska
    { lat: 34.0, lng: -118.0 }, // Los Angeles
    { lat: -15.0, lng: -47.0 }, // Brazil
    { lat: 38.0, lng: -9.0 }, // Lisbon
    { lat: 51.5, lng: -0.1 }, // London
    { lat: 28.6, lng: 77.2 }, // New Delhi
    { lat: 43.0, lng: 131.9 }, // Vladivostok
    { lat: -1.3, lng: 36.8 }, // Nairobi
    { lat: 55.8, lng: 37.6 }, // Moscow
    { lat: 35.7, lng: 139.7 }, // Tokyo
    { lat: -33.5, lng: -70.6 }, // Santiago
    { lat: 39.9, lng: 116.4 }, // Beijing
    { lat: -34.6, lng: -58.4 }, // Buenos Aires
    { lat: -25.2744, lng: 133.7751 }, // Australia (Central)
    { lat: 1.3521, lng: 103.8198 }, // Singapore
    { lat: 55.0, lng: 13.0 }, // Copenhagen, Denmark
  ], []);
  
  //SUPRESSED DUE TO PRODUCTION BUILD FAILURE 
  // const optimizedConnections = useMemo(() => {
  //   // Define connections strategically to minimize clutter
  //   return [
  //     [dots[0], dots[1]], // Alaska -> Los Angeles
  //     [dots[1], dots[3]], // Los Angeles -> London
  //     [dots[3], dots[4]], // London -> New Delhi
  //     [dots[4], dots[5]], // New Delhi -> Vladivostok
  //     [dots[5], dots[6]], // Vladivostok -> Tokyo
  //     [dots[6], dots[9]], // Tokyo -> Buenos Aires
  //     [dots[4], dots[7]], // New Delhi -> Santiago
  //     [dots[7], dots[10]], // Santiago -> Singapore
  //   ];
  // }, [dots]);

  return (
    <section id="about" className="py-6 sm:py-12 bg-black" ref={sectionRef}>
      <div className="w-full max-w-7xl mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-4 sm:p-8 pb-4">
          <div className="flex flex-col items-center justify-center min-h-[20rem]">
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-4 mb-2">
              <span className='text-white'>Together</span> We <span className='text-amber-500'>Advance</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl text-center">
              A Global Network of Innovators: Connected Across Continents, United by Technology.
            </p>
          </div>
        </div>
      </div>
      <div className="py-2 w-full flex justify-center bg-black">
        <WorldMap
          dots={dots}
          className="w-[90%] sm:w-[85%] h-80"
          animateLines={true}
        />
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
