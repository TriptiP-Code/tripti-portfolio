import React from 'react'
import { motion } from 'framer-motion'
import { SiTailwindcss } from 'react-icons/si'

export default function Hero(){
  return (
    <section className="container grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.05}} className="text-4xl font-bold leading-tight">
          Hi — I’m Tripti Pandey
        </motion.h1>
        <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.15}} className="mt-4 text-slate-300 text-lg">
          DevOps Engineer building scalable, automated cloud infrastructures. I focus on CI/CD, containerization, and reliable deployments.
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="mt-6 flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-black font-medium">See my work</a>
          <a href="#contact" className="px-4 py-2 border border-slate-700 rounded-md text-slate-200">Contact</a>
        </motion.div>

        <div className="mt-6 flex gap-3 text-slate-400">
          <div className="flex items-center gap-2">
            <SiTailwindcss size={20} className="text-accent3" />
            <span>React • Tailwind • Framer</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-72 bg-gradient-to-tr from-[#07122e] to-[#0b0f1a] rounded-2xl glow p-6 flex items-center justify-center">
          <img src="/photuuuuuuuuu.jpg" alt="Tripti" className="w-40 h-40 rounded-full object-cover ring-4 ring-slate-800"/>
        </div>
      </div>
    </section>
  )
}
