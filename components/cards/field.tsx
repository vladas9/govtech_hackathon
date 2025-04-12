import type { ReactNode } from "react"

interface FieldProps {
  label: string
  children: ReactNode
}

export function Field({ label, children }: FieldProps) {
  return (
    <div>
      <div className="text-xs text-[#707070] mb-1">{label}</div>
      <div className="font-medium">{children}</div>
    </div>
  )
}
