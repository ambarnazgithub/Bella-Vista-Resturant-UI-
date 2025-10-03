"use client";

import { Package, CircleCheckBig, Truck, ChefHat } from "lucide-react";

export default function OrderTimeline() {
  const timeline = [
    {
      id: 1,
      type: "placed",
      status: "Order Placed",
      time: "2:30 PM",
      completed: true,
    },
    {
      id: 2,
      type: "preparing",
      status: "Preparing",
      time: "2:35 PM",
      completed: true,
    },
    {
      id: 3,
      type: "ready",
      status: "Ready for Pickup",
      time: "Est. 2:55 PM",
      completed: false,
    },
    {
      id: 4,
      type: "delivered",
      status: "Delivered",
      time: "Est. 3:10 PM",
      completed: false,
    },
  ];

  // Custom icons mapping
  const icons = {
    placed: <Package className="w-5 h-5" />,
    preparing: <ChefHat className="w-5 h-5" />,
    ready: <CircleCheckBig className="w-5 h-5" />,
    delivered: <Truck className="w-5 h-5" />,
  };

  return (
    <>
      <h2 className="text-lg font-medium text-gray-800 mb-6">Order Timeline</h2>
      <div className="space-y-4">
        {timeline.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            {/* Left side - Icon and Status */}
            <div className="flex items-center gap-3 flex-1">
              {/* Icon Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  item.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {icons[item.type]}
              </div>

              {/* Status Text */}
              <span
                className={`text-sm font-medium ${
                  item.completed ? "text-gray-900" : "text-gray-500"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Right side - Time with checkmark */}
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 text-xs rounded-[15px] font-semibold ${
                  item.completed
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-900 border border-gray-400"
                }`}
              >
                {item.time}
              </span>
              {item.completed && (
                <div className="w-5 h-5 rounded-full  flex items-center justify-center">
                  <CircleCheckBig className="w-7 h-7 text-green-600" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
