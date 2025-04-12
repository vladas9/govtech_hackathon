import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { Sidebar } from "@/components/sidebar/sidebar"
import { PageHeader } from "@/components/finantari/page-header"
import { GrantCard } from "@/components/finantari/grant-card"

export default function FinantariPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafb]">
      <Header />
      <Navigation />

      <div className="flex-1 flex justify-center py-8">
        <Container className="flex">
          <Sidebar />
          <main className="flex-1 px-6">
            <PageHeader 
              title="Support Antreprenorial" 
              backLink="/"
              buttonLabel="Vezi Aplicările"
            />

            {/* Grants section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold">Granturi la care poți aplica</h2>
                <div className="ml-3 w-6 h-6 rounded-full bg-[#1373e6] flex items-center justify-center text-white text-sm">
                  3
                </div>
              </div>

              {/* Grants list */}
              <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 mb-6">
                <h3 className="text-lg text-[#6b7280] font-medium mb-4">Granturi la care poți aplica</h3>
                <div className="border-t border-[#e0e4ea]"></div>

                <GrantCard
                  title="Start Pentru Tineri"
                  subtitle="Componenta II - Suport Financiar Nerambursabil (Grant)"
                  financing="<200 000 MDL"
                  contribution="30%"
                  implementationPeriod="36 Luni"
                  imageSrc="/placeholder.svg?height=200&width=350"
                  imageAlt="Start Pentru Tineri"
                />

                <GrantCard
                  title="Competitivitate și Lanțuri Valorice"
                  financing="<600.000 MDL"
                  contribution="30%"
                  implementationPeriod="36 Luni"
                  imageSrc="/placeholder.svg?height=200&width=350"
                  imageAlt="Competitivitate și Lanțuri Valorice"
                />

                <GrantCard
                  title="Inovații Digitale și Startup-uri Tehnologice"
                  financing="<200 000 MDL"
                  contribution="30%"
                  implementationPeriod="36 Luni"
                  imageSrc="/placeholder.svg?height=200&width=350"
                  imageAlt="Inovații Digitale și Startup-uri Tehnologice"
                  isDisabled={true}
                  warningMessage="Pentru a accesa programele de suport, este necesară parcurgerea unui curs de instruire. Vă puteți înregistra aici → <a href='#' class='text-[#1373e6] hover:underline'>Curs de Instruire</a>"
                />
              </div>
            </div>
          </main>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
