import React from "react";
import "./errorpage.css";
import Logo from "./logo-site.png";
import { Link } from "react-router-dom";

function ErrorPage({ title }) {
  return (
    <div className="error-page">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="error">
        <h1> {title}</h1>
      </div>
    </div>
  );
}

export default ErrorPage;
