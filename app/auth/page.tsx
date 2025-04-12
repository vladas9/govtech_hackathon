"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AuthHeader } from "@/components/auth/auth-header"
import { LogoSection } from "@/components/auth/logo-section"
import { 
  EVOSignCard, 
  ElectronicSignatureCard, 
  MobileSignatureForm, 
  TwoStepAuthCard 
} from "@/components/auth/auth-card"

export default function AuthPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />
      <LogoSection />

      {/* Main content */}
      <div className="flex-1 bg-white">
        <div className="max-w-[1400px] w-full mx-auto px-4 py-8">
          <h1 className="text-3xl text-center text-[#333] font-medium mb-8">Selectați modalitatea de autentificare</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <EVOSignCard />
            <MobileSignatureForm 
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
              onSubmit={handleSubmit}
            />
            <ElectronicSignatureCard />
            <TwoStepAuthCard />
          </div>
        </div>
      </div>
    </div>
  )
}
