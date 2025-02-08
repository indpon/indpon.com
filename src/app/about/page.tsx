"use client"

import { useEffect } from "react"
import Header from "../components/header"
import { motion } from "framer-motion"

export default function About() {
  useEffect(() => {
    const pattern = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#1a202c"/>
        <circle cx="0" cy="0" r="1" fill="#4299e1" fill-opacity="0.1"/>
        <circle cx="100" cy="0" r="1" fill="#4299e1" fill-opacity="0.1"/>
        <circle cx="0" cy="100" r="1" fill="#4299e1" fill-opacity="0.1"/>
        <circle cx="100" cy="100" r="1" fill="#4299e1" fill-opacity="0.1"/>
      </svg>
    `
    const encodedPattern = btoa(pattern)
    document.body.style.backgroundImage = `url('data:image/svg+xml;base64,${encodedPattern}')`
  }, [])

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-12"
      >
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Learn more about who I am and what I do.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">Who I Am</h2>
            <p className="text-gray-300 mb-4">
              Im a developer that has been coding since i was about 10.
            </p>
            <p className="text-gray-300">
              When im not coding, im usually just playing games, usually Roblox, GTA V, and any other games idk. When i am coding i primarily utilize the Next.js library.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-3xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold mb-4 text-blue-400">What I Do</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Develop websites using Next.js</li>
              <li>Create Discord bots with fun features</li>
              <li>Design interesting UI for the websites</li>
              <li>Collaborate with streamers to build custom websites</li>
            </ul>
          </motion.div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          
        </motion.section>
      </motion.main>
    </div>
  )
}

