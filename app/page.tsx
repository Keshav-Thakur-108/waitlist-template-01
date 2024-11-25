import WaitlistForm from '@/components/WaitlistForm'
import { Badge } from "@/components/ui/badge"
import { Chrome, Twitter } from 'lucide-react'
import { CustomToaster } from "@/components/ui/custom-toaster"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <Badge variant="secondary" className="mb-8 bg-white/10 text-white hover:bg-white/20">
          Coming Soon!
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          AI-Powered Web Summarizer
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-2xl">
          Instantly summarize any webpage with our Chrome extension. Save time and boost productivity with AI-generated summaries in your browser's side panel.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Get concise insights, extract key points, and navigate content effortlessly - all with a single click.
        </p>

        <div className="flex items-center justify-center space-x-4 mb-8">
          <Chrome className="w-8 h-8" />
          <p className="text-lg font-semibold">Chrome Extension</p>
        </div>

        <p className="text-lg mb-8">
          Be the first to know when we launch! Join our waitlist for early access and exclusive updates.
        </p>

        <WaitlistForm />

        <div className="mt-8 text-gray-400">
          For updates and sneak peeks, follow us on{" "}
          <a href="https://twitter.com" className="text-white hover:text-gray-300 inline-flex items-center">
            <Twitter className="h-4 w-4 mr-1" />
            Twitter
          </a>
        </div>

        <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-400">
          <div className="mb-2">© 2024 AI Summarizer. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </footer>
      </div>
      <CustomToaster />
      <Toaster />
    </div>
  )
}

