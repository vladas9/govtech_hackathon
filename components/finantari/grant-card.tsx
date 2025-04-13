import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface GrantCardProps {
  title: string;
  subtitle?: string;
  financing: string;
  contribution: string;
  implementationPeriod: string;
  imageSrc: string;
  imageAlt: string;
  isDisabled?: boolean;
  applicationLink?: string;
  warningMessage?: string;
}

export function GrantCard({
  title,
  subtitle,
  financing,
  contribution,
  implementationPeriod,
  imageSrc,
  imageAlt,
  isDisabled = false,
  applicationLink = "/application",
  warningMessage,
}: GrantCardProps) {
  return (
    <div className="py-6 border-b border-[#e0e4ea]">
      <div className="flex flex-row gap-6">
        <div className="flex-1 space-y-8">
          <div className="flex flex-col">
            <h3 className="text-[26px] font-medium">{title}</h3>
            {subtitle && (
              <p className="text-[#6b7280] text-[18px]">{subtitle}</p>
            )}
          </div>

          <div className="flex flex-row items-center justify-between w-[90%] gap-4">
            <div>
              <p className="text-[#6b7280] mb-1">Finanțare</p>
              <p className="text-2xl font-medium">{financing}</p>
            </div>
            <div>
              <p className="text-[#6b7280] mb-1">Contribuția</p>
              <p className="text-2xl font-medium">{contribution}</p>
            </div>
            <div>
              <p className="text-[#6b7280] mb-1">Perioada de Implementare</p>
              <p className="text-2xl font-medium">{implementationPeriod}</p>
            </div>
          </div>

          {warningMessage && (
            <div className="bg-[#fff9e6] border-l-4 border-[#f59e0b] p-4 mb-4 flex items-start">
              <div className="text-[#f59e0b] mr-3 mt-1">⚠️</div>
              <div>
                <p
                  className="text-[#6b7280]"
                  dangerouslySetInnerHTML={{ __html: warningMessage }}
                />
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1">
            <Button
              variant="outline"
              className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-[#1373e6] border-none"
            >
              Află Mai Multe
            </Button>

            {isDisabled ? (
              <Button className="bg-[#e5e7eb] text-[#9ca3af]" disabled>
                Aplică Acum
              </Button>
            ) : (
              <Button className="bg-[#1373e6]" asChild>
                <Link href={applicationLink}>Aplică Acum</Link>
              </Button>
            )}

            {!isDisabled && (
              <div className="flex items-center text-[#6b7280] ml-2">
                <Clock size={16} className="mr-1" />
                <span>Formular 30 min.</span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-[350px] h-auto flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={200}
            className="rounded-lg w-full h-[250px]"
          />
        </div>
      </div>
    </div>
  );
}
