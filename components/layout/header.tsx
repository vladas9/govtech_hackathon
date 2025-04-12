import { Bell, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "./container"

interface HeaderButtonProps {
  icon?: React.ReactNode
  text: string
  hasDropdown?: boolean
  onClick?: () => void
}

function HeaderButton({ icon, text, hasDropdown = false, onClick }: HeaderButtonProps) {
  return (
    <Button 
      variant="link" 
      className="text-white text-sm flex items-center gap-1 p-0"
      onClick={onClick}
    >
      {icon}
      <span>{text}</span>
      {hasDropdown && <ChevronDown size={14} />}
    </Button>
  )
}

export function Header() {
  return (
    <header className="bg-[#1373e6] text-white py-2">
      <Container className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Moldova Coat of Arms"
            width={24}
            height={24}
            className="mr-2"
          />
          <span className="text-sm font-medium">GUVERNUL REPUBLICII MOLDOVA</span>
        </div>
        <div className="flex items-center gap-4">
          <HeaderButton 
            icon={<Bell size={16} />} 
            text="Mesaje" 
          />
          <HeaderButton 
            icon={<Bell size={16} />} 
            text="Reminder" 
            hasDropdown={true} 
          />
          <HeaderButton 
            text="Vasile Schidu" 
            hasDropdown={true} 
          />
        </div>
      </Container>
    </header>
  )
}
