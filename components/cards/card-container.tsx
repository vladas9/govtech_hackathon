import { Heart, MoreVertical } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface CardContainerProps {
  title: string
  icon: string
  children: ReactNode
  statusBadge?: {
    text: string
    color: string
  }
  centered?: boolean
}

export function CardContainer({ title, icon, children, statusBadge, centered = false }: CardContainerProps) {
  return (
    <div className="bg-white rounded-lg border border-[#e0e4ea] p-4 relative">
      {centered ? (
        <>
          <div className="absolute left-4 top-4">
            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#c0c0c0]">
              <Heart size={20} />
            </Button>
          </div>
          <div className="absolute right-4 top-4">
            <Button variant="ghost" size="icon" className="h-6 w-6 text-[#c0c0c0]">
              <MoreVertical size={20} />
            </Button>
          </div>
          <div className="flex flex-col items-center pt-4">
            <div className="w-16 h-16 bg-[#edf4fc] rounded-full flex items-center justify-center mb-3">
              <Image src={icon || "/placeholder.svg"} alt={title} width={32} height={32} />
            </div>
            <h2 className="font-bold text-xl mb-6">{title}</h2>
            <div className="w-full">{children}</div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#edf4fc] rounded-full flex items-center justify-center mr-2">
                <Image src={icon || "/placeholder.svg"} alt={title} width={24} height={24} />
              </div>
              <h2 className="font-bold">{title}</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Heart size={16} className="text-[#707070]" />
              </Button>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreVertical size={16} className="text-[#707070]" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">{children}</div>

          {statusBadge && (
            <div className="absolute top-4 right-4">
              <span className={`inline-block px-2 py-1 bg-[${statusBadge.color}] text-white text-xs rounded`}>
                {statusBadge.text}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  )
}
