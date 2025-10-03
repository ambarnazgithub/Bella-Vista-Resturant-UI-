"use client";

import { Clock } from "lucide-react";

export default function OrderCard({ estimatedTime, progress, status }) {
  return (
    <div className="max-w-[850px] p-7 mb-5 mx-auto bg-white rounded-[15px] shadow-lg overflow-hidden">
      {/* Order Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#334f3b] to-[#21c24f] rounded-full flex items-center justify-center mx-auto mb-5">
          {/* Chef Hat Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-white"
          >
            <path d="M4 10a4 4 0 0 1 4-4 4.5 4.5 0 0 1 8 0 4 4 0 0 1 4 4c0 2-1.5 3.5-3.5 3.5H7.5C5.5 13.5 4 12 4 10z" />
            <path d="M6 14v6h12v-6" />
          </svg>
        </div>

        <h1 className="text-[20px] font-[400] text-gray-800 mb-1">
          Your Order is Being Prepared
        </h1>

        <div className="flex justify-center text-sm text-gray-500 items-center mb-5">
          <Clock className="w-4 h-4 mr-1" />
          <span>Estimated time: {estimatedTime}</span>
        </div>
      </div>

      {/* Order Progress */}
      <div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div
            className="bg-[#334f3b] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[11px] font-[400] text-green-500">
            {status}
          </span>
          <span className="text-[11px] font-[400] text-gray-600">
            {progress}% Complete
          </span>
        </div>
      </div>
    </div>
  );
}
