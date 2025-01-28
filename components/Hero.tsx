"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])

  useEffect(() => {
    const video = document.querySelector("video")
    if (video) {
      video.addEventListener("loadeddata", () => setVideoLoaded(true))
    }
  }, [])

  return (
    <motion.section className="relative h-screen overflow-hidden" style={{ opacity }}>
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ scale }}
      >
        <source src="/fitfriends-background.mp4" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-75" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 font-poppins text-white drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Find Your FitFriends
        </motion.h1>
        <AnimatedSlogan />
        <motion.button
          className="mt-12 px-8 py-4 text-xl font-bold bg-harvard-red text-white border-2 border-white hover:bg-white hover:text-harvard-red transition-colors duration-300 rounded-full shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Start Swiping – It's Free
        </motion.button>
      </div>
    </motion.section>
  )
}

function AnimatedSlogan() {
  const words = ["SWIPE.", "MATCH.", "GET FIT."]
  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-harvard-red font-poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.5, duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

