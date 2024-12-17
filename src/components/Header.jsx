import React from "react";
import logo from "../images/logo.jpg";
import styles from "../components/Header.module.css";
import { RxCaretDown } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <ul className={styles.lists}>
            <li>
              Resume Templates <RxCaretDown className={styles.icon} />
            </li>
            <li>
              Resume Examples <RxCaretDown />
            </li>
            <li>
              Cover Letter <RxCaretDown />
            </li>
            <li>
              Resources <RxCaretDown />
            </li>
            <li>
              FAQ <RxCaretDown />
            </li>
          </ul>
         <div className={styles.buttons}>
          <button className={styles.simple}>My Account</button>
          <button className={styles.common}>Build my resume</button>
          </div>
         
        </div>
        
      </div>
    </>
  );
};

export default Header;
