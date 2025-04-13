import { Input } from "@/components/ui/input"

interface Step1Props {
  formData: {
    grantValue: string
    projectValue: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function Step1GeneralData({ formData, handleInputChange }: Step1Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">1. Date Generale</h2>

      <div className="space-y-8 max-w-2xl">
        <div>
          <label htmlFor="grantValue" className="block text-lg font-medium mb-2">
            Care este valoarea grantului solicitat (MDL)
          </label>
          <div className="relative">
            <Input
              id="grantValue"
              name="grantValue"
              type="text"
              value={formData.grantValue}
              onChange={handleInputChange}
              className="pr-16 h-14 text-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 bg-gray-100 border-l rounded-r-md">
              MDL
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="projectValue" className="block text-lg font-medium mb-2">
            Care este valoarea proiectului investional
          </label>
          <p className="text-[#6b7280] mb-4">
            Reprezintă costul total al proiectului, adică suma tuturor cheltuielilor necesare pentru
            implementarea acestuia.
          </p>
          <div className="relative">
            <Input
              id="projectValue"
              name="projectValue"
              type="text"
              value={formData.projectValue}
              onChange={handleInputChange}
              className="pr-16 h-14 text-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 bg-gray-100 border-l rounded-r-md">
              MDL
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 