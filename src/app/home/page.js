"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";
import HeroSection from "@/component/Home/HeroSection";
import Contact_Wp from "@/component/Home/Contact_whasapp";
import Game_Rates from "@/component/Home/Game_Rates";
import QnA_Section from "@/component/Home/QnA_Section";
import Available_Games from "@/component/Home/All_Games";
import Winner_Section from "@/component/Home/Winner_Section";

const Section2 = () => {
  return (
    <>
      <HeroSection />
      <Contact_Wp />
      <Winner_Section />
      <Game_Rates />
      <Available_Games />
      <QnA_Section />
    </>
  );
};

export default Section2;
