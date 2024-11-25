"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setLoading(false)
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when the AI Summarizer launches. 🎉",
    })
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md space-y-4">
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
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  )
}

