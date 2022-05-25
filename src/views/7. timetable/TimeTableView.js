import{useState} from 'react'
import { Checkbox } from 'antd';
import { Space } from 'antd';


export default function TimeTableView() {

  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onChangeWoche(e) {
    console.log(`checked = ${e.target.checked}`);
    setChecked(!checked);
  }

  return (
      <Space direction="vertical">

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Täglich</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChangeWoche}>An mehreren Tagen pro Woche</Checkbox>
            </Space>

            <Space direction="horizontal">
            <Checkbox value={!checked} disabled={checked}>Montag</Checkbox>
                <Checkbox disabled={checked}>Dienstag</Checkbox>
                <Checkbox disabled={checked}>Mittwoch</Checkbox>
                <Checkbox disabled={checked}>Donnerstag</Checkbox>
                <Checkbox disabled={checked}>Freitag</Checkbox>
                <Checkbox disabled={checked}>Samstag</Checkbox>
                <Checkbox disabled={checked}>Sonntag</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Bestimmte Tage des Monats</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Ein paar Mal pro Zeitraum</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Wiederholen</Checkbox>
            </Space>
        </Space>
  );
  
}