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
  
  // Use the new mutation-based hook
  const { identity, login, isLoading, isError, error } = useUserIdentity()
  
  // Redirect to dashboard if user is already logged in
  useEffect(() => {
    if (identity) {
      console.log("User already logged in, redirecting to dashboard")
      router.push("/dashboard")
    }
  }, [identity, router])

  // Only redirect when form has been submitted and loading is complete
  useEffect(() => {
    if (!isLoading && identity && hasSubmitted) {
      console.log("Redirecting with data:", identity)
      router.push("/dashboard")
    }
  }, [identity, isLoading, router, hasSubmitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Set submission flag and then trigger the login mutation
    setHasSubmitted(true)
    console.log("Form submitted, logging in...")
    login(phoneNumber)
  }

  // Don't render the form if user is already logged in
  if (identity) {
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

          {/* Error message */}
          {isError && hasSubmitted && (
            <div className="mt-4 text-center text-red-600">
              Error: {error?.message || "Failed to log in. Please try again."}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
