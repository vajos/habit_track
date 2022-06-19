import{useState} from 'react'
import { Checkbox, Button } from 'antd';
import { Space,  Menu, Dropdown, } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import { DatePicker } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';


import Paragraph from 'antd/es/typography/Paragraph';
import {useRecoilState} from "recoil";
import {time_table_state} from "../../atoms/atoms";


export default function TimeTableView() {

    const [checked, setChecked] = useState(true);
    const [dateHandler,setdateHandler] = useState([]);

    const [stateInfo, setStateInfo] = useRecoilState(time_table_state);


    const handleChange = () => {
        setChecked(!checked);
    };

    function onChange(e) {
        console.log(`taeglich = ${e.target.checked}`);
    }

    function onChangeWeek(e) {
        console.log(`mehrere Tage in der Woche = ${e.target.checked}`);
        setChecked(!checked);
    }

    function onChangeDate(date, dateString) {
        //onsole.log(date, dateString);
        //console.log(dateString);
        setdateHandler([...dateHandler, dateString]);
    }
    const navigate = useNavigate();
    const testHandler = (e) => {
        //sethabit_name(input);
        navigate("/deadline")
    } 
       const loginHandler = (e) => {
        navigate("/login")
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
                <Checkbox disabled={checked}>Montag</Checkbox>
                <Checkbox disabled={checked}>Dienstag</Checkbox>
                <Checkbox disabled={checked}>Mittwoch</Checkbox>
                <Checkbox disabled={checked}>Donnerstag</Checkbox>
                <Checkbox disabled={checked}>Freitag</Checkbox>
                <Checkbox disabled={checked}>Samstag</Checkbox>
                <Checkbox disabled={checked}>Sonntag</Checkbox>
            </Space>

            <Space direction="horizontal">
                {/* <Checkbox onChange={onChangeDate}>Bestimmte Tage des Monats</Checkbox> */}
            </Space>

            <Space direction="horizontal">
                <Paragraph>Bestimmte Tage des Monats</Paragraph>
                <DatePicker onChange={onChangeDate} />
                {dateHandler.map(x=><p>{x}</p>)}
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Ein paar Mal pro Zeitraum</Checkbox>
            </Space>

            <Space direction="horizontal">
                <Checkbox onChange={onChange}>Wiederholen</Checkbox>
            </Space>
            <Space direction="horizontal">
                    <Button onClick={testHandler} >Weiter</Button>
            </Space>
            <Space direction="horizontal">
                    <Button onClick={loginHandler} >WeiterLogin</Button>
            </Space>
        </Space>
    );

}