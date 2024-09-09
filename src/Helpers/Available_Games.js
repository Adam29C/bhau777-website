import React, { useState, useEffect } from "react";
import { downloadAPK } from "./DownloadAPK";
import Modal from "./Modal";
import Link from "next/link";

const Available_Games = ({ gameName, AppUrl, title, abc }) => {
  const [show, setShow] = useState(false);
  const [RowData, setRowData] = useState([]);

  const showData = (data) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data.length > 0) {
      const result = [];
      for (const item of data) {
        if (
          weekday
            .map((day) => day.toLowerCase())
            .includes(item.gameDay.toLowerCase())
        ) {
          return item;
        }
      }
    }
  };

  const downloadFile = async () => {
    await downloadAPK();
  };
  const ShowModalData = async (item) => {
    setShow(true);
    setRowData(item);
  };

  const Details = (route, name) => {
    // if (route === "jodi") {
    //   return `charts/jodi/${name.replace(/\s+/g, "")}`;
    // } else if (route === "pana") {
    //   return `charts/pana/${name.replace(/\s+/g, "")}`;
    // } else if (route === "starline") {
    //   return `charts/starline/${name.replace(/\s+/g, "")}`;
    // } else if (route === "jackpot") {
    //   return `charts/jackpot/${name.replace(/\s+/g, "")}`;
    // }
  };

  return (
    <div>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
          <img
            src="/static/media/Star-Icon.d62883a191752f12fe0c3cdc99c2b4be.svg"
            alt=""
          />
          <h5 className="mb-0 ms-2 me-2 font-700">{title}</h5>
          <img
            src="/static/media/Star-Icon.d62883a191752f12fe0c3cdc99c2b4be.svg"
            alt=""
          />
        </div>
        <div className="container-fluid test-2">
          <div className="row">
            {gameName &&
              gameName.map((item) => {
                let abcd = Details(abc, item.providerName);

                return (
                  <>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6  col-sm-12 mb-3">
                      <div className="second-card">
                        <div className=" d-flex justify-content-between align-items-center">
                          <i
                            className="fa fa-info-circle mx-2 info_Icon"
                            aria-hidden="true"
                            onClick={() =>
                              ShowModalData(showData(item?.gameDetails))
                            }
                          />

                          <div></div>
                          <div className="card-text-main ">
                            <h3 className="color-primary">
                              {item.providerName.toUpperCase()}
                            </h3>
                            <h5 className="">{item.providerResult}</h5>
                            <h6
                              className={`mb-1 ${
                                showData(item?.gameDetails)?.message ===
                                "Close for today"
                                  ? "close-for-today"
                                  : showData(item?.gameDetails)?.message ===
                                    "Betting is running for close"
                                  ? "betting-closed"
                                  : showData(item?.gameDetails)?.message ===
                                    "Betting is running for open"
                                  ? "default-message"
                                  : "default-message"
                              }`}
                            >
                              {showData(item?.gameDetails)?.message}
                            </h6>
                          </div>
                          <div
                            className={`play-icon ${
                              showData(item?.gameDetails)?.message ===
                              "Close for today"
                                ? ""
                                : "zoom-in-zoom-out"
                            }`}
                          >
                            <a
                              href="#"
                              onClick={
                                () => downloadFile()
                                //showData(data?.gameDetails)?.message
                              }
                            >
                              <svg
                                id="video"
                                xmlns="http://www.w3.org/2000/svg"
                                width={50}
                                height={50}
                                viewBox="0 0 31.277 31.708"
                              >
                                <path
                                  id="Path_593"
                                  data-name="Path 593"
                                  d="M15.589,0A15.589,15.589,0,1,1,0,15.589,15.589,15.589,0,0,1,15.589,0Z"
                                  className="play_icon_class"
                                  transform="translate(0.098 0)"
                                  fill="#478667ff"
                                />
                                <path
                                  id="Path_590"
                                  data-name="Path 590"
                                  d="M31.179,256H0a15.589,15.589,0,1,0,31.179,0Z"
                                  transform="translate(0 -239.882)"
                                  fill="#478667ff"
                                />
                                <g
                                  id="Group_1840"
                                  data-name="Group 1840"
                                  transform="translate(11.884 8.643)"
                                >
                                  <g
                                    id="Group_1786"
                                    data-name="Group 1786"
                                    transform="translate(0 0)"
                                  >
                                    <g id="Group_1785" data-name="Group 1785">
                                      <path
                                        id="Path_591"
                                        data-name="Path 591"
                                        d="M171.741,125.324a.741.741,0,0,1-.741-.741V111.741a.741.741,0,0,1,1.175-.6l8.89,6.421a.741.741,0,0,1,0,1.2l-8.89,6.421A.74.74,0,0,1,171.741,125.324Z"
                                        transform="translate(-171 -111)"
                                        fill="#fff"
                                      />
                                    </g>
                                  </g>
                                  <g
                                    id="Group_1787"
                                    data-name="Group 1787"
                                    transform="translate(0 7.162)"
                                  >
                                    <path
                                      id="Path_592"
                                      data-name="Path 592"
                                      d="M171,256v6.421a.741.741,0,0,0,1.175.6l8.89-6.421a.741.741,0,0,0,.307-.6Z"
                                      transform="translate(-171 -256)"
                                      fill="#fff"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="bottom-sec d-flex align-items-center justify-content-center mt-2">
                          {(abc === "main" || abc === "starline") && (
                            <>
                              {abc === "main" ? (
                                <Link
                                  className="chat-btn a-tag-css"
                                  href={{
                                    pathname: `charts/pana/${item.providerName.replace(/\s+/g, "")}`,
                                    query: { provider: item.providerName },
                                  }}
                                >
                                  <span>Pana Chart</span>
                                </Link>
                              ) : abc === "starline" ? (
                                <Link
                                  className="chat-btn a-tag-css"
                                  href={{
                                    pathname: `charts/starline/${item.providerName.replace(/\s+/g, "")}`,
                                    query: { provider: item.providerName },
                                  }}
                                >
                                  <span>Pana Chart</span>
                                </Link>
                              ) : (
                                ""
                              )}
                            </>
                          )}

                          {(abc === "main" || abc === "jackpot") && (
                            <>
                              {abc === "main" ? (
                                <Link
                                  className="chat-btn a-tag-css"
                                  href={{
                                    pathname: `charts/jodi/${item.providerName.replace(/\s+/g, "")}`,
                                    query: { provider: item.providerName },
                                  }}
                                >
                                  <span>Jodi Chart</span>
                                </Link>
                              ) : abc === "jackpot" ? (
                                <Link
                                  className="chat-btn a-tag-css"
                                  href={{
                                    pathname: `charts/jackpot/${item.providerName.replace(/\s+/g, "")}`,
                                    query: { provider: item.providerName },
                                  }}
                                >
                                  <span>Jodi Chart</span>
                                </Link>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </div>
                        <hr className="mb-1" />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <Modal RowData={RowData} show={show} setShow={() => setShow(false)} />
      </div>
    </div>
  );
};

export default Available_Games;
