"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { chartsData, redJodi, redPana } from "@/component/Charts/chart.config";
import { useSearchParams } from "next/navigation";
import { getChartData } from "@/Helpers/GetChartData";
import { MakeChartPattern } from "../../../Helpers/MakeChartPattern";
import Link from "next/link";
import {
  GET_ALL_PANA_RESULT,
  GET_ALL_JODI_CHART,
  GET_JACKPOT_JODI_CHART,
  GET_ALL_STARLINE_GAME_PANA_CHART,
} from "@/service/admin.service";

const Charts = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("provider");
  const chartType = pathname.split("/")[2];

  const [GetCharts, setGetChart] = useState([]);
  const [DynamicGetCharts, setDynamicGetChart] = useState([]);

  
  useEffect(() => {
    const chart = pathname.split("/")[2];
    const title = searchParams.get("provider");
    const decodedTime = decodeURIComponent(title || "");
    const result = getChartData(chart, decodedTime, chartsData);
    setGetChart(result);
  }, []);

  let chart = chartType === "starline" ? redPana : redJodi;

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  const getCharts = async () => {
    if (chartType === "pana") {
      const panaResponse = await MakeChartPattern(GET_ALL_PANA_RESULT, title);
      setDynamicGetChart(panaResponse.data);
    } else if (chartType === "jodi") {
      const jodiResponse = await MakeChartPattern(GET_ALL_JODI_CHART, title);

      setDynamicGetChart(jodiResponse.data);
    } else if (chartType === "jackpot") {
      const JackpotResponse = await MakeChartPattern(
        GET_JACKPOT_JODI_CHART,
        title
      );
      setDynamicGetChart(JackpotResponse.data);
    } else if (chartType === "starline") {
      const StarlineResponse = await MakeChartPattern(
        GET_ALL_STARLINE_GAME_PANA_CHART,
        title
      );
      setDynamicGetChart(StarlineResponse.data);
    }
  };

  useEffect(() => {
    getCharts();
  }, [title]);

  return (
    <>
      <div id="scroll-up"></div>
      <div className="container-fluid px-3 test-2 ">
        <div className="row justify-content-center">
          <div>
            <h3 className="chart_title"> {title} </h3>
            <p className="chart_description ">
              {title} Pana Chart Satta Matka Record Old History Historical Data
              Bracket Results Chart Online Live Book Digits Numbers
            </p>
          </div>

          <button onClick={handleClick} className="navbar-button my-4 col-md-4">
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
            Scroll Down
          </button>
          <div></div>

          <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
            <table className="table fw-bold" border="collapse">
              <thead>
                <tr>
                  {(chartType === "pana" || chartType === "starline") && (
                    <th className="cc">Date</th>
                  )}

                  <th className="cc">MON</th>
                  <th className="cc">TUE</th>
                  <th className="cc">WED</th>
                  <th className="cc">THU</th>
                  <th className="cc">FRI</th>
                  <th className="cc">SAT</th>
                  <th className="cc">SUN</th>
                </tr>
              </thead>
              <tbody>
                {chartType === "jodi" || chartType === "jackpot" ? (
                  <>
                    {GetCharts &&
                      GetCharts.map((group, groupIndex) => (
                        <tr key={groupIndex}>
                          {group.map((item) => (
                            <td className="cc">
                              <div className="kalyan-chart-number-black">
                                <span
                                  className={`cp ${
                                    redJodi
                                      .map((j) => parseInt(j))
                                      .includes(parseInt(item.value))
                                      ? "text-danger"
                                      : "text-dark"
                                  }`}
                                >
                                  {item.value}
                                </span>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}

                    {DynamicGetCharts &&
                      DynamicGetCharts.map((item1) => {
                        return (
                          <>
                            <tr key={item1.id}>
                              {item1.data.map((nestedItem) => (
                                <td key={nestedItem.id}>
                                  <div className="kalyan-chart-number-black">
                                    <span
                                      className={`cp ${
                                        redJodi
                                          .map((j) => parseInt(j))
                                          .includes(parseInt(item1.value))
                                          ? "text-danger"
                                          : "text-dark"
                                      }`}
                                    >
                                      {nestedItem.relatedData[0] &&
                                        nestedItem.relatedData[0]
                                          .winningDigitFamily}
                                      {nestedItem.relatedData[1] &&
                                        nestedItem.relatedData[1]
                                          .winningDigitFamily}
                                    </span>
                                  </div>
                                </td>
                              ))}
                            </tr>
                          </>
                        );
                      })}
                  </>
                ) : (
                  <>
                    {Object.entries(GetCharts).map(([week, days], index) => (
                      <tr key={index}>
                        <td className="cc td-width-13">
                          <div className="pana-chart-main">
                            <span className="result_date">{week}</span>
                          </div>
                        </td>

                        {Object.entries(days).map(([day, values], id) => {
                          const value =
                            chartType === "starline" ? values[0] : values[1];

                          return (
                            <td key={id} className="cc">
                              <div className="kalyan-chart-number-black">
                                <span
                                  className={`cp ${
                                    chart
                                      .map((j) => parseInt(j))
                                      .includes(parseInt(value))
                                      ? "text-danger"
                                      : "text-dark"
                                  }`}
                                >
                                  {values[0]}
                                </span>

                                <span
                                  className={`cp ${
                                    chart
                                      .map((j) => parseInt(j))
                                      .includes(parseInt(value))
                                      ? "text-danger"
                                      : "text-dark"
                                  }`}
                                >
                                  {values[1]}
                                </span>

                                <span
                                  className={`cp ${
                                    chart
                                      .map((j) => parseInt(j))
                                      .includes(parseInt(value))
                                      ? "text-danger"
                                      : "text-dark"
                                  }`}
                                >
                                  {values[2]}
                                </span>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    ))}

                    {DynamicGetCharts &&
                      DynamicGetCharts.map((item1) => (
                        <tr key={item1.id}>
                          <td className="cc td-width-13">
                            <div className="pana-chart-main">
                              <span className="result_date">
                                {item1.weekStartDay}{" "}
                              </span>
                              <span className="result_date">to</span>
                              <span className="result_date">
                                {" "}
                                {item1.weekEndDay}
                              </span>
                            </div>
                          </td>
                          {item1.data.map((nestedItem) => {
                            const value0 = nestedItem.relatedData[0]
                              ? parseInt(
                                  nestedItem.relatedData[0].winningDigitFamily
                                )
                              : null;
                            const value1 = nestedItem.relatedData[1]
                              ? parseInt(
                                  nestedItem.relatedData[1].winningDigitFamily
                                )
                              : null;
                            const combinedValue = `${value0}${value1}`;

                            const isInRedJodi = redJodi
                              .map((j) => parseInt(j))
                              .includes(parseInt(combinedValue));

                            return (
                              <td key={nestedItem.id} className="cc">
                                <div className="kalyan-chart-number-black">
                                  <span
                                    className={`cp ${
                                      isInRedJodi ? "text-danger" : "text-dark"
                                    }`}
                                  >
                                    {nestedItem.relatedData[0] &&
                                      nestedItem.relatedData[0].winningDigit}
                                  </span>
                                  <span
                                    className={`cp ${
                                      isInRedJodi ? "text-danger" : "text-dark"
                                    }`}
                                  >
                                    {nestedItem.relatedData[0] &&
                                      nestedItem.relatedData[0]
                                        .winningDigitFamily}
                                    {nestedItem.relatedData[1] &&
                                      nestedItem.relatedData[1]
                                        .winningDigitFamily}
                                  </span>
                                  <span
                                    className={`cp ${
                                      isInRedJodi ? "text-danger" : "text-dark"
                                    }`}
                                  >
                                    {nestedItem.relatedData[1] &&
                                      nestedItem.relatedData[1].winningDigit}
                                  </span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        <div className=" col-12  d-flex text-center justify-content-center">
              <Link
                //  onClick={handleClick}
                className="back-navbar-button  navbar-button  "
                href={"/charts"}
              >
                Back
              </Link>
            </div>
      </div>
      </div>


      <div id="scroll-down"></div>
    </>
  );
};

export default Charts;
