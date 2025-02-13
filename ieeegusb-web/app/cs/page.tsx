"use client"

import React, { lazy, Suspense } from "react"

const Navbar = lazy(() => import("./components/Navbar"))
const HeroSection = lazy(() => import("./components/Hero"))
const About = lazy(() => import("./components/About"))
const EventsSection = lazy(() => import("./components/Events"))
const TeamSection = lazy(() => import("./components/Team"))
const ResourcesSection = lazy(() => import("./components/Resources"))
const ContactSection = lazy(() => import("./components/Contact"))
const Footer = lazy(() => import("./components/Footer"))

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10">
        <Suspense fallback={<div className="bg-black h-screen" />}>
          <Navbar />
          <main className="overflow-x-hidden pt-16">
            <HeroSection />
            <About />
            <EventsSection />
            <TeamSection />
            <ResourcesSection />
            <ContactSection />
          </main>
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}