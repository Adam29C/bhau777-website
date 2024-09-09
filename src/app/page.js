"use client";
import React from "react";
import HeroSection from "../component/Home/HeroSection";
import Contact_Wp from "@/component/Home/Contact_whasapp";
import Game_Rates from "@/component/Home/Game_Rates";
import QnA_Section from "@/component/Home/QnA_Section";
import Available_Games from "@/component/Home/All_Games";

const page = () => {
  return (
    <>
      <HeroSection />
      <Contact_Wp />
      <Game_Rates />
      <Available_Games />
      <QnA_Section />
    </>
  );
};

export default page;
