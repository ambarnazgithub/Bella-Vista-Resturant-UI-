"use client";

import { useState } from "react";
import ConfirmationStep from "../components/ConfirmationStep";
import TableSelectionStep from "../components/TableSelectionStep";
import DateTimeStep from "../components/DateTimeStep";
import PageHeader from "../components/PageHeader";

export default function ReservationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    partySize: "2 people",
    table: null,
  });

  const handleDateTimeSubmit = (data) => {
    setReservationData((prev) => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleTableSelect = (table) => {
    setReservationData((prev) => ({ ...prev, table }));
    setCurrentStep(3);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setReservationData({
      date: "",
      time: "",
      partySize: "2 people",
      table: null,
    });
  };

  return (
    <>
      <PageHeader title="Make a Reservation" />
      <div className="min-h-screen  py-8 px-4">
        {/* Progress Steps */}
        <div className="flex items-center justify-between max-w-3xl mx-auto   mb-8">
          <div className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 2 ? "bg-green-500" : "bg-gray-200"
              }`}
            ></div>
          </div>

          <div className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= 2
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                currentStep >= 3 ? "bg-green-500" : "bg-gray-200"
              }`}
            ></div>
          </div>

          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
              currentStep >= 3
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            3
          </div>
        </div>

        <div
          className={`mx-auto bg-white rounded-lg shadow-lg p-6 ${
            currentStep === 3 ? "max-w-[400px]" : "max-w-[840px]"
          }`}
        >
          <div className="flex items-center mb-6">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="mr-3 text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}
          </div>
          {/* Step Content */}
          {currentStep === 1 && (
            <DateTimeStep
              onSubmit={handleDateTimeSubmit}
              initialData={reservationData}
            />
          )}

          {currentStep === 2 && (
            <TableSelectionStep
              onSelect={handleTableSelect}
              partySize={reservationData.partySize}
            />
          )}

          {currentStep === 3 && (
            <ConfirmationStep data={reservationData} onReset={handleReset} />
          )}
        </div>
      </div>
    </>
  );
}

