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

          {/* No data message */}
          <div className="w-full bg-[#f6fafe] rounded-md p-4 text-center">
            <p className="text-[#2f2f2f] text-base">Nu există date</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
