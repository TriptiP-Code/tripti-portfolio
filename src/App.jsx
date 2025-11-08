import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

export default function App(){
  return (
    <div className="min-h-screen">
      <div className="container">
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <img src="public/photuuuuuuuuu.jpg" alt="Tripti" className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-700"/>
            <div>
              <div className="text-lg font-semibold">Tripti Pandey</div>
              <div className="text-sm text-slate-400">DevOps Engineer</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a href="#projects" className="text-slate-300 hover:text-accent1">Projects</a>
            <a href="#skills" className="text-slate-300 hover:text-accent2">Skills</a>
            <a href="#contact" className="px-3 py-2 rounded-md bg-gradient-to-r from-accent1 to-accent2 text-black font-medium">Contact</a>
            <a href="/resume.pdf" download className="px-3 py-2 border border-slate-700 rounded-md text-slate-200">Resume</a>
          </div>
        </nav>
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="mt-12 py-6 border-t border-slate-800">
        <div className="container text-center text-slate-500">© {new Date().getFullYear()} Tripti Pandey — Built with React, Tailwind & Vercel</div>
      </footer>
    </div>
  )
}
