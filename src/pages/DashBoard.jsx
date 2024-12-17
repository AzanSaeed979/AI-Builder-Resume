import React from "react";
import styles from "../pages/DashBoard.module.css";
import HeroImg from "../images/hero_img.jpg";

const DashBoard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.hero_heading}>
          <h1>
            The professional resume <br />
            builder
          </h1>
          <p>
            Only 2% of resumes win. Yours will be one of them. Let´s build you a{" "}
            <br />
            resume that works.
          </p>
          <button className={styles.common}>Create my resume</button>
        </div>

        <div className={styles.hero_images}>
          <img src={HeroImg} alt="hero_img" />
        </div>
      </div>
      <div className={styles.diving}>
        <div class={styles.container}>
          <div class={styles.box}>
            <p style={{ color: "orange", fontSize: "25px" }}>39%</p>
            <p style={{ color: "blue" }}>more likely to get hired</p>
          </div>
          <div class={styles.box}>
            <p style={{ color: "orange", fontSize: "25px" }}>8%</p>
            <p style={{ color: "blue" }}>better pay with your next job</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
