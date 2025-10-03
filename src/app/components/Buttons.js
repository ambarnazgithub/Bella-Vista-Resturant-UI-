import { Calendar, ShoppingCart, Star } from "lucide-react";

export default function Buttons() {
  return (
    <div className="flex px-4  sm:px-6  justify-center items-center mt-6 mb-6 flex-col sm:flex-row sm:space-x-3 lg:space-x-4 space-y-4 sm:space-y-0">
      {/* Reservation Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-white bg-gradient-to-br from-[#334f3b] to-[#21c24f] hover:bg-gradient-to-bl font-medium rounded-lg text-sm w-full sm:w-auto sm:min-w-[180px] md:min-w-[230px] lg:min-w-[310px]  xl:min-w-[369px] h-[52px] px-4 sm:px-6 lg:px-7 text-center"
      >
        <Calendar className="w-5 h-5" />
        Make Reservation
      </button>

      {/* Order Now Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-white bg-gradient-to-br from-[#21c24f] to-[#6e2f5c] hover:bg-gradient-to-bl font-medium rounded-lg text-sm w-full sm:w-auto sm:min-w-[180px] md:min-w-[230px] lg:min-w-[310px] xl:min-w-[369px] h-[52px] px-4 sm:px-6 lg:px-7 text-center"
      >
        <ShoppingCart className="w-5 h-5" />
        Order Now
      </button>

      {/* Track Order Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-[#334f3b] bg-white hover:bg-[#334f3b] hover:text-white font-medium rounded-lg border border-[#334f3b] text-sm w-full sm:w-auto sm:min-w-[180px] md:min-w-[230px] lg:min-w-[310px] xl:min-w-[369px] h-[52px] px-4 sm:px-6 lg:px-7 text-center"
      >
        <Star className="w-5 h-5" />
        Track Order
      </button>
    </div>
  );
}
