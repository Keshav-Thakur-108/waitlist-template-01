"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { db } from '../utils/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({ email: "" })
  const { toast } = useToast()
  const [isClient, setIsClient] = useState(false); // Client-side state

  useEffect(() => {
    setIsClient(true); // Mark as client after the initial render
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      // Create a query to check for existing emails
      const q = query(
        collection(db, "waitlist-entries"),
        where("email", "==", data.email) // Check if email already exists
      );

      // Execute the query
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast({
          title: "Already on the list!",
          description: "This email is already on the waitlist.",
        });
      } else {
        // No duplicate found, proceed to add the new document
        const docRef = await addDoc(collection(db, "waitlist-entries"), {
          email: data.email,
          joinedAt: new Date()
        });

        console.log("Document written with ID: ", docRef.id);
        toast({
          title: "You're on the list!",
          description: "We'll notify you when the Chappie launches. 🎉",
        });
      }
      setData({ email: "" });
      setLoading(false); // Reset loading state after successful or failed operation
    } catch (error) {
      console.error("Error adding document: ", error); // Log any error
      setLoading(false); // Reset loading state in case of error
    }
  }

  if (!isClient) {
    return null; // Prevent rendering until after the component is mounted (no hydration errors)
  }

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="w-full max-w-md space-y-4 mx-auto" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <Input
        type="email"
        name="email"
        placeholder="Your Email Address"
        value={data.email}
        onChange={handleChange}
        className="-translate-y-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        required
      />
      <Button 
        type="submit" 
        className="-translate-y-10 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
        disabled={loading}
      >
        {loading ? (
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining...
          </motion.div>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </motion.form>
  )
}
