import React from 'react'

function About() {
  return (
    <section id="about" className="bg-zinc-900/50 py-15">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-6 text-center tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
        I’m a front-end developer working with modern technologies such as React.js, Next.js, TypeScript, and other technologies.
        </p>
        <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
Although I’m at the beginning of my career, I have worked on and am currently working on several projects where I prioritize attention to detail, clean code, and user-friendly design. I strive to learn something new and grow my skills and experience through real-world development.
        </p>
        
      </div>
    </div>
  </section>
  )
}

export default About