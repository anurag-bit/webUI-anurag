import React, { memo, useRef } from "react"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { motion } from 'framer-motion';
import Anant from "../public/Anant.jpg"
import Gaurang from "../public/Gaurang.jpg"
import Kshitij from "../public/Kshitij.jpg"
import Sahil from "../public/Sahil.jpg"     

const TeamSection = memo(() => {
  const teamMembers = [
    {
      name: "Gaurang Pant",
      role: "Chair",
      image: Gaurang,
      linkedin: "https://www.linkedin.com/in/gaurang-pant-85a316294/",
      github: "https://github.com/gaurangp22",
    },
    {
      name: "Anant Gangwar",
      role: "Vice Chair",
      image: Anant,
      linkedin: "https://www.linkedin.com/in/anant-gangwar-797455294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appr",
      github: "https://github.com/Anant-06/Anant-06",
    },
    {
      name: "Kshitij Bajpai",
      role: "Secretary",
      image: Kshitij,
      linkedin: "https://www.linkedin.com/in/kshitij-bajpai-19011a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/kshitijbajpai007",
    },
    {
      name: "Md. Sahil",
      role: "Treasurer",
      image: Sahil,
      linkedin: "https://www.linkedin.com/in/mohammad-sahil-60bb752a5",
      github: "https://github.com/MS-Programmer0",
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section 
      id="team" 
      className="py-16"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md overflow-hidden">
        <div className="bg-black backdrop-blur-sm p-8">
          <h2 className="text-3xl font-bold mb-8 text-amber-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-800/50 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 border border-transparent hover:border-amber-500/20"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    style={{ width: 'auto', height: 'auto', aspectRatio: '1/1' }}
                    className="rounded-full object-cover"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 rounded-full bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
                <div className="flex justify-center space-x-3 mt-4">
                  <a href={member.linkedin} className="text-gray-400 hover:text-amber-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.github} className="text-gray-400 hover:text-amber-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
});

TeamSection.displayName = 'TeamSection';

export default TeamSection;