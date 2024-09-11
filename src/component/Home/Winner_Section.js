"use client";
import { GET_CONTACT } from "@/service/admin.service";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { winnerSection } from "@/Data/data";
const Winner_Section = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {},
  };

  return (
    <>
      <div className="container-fluid test-2">
        <div className="winner-container">
          <div className="heding-sec heading-sec-custom d-flex text-center justify-content-center align-items-center">
            <Image src={"/images/Star.svg"} alt="" width={30} height={30} />
            <h2 className="mb-0 ms-2 me-2 font-700">Today's Top Winners</h2>
            <Image src={"/images/Star.svg"} alt="" width={30} height={30} />
          </div>
          <Slider {...settings}>
            {winnerSection.map((item) => {
              return (
                <>
                  <div>
                    <div className="custom-card custom-card-padding">
                      <h4 className="primary-color">{item.name}</h4>
                      <h4 className="font-700 primary-color">₹{item.price}</h4>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>

        {/* ..................................... */}
      </div>
    </>
  );
};

export default Winner_Section;
