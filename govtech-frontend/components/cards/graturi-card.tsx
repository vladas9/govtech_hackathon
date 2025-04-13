import { Heart, MoreVertical } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function GraturiCard() {
  return (
    <Link href="/finantari" className="block">
      <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 relative hover:shadow-md transition-shadow">
        {/* Top icons */}
        <div className="flex justify-between items-center w-full absolute top-0 left-0">
          <div className="absolute left-6 top-6">
            <Heart size={24} className="text-[#c0c0c0]" />
          </div>
          <div className="absolute right-6 top-6">
            <MoreVertical size={24} className="text-[#c0c0c0]" />
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-col items-center">
          {/* Icon */}
          <Image
            src="/svgs/ajutor-antr.svg"
            alt="Graturi"
            width={70}
            height={70}
          />

          {/* Title */}
          <h2 className="font-bold text-lg mb-8">Finanțări pentru Afaceri</h2>

          {/* Replace "Nu există date" with the three cards */}
          <div className="w-full space-y-2">
            {/* First Card - Start pentru Tineri */}
            <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[8px] p-2 px-3 flex justify-between items-center">
              <div className="flex flex-col justify-between items-start">
                <span className="text-[#6b7280] text-[9px] font-normal uppercase">
                  GRANT
                </span>
                <h3 className="font-medium text-sm text-[#2f2f2f]">
                  Start pentru Tineri
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-[#ebf6ee] text-[#298540] px-3 py-0.5 rounded-full text-xs font-medium">
                  Eligibil
                </span>
              </div>
            </div>

            {/* First Card - Start pentru Tineri */}
            <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[8px] p-2 px-3 flex justify-between items-center">
              <div className="flex flex-col justify-between items-start">
                <span className="text-[#6b7280] text-[9px] font-normal uppercase">
                  GRANT
                </span>
                <h3 className="font-medium text-sm text-[#2f2f2f]">
                Inovații digitale și start-upuri tehnologice
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-[#ebf6ee] text-[#298540] px-3 py-0.5 rounded-full text-xs font-medium">
                  Eligibil
                </span>
              </div>
            </div>

            {/* First Card - Start pentru Tineri */}
            <div className="bg-[#F5F5F5] border border-[#D9D9D9] rounded-[8px] p-2 px-3 flex justify-between items-center">
              <div className="flex flex-col justify-between items-start">
                <span className="text-[#6b7280] text-[9px] font-normal uppercase">
                  GRANT
                </span>
                <h3 className="font-medium text-sm text-[#2f2f2f]">
                Programul Guvernului pentru susținerea antreprenorilor „373"
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-[#ebf6ee] text-[#298540] px-3 py-0.5 rounded-full text-xs font-medium">
                  Eligibil
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
