import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useUserIdentity } from "@/hooks/useUserIdentity";
export function ProfileInfo() {
  const { data: userData } = useUserIdentity();

  if (!userData) {
    return null;
  }

  return (
    <div>
      {/* Profile header with photo and edit button */}
      <div className="rounded-t-lg p-6 flex items-center gap-4 mb-6">
        <Image
          src={userData.picture}
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="font-bold text-2xl mb-1">{userData.name}</h2>
          <a href="#" className="text-[#1373e6] text-base">
            Editează profilul
          </a>
        </div>
      </div>

      {/* Personal information section */}
      <div className="px-6 mb-4">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[#707070] text-xs tracking-wider font-medium">
            INFORMAȚIE PERSONALĂ
          </h3>
          <ChevronDown size={18} className="text-[#707070]" />
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-[#707070] text-xs mb-1">
              {userData.type}:
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6  rounded flex items-center justify-center mr-2">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6562 4.40625H2.34375C1.91162 4.40625 1.5625 4.75537 1.5625 5.1875V20.8125C1.5625 21.2446 1.91162 21.5938 2.34375 21.5938H22.6562C23.0884 21.5938 23.4375 21.2446 23.4375 20.8125V5.1875C23.4375 4.75537 23.0884 4.40625 22.6562 4.40625ZM21.6797 19.8359H3.32031V6.16406H21.6797V19.8359ZM14.8999 12.1211H17.9126C17.9443 12.1211 17.9688 12.0332 17.9688 11.9258V10.7539C17.9688 10.6465 17.9443 10.5586 17.9126 10.5586H14.8999C14.8682 10.5586 14.8438 10.6465 14.8438 10.7539V11.9258C14.8438 12.0332 14.8682 12.1211 14.8999 12.1211ZM15.0171 15.6367H19.5508C19.646 15.6367 19.7241 15.5488 19.7241 15.4414V14.2695C19.7241 14.1621 19.646 14.0742 19.5508 14.0742H15.0171C14.9219 14.0742 14.8438 14.1621 14.8438 14.2695V15.4414C14.8438 15.5488 14.9219 15.6367 15.0171 15.6367ZM5.46875 16.9307H6.54053C6.64307 16.9307 6.72607 16.8501 6.7334 16.7476C6.82617 15.5146 7.85645 14.5381 9.10645 14.5381C10.3564 14.5381 11.3867 15.5146 11.4795 16.7476C11.4868 16.8501 11.5698 16.9307 11.6724 16.9307H12.7441C12.7706 16.9307 12.7969 16.9253 12.8212 16.9149C12.8456 16.9045 12.8675 16.8892 12.8858 16.8701C12.9041 16.8509 12.9183 16.8282 12.9275 16.8033C12.9367 16.7785 12.9408 16.752 12.9395 16.7256C12.8711 15.4243 12.1582 14.2915 11.1182 13.647C11.5768 13.1428 11.8302 12.4853 11.8286 11.8037C11.8286 10.2925 10.6104 9.06934 9.10889 9.06934C7.60742 9.06934 6.38916 10.2925 6.38916 11.8037C6.38916 12.5142 6.65771 13.1587 7.09961 13.647C6.57014 13.9751 6.12794 14.4265 5.81079 14.9626C5.49364 15.4987 5.31095 16.1036 5.27832 16.7256C5.26855 16.8379 5.35645 16.9307 5.46875 16.9307ZM9.10645 10.5342C9.80225 10.5342 10.3687 11.103 10.3687 11.8037C10.3687 12.5044 9.80225 13.0732 9.10645 13.0732C8.41064 13.0732 7.84424 12.5044 7.84424 11.8037C7.84424 11.103 8.41064 10.5342 9.10645 10.5342Z"
                    fill="#0076FF"
                  />
                </svg>
              </div>
              <span className="text-[14px]">{userData.value}</span>
            </div>
          </div>

          <div>
            <div className="text-[#707070] text-xs mb-1">EMAIL:</div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded flex items-center justify-center mr-2">
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6562 4.40625H2.34375C1.91162 4.40625 1.5625 4.75537 1.5625 5.1875V20.8125C1.5625 21.2446 1.91162 21.5938 2.34375 21.5938H22.6562C23.0884 21.5938 23.4375 21.2446 23.4375 20.8125V5.1875C23.4375 4.75537 23.0884 4.40625 22.6562 4.40625ZM21.6797 7.11133V19.8359H3.32031V7.11133L2.64648 6.58643L3.60596 5.35352L4.65088 6.1665H20.3516L21.3965 5.35352L22.356 6.58643L21.6797 7.11133ZM20.3516 6.16406L12.5 12.2676L4.64844 6.16406L3.60352 5.35107L2.64404 6.58398L3.31787 7.10889L11.6577 13.5933C11.8976 13.7796 12.1926 13.8807 12.4963 13.8807C12.8001 13.8807 13.0951 13.7796 13.335 13.5933L21.6797 7.11133L22.3535 6.58643L21.394 5.35352L20.3516 6.16406Z"
                    fill="#0076FF"
                  />
                </svg>
              </div>
              <span className="text-[14px]">{userData.email}</span>
            </div>
          </div>

          <div>
            <div className="text-[#707070] text-xs mb-1">TELEFON:</div>
            <div className="flex items-center">
              <div className="w-6 h-6  rounded flex items-center justify-center mr-2">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.8906 1.57422H7.10938C6.21309 1.57422 5.48438 2.30293 5.48438 3.19922V22.6992C5.48438 23.5955 6.21309 24.3242 7.10938 24.3242H18.8906C19.7869 24.3242 20.5156 23.5955 20.5156 22.6992V3.19922C20.5156 2.30293 19.7869 1.57422 18.8906 1.57422ZM18.6875 22.4961H7.3125V3.40234H18.6875V22.4961ZM11.9844 19.9062C11.9844 20.1756 12.0914 20.4339 12.2818 20.6244C12.4723 20.8149 12.7306 20.9219 13 20.9219C13.2694 20.9219 13.5277 20.8149 13.7182 20.6244C13.9086 20.4339 14.0156 20.1756 14.0156 19.9062C14.0156 19.6369 13.9086 19.3786 13.7182 19.1881C13.5277 18.9976 13.2694 18.8906 13 18.8906C12.7306 18.8906 12.4723 18.9976 12.2818 19.1881C12.0914 19.3786 11.9844 19.6369 11.9844 19.9062Z"
                    fill="#0076FF"
                  />
                </svg>
              </div>
              <span className="text-[14px]">+373 {userData.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
