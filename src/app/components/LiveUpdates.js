"use client";

export default function LiveUpdates({ updates }) {
  return (
    <div className="px-6 py-6 bg-gray-100 border-b border-green-100">
      {/* Heading with Circle */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        <h3 className="text-[15px] font-[500] text-green-800">Live Updates</h3>
      </div>

      {/* Updates List */}
      <ul className="space-y-1 pl-5">
        {updates.map((update, idx) => (
          <li
            key={idx}
            className={`text-[15px]  ${
              idx === 0 ? "text-black font-[400]" : "text-gray-500"
            }`}
          >
            • {update}
          </li>
        ))}
      </ul>
    </div>
  );
}
