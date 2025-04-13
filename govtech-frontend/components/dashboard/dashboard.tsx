'use client'

import { GraturiCard } from "../cards/graturi-card"
import { PaymentsCard } from "../cards/payments-card"
import { useUserIdentity } from "@/hooks/useUserIdentity"

interface DashboardProps {
  children?: React.ReactNode
}

export function Dashboard({ 
  children 
}: DashboardProps) {

  const { identity } = useUserIdentity()

  if (!identity) {
    return null
  }

  const greeting = identity.name.split(" ")[1]
  return (
    <main className="flex-1 px-6">
      <h1 className="text-[36px] text-[#0058D2] font-normal mb-4">
        Bună dimineața, {greeting}! 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GraturiCard />
        {/* <PaymentsCard /> */}
        {children}
      </div>
    </main>
  )
}
