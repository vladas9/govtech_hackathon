import { Dashboard } from "@/components/dashboard/dashboard"
import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { Sidebar } from "@/components/sidebar/sidebar"

// Additional card components to be conditionally displayed 
// would go here in a real application

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafb]">
      <Header />
      <Navigation />

      <div className="flex-1 flex justify-center py-8">
        <Container className="flex">
          <Sidebar 
            showProfile={true}
            showActions={true}
            showServices={true}
          />
          <Dashboard 
            username="Vasile" 
            greeting="Bună dimineața"
            // Additional children components could be added here
          />
        </Container>
      </div>

      <Footer />
    </div>
  )
}
