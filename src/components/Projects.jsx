import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects(){
  return (
    <motion.section id="projects" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map(p => (
          <motion.div key={p.id} whileHover={{y:-6}} className="p-4 bg-slate-900 rounded-md border border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{p.desc}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <a className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-slate-200" href={p.link} target="_blank" rel="noreferrer">
                <FiGithub /> View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
