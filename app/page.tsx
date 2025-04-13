"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthHeader } from "@/components/auth/auth-header"
import { LogoSection } from "@/components/auth/logo-section"
import { 
  EVOSignCard, 
  ElectronicSignatureCard, 
  MobileSignatureForm, 
  TwoStepAuthCard 
} from "@/components/auth/auth-card"
import { useUserIdentity } from "@/hooks/useUserIdentity"

export default function AuthPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [hasSubmitted, setHasSubmitted] = useState(false)
  
  // Check for existing user data without providing a phone number
  // This only checks localStorage
  const { data: existingUser } = useUserIdentity()
  
  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (existingUser) {
      console.log("User already logged in, redirecting to dashboard")
      router.push("/dashboard")
    }
  }, [existingUser, router])
  
  // Use the hook with enabled set to false so it doesn't run automatically
  // This will be used when submitting the form with a phone number
  const { data, isLoading, refetch } = useUserIdentity(phoneNumber, {
    enabled: false, // Don't run automatically
  })

  // Only redirect when data is available AND the form has been submitted
  useEffect(() => {
    if (!isLoading && data && hasSubmitted) {
      console.log("Redirecting with data:", data)
      router.push("/dashboard")
    }
  }, [data, isLoading, router, hasSubmitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Set submission flag and then manually trigger the query
    setHasSubmitted(true)
    console.log("Form submitted, refetching data...")
    refetch()
  }

  // Don't render the form if user is already logged in
  if (existingUser) {
    return <div className="min-h-screen flex items-center justify-center">Redirecting to dashboard...</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader />
      <LogoSection />

      {/* Main content */}
      <div className="flex-1 bg-white">
        <div className="max-w-[1400px] w-full mx-auto px-4 py-8">
          <h1 className="text-3xl text-center text-[#333] font-normal mb-8">Selectați modalitatea de autentificare</h1>

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
          
          {/* Loading indicator */}
          {isLoading && hasSubmitted && (
            <div className="mt-4 text-center">
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
