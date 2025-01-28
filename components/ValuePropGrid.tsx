"use client"

import { motion } from "framer-motion"
import { Shield, Dumbbell, MapPin } from "lucide-react"

const valueProps = [
  {
    title: "Verified & Vetted",
    icon: Shield,
    description: "Every member is carefully screened to ensure a safe and genuine community.",
  },
  {
    title: "Match by Fitness Level",
    icon: Dumbbell,
    description: "Find partners who match your intensity and goals for optimal workouts.",
  },
  {
    title: "Safety First",
    icon: MapPin,
    description: "Built-in features to keep your location private and interactions secure.",
  },
]

export default function ValuePropGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-harvard-red">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 font-poppins text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why FitFriends?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-xl"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <prop.icon className="w-16 h-16 text-harvard-red mb-6" />
              <h3 className="text-2xl font-bold mb-4 font-poppins text-white">{prop.title}</h3>
              <p className="text-gray-300">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

