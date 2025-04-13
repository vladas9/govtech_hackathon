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
  isEligible?: boolean;
  eligibilityScore?: number;
  warningMessage?: string;
}

export const grants: Grant[] = [
  {
    id: "1",
    title: "Start pentru Tineri",
    subtitle: "Componenta II - Suport Financiar Nerambursabil (Grant)",
    financing: "<200 000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc: "https://oda.md/files/2022/12/29/start-pentru-tineri.jpg",
    imageAlt: "Start Pentru Tineri",
  },
  {
    id: "2",
    title: "Programul de Ecologizare a IMM-urilor",
    financing: "<400 000 MDL",
    contribution: "25%",
    implementationPeriod: "24 Luni",
    imageSrc:
      "https://cn.greenco-esg.com/wp-content/uploads/2020/08/14-1-500x383.png",
    imageAlt: "Programul de Ecologizare a IMM-urilor",
  },
  {
    id: "3",
    title: "Programul de Susținere a Antreprenoriatului Feminin",
    financing: "<300 000 MDL",
    contribution: "20%",
    implementationPeriod: "36 Luni",
    imageSrc: "https://oda.md/files/2024/02/27/cover.png",

    imageAlt: "Programul de Susținere a Antreprenoriatului Feminin",
  },
  {
    id: "4",
    title: "Programul de atragere a remitențelor în economie 'PARE 1+' ",
    financing: "<250 000 MDL",
    contribution: "50%",
    implementationPeriod: "18 Luni",
    imageSrc: "https://oda.md/files/pare/parenewws/pare1.jpg",

    imageAlt: "Programul de atragere a remitențelor în economie 'PARE 1+2'",
  },
  {
    id: "5",
    title: "Programul de sprijin al micilor producători",
    financing: "<150 000 MDL",
    contribution: "15%",
    implementationPeriod: "24 Luni",
    imageSrc: "https://oda.md/files/2024/09/16/paine.jpg",
    imageAlt: "Programul de sprijin al micilor producători",
  },
  {
    id: "6",
    title: "Programul de creștere a competitivității producătorilor locali",
    financing: "<600 000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf1dqUVuhSC5tZ5fGs7c4YOjRCq6hhWyQyaQ&s",
    imageAlt: "Programul de creștere a competitivității producătorilor locali",
  },
  {
    id: "7",
    title: "Dezvoltarea IMM în domeniul turismului",
    financing: "<400 000 MDL",
    contribution: "35%",
    implementationPeriod: "24 Luni",
    imageSrc: "https://oda.md/files/2023/09/14/cover-main-3-site.jpg",
    imageAlt: "Dezvoltarea IMM în domeniul turismului",
  },
  {
    id: "8",
    title: "Programul de Retehnologizare și eficiență energetică",
    financing: "<500 000 MDL",
    contribution: "40%",
    implementationPeriod: "36 Luni",
    imageSrc: "https://oda.md/files/2022/12/29/retehnologizare.jpg",
    imageAlt: "Programul de Retehnologizare și eficiență energetică",
  },
  {
    id: "9",
    title: "Programul de transformare digitală a IMM",
    financing: "<350 000 MDL",
    contribution: "25%",
    implementationPeriod: "24 Luni",
    imageSrc: "https://oda.md/files/digitalizarea/newws/digi3.jpg",
    imageAlt: "Programul de transformare digitală a IMM",
  },
  {
    id: "10",
    title: "Programul de Susținere a Startup-urilor Tehnologice",
    financing: "<200 000 MDL",
    contribution: "30%",
    implementationPeriod: "36 Luni",
    imageSrc: "https://oda.md/files/digitalizarea/newws/digi.jpg",
    imageAlt: "Programul de Susținere a Startup-urilor Tehnologice",
  },
];
