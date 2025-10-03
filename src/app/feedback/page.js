"use client";

import React, { useState } from "react";
import { Star, Send, Upload } from "lucide-react"; // 👈 Upload add kiya
import PageHeader from "../components/PageHeader";
import FeedbackSuccessModal from "../components/FeedbackSuccess";

const FeedbackPage = () => {
  const [ratings, setRatings] = useState({
    overall: 0,
    foodQuality: 0,
    service: 0,
    ambiance: 0,
    valueForMoney: 0,
    cleanliness: 0,
    waitTime: 0,
  });
 const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [feedback, setFeedback] = useState("");
  const [visitDate, setVisitDate] = useState("");

  const [selectedAspects, setSelectedAspects] = useState({});

  const handleRating = (category, rating) => {
    setRatings((prev) => ({
      ...prev,
      [category]: rating,
    }));
  };

  const toggleAspect = (key) => {
    setSelectedAspects((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Messages for overall rating
  const ratingMessages = {
    1: "We're sorry to hear that. Please let us know how we can do better",
    2: "Fair. We'd love to improve your experience.",
    3: "Good! We appreciate your feedback",
    4: "Great! We're glad you enjoyed your visit.",
    5: "Excellent! We're thrilled you loved it!",
  };

  // StarRating Component
  const StarRating = ({ rating, onRate, size = 20 }) => {
    return (
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => onRate(star)}
              className="focus:outline-none transition-colors"
            >
              <Star
                size={size}
                className={`${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                } transition-colors`}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  const handleSubmit = () => {
    console.log("Feedback submitted:", {
      ratings,
      feedback,
      visitDate,
    });
    setShowSuccessModal(true);;
  };

  const isFormValid = ratings.overall > 0 && visitDate.trim() !== "";

  return (
    <>
      <PageHeader title="Share Your Experience" />
      <div className="min-h-screen bg-gray-50 py-6 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Overall Experience Card */}
          <div className="bg-white rounded-[18px] shadow-lg p-6">
            <div className="text-center mb-6">
              <h1 className="text-xl font-medium text-gray-800 mb-4">
                How was your experience at Bella Vista?
              </h1>
              <div className="flex justify-center">
                <StarRating
                  rating={ratings.overall}
                  onRate={(rating) => handleRating("overall", rating)}
                  size={40}
                />
              </div>
             
              {ratings.overall > 0 && (
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {ratingMessages[ratings.overall]}
                </p>
              )}
            </div>
          </div>

          {/* Rate Specific Aspects Card */}
          <div className="bg-white rounded-[18px] shadow-lg p-6">
            <h2 className="text-[14px] font-[400] text-gray-800 mb-4">
              Rate Specific Aspects
            </h2>
            <div className="space-y-4">
              {[
                { key: "foodQuality", label: "Food Quality" },
                { key: "service", label: "Service" },
                { key: "ambiance", label: "Ambiance" },
                { key: "valueForMoney", label: "Value for Money" },
                { key: "cleanliness", label: "Cleanliness" },
                { key: "waitTime", label: "Wait Time" },
              ].map((aspect) => (
                <div key={aspect.key} className="flex flex-col">
                  <div className="flex items-center text-[13px] justify-between">
                    <span className="text-black font-medium">
                      {aspect.label}
                    </span>
                    <button
                      onClick={() => toggleAspect(aspect.key)}
                      className={`px-2 py-[0.5px] text-xs border font-[400] rounded-[10px] transition
                      ${
                        selectedAspects[aspect.key]
                          ? "bg-green-500 text-white border-green-500"
                          : "text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      {selectedAspects[aspect.key] ? "Selected" : "Rate this"}
                    </button>
                  </div>
                  <div className="mt-1">
                    <StarRating
                      rating={ratings[aspect.key]}
                      onRate={(rating) => handleRating(aspect.key, rating)}
                      size={28}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Feedback Card */}
          <div className="bg-white rounded-[18px] shadow-lg p-6">
            <h2 className="text-[15px] font-[400] text-gray-800 mb-4">
              Tell us more (Optional)
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-black mb-2">
                  What did you think of your experience?
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full p-3 border border-gray-300 bg-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 resize-none h-24"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-black mb-2">
                  When did you visit?
                </label>
                <input
                  type="text"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  placeholder="mm/dd/yyyy"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Upload Photos */}
            <div className="flex items-center justify-between  pt-5">
              <div className="flex flex-col text-sm text-gray-600">
                <div className="flex items-center">
                  <Upload size={16} className="mr-2" />
                  <span>Add photos of your experience</span>
                </div>
                <span className="text-xs text-gray-500 ml-6">
                  Help other diners by sharing pictures
                </span>
              </div>
              <button
                className="px-3.5 py-1.5
               border border-gray-300 rounded-[8px] text-sm font-medium text-gray-700 hover:bg-[#6e2f5c]  hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Upload
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full inline-flex items-center justify-center gap-2 
             bg-gradient-to-r from-[#334f3b] to-[#21c24f] 
             text-white font-medium text-sm 
             rounded-lg py-3 px-6 
             transition-all duration-300 
             focus:outline-none focus:ring-2 focus:ring-[#21c24f]
             ${
               !isFormValid
                 ? "opacity-50 cursor-not-allowed hover:scale-100 hover:opacity-50"
                 : ""
             }`}
          >
            <Send size={18} /> Submit Feedback
          </button>
               <FeedbackSuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
  
        </div>
      
      </div>
    
    </>
  );
};

export default FeedbackPage;
