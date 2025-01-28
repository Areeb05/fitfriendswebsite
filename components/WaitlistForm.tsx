"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [zipcode, setZipcode] = useState("")
  const [gender, setGender] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log({ name, email, zipcode, gender })
    toast({
      title: "Joined Waitlist",
      description: "You've successfully joined the waitlist for your area!",
    })
    // Reset form
    setName("")
    setEmail("")
    setZipcode("")
    setGender("")
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 bg-black bg-opacity-80 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-harvard-red"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 font-poppins text-white">Join Your Area's Waitlist</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">
            Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white bg-opacity-10 text-white placeholder-gray-400 border-gray-600 focus:border-harvard-red"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white bg-opacity-10 text-white placeholder-gray-400 border-gray-600 focus:border-harvard-red"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <Label htmlFor="zipcode" className="text-white">
            Zipcode
          </Label>
          <Input
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
            className="bg-white bg-opacity-10 text-white placeholder-gray-400 border-gray-600 focus:border-harvard-red"
            placeholder="Enter your zipcode"
          />
        </div>
        <div>
          <Label className="text-white">Gender</Label>
          <RadioGroup value={gender} onValueChange={setGender} required className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="boy" id="boy" className="border-harvard-red text-harvard-red" />
              <Label htmlFor="boy" className="text-white">
                Boy
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="girl" id="girl" className="border-harvard-red text-harvard-red" />
              <Label htmlFor="girl" className="text-white">
                Girl
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <Button type="submit" className="w-full bg-harvard-red hover:bg-red-700 text-white">
        Join Waitlist
      </Button>
    </motion.form>
  )
}

