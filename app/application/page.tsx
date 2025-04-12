"use client"

import { useState } from "react"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { Sidebar } from "@/components/sidebar/sidebar"
import { PageHeader } from "@/components/finantari/page-header"
import { ProgressBar } from "@/components/application/progress-bar"
import { Step1GeneralData } from "@/components/application/form-steps/step1-general-data"
import { Step2BusinessDescription } from "@/components/application/form-steps/step2-business-description"
import { Step4Confirmations } from "@/components/application/form-steps/step4-confirmations"

export default function ApplicationPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 data
    grantValue: "200 000",
    projectValue: "200 000",

    // Step 2 data
    businessDescription:
      "Viziunea afacerii este să devină lider pe piața locală prin utilizarea tehnologiilor moderne.",
    businessActivities: "Ideea de afaceri se bazează pe producerea de produse ecologice pentru piața locală.",
    projectObjectives: "Scopul este creșterea capacității de producție prin achiziționarea de echipamente moderne.",
    materialResources: "Vor fi achiziționate echipamente pentru producție și utilaje pentru ambalare.",
    humanResources: "Echipa include 10 angajați cu experiență în...",

    // Step 4 data - confirmations
    confirmations: {
      fundingRequest: true,
      fiscalObligations: true,
      informationCorrectness: true,
      odaCollaboration: true,
      programConditions: true,
      enterpriseStatus: false,
      activityCompliance: false,
      doubleFinancing: false,
      dataProcessing: false,
      documentAuthenticity: false,
      previousAid: false,
    },
  })

  const totalSteps = 4

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Submit the form
      alert("Formular trimis cu succes!")
      // Redirect to dashboard or confirmation page
      window.location.href = "/finantari"
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      // Go back to the grants page if on first step
      window.history.back()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      confirmations: {
        ...formData.confirmations,
        [name]: checked,
      },
    })
  }

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(Boolean).length
  }

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return <Step1GeneralData formData={formData} handleInputChange={handleInputChange} />
      case 2:
        return <Step2BusinessDescription formData={formData} handleInputChange={handleInputChange} countWords={countWords} />
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-8">3. Resurse și Implementare</h2>
            <p className="text-gray-500">Această secțiune va fi implementată în viitoarea actualizare.</p>
          </div>
        )
      case 4:
        return <Step4Confirmations formData={formData} handleCheckboxChange={handleCheckboxChange} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafb]">
      <Header />
      <Navigation />

      <div className="flex-1 flex justify-center py-8">
        <Container className="flex">
          <Sidebar />
          <main className="flex-1 px-6">
            <PageHeader 
              title="Aplicare Grant - Start Pentru Tineri" 
              backLink="/finantari" 
              iconText="$"
            />

            {/* Application form */}
            <div className="bg-white rounded-lg border border-[#e0e4ea] p-6">
              {/* Progress indicator */}
              <ProgressBar 
                currentStep={step} 
                totalSteps={totalSteps} 
                onNext={handleNext} 
                onBack={handleBack}
              />

              {/* Step content */}
              {renderCurrentStep()}
            </div>
          </main>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
