import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HabitsDaily from "./HabitsDaily";
import "./Carousel.css";
import { Button } from "@mui/material";
import HabitBox from "./HabitBox";

const PrevButton = () => {
  return <Button />;
};
const NextButton = () => {
  return <Button />;
};

export default class Carousel extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      dots: false,
      initialSlide: 1,
      className: "center",
      centerMode: true,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      // prevArrow: PrevButton(),
      // nextArrow: NextButton(),
    };

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const data = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
      <div style={{ margin: "70px" }}>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {data.map((key, x) => {
            // console.log(key);
            return (
              <div
                key={key}
                style={{
                  width: "50%",
                  height: "50vh",
                  backgroundColor: "blue",
                }}
              >
                <p>
                  {date - 1 + x}.{month}.{year}
                </p>
                {/* <HabitsDaily /> */}
                <HabitBox />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
