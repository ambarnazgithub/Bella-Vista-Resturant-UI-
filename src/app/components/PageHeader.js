"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PageHeader({ title, subtitle }) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="bg-white border-b  shadow-md sm:pl-[65px] pl-[1px] border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          {/* Back Icon */}
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-8 h-8 hover:bg-[#6e2f5c]   rounded-[10px] transition-colors"
            aria-label="Go back to home"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-white" />
          </button>

          {/* Title and Subtitle */}
          <div className="flex flex-col">
            <h1 className="text-lg font-[400] text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
