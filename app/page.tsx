import { Suspense } from 'react'
import WaitlistForm from '@/components/WaitlistForm'
import { Badge } from "@/components/ui/badge"
import { Twitter, X } from 'lucide-react'
import { CustomToaster } from "@/components/ui/custom-toaster"
import AnimatedBackground from '@/components/AnimatedBackground'
import AnimatedContent from '@/components/AnimatedContent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden ">
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedBackground />
      </Suspense>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        

        <Suspense fallback={<div>Loading...</div>}>
          <AnimatedContent>

            <Badge variant="secondary" className="-translate-y-10 mb-6 bg-white/10 text-white hover:bg-white/20 text-sm px-2 py-1">
            Coming Soon!
            </Badge>

            <h1 className="-translate-y-10 text-4xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              AI-Powered Web Summarizer
            </h1>

            <p className="-translate-y-10 text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
              Instantly summarize any webpage with our Chrome extension. Save time and boost productivity with AI-generated summaries in your browser's side panel.
            </p>

            <p className="-translate-y-10 text-lg md:text-xl text-gray-300 mb-4 max-w-xl mx-auto">
              Get concise insights, extract key points, and navigate content effortlessly - all with a single click.
            </p>

            <p className="-translate-y-10 text-lg mb-8 text-gray-300 mx-auto ">
              Be the first to know when we launch! Join our waitlist for early access and exclusive updates.
            </p>

            <WaitlistForm />
            <div className="text-gray-400">
              For updates and sneak peeks, follow us on{" "}
              <a href="https://x.com/Keshav__Thakur_" className="text-blue-400 hover:text-blue-300 inline-flex items-center transition-colors duration-200">
          
                X
              </a>
            </div>
          </AnimatedContent>
        </Suspense>

        <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500">
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
          </div>
        </footer>
      </div>
      <CustomToaster />
    </div>
  )
}

