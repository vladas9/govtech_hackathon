'use client'

import { GraturiCard } from "../cards/graturi-card"
import { useUserIdentity } from "@/hooks/useUserIdentity"

interface DashboardProps {
  children?: React.ReactNode
}

export function Dashboard({ 
  children 
}: DashboardProps) {

  const { data: user } = useUserIdentity()

  if (!user) {
    return null
  }

  const greeting = user.name.split(" ")[1]
  return (
    <main className="flex-1 px-6">
      <h1 className="text-[36px] text-[#0058D2] font-normal mb-4">
        Bună dimineața, {greeting}! 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GraturiCard />
        {children}
      </div>
    </main>
  )
}
