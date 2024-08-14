"use client";
import React, { useEffect, useState } from "react";
// import { GET_CONTACT } from "../../service/admin.service";
// import { downloadAPK } from "../../Helpers/DownloadAPK";
import "../globals.css";
import Link from "next/link";
import HeaderSvg from "../../Helpers/HeaderSvg";
import Image from "next/image";
const Section2 = () => {
  const [getData, setgetData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const getResponseData = async () => {
    // const res = await GET_CONTACT();
    // setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isIPhoneXR = windowWidth === 414 || windowWidth === 896;

  const download = async () => {
    // await downloadAPK();
  };

  return (
    <>

    </>
  );
};

export default Section2;
