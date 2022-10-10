//EMR -> Явцын үзлэг -> Өвчтөний түүх -> Эмийн хэрэглээ
import React from "react";
import { Row, Input, Button } from "antd";
import { blue } from "@ant-design/colors";

export default function Step6(props) {
  const { TextArea } = Input;

  return (
    <div>
      <Row align="middle" className="mb-1">
        <TextArea rows={3} style={{ padding: 2 }} />
      </Row>
      <Row className="mt-2">
        <Button className="mr-4" onClick={() => props.backBtn()}>
          Буцах
        </Button>
        <Button
          type="primary"
          style={{ backgroundColor: blue.primary }}
          onClick={() => props.nextBtn()}
        >
          Дараах
        </Button>
      </Row>
    </div>
  );
}
