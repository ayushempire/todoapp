import React from "react";
import { Link } from "react-router-dom";
// import insta from "./insta.svg";

export default function Footer() {
  let footerStyle = {
    border: "1px solid lightgrey",
  };
  return (
    <>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 px-2 border-top bg-light">
        <p>© 2023 TODOAPP, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <Link
              className="link-dark"
              to="www.linkedin.com/in/ayush-amberkar-b060a7252"
              target="_blank"
            >
              <img src="\linkedin.svg" alt="linkedin" />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="link-dark"
              to="https://www.twitter.com/ayush_amberkar/"
              target="_blank"
            >
              <img src="\twitter.svg" alt="twitter" />
            </Link>
          </li>
          <li className="ms-3">
            <Link
              className="link-dark"
              to="https://www.instagram.com/lonewolf_0307/"
              target="_blank"
            >
              <img src="\insta.svg" alt="instagram" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
