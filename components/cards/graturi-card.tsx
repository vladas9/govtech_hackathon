import { Heart, MoreVertical } from "lucide-react"
import Link from "next/link"

export function GraturiCard() {
  return (
    <Link href="/finantari" className="block">
      <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 relative hover:shadow-md transition-shadow">
        {/* Top icons */}
        <div className="absolute left-6 top-6">
          <Heart size={24} className="text-[#c0c0c0]" />
        </div>
        <div className="absolute right-6 top-6">
          <MoreVertical size={24} className="text-[#c0c0c0]" />
        </div>

        {/* Card content */}
        <div className="flex flex-col items-center pt-8">
          {/* Icon */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#1373e6] to-[#00d4ff] flex items-center justify-center z-10">
              <span className="text-white text-3xl font-bold">$</span>
            </div>
            <div className="absolute top-0 right-0 w-10 h-12 bg-[#e2e6ed] rounded-md -z-0 translate-x-2 -translate-y-1">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-6 h-[2px] bg-[#bcc2ce] mb-1"></div>
                <div className="w-6 h-[2px] bg-[#bcc2ce] mb-1"></div>
                <div className="w-6 h-[2px] bg-[#bcc2ce] mb-1"></div>
                <div className="w-6 h-[2px] bg-[#bcc2ce] mb-1"></div>
                <div className="w-6 h-[2px] bg-[#bcc2ce]"></div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-bold text-2xl mb-8">Finanțări pentru Afaceri</h2>

          {/* No data message */}
          <div className="w-full bg-[#f6fafe] rounded-md p-4 text-center">
            <p className="text-[#2f2f2f] text-base">Nu există date</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
