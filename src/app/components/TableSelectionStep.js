'use client';

import { useState } from "react";

export default function TableSelectionStep({ onSelect, partySize }) {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = [
    { id: 1, name: 'Table 1', type: 'Window', capacity: 'Up to 2 guests', available: true },
    { id: 2, name: 'Table 2', type: 'Garden View', capacity: 'Up to 4 guests', available: true },
    { id: 3, name: 'Table 3', type: 'Private Booth', capacity: 'Up to 6 guests', available: false },
    { id: 4, name: 'Table 4', type: 'Bar Counter', capacity: 'Up to 2 guests', available: true },
    { id: 5, name: 'Table 5', type: 'Family Section', capacity: 'Up to 8 guests', available: true }
  ];

  const handleTableSelect = (table) => {
    if (table.available) {
      setSelectedTable(table);
    }
  };

  const handleConfirm = () => {
    if (selectedTable) {
      onSelect(selectedTable);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="text-[16px] font-[400] text-black">Choose Your Table</span>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 sm:gap-4 mb-6">
        {tables.map(table => (
          <div
            key={table.id}
            className={`border-2 rounded-[15px] p-4 mb-5 transition-all ${
              table.available
                ? 'border-gray-200 cursor-pointer mb-3 hover:shadow-md'
                : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
            } ${selectedTable?.id === table.id ? 'border-green-500 bg-green-50 shadow-md' : ''}`}
            onClick={() => handleTableSelect(table)}
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-800">{table.name}</h3>
                <p className="text-sm text-gray-600">{table.type}</p>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                table.available 
                  ? 'bg-green-500 text-white' 
                  : 'bg-gray-400 text-white'
              }`}>
                {table.available ? 'Available' : 'Unavailable'}
              </span>
            </div>
            <div className="flex items-center text-sm text-black">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {table.capacity}
            </div>
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!selectedTable}
        className={`w-full bg-gradient-to-r from-[#334f3b] to-[#21c24f] text-white font-medium text-sm rounded-lg py-3 px-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#21c24f]
          ${!selectedTable ? "opacity-50 cursor-not-allowed hover:opacity-50" : ""}
        `}
      >
        Confirm Reservation
      </button>
    </div>
  );
}
