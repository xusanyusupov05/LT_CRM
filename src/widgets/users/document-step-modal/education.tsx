import { Col, Divider, Form, Input, Row, Typography } from "antd"
import { ReadOutlined } from "@ant-design/icons"
import { useState } from "react"

const Education = () => {
  const [schoolNumber, setSchoolNumber] = useState('')
  return (
    <>
    <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><ReadOutlined />Education</Divider>
      <Form>
        <Row gutter={15}>
          <Col span={12}>
            <Typography.Text className="mainFont text-[var(--main-color)]">School Name</Typography.Text>
            <Form.Item>
              <Input type="text" placeholder="School Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
          <Typography.Text className="mainFont text-[var(--main-color)]">School Number</Typography.Text>
            <Form.Item>
              <Input
               onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setSchoolNumber(val);
              }}
              value={schoolNumber}
              maxLength={4} 
              placeholder="School Number" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Education