import React from "react";
import Header from "./Header";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="Hero-Backkground">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="banner-text">
              <span>
                Play Games <br />
              </span>
              <span>
                Win Money On <br />
              </span>
              <span>Bhau777</span>
              <div>
                <Image
                  src={"/images/Counting.svg"}
                  alt="Bhau777 Logo"
                  width={600}
                  height={300}
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div>
              <Image
                src={"/images/Men_Image.svg"}
                alt="Bhau777 Logo"
                width={350}
                height={300}
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
    </div>
  );
};

export default HeroSection;
