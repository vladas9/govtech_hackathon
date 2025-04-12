import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e4ea] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Portal Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <div>
              <div className="text-[#1373e6] font-bold text-sm">PORTALUL</div>
              <div className="text-[#1373e6] font-bold text-sm">GUVERNAMENTAL</div>
              <div className="text-xs text-[#595959]">AL CETĂȚEANULUI</div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-sm mb-2">
              <span className="text-[#595959]">Despre Portal</span>
              <span className="mx-2 text-[#e0e4ea]">|</span>
              <span className="text-[#595959]">Întrebări Frecvente</span>
            </div>

            <div className="text-right">
              <div className="text-[#595959] font-medium">Serviciul Suport Client</div>
              <div className="text-[#1373e6] font-bold text-xl">022 820 000</div>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Image src="/placeholder.svg?height=24&width=24" alt="Government Logo" width={24} height={24} />
              <span className="text-xs text-[#595959]">GUVERNUL REPUBLICII MOLDOVA</span>
              <div className="flex gap-2 ml-4">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Image src="/placeholder.svg?height=16&width=16" alt="Facebook" width={16} height={16} />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Image src="/placeholder.svg?height=16&width=16" alt="LinkedIn" width={16} height={16} />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <Image src="/placeholder.svg?height=16&width=16" alt="YouTube" width={16} height={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#707070] mt-4">
          © Copyright. Agenția De Guvernare Electronică 2020
        </div>
      </Container>
    </footer>
  )
}
