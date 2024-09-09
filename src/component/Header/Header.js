import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container-fluid d-flex justify-content-between">
        <Image
          src={"/images/Logo_green.svg"}
          alt="Bhau777 Logo"
          width={200}
          height={300}
          layout="intrinsic"
          className="Logo_size"
        />

        <div className="col-xl-2 col-lg-1 "></div>
        <button
          class="navbar-toggler bg-tranparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
             <img
          src={"/images/Menu_Icon.svg"}
          alt="Bhau777 Logo"
          className="toggle-icon"

          layout="intrinsic"
        />
          {/* <span class="navbar-toggler-icon"></span> */}
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link link-25" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link-25"
                aria-current="page"
                href="/charts"
              >
                Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link link-25"
                aria-current="page"
                href="/howtoplay"
              >
                How To Plays
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link link-25"
                aria-current="page"
                href="/Terms"
              >
                Terms & Conditions
              </Link>
            </li>
            <li className="nav-item test">
              <button className="navbar-button float-end">Get Free App</button>
            </li>
          </ul>
          {/* <div className="col-3 ">
          <button className="navbar-button float-end">Get Free App</button>
        </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
