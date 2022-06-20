import Paragraph from "antd/lib/skeleton/Paragraph";

export function onChangeStartDate(year, month, day, setStartDate) {
  console.log(year + "." + month + "." + day);
  setStartDate(year + "." + month + "." + day);
}

export function onSearch(val) {
  console.log("search:", val);
}

export function onChangeZieltermin(checked, zieltermin, setZieltermin) {
  console.log(`switch to ${checked}`);
  setZieltermin(checked);
  if (zieltermin) {
    return <Paragraph>Anfangsdatum wählen</Paragraph>;
  }
}
export function onChangePriority(setPrioioty, priority) {
  setPrioioty(priority);
}
