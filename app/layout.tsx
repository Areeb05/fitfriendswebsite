import "./globals.css"
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "FitFriends - Find Your Fitness Partner",
  description: "Connect with like-minded fitness enthusiasts and achieve your goals together.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

