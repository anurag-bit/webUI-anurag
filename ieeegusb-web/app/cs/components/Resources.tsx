import { BookOpen, Users, Calendar } from "lucide-react";
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Learning Materials",
      items: ["Technical Workshops", "Tutorial Videos", "Code Repositories", "Study Materials"],
    },
    {
      icon: <Users className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Member Benefits",
      items: [
        "IEEE Digital Library Access",
        "Networking Events", 
        "Career Guidance",
        "Certification Discounts",
      ],
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-400 mb-4" />,
      title: "Activities",
      items: ["Technical Competitions", "Research Projects", "Industry Visits", "Hackathons"],
    },
  ]

  return (
    <motion.section 
      id="resources" 
      className="py-16"
      ref={sectionRef}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20"
              >
                {resource.icon}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
                  {resource.title}
                </h3>
                <ul className="space-y-2 text-gray-400">
                  {resource.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-amber-500">•</span>
                      <span className="group-hover:text-amber-100 transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}