export function QuickActions() {
  return (
    <div className="px-6 mb-6">
      <div className="flex items-center py-3">
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
        <a href="#" className="text-[#1373e6] text-base">
          Vezi toate actele deținute
        </a>
      </div>

      <div className="border-t border-[#e0e4ea]"></div>

      <div className="flex items-center py-3">
        <div className="w-6 h-6 bg-[#1373e6] rounded flex items-center justify-center mr-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <a href="#" className="text-[#1373e6] text-base">
          Contacte
        </a>
      </div>

      <div className="flex items-center py-3">
        <div className="w-6 h-6 bg-[#1373e6] rounded flex items-center justify-center mr-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M17 7L19 9L23 5M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <a href="#" className="text-[#1373e6] text-base">
          Împuterniciri
        </a>
      </div>

      <div className="border-t border-[#e0e4ea]"></div>
    </div>
  )
}
