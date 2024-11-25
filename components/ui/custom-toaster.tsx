"use client"

import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from 'framer-motion'

export function CustomToaster() {
  const { toasts } = useToast()
  const [visible, setVisible] = useState(false)
  const activeToast = toasts[0]

  useEffect(() => {
    if (activeToast) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [activeToast])

  return (
    <AnimatePresence>
      {visible && activeToast && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg">
            <p className="text-sm font-medium">{activeToast.title} {activeToast.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

