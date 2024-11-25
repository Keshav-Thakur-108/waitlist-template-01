"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Twitter } from 'lucide-react'

export default function WaitlistPage() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Add your form submission logic here
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <Badge variant="secondary" className="mb-8 bg-white/10 text-white hover:bg-white/20">
          Exciting News!
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Boost Your Build in Public Journey
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">
          Share your story, track your growth, and get featured on a platform built for creators building in public.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Get visibility, a valuable backlink, and connect with a growing community—all while sharing your journey.
        </p>

        <p className="text-lg mb-8">
          Join the waitlist for early access and be a part of something great!
        </p>

        <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            required
          />
          <Input
            type="email"
            placeholder="Your Email Address"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-white/90"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist!"}
          </Button>
        </form>

        <div className="mt-8 text-gray-400">
          For any questions or feedback, reach out at{" "}
          <a href="https://twitter.com" className="text-white hover:text-gray-300 inline-flex items-center">
            <Twitter className="h-4 w-4 mr-1" />
            Twitter
          </a>
        </div>

        <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400">
          <div className="mb-2">© 2024 BuildGreat. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

