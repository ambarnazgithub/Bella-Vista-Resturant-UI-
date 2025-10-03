'use client';

export default function DeliveryInfo({ address, phoneNumber }) {
  return (
    <div className="mt-2 pt-1 ">
      <h3 className="text-sm font-[14px] text-[#334f3b] mb-5">Delivery Information</h3>
      
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Delivery Address:</p>
        <p className="text-[15px] font-[400] text-gray-800">{address}</p>
      </div>
      
      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Special Adress</p>
           <p className="text-[15px] font-[400] text-gray-800">Leave at door, ring doorbell</p>
      </div>
      
      <div>
        <p className="text-xs text-gray-600 mb-1">Phone Number:</p>
        <p className="text-[15px] font-[400] text-gray-800">{phoneNumber}</p>
      </div>
    </div>
  );
}