'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

const WAVE_COUNT = 5

export default function AnimatedBackground() {
  const waves = useMemo(() => {
    return Array.from({ length: WAVE_COUNT }, (_, i) => ({
      id: i,
      top: `${i * 20}%`, // Position each wave at different vertical levels
      animationDuration: `${15 + i * 5}s`, // Different animation durations
      animationDelay: `${i * 2}s`, // Staggered animation start
      color: `rgba(${50 + i * 40}, ${80 + i * 30}, ${200 - i * 30}, 0.2)`, // Gradient-like colors
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <div className="aurora-container absolute inset-0">
        {waves.map((wave) => (
          <motion.div
            key={wave.id}
            className="wave absolute w-full h-1/3 blur-3xl opacity-70"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: parseFloat(wave.animationDuration),
              delay: parseFloat(wave.animationDelay),
              ease: 'easeInOut',
            }}
            style={{
              top: wave.top,
              background: wave.color,
            }}
          />
        ))}
      </div>
    </div>
  )
}
