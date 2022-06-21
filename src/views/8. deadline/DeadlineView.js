import { DatePicker, Select, Space, Switch, TimePicker } from "antd";
import { Option } from "antd/es/mentions";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import {
  onChangeStartDate,
  onSearch,
  onChangeZieltermin,
  onChangePriority,
} from "./DeadlineViewFunctions";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { deadline_state, time_table_state } from "../../atoms/atoms";

export default function DeadlineView() {
  const [zieltermin, setZieltermin] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [priority, setPrioioty] = useState("");
  const format = "HH:mm";

  const [deadline, setdeadline] = useRecoilState(deadline_state);

  let object = {
    start_date: startDate,
    target_date: null,
    reminder_time: null,
    priority: null,
  };

  //   function onSearch(val) {
  //     console.log("search:", val);
  //   }
  //   const onChangeStartDate = (date, dateString) => {
  //     console.log(date);
  //     object.start_date = date;
  //   };

  //   function onChangeZieltermin(checked) {
  //     console.log(`switch to ${checked}`);
  //     setZieltermin(checked);
  //     if (zieltermin) {
  //       return <Paragraph>Anfangsdatum wählen</Paragraph>;
  //     }
  //   }

  //   function onChangePriority(priority) {
  //     object.priority = priority;
  //   }

  return (
    <>
      {" "}
      <Space direction="vertical">
        <Space direction="horizontal">
          <Paragraph>Anfangsdatum wählen</Paragraph>
          <DatePicker
            data-testid="datePicker"
            onChange={(e) => {
              onChangeStartDate(e.$y, e.$M + 1, e.$d.getDate(), setStartDate);
            }}
          />
        </Space>

        <Space direction="horizontal">
          <Paragraph>Zieltermin</Paragraph>
          <Switch
            data-testid="switch-slider"
            onChange={() => onChangeZieltermin("", zieltermin, setZieltermin)}
          />
        </Space>

        <Space direction="horizontal">
          <Paragraph>Erinnerungszeit</Paragraph>
          <TimePicker defaultValue={moment("12:08", format)} format={format} />
        </Space>

        <Space direction="horizontal">
          <Paragraph>Priorität</Paragraph>
          <Select
            data-testid="prio"
            showSearch
            placeholder="Priority"
            optionFilterProp="children"
            onChange={() => onChangePriority(setPrioioty, "")}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
          </Select>
        </Space>
      </Space>
    </>
  );
}
