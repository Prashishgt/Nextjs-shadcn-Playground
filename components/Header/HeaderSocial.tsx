import React from "react";
import { Facebook, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Button } from "../ui/button";

const headerArrayIcons = [
  {
    name: "Facebook",
    icons: <Facebook />,
  },
  {
    name: "Twitter",
    icons: <Twitter />,
  },
  {
    name: "Linkedin",
    icons: <Linkedin />,
  },
  {
    name: "Youtube",
    icons: <Youtube />,
  },
  {
    name: "Instagram",
    icons: <Instagram />,
  },
];
const HeaderSocial = () => {
  return (
    <div className="pr-10 flex flex-row gap-2 items-center">
      <p>Follow us</p>
      <Button variant="icon" className="flex gap-3">
        {headerArrayIcons.map((item) => (
          <div key={item.name}>{item.icons}</div>
        ))}
      </Button>
    </div>
  );
};

export default HeaderSocial;
