import WaitlistForm from '@/components/WaitlistForm'
import { Badge } from "@/components/ui/badge"
import { Chrome, Twitter } from 'lucide-react'
import { CustomToaster } from "@/components/ui/custom-toaster"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-container absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="star absolute w-0.5 h-0.5 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 3,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-8 bg-white/10 text-white hover:bg-white/20 text-xs px-2 py-1">
          Coming Soon
        </Badge>

        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AI-Powered Web Summarizer
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Instantly summarize any webpage with our Chrome extension. Save time and boost productivity with AI-generated summaries in your browser's side panel.
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Get concise insights, extract key points, and navigate content effortlessly - all with a single click.
        </motion.p>

        <motion.div 
          className="flex items-center justify-center space-x-4 mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Chrome className="w-8 h-8 text-blue-400" />
          <p className="text-lg font-semibold">Chrome Extension</p>
        </motion.div>

        <motion.p 
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Be the first to know when we launch! Join our waitlist for early access and exclusive updates.
        </motion.p>

        <WaitlistForm />

        <motion.div 
          className="mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          For updates and sneak peeks, follow us on{" "}
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors duration-200">
            <Twitter className="h-4 w-4 mr-1" />
            Twitter
          </a>
        </motion.div>

        <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
          <div className="mb-2">© 2024 AI Summarizer. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </footer>
      </motion.div>
      <CustomToaster />
    </div>
  )
}

