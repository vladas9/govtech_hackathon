import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"
import { Input } from "../ui/input"

interface AuthCardProps {
  title: string
  children: ReactNode
}

export function AuthCard({ title, children }: AuthCardProps) {
  return (
    <div className="bg-[#3a8599] text-white rounded-[4px] p-4 flex flex-col items-center h-[350px]">
      <div className="flex justify-center w-full mb-2">
        <h2 className="text-xl font-normal">{title}</h2>
      </div>
      {children}
    </div>
  )
}

interface MobileSignatureFormProps {
  phoneNumber: string
  setPhoneNumber: (value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function MobileSignatureForm({ phoneNumber, setPhoneNumber, onSubmit }: MobileSignatureFormProps) {
  return (
    <AuthCard title="Semnătura mobilă">
      <div className="flex justify-center mb-4">
        <Image
          src="/images/glyph-mobile-signature.png"
          alt="Mobile Signature"
          width={100}
          height={100}
          className="h-[100px] w-auto"
        />
      </div>
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex mb-4">
          <div className="bg-gray-100 border-gray-300 rounded-l-[6px] px-3 py-2 text-gray-700">+373</div>
          <Input
            type="text"
            placeholder="XXX00000"
            className="rounded-[6px] text-black rounded-l-none border-l-0 flex-1 p-2 border border-gray-300"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <Button type="submit" className="rounded-[6px] text-[16px] w-full bg-white text-[#333] hover:bg-gray-100 border border-gray-300">
          Transmite
        </Button>
      </form>
    </AuthCard>
  )
}

export function EVOSignCard() {
  return (
    <AuthCard title="EVOSign (pilotare)">
      <div className="bg-white mb-4 rounded-[6px] overflow-hidden">
        <Image src="/images/qr.png" alt="QR Code" width={180} height={180} />
      </div>
      <p className="text-center">Nu pot scana codul QR</p>
    </AuthCard>
  )
}

export function ElectronicSignatureCard() {
  return (
    <AuthCard title="Semnătura electronică">
      <div className="flex justify-center mb-4 py-4">
        <Image src="/images/glyph-stisc.png" alt="Coat of Arms" width={100} height={150} />
      </div>
      <Button className="rounded-[6px] text-[16px] h-[60px] whitespace-normal w-full bg-white text-[#333] hover:bg-gray-100 border border-gray-300">
        Serviciul Tehnologia Informației și Securitate Cibernetică
      </Button>
    </AuthCard>
  )
}

export function TwoStepAuthCard() {
  return (
    <AuthCard title="Autentificarea în 2 pași">
      <div className="flex justify-center mb-4">
        <Image src="/images/TotpStep1.png" alt="" width={150} height={80} />

      </div>
      <form className="w-full space-y-4">
        <div className="flex">
          <div className="bg-gray-100 border border-gray-300 rounded-l-[6px] px-3 py-2 text-gray-700 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Input 
            type="text" 
            placeholder="IDNP" 
            className="rounded-[6px] text-black rounded-l-none border-l-0 flex-1 p-2 border border-gray-300" 
             
          />
        </div>
        <div className="flex">
          <div className="bg-gray-100 border border-gray-300 rounded-l-[6px] px-3 py-2 text-gray-700 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Input 
            type="password" 
            placeholder="Parola" 
            className="rounded-[6px] text-black rounded-l-none border-l-0 flex-1 p-2 border border-gray-300" 
             
          />
        </div>
        <Button className="rounded-[6px] text-[16px] w-full bg-white text-[#333] hover:bg-gray-100 border border-gray-300" >
          Intra
        </Button>
      </form>
    </AuthCard>
  )
} 