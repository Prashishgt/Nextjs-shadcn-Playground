import React from "react";
import { Button } from "../ui/button";

const HeaderTitle = ({ label }: { label: string }) => {
  return (
    <div className="pl-14">
      <div className="flex flex-row items-center">
        <p className="text-sm font-bold">{label}</p>
        <Button className="text-red-500" variant="link">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default HeaderTitle;
