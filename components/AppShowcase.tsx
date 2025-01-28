"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function AppShowcase() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12"
          style={{ y }}
        >
          <PhoneDisplay src="/iphone-mockup-left.png" alt="FitFriends App - Swiping Profiles" initialRotation={15} />
          <PhoneDisplay src="/iphone-mockup-right.png" alt="FitFriends App - Chat Screen" initialRotation={-15} />
        </motion.div>
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-16 font-poppins text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Fitness Tribe Awaits. <br className="hidden sm:block" />
          <span className="text-harvard-red">No Small Talk. Just Squats.</span>
        </motion.h2>
      </div>
    </section>
  )
}

function PhoneDisplay({ src, alt, initialRotation }: { src: string; alt: string; initialRotation: number }) {
  return (
    <motion.div
      className="relative"
      initial={{ rotateY: initialRotation }}
      animate={{ rotateY: -initialRotation }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatType: "reverse" }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Image src={src || "/placeholder.svg"} alt={alt} width={300} height={600} className="rounded-3xl shadow-2xl" />
      </motion.div>
    </motion.div>
  )
}

