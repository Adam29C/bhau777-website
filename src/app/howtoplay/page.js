"use client";
import React, { useState, useEffect } from "react";
import { GET_CONTACT } from "@/service/admin.service";
import { arr, howtoplay } from "@/Data/data";
import { SiteTitle } from "@/Config/Config";


const page = () => {
  const [getData, setgetData] = useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);


 

  return (
    <div>
      <div className="container-fluid test-2">
        <div className=" about-game-main gGTSDy">
          <div className="hzeyLF">
            <h2 className="about-title">{howtoplay[0].title}</h2>
            <p className="about-description">{howtoplay[0].descri}</p>

            <button
              onClick={handleClick}
              className="navbar-button my-4 go-to-bottom"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M348.3 295.6c-5-5.1-13.3-5.1-18.4-.1L269 356.2V124.9c0-7.1-5.8-12.9-13-12.9s-13 5.8-13 12.9v231.3l-60.9-60.8c-5.1-5-13.3-4.9-18.4.1-5 5.1-5 13.2.1 18.3l83 82.4c1.2 1.1 2.5 2 4.1 2.7 1.6.7 3.3 1 5 1 3.4 0 6.6-1.3 9.1-3.7l83-82.4c5.2-4.9 5.3-13.1.3-18.2z" />
              </svg>
              Go To Bottom
            </button>
          </div>
        </div>
        <div className="about-game-main">
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{arr && arr[0].title}:</h1>
            <ul className="iKDfcs">
              {arr &&
                arr[0].children.map((item) => {
                  return (
                    <>
                      <li className="list-style">
                        <span className="Dot-style">●</span>
                        <p>{item.description}</p>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{arr && arr[1].title}:</h1>
            <ul className="iKDfcs">
              {arr &&
                arr[1].children.map((item) => {
                  return (
                    <>
                      <li className="list-style">
                        <span className="Dot-style">●</span>
                        <p>{item.description}</p>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>

          <div className="cotnainer my-5">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-background">
                  <div className="card-body">
                    The game you played and got lucky enough to win it then
                    accordingly your points will be increased.If you wish to
                    encash the points, just apply for withdrawal request on our
                    ${SiteTitle} Mobile App.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-background">
                  <div className="card-body">
                    In case of any inconvenience regarding the transaction of
                    money OR further query then you can
                    <span>
                      WhatsApp us on
                      <span className="color-primary">
                        {" "}
                        :&nbsp; +91{getData && getData.number}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[1].title}</h1>
            <p>{howtoplay[1].descri}</p>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[2].title}</h1>
            <p>{howtoplay[2].descri}</p>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[3].title}</h1>
            <p>{howtoplay[3].descri}</p>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[4].title}</h1>
            <p>{howtoplay[4].descri}</p>
          </div>

          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{arr && arr[2].title}:</h1>
            <ul className="iKDfcs">
              {arr &&
                arr[2].children.map((item) => {
                  return (
                    <>
                      <li className="list-style">
                        <span className="Dot-style">●</span>
                        <p>{item.description}</p>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>

          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[5].title}</h1>
            <p>{howtoplay[5].descri}</p>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[6].title}</h1>
            <p>{howtoplay[6].descri}</p>
          </div>

          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{arr && arr[3].title}:</h1>
            <ul className="iKDfcs">
              {arr &&
                arr[3].children.map((item) => {
                  return (
                    <>
                      <li className="list-style">
                        <span className="Dot-style">●</span>
                        <p>{item.description}</p>
                      </li>
                    </>
                  );
                })}
            </ul>
          </div>

          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[7].title}</h1>
            <p>{howtoplay[7].descri}</p>
          </div>
          <div className="jcyUcB">
            <h1 className="sub-title-font-size">{howtoplay[8].title}</h1>
            <p>{howtoplay[8].descri}</p>
          </div>
        </div>
        <div />
      </div>
      <div id="scroll-down"></div>
    </div>
  );
};

export default page;
