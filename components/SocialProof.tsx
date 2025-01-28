"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const testimonials = [
  { name: "Jamie", quote: "I found my gym twin in 2 days!", image: "/jamie.jpg" },
  { name: "Alex", quote: "No more solo runs. Best app ever.", image: "/alex.jpg" },
]

export default function SocialProof() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/marble-texture.jpg')] opacity-30" />
      <motion.div className="container mx-auto px-4 relative z-10" style={{ y }}>
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 font-poppins text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Our FitFriends Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4 border-4 border-harvard-red"
                />
                <div>
                  <p className="text-xl font-bold text-white">{testimonial.quote}</p>
                  <p className="text-harvard-red font-poppins text-lg">– {testimonial.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-4 font-poppins">
            <span className="text-harvard-red">4,382</span> Workouts Logged This Week
          </h3>
          <p className="text-xl text-gray-300">Join the community and crush your fitness goals!</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

