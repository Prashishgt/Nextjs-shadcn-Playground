import React from "react";
import PlanOptions from "./PlanOptions";
import PlansLayout from "./PlansLayout";

const Plans = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[20vh] text-center pt-7">
        <p className="font-bold text-5xl">Choose a Package</p>
        <p className="pt-4">
          Find the right package for your new company formation
        </p>
      </div>
      <div className="w-full flex flex-row justify-center gap-x-6 border  border-red-400">
        <PlanOptions />
      </div>
      <div>
        <PlansLayout />
      </div>
    </div>
  );
};

export default Plans;
