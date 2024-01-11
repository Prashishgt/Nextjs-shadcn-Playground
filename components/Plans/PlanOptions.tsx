import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SelectOptionsI {
  name: string;
  selected: boolean;
}

const PlanOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Limited Company(By Shares)"
  );

  const selectOption: SelectOptionsI[] = [
    {
      name: "Limited Company(By Shares)",
      selected: selectedOption === "Limited Company(By Shares)",
    },
    {
      name: "Limited Company(By Guarantee)",
      selected: selectedOption === "Limited Company(By Guarantee)",
    },
    {
      name: "Public Limited",
      selected: selectedOption === "Public Limited",
    },
    {
      name: "LLP",
      selected: selectedOption === "LLP",
    },
  ];

  const handleButtonClick = (name: string) => {
    setSelectedOption(name);
  };

  return (
    <div>
      {selectOption.map((item) => (
        <Button
          key={item.name}
          className={cn(
            item.selected && "bg-blue-800 text-white",
            "mx-3 border border"
          )}
          variant="outline"
          onClick={() => handleButtonClick(item.name)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default PlanOptions;
