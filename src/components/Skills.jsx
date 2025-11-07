import React from 'react'
import { motion } from 'framer-motion'

const skills = ['AWS','Docker','Kubernetes','Jenkins','GitHub Actions','Splunk','Linux','Bash','Python']

export default function Skills(){
  return (
    <motion.section id="skills" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map(s => (
          <div key={s} className="p-4 bg-slate-900 rounded-md hover:scale-105 transition transform">
            <div className="text-sm font-medium text-slate-200">{s}</div>
            <div className="text-xs text-slate-400 mt-1">Experienced</div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
