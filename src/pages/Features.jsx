import React from "react";
import styles from "../pages/Features.module.css";
import { FaSpellCheck } from "react-icons/fa";
import { SiElectronbuilder } from "react-icons/si";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdSummarize } from "react-icons/md";
import { FcTemplate } from "react-icons/fc";
import CampaignIcon from "@mui/icons-material/Campaign";
import { RiAdminFill } from "react-icons/ri";
import { FaFileWord } from "react-icons/fa";
import { TbListLetters } from "react-icons/tb";

const Features = () => {
  return (
    <>
      <div className={styles.parent}>
        <div>
          <SiElectronbuilder />
          <h4>Easy Online Resume Builder</h4>
          <br />
          <p>
            Create an awesome resume in <br />
            minutes, without leaving your web <br />
            browser.
          </p>
        </div>
        <div>
          <FaSpellCheck />
          <h4>Automatic spell-checker</h4>
          <br />

          <p>
            Our built-in spell-checker takes care <br /> of the grammar for you.
            Create a <br /> resume with zero typos or errors.
          </p>
        </div>
        <div>
          <FaHelmetSafety />
          <h4>Your data is safe</h4>
          <br />

          <p>
            Your data is kept private and <br /> protected by strong 256-bit
            <br /> encryption.
          </p>
        </div>

        <div style={{ marginTop: "-65px" }}>
          <MdSummarize />
          <h4>Automatic summary generator</h4>
          <br />

          <p>
            Create a powerful resume profile or <br /> cover letter in one
            click. Writer’s block <br /> is no longer an obstacle. Try for free!
          </p>
        </div>
        <div style={{ marginTop: "-65px", marginLeft: "-28px" }}>
          <FcTemplate />
          <h4>Approved templates</h4>
          <br />

          <p>
            Professionally-designed resume <br /> templates and examples. Just
            edit and <br />
            download in 5 minutes.
          </p>
        </div>
        <div style={{ marginTop: "-65px", marginLeft: "-10px" }}>
          <CampaignIcon />
          <h4>AI pre-written phrases</h4>
          <br />

          <p>
            Use the power of AI and data <br /> choose pre-generated effective{" "}
            <br /> phrases and keywords.
          </p>
        </div>
        <div style={{ marginTop: "-65px" }}>
          <RiAdminFill />
          <h4>Optimized resumes</h4>
          <br />

          <p>
            Formats and designs are optimized for <br /> resume-filtering
            algorithms. <br /> humans see your application!
          </p>
        </div>

        <div style={{ marginTop: "-65px", marginLeft: "-25px" }}>
          <FaFileWord />
          <h4>Multi-format resume options</h4>
          <br />

          <p>
            Save your perfect resume in any <br /> common format, including
            Microsoft <br /> Word and PDF in a single click.
          </p>
        </div>
        <div style={{ marginTop: "-65px", marginLeft: "-10px" }}>
          <TbListLetters />
          <h4>Cover letters</h4>

          <br />

          <p>
            Our cover letter builder works with
            <br /> the same ease and use of <br /> templates as the resume
            creator.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
