import React from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'

function Contact() {
  return (
    <section id="contact" className="py-20 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
            Get In Touch
          </Badge>
          <h2 className=" text-3xl md:text-6xl font-bold pb-6 text-center tracking-tight bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">Let's Work Together</h2>
          <p className="text-white/70">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <form className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 text-center text-white/70">
            <p>You can also reach me through the social media links in the footer.</p>
          </div>
        </div>
      </section>
  )
}

export default Contact