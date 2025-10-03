"use client";
import { Star} from "lucide-react";

const iconMap = {
  star: Star,

};

const StatsCard = ({ icon, value, label, color }) => {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white rounded-lg px-6 py-4 shadow-lg text-center">
      <div className={`text-3xl font-[500] mb-1 ${color || "text-gray-800"}`}>
        {value}
      </div>
      <div className={`text-[12px] text-gray-600"}`}>
        {label}
      </div>
    </div>
  );
};
export default StatsCard;