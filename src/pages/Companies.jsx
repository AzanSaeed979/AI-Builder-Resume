import React from "react";
import styles from "../pages/Companies.module.css";
import Booking from "../images/booking.jpg";
import Apple from "../images/apple.jpeg";
import DHL from "../images/DHL.jpeg";
import Amazaon from "../images/Amazon.png";
import AmericanExpress from "../images/american .jpeg";
import Accenture from "../images/accenture.png";
import KPMG from "../images/kpmg.png";

const Companies = () => {
  return (
    <>
      <p className={styles.paragraph}>Our Customers have been hired at:</p>

      <div className={styles.container}>
        <img src={Booking} alt="Booking" />
        <img src={Apple} alt="Apple" />
        <img src={DHL} alt="DHL" />
        <img src={Amazaon} alt="Amazaon" />
        <img src={AmericanExpress} alt="AmericanExpress" />
        <img src={Accenture} alt="Accenture" />
        <img src={KPMG} alt="KPMG" />
      </div>
    </>
  );
};

export default Companies;
