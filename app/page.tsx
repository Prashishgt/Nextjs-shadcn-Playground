"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/modal-context";
import TestCard from "@/components/card/Test-Card";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Plans from "@/components/Plans/Plans";

export default function Home() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Plans />
    </>
  );
}

//  <div className="h-[100vh] flex justify-center items-center">
//    <Button onClick={openModal} variant="secondary">
//      Open
//    </Button>
//  </div>;
//  {
//    isModalOpen && <TestCard />;
//  }
