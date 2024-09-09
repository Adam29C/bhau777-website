import Link from "next/link";
import React from "react";

const ChartsDetails = ({ title, data, chart_color, route }) => {
  const Details = (route, name) => {
    if (route === "jodi") {
      return `charts/jodi/${name.replace(/\s+/g, "")}`;
    } else if (route === "pana") {
      return `charts/pana/${name.replace(/\s+/g, "")}`;
    } else if (route === "starline") {
      return `charts/starline/${name.replace(/\s+/g, "")}`;
    } else if (route === "jackpot") {
      return `charts/jackpot/${name.replace(/\s+/g, "")}`;
    }
  };

  return (
    <div>
      <div className="container-fluid test-2 ">
        <div className="row">
          <div className="col-12">
            <h2 className=" chart-title  " style={{ color: chart_color }}>
              {title}
            </h2>

            {data &&
              data.map((items) => {
                let abc = Details(route, items.providerName);
                return (
                  <>
                    <div className="col-xl-12 col-md-12 w-100 mb-3">
                      <div className="shadow card rounded border-0 timetable">
                        <div
                          className="card-body"
                          style={{ textAlign: "center" }}
                        >
                          <h4 className="left-border m-0 p-1">
                            <Link
                              href={{
                                pathname: abc, 
                                query: { provider: items.providerName }, 
                              }}
                            
                              className="Chart-Link m-0"
                            >
                              {items.providerName.toUpperCase()}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsDetails;
