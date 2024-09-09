"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { chartsData, redJodi, redPana } from "@/component/Charts/chart.config";
import { useSearchParams } from "next/navigation";

const Charts = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const title = searchParams.get("provider");
  const chartType = pathname.split("/")[2];

  const [GetCharts, setGetChart] = useState([]);

  function getChartData(categoryName, chartTitle) {



    const category = chartsData.find((cat) => {

    return  cat.category === categoryName;

    });


    if (!category) {
      return `Category '${categoryName}' not found.`;
    }

    
    

    const chart = category.charts.filter((ch) =>{ 

      const normalizedChTitle = ch.title.toString().replace(/\s+/g, "").toLowerCase();
      const normalizedChartTitle = chartTitle.toString().replace(/\s+/g, "").toLowerCase();
      return normalizedChTitle === normalizedChartTitle;
    });
    
    if (!chart) {
      return `Chart with title '${chartTitle}' not found in category '${categoryName}'.`;
    }

    return chart[0].chart;
  }

  useEffect(() => {
    const chart = pathname.split("/")[2];
    const chartname = pathname.split("/")[3].toUpperCase();

  const title = searchParams.get("provider");


    const decodedTime = decodeURIComponent(title || "");

    const result = getChartData(chart, decodedTime);


    setGetChart(result);
  }, []);

  let chart = chartType === "starline" ? redPana : redJodi;

  console.log("GetCharts", GetCharts);

  return (
    <div className="container-fluid px-3 ">
      <div className="row justify-content-center">
        <div>
          <h3 className="chart_title"> {title} </h3>
          <p className="chart_description ">
            {title} Pana Chart Satta Matka Record Old History Historical Data
            Bracket Results Chart Online Live Book Digits Numbers
          </p>
        </div>

        <button
          //  onClick={handleClick}
          className="navbar-button my-4 col-md-4"
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
                </>
              )}
            </tbody>
          </table>

          <button
            //  onClick={handleClick}
            className="navbar-button my-4 col-md-4"
          >
            Back
          </button>
          <button
            //  onClick={handleClick}
            className="navbar-button my-4 col-md-4"
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
              <path d="M348.5 233.5c5.1-5 5.2-13.2.2-18.3l-83-82.4c-2.5-2.4-5.7-3.7-9.1-3.7s-6.6 1.3-9.1 3.7l-83 82.4c-5.1 5.1-5 13.3.2 18.3s13.3 5 18.4-.1l60.9-60.8v231.3c0 7.1 5.8 12.9 13 12.9s13-5.8 13-12.9V172.6l60.9 60.8c5 5.1 13.2 5.2 18.3.2z" />
            </svg>
            Scroll Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Charts;
