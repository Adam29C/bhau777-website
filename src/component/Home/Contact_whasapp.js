"use client";
import React,{useState , useEffect} from "react";
import { GET_CONTACT } from "../../service/admin.service";
// import { downloadAPK } from "../../Helpers/DownloadAPK";
import Link from "next/link";

const Contact_Wp = () => {
  const [getData, setgetData] = useState([]);



  const getResponseData = async () => {
    const res = await GET_CONTACT();
    setgetData(res.data[0]);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-items-center  padding-gamerate">
          <div className=" col-sm-5 text-center">
            <h4 className="color-primary">Connect with phone call</h4>
            <h1
              className="display-5 fw-bolder color-primary roboto-light"
              style={{ fontSize: "2rem" }}
            >
              +91  {getData && getData.number}
            </h1>
          </div>
          <div className="col-sm-6">
            <div className="contact-right gap-3 contact-btn">
              <Link className="Call-button" href={`tel:+91${getData && getData.number}`}>
                <i className="fa fa-phone me-2" aria-hidden="true" />
                Call Now
              </Link>
                <Link className="whatspp-button" href={`https://wa.me/+91${getData && getData.number}`}>
                  <i className="fa fa-whatsapp me-2" aria-hidden="true" />
                  WhatsApp
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Wp;
