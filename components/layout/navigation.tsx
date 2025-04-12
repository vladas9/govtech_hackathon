import { Container } from "./container"

export function Navigation() {
  return (
    <nav className="bg-white border-b border-[#e0e4ea]">
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="relative w-10 h-10 bg-[#1373e6] rounded flex items-center justify-center mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.5 4H9.5L7 12L10 14L8 21H13L15.5 13L12.5 11L14.5 4Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="text-[#1373e6] font-bold text-sm leading-tight">Portalul</div>
              <div className="text-[#1373e6] font-bold text-sm leading-tight">Guvernamental</div>
              <div className="text-[#595959] text-xs leading-tight">al cetățeanului</div>
            </div>
          </div>

          <div className="flex items-center">
            <a href="#" className="text-[#2f2f2f] text-sm mx-5 hover:text-[#1373e6]">
              Despre portal
            </a>
            <a href="#" className="text-[#2f2f2f] text-sm mx-5 hover:text-[#1373e6]">
              Servicii
            </a>
            <a href="#" className="text-[#2f2f2f] text-sm mx-5 hover:text-[#1373e6]">
              Noutăți
            </a>
            <a href="#" className="text-[#2f2f2f] text-sm mx-5 hover:text-[#1373e6]">
              Asistență
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}
