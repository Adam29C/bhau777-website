"use client";
import React from "react";
import Image from "next/image";
import { downloadAPK } from "@/Helpers/DownloadAPK";
import { SiteTitle } from "@/Config/Config";

const HeroSection = () => {

  const download = async () => {
    await downloadAPK();
  };

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
                <span> {SiteTitle} </span>
              </div>
              <div className="text-center">
                <Image
                  src={"/images/Counting.svg"}
                  alt={`${SiteTitle} couting`}
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
          <div className="col-12 text-center"  onClick={download}>
            <button className="download-button">Download App</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
