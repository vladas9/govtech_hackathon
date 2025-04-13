import { Container } from "@/components/layout/container"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Navigation } from "@/components/layout/navigation"
import { Sidebar } from "@/components/sidebar/sidebar"
import { PageHeader } from "@/components/finantari/page-header"
import { GrantCard } from "@/components/finantari/grant-card"
import { grants } from "@/data/grants"

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
              buttonLabel="Vezi Aplicările Tale"
            />

            {/* Grants section */}
            <div className="mb-8">
              {/* Grants list */}
              <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 mb-6">
                <h3 className="text-[20px] text-[#6b7280] font-medium mb-4">Granturi la care poți aplica</h3>
                <div className="border-t border-[#e0e4ea]"></div>

                {grants.map((grant) => (
                  <GrantCard
                    key={grant.id}
                    title={grant.title}
                    subtitle={grant.subtitle}
                    financing={grant.financing}
                    contribution={grant.contribution}
                    implementationPeriod={grant.implementationPeriod}
                    imageSrc={grant.imageSrc}
                    imageAlt={grant.imageAlt}
                    isDisabled={grant.isDisabled}
                    warningMessage={grant.warningMessage}
                  />
                ))}
              </div>
            </div>
          </main>
        </Container>
      </div>

      <Footer />
    </div>
  )
}
