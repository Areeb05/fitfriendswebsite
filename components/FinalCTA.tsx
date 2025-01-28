"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import WaitlistForm from "@/components/WaitlistForm"

export default function FinalCTA() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="py-20 bg-gradient-to-b from-harvard-red to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/fitness-pattern.png')] opacity-10" />
      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-poppins text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Level Up Your Fitness Journey?
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl mb-12 text-gray-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join the waitlist for your area and be the first to know when FitFriends launches near you!
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <WaitlistForm />
          <div className="space-y-8">
            <p className="text-xl text-white font-semibold">Coming Soon: Our app is awaiting app store approval!</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div>
                <div className="relative">
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="rounded-lg shadow-lg opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black bg-opacity-75 text-white text-xs font-bold py-1 px-2 rounded">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="rounded-lg shadow-lg opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black bg-opacity-75 text-white text-xs font-bold py-1 px-2 rounded">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

