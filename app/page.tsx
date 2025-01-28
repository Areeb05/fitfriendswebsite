import Hero from "@/components/Hero"
import AppShowcase from "@/components/AppShowcase"
import ValuePropGrid from "@/components/ValuePropGrid"
import SocialProof from "@/components/SocialProof"
import FinalCTA from "@/components/FinalCTA"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <AppShowcase />
      <ValuePropGrid />
      <SocialProof />
      <FinalCTA />
    </main>
  )
}

