"use client";
import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";

const Game_Rates = () => {


  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMERATES();
    setgetData(res.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);


  

  
  return (
    <>
      <div className="container-fluid test-2">
        <div className="game-rate-container">
          <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
            {/* <img
              src={doller}
              alt=""
            /> */}
            <h4 className="text-center text-bold">Game Rates</h4>

            {/* <img
              src={doller}
              alt=""
            /> */}
          </div>
          <div className="row custom-card  primary-border ">
            {getData.map((items, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  style={{ marginTop: "10px" }}
                  className="border-card text-center"
                >
                  <h4 className="color-primary">{items.gameName}</h4>
                  <h4 className="font-400"> 1 RS KA {items.gamePrice}</h4>
                </div>
              </div>
            ))}
          </div>
          {/* <Section4 /> */}
        </div>
      </div>
    </>
  );
};

export default Game_Rates;
