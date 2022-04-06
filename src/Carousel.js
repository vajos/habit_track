import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HabitsDaily from "./HabitsDaily";
import "./Carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      dots: true,
      initialSlide: 0,
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      customPaging: (i) => {
        console.log(i);
        return (
          <div style={{ width: "50px" }}>
            {date + 1}.{month}
          </div>
        );
      },
      dotsClass: "slick-dots custom-indicator",
    };

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const data = [0, 1, 2, 3];

    return (
      <div style={{ margin: "50px" }}>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {data.map((key, x) => {
            // console.log(key);
            return (
              <div
                // key={key}
                style={{
                  width: "50%",
                  height: "50vh",
                  backgroundColor: "blue",
                }}
              >
                <p>
                  {date - 1 + x}.{month}.{year}
                </p>
                <HabitsDaily />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
