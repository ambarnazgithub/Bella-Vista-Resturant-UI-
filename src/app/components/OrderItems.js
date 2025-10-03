"use client";

export default function OrderItems({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-6 py-5 ">
      <h2 className="text-sm font-[14px] text-[#334f3b] mb-3">Order Details</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="pb-4 border-b border-gray-100 last:border-0"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-[400] text-[14px] text-[#292413]">
                  {item.name}
                </h3>
                <p className="text-[13px] text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="font-[400]  text-[14px] text-[#334f3b]">
                ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="font-[500] text-[10px] text-gray-500">
              Modification:
            </p>
            {item.extras && item.extras.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.extras.map((extra, idx) => (
                  <span
                    key={idx}
                    className="px-2 font-[500] text-[10px] text-black bg-white border border-gray-300 rounded-full"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t-2 border-gray-200 flex justify-between items-center">
        <span className="text-[15px] font-[400] text-gray-800">Total</span>
        <span className="text-[18px] font-[400] text-gray-800">
          ${total.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
