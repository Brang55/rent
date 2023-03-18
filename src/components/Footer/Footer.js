import SocialMedia from "../SocialMedia/SocialMedia";

import styles from "./Footer.module.css";

import FooterLogo from "./images/logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerLogo}>
          <img src={FooterLogo} alt="" />
        </div>
        <div className={styles.infoHolder}>
          <span className={styles.strItem}>
            345 Faulconer Drive, Suite 4 Charlottesville, CA, 12345
          </span>
          <span className={styles.phoneItem}>(123) 456-789</span>
          <span className={styles.faxItem}>(123) 456-789</span>
          <SocialMedia />
        </div>
        <div className={styles.footerMenu}>
          <nav>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Help</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li className={styles.rightsRes}>
                <span>
                  Copyright &#169; 2020 Minimumlivingcost. All rights reserved
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
