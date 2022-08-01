import React from "react";
import Slider from "react-slick";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import "./Collections.css"


// React slick slider
const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}


const Collections = ({ collectionList }) => {

  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">Explore curated lists of top restaurants, cafes,
            pubs, and bars in Bengaluru,
            based on trends
          </div>
          <div className="collection-locations">
            <div>All collections in Bengaluru</div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {collectionList.map((item) => {
            return (
              <div>
                <div className="collection-cover">
                  <img src={item.cover} className="collection-img" alt={item.title} />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i className="fi fi-rr-caret-right absolute-center"></i>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Collections;