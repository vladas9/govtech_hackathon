import { GraturiCard } from "../cards/graturi-card"

interface DashboardProps {
  username?: string
  greeting?: string
  children?: React.ReactNode
}

export function Dashboard({ 
  username = "Vasile", 
  greeting = "Bună dimineața", 
  children 
}: DashboardProps) {
  return (
    <main className="flex-1 px-6">
      <h1 className="text-2xl font-bold mb-6">
        {greeting}, {username}! 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GraturiCard />
        {children}
      </div>
    </main>
  )
}
