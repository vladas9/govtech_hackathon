import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function ProfileInfo() {
  return (
    <div>
      {/* Profile header with photo and edit button */}
      <div className="bg-[#f5f7fa] rounded-t-lg p-6 flex items-center gap-4 mb-6">
        <Image
          src="/placeholder.svg?height=80&width=80"
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="font-bold text-2xl mb-1">Vasile Schidu</h2>
          <a href="#" className="text-[#1373e6] text-base">
            Editează profilul
          </a>
        </div>
      </div>

      {/* Personal information section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#707070] text-sm tracking-wider font-medium">INFORMAȚIE PERSONALĂ</h3>
          <ChevronDown size={18} className="text-[#707070]" />
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-[#707070] text-xs mb-1.5">IDNP:</div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-[#1373e6] rounded flex items-center justify-center mr-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="18" rx="2" stroke="white" strokeWidth="2" />
                  <path
                    d="M8 12H16M8 8H16M8 16H12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base">2002004005001</span>
            </div>
          </div>

          <div>
            <div className="text-[#707070] text-xs mb-1.5">EMAIL:</div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-[#1373e6] rounded flex items-center justify-center mr-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base">schidu.vasile@gmail.com</span>
            </div>
          </div>

          <div>
            <div className="text-[#707070] text-xs mb-1.5">TELEFON:</div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-[#1373e6] rounded flex items-center justify-center mr-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base">+373 67 900 123</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
