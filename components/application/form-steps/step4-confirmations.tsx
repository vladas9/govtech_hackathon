import { Checkbox } from "@/components/ui/checkbox"

interface Step4Props {
  formData: {
    confirmations: {
      fundingRequest: boolean
      fiscalObligations: boolean
      informationCorrectness: boolean
      odaCollaboration: boolean
      programConditions: boolean
      enterpriseStatus: boolean
      activityCompliance: boolean
      doubleFinancing: boolean
      dataProcessing: boolean
      documentAuthenticity: boolean
      previousAid: boolean
    }
  }
  handleCheckboxChange: (name: string, checked: boolean) => void
}

export function Step4Confirmations({ formData, handleCheckboxChange }: Step4Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">4. Confirmări și Declarații</h2>

      <div className="space-y-4 max-w-4xl">
        <p className="text-gray-500 mb-6">
          Vă rugăm să confirmați următoarele declarații bifând căsuțele corespunzătoare. Aceste confirmări sunt
          necesare pentru procesarea cererii dumneavoastră de finanțare.
        </p>

        <div className="space-y-4">
          <ConfirmationItem 
            id="fundingRequest"
            checked={formData.confirmations.fundingRequest}
            onChange={handleCheckboxChange}
            label="Confirm că solicit finanțare pentru activitățile descrise în această cerere."
          />

          <ConfirmationItem 
            id="fiscalObligations"
            checked={formData.confirmations.fiscalObligations}
            onChange={handleCheckboxChange}
            label="Confirm că nu am datorii la bugetul de stat sau bugetele locale."
          />

          <ConfirmationItem 
            id="informationCorrectness"
            checked={formData.confirmations.informationCorrectness}
            onChange={handleCheckboxChange}
            label="Confirm că toate informațiile furnizate în această cerere sunt corecte și complete."
          />

          <ConfirmationItem 
            id="odaCollaboration"
            checked={formData.confirmations.odaCollaboration}
            onChange={handleCheckboxChange}
            label="Sunt de acord să colaborez cu ODA pentru monitorizarea și evaluarea proiectului."
          />

          <ConfirmationItem 
            id="programConditions"
            checked={formData.confirmations.programConditions}
            onChange={handleCheckboxChange}
            label="Am luat cunoștință și accept condițiile programului de finanțare."
          />

          <ConfirmationItem 
            id="enterpriseStatus"
            checked={formData.confirmations.enterpriseStatus}
            onChange={handleCheckboxChange}
            label="Confirm că întreprinderea mea se încadrează în categoria IMM conform legislației."
          />

          <ConfirmationItem 
            id="activityCompliance"
            checked={formData.confirmations.activityCompliance}
            onChange={handleCheckboxChange}
            label="Activitățile pentru care solicit finanțare sunt conforme cu legislația în vigoare."
          />
        </div>
      </div>
    </div>
  )
}

interface ConfirmationItemProps {
  id: string
  checked: boolean
  onChange: (name: string, checked: boolean) => void
  label: string
}

function ConfirmationItem({ id, checked, onChange, label }: ConfirmationItemProps) {
  return (
    <div className="flex space-x-2">
      <Checkbox 
        id={id} 
        checked={checked} 
        onCheckedChange={(checked) => onChange(id, checked as boolean)} 
      />
      <label
        htmlFor={id}
        className="text-base font-medium leading-none cursor-pointer"
      >
        {label}
      </label>
    </div>
  )
} 