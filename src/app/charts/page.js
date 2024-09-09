"use client";
import React, { useState, useEffect } from "react";
import {
  GET_ALL_GAMES,
  GET_ALL_STARTLINE_GAMES,
  GET_ALL_JACKPOT_GAME,
} from "../../service/admin.service";
import ChartsDetails from "@/component/ChartsDetails/ChartsDetails";

const page = () => {
  const [AppUrl, setAppUrl] = useState("");
  const [getData, setgetData] = useState([]);
  const [getStarlineData, setgetStarlineData] = useState([]);
  const [getJackpotData, setgetJackpotData] = useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {
    const res = await GET_ALL_GAMES();
    const res1 = await GET_ALL_STARTLINE_GAMES();
    const res3 = await GET_ALL_JACKPOT_GAME();

    // if (res.status) {
    setgetData(res.data);
    setgetStarlineData(res1.data);
    setgetJackpotData(res3.data);
    setAppUrl(res.appInfo);
    // }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div>
      <ChartsDetails title={"Jodi Charts "} data={getData} route="jodi" />
      <ChartsDetails
        title={"Pana Charts "}
        data={getData}
        chart_color={"#478667ff"}
        route="pana"
      />
      <ChartsDetails
        title={"StarLine Charts "}
        data={getStarlineData}
        chart_color={"#478667ff"}
           route="starline"
      />
      <ChartsDetails
        title={"Jackpot Charts"}
        data={getJackpotData}
        chart_color={"#478667ff"}
        route="jackpot"

      />
    </div>
  );
};

export default page;
