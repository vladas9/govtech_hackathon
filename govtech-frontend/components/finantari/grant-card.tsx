import { Clock, CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";
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
  isEligible?: boolean;
  eligibilityScore?: number;
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
  isEligible = undefined,
  eligibilityScore = 0,
  applicationLink = "/application",
  warningMessage,
}: GrantCardProps) {
  const isPartiallyEligible = warningMessage?.includes("Criteriu neîndeplinit");

  // Determine warning message box appearance
  const renderWarningMessage = () => {
    if (!warningMessage) return null;

    
    if (isPartiallyEligible) {
      return (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-start">
          <div className="text-yellow-600 mr-3 mt-1">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-[#6b7280]">
              {warningMessage}
            </p>
            <p className="text-sm text-green-600 mt-1">
              Îndeplinește acest criteriu pentru a deveni eligibil!
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 flex items-start">
        <div className="text-red-600 mr-3 mt-1">
          <XCircle size={20} />
        </div>
        <div>
          <p className="text-[#6b7280] font-medium">
            {warningMessage}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Verifică toți parametrii de eligibilitate pentru a afla mai multe.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-6 border-b border-[#e0e4ea]">
      <div className="flex flex-row gap-6">
        <div className="flex-1 space-y-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-[26px] font-medium">{title}</h3>
            </div>
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

          {/* Display warning messages */}
          {renderWarningMessage()}

          <div className="flex flex-wrap gap-1">
            <Button
              variant={`${isDisabled ? "default" : "outline"}`}
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
        <div className="w-full md:w-[350px] flex-shrink-0 relative h-[250px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={350}
            height={200}
            className="rounded-lg w-full h-[250px] object-cover"
          />
          {
            !isPartiallyEligible && !isEligible && (
              <div className="absolute top-0 right-0 bg-black/50 rounded-lg p-2 w-full h-full flex items-center justify-center">
                <AlertTriangle size={64} className="text-white" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
