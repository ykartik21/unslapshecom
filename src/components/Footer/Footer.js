import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <div className="footer">Copyright @ {year}</div>;
};

export default Footer;
