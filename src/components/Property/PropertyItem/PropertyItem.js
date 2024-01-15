import { Link } from "react-router-dom";

import Bed from "./images/bed.svg";
import Shower from "./images/shower.svg";
import Size from "./images/size.svg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./PropertyItem.module.css";

function Property({
  id,
  name,
  square,
  price,
  roomType,
  city,
  description,
  status,
  deal,
  address,
  urls,
}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <li>
      {deal ? <span className={styles.deal}>{deal}</span> : ""}
      {/* <img src={urls[0]} alt="Upload Screen" className={styles.propertyImg} /> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {urls.map((url) => {
          return (
            <img src={url} alt="Upload Screen" className={styles.propertyImg} />
          );
        })}
      </Carousel>

      <Link to={`${id}`}>
        <h2 className={styles.propertyName}>
          {name}, {address}, {city}
        </h2>
      </Link>
      <span className={styles.propertyType}>
        {roomType}, square: {square}
      </span>
      <span className={styles.propertyPrice}>{`$${price}${
        deal === "For Rent" ? "/Month" : ""
      }`}</span>
      <div className={styles.roomInfo}>
        <span>
          <img src={Bed} alt="" />4
        </span>
        <span>
          <img src={Shower} alt="" />2
        </span>
        <span>
          <img src={Size} alt="" />2
        </span>
      </div>
    </li>
  );
}

export default Property;
