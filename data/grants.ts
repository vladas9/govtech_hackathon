export interface Grant {
  id: string;
  title: string;
  subtitle?: string;
  financing: string;
  contribution: string;
  implementationPeriod: string;
  imageSrc: string;
  imageAlt: string;
  isDisabled?: boolean;
  warningMessage?: string;
}

export const grants: Grant[] = [
  {
    id: "start-pentru-tineri",
    title: "Start Pentru Tineri",
    subtitle: "Componenta II - Suport Financiar Nerambursabil (Grant)",
    financing: "<200 000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc: "/placeholder.svg?height=200&width=350",
    imageAlt: "Start Pentru Tineri"
  },
  {
    id: "competitivitate",
    title: "Competitivitate și Lanțuri Valorice",
    financing: "<600.000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc: "/placeholder.svg?height=200&width=350",
    imageAlt: "Competitivitate și Lanțuri Valorice"
  },
  {
    id: "inovatii-digitale",
    title: "Inovații Digitale și Startup-uri Tehnologice",
    financing: "<200 000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc: "/placeholder.svg?height=200&width=350",
    imageAlt: "Inovații Digitale și Startup-uri Tehnologice",
    isDisabled: true,
    warningMessage: "Pentru a accesa programele de suport, este necesară parcurgerea unui curs de instruire. Vă puteți înregistra aici → <a href='#' class='text-[#1373e6] hover:underline'>Curs de Instruire</a>"
  }
]; 