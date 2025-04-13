"use client"

import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface PageHeaderProps {
  title: string
  iconText?: string
  buttonLabel?: string
  buttonLink?: string
  onButtonClick?: () => void
}

export function PageHeader({
  title,
  iconText = "$",
  buttonLabel,
  buttonLink,
  onButtonClick
}: PageHeaderProps) {

  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <div className="bg-white rounded-lg border border-[#e0e4ea] p-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={handleBackClick} className="mr-4">
            <ArrowLeft className="text-[#aeb5c0]" />
          </button>
          <h1 className="text-2xl font-medium">{title}</h1>
          <Info size={16} className="ml-2 text-[#aeb5c0]" />
        </div>
        {buttonLabel && (
          buttonLink ? (
            <Button 
              asChild
            >
              <Link href={buttonLink}>{buttonLabel}</Link>
            </Button>
          ) : (
            <Button 
              onClick={onButtonClick}
            >
              {buttonLabel}
            </Button>
          )
        )}
      </div>
    </div>
  )
} 