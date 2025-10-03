'use client';

import { Check, PartyPopper } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FeedbackSuccessModal({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleBackToHome = () => {
    router.push('/');
    onClose();
  };

  const handleMakeReservation = () => {
    router.push('/reservation');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-15 h-15 bg-gradient-to-br from-[#334f3b] to-[#21c24f] rounded-full flex items-center justify-center shadow-lg">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Thank You Message */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Thank You!
        </h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          Your feedback helps us improve and provide better experiences for all our guests.
        </p>

        {/* Social Sharing Message */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-2 text-left">
            <PartyPopper className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              We're so happy you enjoyed your visit! Would you mind sharing your experience on Google or social media?
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleBackToHome}
            
       
                      className="w-full   text-[14px] bg-gradient-to-br from-[#334f3b] to-[#21c24f] hover:bg-gradient-to-bl text-white font-[400] py-[5px] rounded-lg transition-colors"
                         >
            Back to Home
          </button>
          <button
            onClick={handleMakeReservation}
             className="w-full text-green-900 text-[14px] bg-white border-1 border-green-900 hover:bg-[#334f3b] hover:text-[white] font-[400] py-[5px] rounded-lg transition-colors"
            >
            Make Another Reservation
          </button>
        </div>
      </div>
    </div>
  );
}