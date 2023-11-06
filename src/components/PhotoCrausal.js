import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PhotoCrausal.css";

function PhotoCrausal({photo}) {
  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="crausal-item">
      <Slider {...settings}>
        {photo.map((photoItem) => {
          return (
            <div>
              <img className="poster-image"
                title="slick-carousel"
                width="100%"
                height="auto"
                src={photoItem.url}
                allowFullScreen
                alt=""
              ></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PhotoCrausal;
