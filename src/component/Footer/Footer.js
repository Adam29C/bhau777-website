"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  const handleClickUp = () => {
    const targetElement = document.getElementById("root");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* <div className="footer-container text-center mt-3 " id="scroll-up"> */}
      <div className="container-fluid test-2">
        <div className="footer-btn-scroll-main my-5">
          <button className="footer-btn-scroll" id="scroll-down-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height={25}
              width={25}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M348.3 216.4c-5 5.1-13.3 5.1-18.4.1L269 155.8v231.3c0 7.1-5.8 12.9-13 12.9s-13-5.8-13-12.9V155.8l-60.9 60.8c-5.1 5-13.3 4.9-18.4-.1-5-5.1-5-13.2.1-18.3l83-82.4c1.2-1.1 2.5-2 4.1-2.7 1.6-.7 3.3-1 5-1 3.4 0 6.6 1.3 9.1 3.7l83 82.4c5.2 4.9 5.3 13.1.3 18.2z" />
            </svg>
          </button>
        </div>
        <div className="row footer-align">
          <div className="col-md-6 d-flex flex-column">
            <div className=" d-flex mb-4">
              <img
                src="/images/Logo_white.svg"
                className="img-fluid w-20 float-left"
                alt=""
              />
            </div>
            <p className="footer-text f-size">
              Our website is operated by Bhau777 International, a company
              established under the law of Isle of Man, with registered address
              at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man, and having its
              gaming sublicense issued by Isle of Man e-Gaming and all rights to
              operate the gaming software worldwide.
            </p>
          </div>
          <div className="col-md-6 ">
            <div className="footer-right-image ">
              <div className="margin-img mb-4">
                <img
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  src={"./images/eightin_Plus.svg"}
                />
              </div>
              <p className="footer-para-test f-size">
                Players need to be 18+ in order to register. Underage gambling
                is prohibited.
              </p>
            </div>
            <div className="footer-img-sec mb-2">
              <Image
                src={"/images/Begamble.svg"}
                alt="Bhau777 Logo"
                width={600}
                height={300}
                layout="intrinsic"
              />
              <Image
                src={"/images/gamble_Therapy.svg"}
                alt="Bhau777 Logo"
                width={600}
                height={300}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <div className="footer-last-content ">
          <p className="copyright-text f-size">
            Copyright © 2024 - Bhau777. All Rights Reserved
          </p>
          <p className="f-size">
            <a className="f-size" href="/terms-conditions">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
