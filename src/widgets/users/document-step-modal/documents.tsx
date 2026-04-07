import { IdcardOutlined } from "@ant-design/icons"
import { Col, Divider, Form, Input, Row, Typography } from "antd"
import { useState } from "react";

const Documents = () => {
  const [passportSeria, setPassportSeria] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  return (
    <>
      <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><IdcardOutlined />Documents: Passport</Divider>
      <Row gutter={15}>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">Passport seria</Typography.Text>
          <Form.Item>
            <Input type="text" value={passportSeria} onChange={(e) => {
              const val = e.target.value
                .replace(/[^a-zA-Z]/g, "")
                .toUpperCase();
              setPassportSeria(val);
            }} maxLength={2} placeholder="Passport seria" />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">Passport number</Typography.Text>
          <Form.Item>
            <Input type="text" value={passportNumber}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setPassportNumber(val);
              }}
              maxLength={7} placeholder="Passport number" />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">Passport number</Typography.Text>
          <Form.Item name='higher_education'>
            <Input type="text"
              placeholder="Name of higher education" />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default Documents