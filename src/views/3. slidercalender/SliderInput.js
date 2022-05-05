import moment from "moment";
import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

export default function SliderInput() {
  const plainOptions = ["Habit 1", "Habit 2", "Habit 3"];
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          height: "400px",
          padding: "20px",
          backgroundColor: "#FF0000",
          flexDirection: "column",
        }}
      >
        {moment().format("DD-MM-YYYY")}
        <CheckboxGroup
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            fontWeight: "20px",
            margin: "20px",
          }}
          options={plainOptions}
          onChange={onChange}
        />
      </div>
    </>
  );
}
