"use client";
import { faqData } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { Accordion } from "react-bootstrap";
const QnA_Section = () => {
  return (
    <>
      <div className="container-fluid test-2">
        <div className="heding-sec heading-sec-custom  d-flex text-center justify-content-center align-items-center">
          <Image src={"/images/Star.svg"} alt="" width={30} height={30} />
          <h2 className="mb-0 ms-2 me-2 font-700">
            Frequently Asked Questions
          </h2>
          <Image src={"/images/Star.svg"} alt="" width={30} height={30} />
        </div>
        <div className="row">
          <div className="col-12">
            <div class="accordion" id="accordionExample">
              {faqData.map((item, index) => {
                return (
                  <Accordion flush key={index}>
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header> {item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QnA_Section;
