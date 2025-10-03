"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function DateTimeStep({ onSubmit, initialData }) {
  const [selectedDate, setSelectedDate] = useState(initialData.date || "");
  const [selectedTime, setSelectedTime] = useState(initialData.time || "");
  const [partySize, setPartySize] = useState("Number of Guests");

  const [isOpen, setIsOpen] = useState(false);

  const dates = [
    { day: "Thu", label: "Oct 2", value: "Oct 2" },
    { day: "Fri", label: "Oct 3", value: "Oct 3" },
    { day: "Sat", label: "Oct 4", value: "Oct 4" },
    { day: "Sun", label: "Oct 5", value: "Oct 5" },
    { day: "Mon", label: "Oct 6", value: "Oct 6" },
    { day: "Tue", label: "Oct 7", value: "Oct 7" },
    { day: "Wed", label: "Oct 8", value: "Oct 8" },
  ];

  const times = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const partyOptions = Array.from(
    { length: 10 },
    (_, i) => `${i + 1} ${i === 0 ? "person" : "people"}`
  );

  const handleSubmit = () => {
    if (selectedDate && selectedTime && partySize) {
      onSubmit({ date: selectedDate, time: selectedTime, partySize });
    }
  };

  return (
    <div>
      {/* Date Section */}
      <div className="mb-6">
        <div className="flex items-center mb-6">
          <svg
            className="w-5 h-5 mr-2 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="font-[400] text-[15px] text-gray-700">
            Select Date & Time
          </span>
        </div>

        <h3 className="text-sm font-[400] text-black mb-2">Choose Date</h3>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dates.map((date) => (
            <button
              key={date.value}
              onClick={() => setSelectedDate(date.value)}
              className={`py-2 px-3 rounded-lg border font-medium transition-colors flex flex-col items-center ${
                selectedDate === date.value
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-black border hover:bg-[#334f3b] hover:text-white"
              }`}
            >
              <span className="text-xs mb-2">{date.day}</span>
              <span className="text-sm font-semibold">{date.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Section */}
      <div className="mb-6">
        <h3 className="text-sm font-[400] text-black mb-2">Select Time</h3>
        <div className="grid grid-cols-5 gap-2">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-4 rounded-lg text-[14px] border font-medium transition-colors ${
                selectedTime === time
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-black border hover:bg-[#334f3b] hover:text-white"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Party Size Dropdown */}
      {/* Party Size Dropdown */}
      <div className="mb-6 relative">
        <h3 className="text-sm font-[400] text-black mb-2">Party Size</h3>
        <div
          className="w-full px-4 py-2 text-[12px] border-1 bg-gray-50 border-black rounded-lg flex justify-between items-center cursor-pointer focus:outline-none focus:border-green-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={partySize ? "text-gray-600" : "text-gray-400"}>
            {partySize || "Number of Guests"}
          </span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>

        {isOpen && (
          <ul className="absolute bottom-full px-1 py-1 text-[13px] w-full bg-white border border-gray-200 rounded-lg shadow-md z-10">
            {partyOptions.map((option) => (
              <li
                key={option}
                onClick={() => {
                  setPartySize(option);
                  setIsOpen(false);
                }}
                className="px-2 py-1 rounded-[5px] hover:bg-[#6e2f5c] hover:text-white cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={
          !selectedDate ||
          !selectedTime ||
          !partySize ||
          partySize === "Number of Guests"
        }
        className={`w-full font-medium text-sm rounded-lg py-3 px-6 
             transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#21c24f] 
             bg-gradient-to-r from-[#334f3b] to-[#21c24f] text-white
             ${
               !selectedDate ||
               !selectedTime ||
               !partySize ||
               partySize === "Number of Guests"
                 ? "opacity-50 cursor-not-allowed hover:scale-100 hover:opacity-50"
                 : ""
             }`}
      >
        Continue to Table Selection
      </button>
    </div>
  );
}
