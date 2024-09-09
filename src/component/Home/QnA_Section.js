"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
const QnA_Section = () => {
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
      <div className="container-fluid test-2">
        {/* <img
              src={doller}
              alt=""
            /> */}
        <h4 className="text-center text-bold">Frequently Asked Questions</h4>
        {/* <img
              src={doller}
              alt=""
            /> */}
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
