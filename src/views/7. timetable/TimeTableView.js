import{useState} from 'react'
import { Checkbox } from 'antd';
import { Space,  Menu, Dropdown, } from 'antd';
import { DatePicker } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';


export default function TimeTableView() {

  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onChangeWeek(e) {
    console.log(`checked = ${e.target.checked}`);
    setChecked(!checked);
  }

  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }



  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );
  

  return (
      <Space direction="vertical">

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Täglich</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChangeWeek}>An mehreren Tagen pro Woche</Checkbox>
            </Space>

            <Space direction="horizontal">
            <Checkbox value={!checked} disabled={checked}>Montag</Checkbox>
                <Checkbox disabled={checked}>Dienstag</Checkbox>
                <Checkbox disabled={checked}>Mittwoch</Checkbox>
                <Checkbox disabled={checked}>Donnerstag</Checkbox>
                <Checkbox disabled={checked}>Freitag</Checkbox>
                <Checkbox disabled={checked}>Samstag</Checkbox>
                <Checkbox disabled={checked}>Sonntag</Checkbox>
                   <Dropdown overlay={menu}>
                      <a onClick={e => e.preventDefault()}>
                        <Space>
                          Hover me
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Bestimmte Tage des Monats</Checkbox>
            </Space>

            <Space direction="horizontal">
                <DatePicker onChange={onChangeDate} />
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