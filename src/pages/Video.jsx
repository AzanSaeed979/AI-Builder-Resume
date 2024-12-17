import React from "react";
import ReactPlayer from "react-player";
import styles from '../pages/Video.module.css'

const Video = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        So much more than a resume builder
      </h1>
      <ReactPlayer
        style={{ marginLeft: "20%", marginTop: "50px" }}
        url="https://youtu.be/1rzhcES14mo"
        controls
        width="600px"
        height="300px"
      />
      <p style={{ textAlign: "center", lineHeight: "15px", marginTop: "15px" }}>
        Your job starts with a resume, but what about the interview? When you{" "}
        <br />
        build your resume, you also get access to 18 powerful career tools. It’s{" "}
        <br />
        the complete career toolkit, all in one place. If you’re here, you’re
        already <br /> on the way up.
      </p>
      <button className={styles.buttons}>Explore your potential</button>
    </div>
  );
};

export default Video;
