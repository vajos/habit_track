import { useState } from "react";
import { Carousel } from "antd";
import SliderInput from "./SliderInput";

import moment from "moment";

//DATABASE =>

export default function SliderView() {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const plainOptions = ["Habit 1", "Habit 2", "Habit 3"];
  return (
    <>
      <Carousel effect="fade">
        <div>
          <SliderInput
            plainOptions={plainOptions}
            date={moment().format("DD-MM-YYYY")}
          />
        </div>
        <div>
          <SliderInput
            plainOptions={plainOptions}
            date={moment().format("DD-MM-YYYY")}
          />
        </div>
        <div>
          <SliderInput
            date={moment().format("DD-MM-YYYY")}
            plainOptions={plainOptions}
          />
        </div>
        <div>
          <SliderInput
            date={moment().format("DD-MM-YYYY")}
            plainOptions={plainOptions}
          />
        </div>
      </Carousel>
    </>
  );
}
