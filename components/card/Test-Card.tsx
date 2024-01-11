"use client";
import { useModal } from "@/context/modal-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

const TestCard = () => {
  const { closeModal } = useModal();
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-700">
      <Card className="h-[500px] w-[500px] flex justify-between flex-col">
        <CardHeader className="flex justify-between flex-row items-start">
          <div>
            <CardTitle className="pb-2">Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </div>
          <Button onClick={closeModal}>Close</Button>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestCard;
