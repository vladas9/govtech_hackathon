import { Heart, MoreVertical } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function PaymentsCard() {
  return (
    <Link href="/payments" className="block">
      <div className="bg-white rounded-lg border border-[#e0e4ea] p-6 relative hover:shadow-md transition-shadow">
        {/* Top icons */}
        <div className="flex justify-between items-center w-full absolute top-0 left-0">
          <div className="absolute left-6 top-6">
            <Heart size={24} className="text-[#c0c0c0]" />
          </div>
          <div className="absolute right-6 top-6">
            <MoreVertical size={24} className="text-[#c0c0c0]" />
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-col items-center">
          {/* Icon */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.9606 41.3713C36.8568 41.2676 36.7928 41.1244 36.7926 40.966C36.7926 40.6491 37.0493 40.3925 37.366 40.3926L53.8982 40.3925C54.215 40.3925 54.4713 40.6491 54.4713 40.9656C54.4713 41.2825 54.2147 41.5391 53.898 41.539L37.3658 41.5391C37.2075 41.5391 37.0644 41.4751 36.9606 41.3713Z"
              fill="#1890FF"
            />
            <path
              d="M34.967 7.00006H56.8982C61.5567 7.00006 65.3332 10.7766 65.3332 15.4351V63.5149H34.967V7.00006Z"
              fill="#E2E6ED"
            />
            <path
              d="M61.116 55.9234C61.116 56.8551 60.3607 57.6104 59.429 57.6104L41.7153 57.6104C40.7836 57.6104 40.0283 56.8551 40.0283 55.9234C40.0283 54.9917 40.7836 54.2364 41.7153 54.2364L59.429 54.2364C60.3607 54.2364 61.116 54.9917 61.116 55.9234Z"
              fill="url(#paint0_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M61.116 48.3319C61.116 49.2636 60.3607 50.0189 59.429 50.0189L41.7153 50.0189C40.7836 50.0189 40.0283 49.2636 40.0283 48.3319C40.0283 47.4002 40.7836 46.6449 41.7153 46.6449L59.429 46.6449C60.3607 46.6449 61.116 47.4002 61.116 48.3319Z"
              fill="url(#paint1_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M61.116 40.7403C61.116 41.672 60.3607 42.4273 59.429 42.4273L41.7153 42.4273C40.7836 42.4273 40.0283 41.672 40.0283 40.7403C40.0283 39.8086 40.7836 39.0533 41.7153 39.0533L59.429 39.0533C60.3607 39.0533 61.116 39.8086 61.116 40.7403Z"
              fill="url(#paint2_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M61.116 33.1488C61.116 34.0805 60.3607 34.8358 59.429 34.8358L41.7153 34.8358C40.7836 34.8358 40.0283 34.0805 40.0283 33.1488C40.0283 32.2171 40.7836 31.4618 41.7153 31.4618L59.429 31.4618C60.3607 31.4618 61.116 32.2171 61.116 33.1488Z"
              fill="url(#paint3_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M61.116 25.5572C61.116 26.4889 60.3607 27.2442 59.429 27.2442L41.7153 27.2442C40.7836 27.2442 40.0283 26.4889 40.0283 25.5572C40.0283 24.6255 40.7836 23.8702 41.7153 23.8702L59.429 23.8702C60.3607 23.8702 61.116 24.6255 61.116 25.5572Z"
              fill="url(#paint4_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M61.116 17.9657C61.116 18.8974 60.3607 19.6527 59.429 19.6527L41.7153 19.6527C40.7836 19.6527 40.0283 18.8974 40.0283 17.9657C40.0283 17.034 40.7836 16.2787 41.7153 16.2787L59.429 16.2787C60.3607 16.2787 61.116 17.034 61.116 17.9657Z"
              fill="url(#paint5_linear_9_1631)"
              fillOpacity="0.8"
            />
            <path
              d="M5.44458 26.4007C5.44458 22.6738 8.46578 19.6526 12.1926 19.6526H49.3069C53.0337 19.6526 56.0549 22.6738 56.0549 26.4007V48.2515C56.0549 51.9783 53.0337 54.9995 49.3069 54.9995H12.1926C8.46578 54.9995 5.44458 51.9783 5.44458 48.2515V26.4007Z"
              fill="#1373E6"
            />
            <path
              d="M45.0933 45.3816C45.0933 48.4108 42.6376 50.8665 39.6084 50.8665C36.5792 50.8665 34.1235 48.4108 34.1235 45.3816C34.1235 42.3524 36.5792 39.8968 39.6084 39.8968C42.6376 39.8968 45.0933 42.3524 45.0933 45.3816Z"
              fill="white"
              fillOpacity="0.8"
            />
            <path
              d="M51.7307 45.3816C51.7307 48.4108 49.2751 50.8664 46.2458 50.8664C43.2166 50.8664 40.761 48.4108 40.761 45.3816C40.761 42.3524 43.2166 39.8967 46.2458 39.8967C49.2751 39.8967 51.7307 42.3524 51.7307 45.3816Z"
              fill="white"
              fillOpacity="0.5"
            />
            <path
              d="M5.44434 26.4008H56.0547V33.1488H5.44434V26.4008Z"
              fill="#00DEEB"
              fillOpacity="0.8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.0625 7.00006C24.8698 7.00006 21.4709 10.3989 21.4709 14.5916H49.3068C49.3068 10.399 52.7056 7.00018 56.8982 7.00011V7.00006H29.0625Z"
              fill="url(#paint6_linear_9_1631)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9_1631"
                x1="61.116"
                y1="57.6104"
                x2="40.0283"
                y2="57.6104"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9_1631"
                x1="61.116"
                y1="50.0189"
                x2="40.0283"
                y2="50.0189"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_9_1631"
                x1="61.116"
                y1="42.4273"
                x2="40.0283"
                y2="42.4273"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_9_1631"
                x1="61.116"
                y1="34.8358"
                x2="40.0283"
                y2="34.8358"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_9_1631"
                x1="61.116"
                y1="27.2442"
                x2="40.0283"
                y2="27.2442"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_9_1631"
                x1="61.116"
                y1="19.6527"
                x2="40.0283"
                y2="19.6527"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_9_1631"
                x1="39.1846"
                y1="7.00006"
                x2="39.1846"
                y2="14.5916"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E0E3EA" />
                <stop offset="1" stopColor="#AEB5C0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Title */}
          <h2 className="font-bold text-xl mb-6">Plăți MPay</h2>

          {/* Payments information */}
          <div className="w-full">
            {/* Period and total section */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">PERIOADA</p>
                <p className="font-semibold">03.2019 - 03.2020</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 mb-1">TOTAL PLĂTI</p>
                <p className="font-semibold text-2xl">54</p>
              </div>
            </div>

            {/* Payment items */}
            <div className="space-y-3">
              {/* Payment item 1 */}
              <div className="bg-[#f9fafb] p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">MICB MDL</p>
                  <p className="text-gray-500 text-sm">27.01.2020</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">600 MDL</p>
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    ACHITAT
                  </span>
                </div>
              </div>

              {/* Payment item 2 */}
              <div className="bg-[#f9fafb] p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">VICB MDL</p>
                  <p className="text-gray-500 text-sm">12.02.2020</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">500 MDL</p>
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    ACHITAT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
