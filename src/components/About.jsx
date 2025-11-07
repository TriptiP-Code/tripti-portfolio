import React from 'react'
import { motion } from 'framer-motion'
import { FaAws, FaDocker, FaGithub } from 'react-icons/fa'

export default function About(){
  const about = "I’m a DevOps Engineer passionate about building scalable, automated cloud infrastructures. With hands-on experience in AWS, Docker, Kubernetes, Jenkins, and Splunk, I enjoy creating efficient CI/CD workflows and enhancing system reliability."

  return (
    <motion.section id="about" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <div className="md:flex gap-6">
        <div className="md:w-2/3 text-slate-300">{about}</div>
        <div className="md:w-1/3 mt-4 md:mt-0 grid gap-2">
          <div className="p-3 bg-slate-900 rounded-md flex items-center gap-3">
            <FaAws className="text-accent1" />
            <div>
              <div className="text-sm text-slate-300 font-medium">Cloud</div>
              <div className="text-xs text-slate-400">AWS (EC2, S3, IAM)</div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-md flex items-center gap-3">
            <FaDocker className="text-accent3" />
            <div>
              <div className="text-sm text-slate-300 font-medium">Containerization</div>
              <div className="text-xs text-slate-400">Docker • Kubernetes</div>
            </div>
          </div>
          <div className="p-3 bg-slate-900 rounded-md flex items-center gap-3">
            <FaGithub className="text-slate-300" />
            <div>
              <div className="text-sm text-slate-300 font-medium">CI/CD</div>
              <div className="text-xs text-slate-400">Jenkins • GitHub Actions</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
