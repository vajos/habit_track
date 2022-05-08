import { Checkbox } from "antd";
const CheckboxGroup = Checkbox.Group;

export default function SliderInput(plainOptions, date) {
  // const plainOptionsss = ["Habit 1", "Habit 2", "Habit 3"];
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
        {console.log(date)}
        {/* {date} */}
        <CheckboxGroup
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            fontWeight: "20px",
            margin: "20px",
          }}
          options={plainOptions.plainOptions}
          onChange={onChange}
        />
      </div>
    </>
  );
}
