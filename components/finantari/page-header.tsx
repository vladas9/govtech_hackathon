import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  backLink: string
  iconText?: string
  buttonLabel?: string
  buttonLink?: string
  onButtonClick?: () => void
}

export function PageHeader({
  title,
  backLink,
  iconText = "$",
  buttonLabel,
  buttonLink,
  onButtonClick
}: PageHeaderProps) {
  return (
    <div className="bg-white rounded-lg border border-[#e0e4ea] p-4 mb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href={backLink} className="mr-4">
            <ArrowLeft className="text-[#1373e6]" />
          </Link>
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#1373e6] to-[#00d4ff] flex items-center justify-center mr-3">
            <span className="text-white text-xl font-bold">{iconText}</span>
          </div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <Info size={16} className="ml-2 text-[#aeb5c0]" />
        </div>
        {buttonLabel && (
          buttonLink ? (
            <Button 
              className="bg-white text-[#1373e6] border border-[#1373e6] hover:bg-[#f5f7fa]" 
              asChild
            >
              <Link href={buttonLink}>{buttonLabel}</Link>
            </Button>
          ) : (
            <Button 
              className="bg-white text-[#1373e6] border border-[#1373e6] hover:bg-[#f5f7fa]"
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