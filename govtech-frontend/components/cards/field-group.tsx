import type { ReactNode } from "react"

interface FieldGroupProps {
  children: ReactNode
}

export function FieldGroup({ children }: FieldGroupProps) {
  return <div className="flex justify-between">{children}</div>
}
