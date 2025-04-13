import { Button } from "@/components/ui/button"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onBack: () => void
}

export function ProgressBar({ currentStep, totalSteps, onNext, onBack }: ProgressBarProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex-1 flex space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full ${index + 1 <= currentStep ? "bg-[#1373e6]" : "bg-[#e0e4ea]"}`}
          />
        ))}
      </div>
      <div className="flex space-x-4 ml-6">
        <Button
          variant="outline"
          className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1373e6] border-none"
          onClick={onBack}
        >
          Înapoi
        </Button>
        <Button className="bg-[#1373e6]" onClick={onNext}>
          {currentStep === totalSteps ? "Trimite" : "Pas următor"}
        </Button>
      </div>
    </div>
  )
} 