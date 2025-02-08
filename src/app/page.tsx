"use client"

import { useEffect } from "react"
import Header from "./components/header"
import ProjectCard from "./components/projectcard"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Jallab",
    description: "While hardly finished, it is still a cool project that I might come back to someday, it was a website where you could make music and then other people could add onto you music with instruments or more vocals and stuff like that.",
    link: "https://newjallab.vercel.app"
  },
  {
    title: "Bmbradley's website",
    description: "This is a website that i made for a twitch streamer, I am pretty proud of it, and it looks pretty nice.",
    link: "https://bmbradley.vercel.app"
  },
  {
    title: "Gartic Bot",
    description: "A feature packed discord bot that I made in early 2024, it is now open source. I am now working on a new discord bot for another discord server.",
    link: "https://github.com/indpon/Gartic-Bot/blob/main/src/bot.js"
  },
  {
    title: "Simple fractions",
    description: "Something random that i made to show off to my math class and other people in my school, it doesnt look good but it can simplify your fractions if they can be simplified.",
    link: "https://simplefractions.vercel.app"
  },
  {
    title: "Twitch Bot Tutorial",
    description: "Just a simple tutorial on how to make a basic twitch bot that you can expand for your own channel with your own commands. The video shows you how to get it setup, and includes the source code for the bot if you just want to copy it from there.",
    link: "https://www.youtube.com/watch?v=T6snzU0bow4"
  },
  {
    title: "Stream avatars for my stream",
    description: "Have you ever wanted to have your twitch avatar on my stream? Well now you can with this thing i made which i use in my stream which grabs your avatar if you are in the stream, and puts it on the stream, it is inspired by orbemorder's stream avatar which you can see if you go onto his twitch streams. Please note that it will take you to a white page unless im live and there is people watching me.",
    link: "https://streamavatars.vercel.app"
  
  }


]

export default function Home() {
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
            Welcome to <span className="text-blue-400">indpon.com</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here is my portfolio of my projects, that i have made over the years.
          </p>
        </section>

        <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
          ))}
        </section>
      </motion.main>
    </div>
  )
}

