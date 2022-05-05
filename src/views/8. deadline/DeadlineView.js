import {DatePicker, Select, Space, Switch, TimePicker} from 'antd';
import {Option} from "antd/es/mentions";
import Paragraph from "antd/es/typography/Paragraph";
import moment from 'moment';

import { useState } from "react";



export default function DeadlineView() {

    const [zieltermin, setZieltermin] = useState(false);
    const format = 'HH:mm';


    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    function onSearch(val) {
        console.log('search:', val);
    }


    function onChangeZieltermin(checked) {
        console.log(`switch to ${checked}`);
        setZieltermin(checked);
        if (zieltermin) {
            return <Paragraph>Anfangsdatum wählen</Paragraph>;
        }
    }

    return (
        <> <Space direction="vertical">

            <Space direction="horizontal">
                <Paragraph>Anfangsdatum wählen</Paragraph>
                <DatePicker onChange={onChange}/>
            </Space>

            <Space direction="horizontal">
                <Paragraph>Zieltermin</Paragraph>
                <Switch onChange={onChangeZieltermin}/>
            </Space>

            <Space direction="horizontal">
                <Paragraph>Erinnerungszeit</Paragraph>
                <TimePicker defaultValue={moment('12:08', format)} format={format}/>
            </Space>

            <Space direction="horizontal">
                <Paragraph>Priorität</Paragraph>
                <Select
                    showSearch
                    placeholder="Priority"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
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
