"use client";
import React from "react";
import Image from "next/image";


const HeroSection = () => {
  const getData = [
    {
      id: 1,
      gamePrice: "10",
      gameName: "Single Digit",
    },
    {
      id: 1,
      gamePrice: "100",
      gameName: "Jodi  Digit",
    },
    {
      id: 1,
      gamePrice: "1000",
      gameName: "Single Pana",
    },
    {
      id: 1,
      gamePrice: "10000",
      gameName: "Single Digit",
    },
    {
      id: 1,
      gamePrice: "100000",
      gameName: "Single Digit",
    },
    {
      id: 1,
      gamePrice: "10000",
      gameName: "Single Digit",
    },
  ];

  const faqData = [
    {
      question: "What is Bhau777?",
      answer:
        "Bhau777 is a Satta Matka Gaming App where you can play games and win jackpots.",
    },
    {
      question: "What games are available on Bhau777?",
      answer:
        "Popular Satta Matka games like Kalyan, Sridevi, Milan, Time Bazar, Sara, and Rajdhani.",
    },
    {
      question: "Does Bhau777 have a license?",
      answer:
        "Yes, Sara International N.V. has a sub-license in the Isle of Man. All rights that allow the operation of software worldwide.",
    },
    {
      question: "What is the minimum deposit and withdrawal amount?",
      answer:
        "In Bhau777, we allow a minimum deposit of Rs 300.00 and withdrawals of Rs 500.00.",
    },
    {
      question: "Why choose Bhau777 among other providers?",
      answer: "Bhau777 is the most trusted gaming provider worldwide.",
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xxl-6 col-lg-6  col-md-12">
            <div className="banner-text">
              <div className="check">
                <span>
                  Play Games <br />
                </span>
                <span>
                  Win Money On <br />
                </span>
                <span>Bhau777</span>
              </div>
              <div className="text-center">
                <Image
                  src={"/images/Counting.svg"}
                  alt="Bhau777 Logo"
                  width={600}
                  height={300}
                  layout="intrinsic"
                  className="counting_image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="man-class">
              <Image
                src={"/images/Men_Image.svg"}
                alt="Money Man"
                width={350}
                height={300}
                className="man-image"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-center">
            <button className="download-button">Download App</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
