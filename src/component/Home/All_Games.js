import React, { useState, useEffect } from "react";
import {
  GET_ALL_GAMES,
  GET_ALL_STARTLINE_GAMES,
  GET_ALL_JACKPOT_GAME
} from "../../service/admin.service";
import Available_Games from "@/Helpers/Available_Games";

const All_Games = () => {
  const [AppUrl, setAppUrl] = useState("");
  const [getData, setgetData] = useState([]);
  const [getStarlineData, setgetStarlineData] = useState([]);
  const [getJackpotData, setgetJackpotData] = useState([]);

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
      <Available_Games
        gameName={getData}
        AppUrl={AppUrl}
        title="Available Games"
        abc='main'
      />
      <Available_Games
        gameName={getStarlineData}
        AppUrl={AppUrl}
        title="StarLine Game"
        abc="starline"
      />
      <Available_Games
        gameName={getJackpotData}
        AppUrl={AppUrl}
        title="Jackpot Game"
        abc="jackpot"

      />
    </div>
  );
};

export default All_Games;
