"use client";
import React, { useRef, useState } from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import { Loader2, Send } from "lucide-react";
import MotionWrapper from "./shared/motion-wrapper";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    const formData = new FormData(form.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("title") as string;
    const message = formData.get("message") as string;

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      toast.error("Configuration error. Please try again later.");
      setSending(false);
      return;
    }

    const text = `📩 *New Contact Form Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📌 *Subject:* ${subject}\n💬 *Message:*\n${message}`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.current?.reset();
      } else {
        toast.error("Failed to send message, please try again.");
      }
    } catch {
      toast.error("Failed to send message, please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-20 container px-4 mx-auto">
      <MotionWrapper>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-blue-400/10 text-blue-400 hover:bg-blue-400/20 transition-colors">
            Get In Touch
          </Badge>
          <h2
            className="text-3xl md:text-6xl font-bold pb-6 text-center tracking-tight 
            bg-gradient-to-r from-purple-700 to-purple-400 font-crete 
            dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
          >
            {"Let's Work Together"}
          </h2>
          <p className="text-md md:text-xl text-gray-800 dark:text-white/70">
            {
              "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you."
            }
          </p>
        </div>
      </MotionWrapper>

      <MotionWrapper delay={0.15}>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <form ref={form} onSubmit={sendEmail} className="grid gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={sending}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={sending}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="title"
                    placeholder="Project inquiry"
                    required
                    disabled={sending}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    disabled={sending}
                  />
                </div>
                <Button type="submit" disabled={sending}>
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </MotionWrapper>
      <ToastContainer theme="dark" />
    </section>
  );
}

export default Contact;