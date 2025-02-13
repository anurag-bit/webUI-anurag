import React, { useRef } from 'react';
import { Calendar } from "lucide-react"
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      icon: <Calendar className="w-8 h-8 text-amber-400 mb-4" />,
      title: "WebWars 2025",
      description: "Compete, Create, and Conquer! Join the WebWars 2025—May the creativity be with you as teams battle for the ultimate prize",
      date: "January 28, 2025 - Februrary 8, 2025",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScIU67nD3WkkSa_CeIJXIkIrFV-unWa3yTGyg5Cy2wHOE1Zzw/viewform"
,
    }
    
  ]
  return (
    <motion.section 
      id="events" 
      className="py-16"
      ref={sectionRef}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/50 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20"
              >
                {event.icon}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <p className="text-sm text-amber-400">{event.date}</p>
                <Link href={event.registrationLink} className="mt-4 inline-block bg-amber-400 text-black py-2 px-4 rounded transition hover:bg-amber-500">
                  Register Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}