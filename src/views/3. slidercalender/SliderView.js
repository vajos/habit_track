import { useState } from "react";
import { Carousel } from "antd";
import SliderInput from "./SliderInput";

export default function SliderView() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <Carousel effect="fade">
        <div>
          <SliderInput />
        </div>
        <div>
          <SliderInput />
        </div>
        <div>
          <SliderInput />
        </div>
        <div>
          <SliderInput />
        </div>
      </Carousel>
    </>
  );
}
