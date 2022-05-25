import { useState } from "react";
import { Button, Space } from "antd";

import Paragraph from "antd/es/typography/Paragraph";

export default function EvaluateView(message) {
  return (
    <>
      <Space direction="vertical">
        {console.log(message)}

        <Paragraph>Wie möchten Sie ihre Fortschritte bewerten?</Paragraph>
        <Button>MIT JA ODER NEIN</Button>
        <Button>MIT EINEM BEITRAG</Button>
      </Space>
    </>
  );
}
