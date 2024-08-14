import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        {/* <div className="col-4"> */}
        <Image
          src={"/images/Logo_green.svg"}
          alt="Bhau777 Logo"
          width={200}
          height={300}
          layout="intrinsic"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="col-2"></div>

        {/* <div className="col-6"> */}
        <div
          className="collapse navbar-collapse mx-auto d-flex
          "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Charts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                How To Plays
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
        {/* </div> */}
        {/* <div className="col-2 "> */}
        <button className="navbar-button float-end">Get Free App</button>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Header;
