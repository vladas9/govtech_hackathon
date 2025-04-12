import { Textarea } from "@/components/ui/textarea"

interface Step2Props {
  formData: {
    businessDescription: string
    businessActivities: string
    projectObjectives: string
    materialResources: string
    humanResources: string
  }
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  countWords: (text: string) => number
}

export function Step2BusinessDescription({ formData, handleInputChange, countWords }: Step2Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">2. Descrierea Întreprinderii</h2>

      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="businessDescription" className="block text-lg font-medium mb-2">
              Scurtă descriere a întreprinderii
            </label>
            <Textarea
              id="businessDescription"
              name="businessDescription"
              value={formData.businessDescription}
              onChange={handleInputChange}
              className="min-h-[120px] text-base"
            />
            <div className="text-sm text-gray-500 mt-1">
              {countWords(formData.businessDescription)} / 300-1000 Cuvinte
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#f9fafb] p-4 rounded-md h-full">
              <p className="text-[#6b7280] text-sm">
                Includeți viziunea, misiunea, strategia și etape importante de dezvoltare a afacerii.
                Factori relevanți pentru afacerea dvs. (ex: localizare, auto-evaluarea tehnologiei pe care o
                veți utiliza, experiența anterioară etc.). Descrieți situația curentă a afacerii.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="businessActivities" className="block text-lg font-medium mb-2">
              Scurtă descriere a afacerii și a activității desfășurate
            </label>
            <Textarea
              id="businessActivities"
              name="businessActivities"
              value={formData.businessActivities}
              onChange={handleInputChange}
              className="min-h-[120px] text-base"
            />
            <div className="text-sm text-gray-500 mt-1">
              {countWords(formData.businessActivities)} / 300-1000 Cuvinte
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#f9fafb] p-4 rounded-md h-full">
              <p className="text-[#6b7280] text-sm">
                Includeți viziunea, misiunea, strategia și etape importante de dezvoltare a afacerii.
                Factori relevanți pentru afacerea dvs. (ex: localizare, auto-evaluarea tehnologiei pe care o
                veți utiliza, experiența anterioară etc.). Descrieți situația curentă a afacerii.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="projectObjectives" className="block text-lg font-medium mb-2">
              Obiectivele proiectului investițional
            </label>
            <Textarea
              id="projectObjectives"
              name="projectObjectives"
              value={formData.projectObjectives}
              onChange={handleInputChange}
              className="min-h-[120px] text-base"
            />
            <div className="text-sm text-gray-500 mt-1">
              {countWords(formData.projectObjectives)} / 300-1000 Cuvinte
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#f9fafb] p-4 rounded-md h-full">
              <p className="text-[#6b7280] text-sm">
                Descrieți obiectivele clare și specifice pe care doriți să le atingeți prin implementarea 
                acestui proiect investițional. Includeți rezultatele concrete așteptate și cum acestea 
                vor contribui la dezvoltarea afacerii dumneavoastră.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 