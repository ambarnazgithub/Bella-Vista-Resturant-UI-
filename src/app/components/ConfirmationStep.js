"use client";

export default function ConfirmationStep({ data, onReset }) {
  return (
    <div className="text-center ">
      <div className="mb-4">
        <div className="w-15 h-15 bg-gradient-to-br from-[#334f3b] to-[#21c24f] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-[400] text-gray-800 mb-2">
          Reservation Confirmed!
        </h2>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Date:</p>
            <p className="font-[400] text-[14px] text-gray-800">{data.date}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Time:</p>
            <p className=" font-[400] text-[14px] text-gray-800">{data.time}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Party Size:</p>
            <p className=" font-[400] text-[14px] text-gray-800">
              {data.partySize}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm   text-gray-600">Table:</p>
            <p className=" font-[400] text-[14px] text-gray-800">
              {data.table?.name}
            </p>
          </div>
        </div>
      </div>

      <p className="text-[15px] text-gray-500 mb-6">
        We've sent a confirmation to your email. See you soon!
      </p>

      <div className="space-y-3">
        <button
          onClick={onReset}
          className="w-full   text-[14px] bg-gradient-to-br from-[#334f3b] to-[#21c24f] hover:bg-gradient-to-bl text-white font-[400] py-[5px] rounded-lg transition-colors"
        >
          Back to Home
        </button>
        <button
          onClick={onReset}
          className="w-full text-green-900 text-[14px] bg-white border-1 border-green-900 hover:bg-[#334f3b] hover:text-[white] font-[400] py-[5px] rounded-lg transition-colors"
        >
          Make Another Reservation
        </button>
      </div>
    </div>
  );
}
