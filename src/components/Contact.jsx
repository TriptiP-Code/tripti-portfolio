import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact(){
  const [status, setStatus] = useState(null)

  // Replace the action URL below with your Formspree form endpoint (create a form at formspree.io)
  const formAction = "https://formspree.io/f/your-form-id"

  return (
    <motion.section id="contact" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-slate-900 rounded-md">
          <h3 className="text-lg font-medium">Get in touch</h3>
          <p className="text-slate-400 mt-2">Email: <a href="mailto:triptip033@gmail.com" className="text-accent1">triptip033@gmail.com</a></p>
          <div className="mt-4 flex gap-3">
            <a href="https://linkedin.com/in/tripti-pandey-81110822a" target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-800 rounded-md inline-flex items-center gap-2"><FaLinkedin/> LinkedIn</a>
            <a href="https://github.com/TriptiP-Code" target="_blank" rel="noreferrer" className="px-3 py-2 bg-slate-800 rounded-md inline-flex items-center gap-2"><FaGithub/> GitHub</a>
          </div>
        </div>

        <div className="p-6 bg-slate-900 rounded-md">
          <form action={formAction} method="POST" onSubmit={(e)=>{ setTimeout(()=>setStatus('SENT'),500) }}>
            <label className="block text-slate-300">Name</label>
            <input name="name" required className="w-full mt-2 p-2 bg-slate-800 rounded-md text-slate-200"/>

            <label className="block text-slate-300 mt-3">Email</label>
            <input name="email" type="email" required className="w-full mt-2 p-2 bg-slate-800 rounded-md text-slate-200"/>

            <label className="block text-slate-300 mt-3">Message</label>
            <textarea name="message" rows="4" required className="w-full mt-2 p-2 bg-slate-800 rounded-md text-slate-200"></textarea>

            <button type="submit" className="mt-3 px-4 py-2 bg-gradient-to-r from-accent1 to-accent2 text-black rounded-md">Send</button>
            {status === 'SENT' && <div className="text-sm text-green-400 mt-2">Thanks — message sent!</div>}
          </form>
          <div className="text-xs text-slate-500 mt-3">Note: Replace the form action with your Formspree endpoint (formspree.io) to receive emails.</div>
        </div>
      </div>
    </motion.section>
  )
}
