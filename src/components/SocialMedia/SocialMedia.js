import styles from "./SocialMedia.module.css";

import Fb from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Linkedin from "./images/linkedin1.png";
import YouTube from "./images/youtube.png";
import Instagram from "./images/instagram.png";
import GoogleP from "./images/googleplus.png";
import Pinterest from "./images/pinterest.png";
import Rss from "./images/rss.png";

function SocialMedia() {
  return (
    <ul className={styles.socialMedia}>
      <li>Social Media</li>
      <li>
        <img src={Fb} alt="" />
      </li>
      <li>
        <img src={Twitter} alt="" />
      </li>
      <li>
        <img src={Linkedin} alt="" />
      </li>
      <li>
        <img src={YouTube} alt="" />
      </li>
      <li>
        <img src={Instagram} alt="" />
      </li>
      <li>
        <img src={GoogleP} alt="" />
      </li>
      <li>
        <img src={Pinterest} alt="" />
      </li>
      <li>
        <img src={Rss} alt="" />
      </li>
    </ul>
  );
}

export default SocialMedia;
