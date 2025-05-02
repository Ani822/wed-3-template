import image from "../../images/main_background.png";
import './Footer.scss';
import React from "react";

const Footer = () => {
  return (
    <div className="footer_main">
     <img src={image} alt="image" width={200} height={200} className="footer_image"/>

     <p className="footer_names">Tigran & Mariam</p>
    </div>
  )
}

export default Footer;