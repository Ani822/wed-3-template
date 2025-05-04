import image from "../../images/footer/footer_image.jpg";
import './Footer.scss';
import React from "react";

const Footer = () => {
  return (
    <div className="footer_main">
     <img src={image} alt="image" width={200} height={200} className="footer_image"/>

     <p className="footer_names">Խաչո և Միլենա</p>
    </div>
  )
}

export default Footer;