import Image from "next/image"

export function LogoSection() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] w-full mx-auto py-4 px-4">
        <div className="flex items-center">
          <div className="mr-4">
            <Image src="/images/mpass-logo.png" alt="MPass Logo" width={170} height={60} />
          </div>
          <div>
            <div className="text-[#333] text-lg">Serviciul de autentificare și</div>
            <div className="text-[#333] text-lg">control al accesului</div>
          </div>
        </div>
      </div>
    </div>
  )
} 