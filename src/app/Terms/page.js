"use client";
import React, { useEffect, useState } from "react";
import { TermsandConditions } from "@/Data/data";

const Terms = () => {

  return (
    <>
      <div className="container-fluid test-2">
        <div className="terms-condition-main hzeyLF">
          <div className=" about-game-main ">
            <h1 className="about-title">{TermsandConditions[0].title}</h1>
            <p className="about-description">
              {TermsandConditions[0].description}
            </p>
          </div>
        </div>

        <div className="about-game-main mt-5">
          <div className="">
            <h1 className="sub-title-font-size-for-contact-us">
              {TermsandConditions[1].title}
            </h1>
            <ul>
              {TermsandConditions[1].list.map((item) => {
                return (
                  <>
                    <li className="list-style">
                      <span className="Dot-style">●</span>
                      <p className="about-description-for-contact-us-light">
                        {item.title}
                      </p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="margin-tap">
            <h1 className="sub-title-font-size-for-contact-us-dark">{TermsandConditions[2].title}</h1>
            <p>{TermsandConditions[2].description}</p>
          </div>
          <div className="">
            <h1 className="sub-title-font-size-for-contact-us-dark">{TermsandConditions[3].title}</h1>
            <p>{TermsandConditions[3].description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
