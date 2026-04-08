import { Col, Divider, Form, Input, Row, Typography } from "antd"
import { ReadOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useTranslation } from "react-i18next";
const Education = () => {
  const { t } = useTranslation();
  const [schoolNumber, setSchoolNumber] = useState('')
  return (
    <>
    <Divider titlePlacement="start" className="!p-0 text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><ReadOutlined />{t("education")}</Divider>
        <Row gutter={15}>
          <Col span={8}>
            <Typography.Text className="mainFont text-[var(--main-color)]">{t("school_name")}</Typography.Text>
            <Form.Item name="school_name" rules={[{required:true,message:"Please enter school name"}]}>
              <Input type="text" placeholder="Alisher Navoiy" />
            </Form.Item>
          </Col>
          <Col span={8}>
          <Typography.Text className="mainFont text-[var(--main-color)]">{t("school_number")}</Typography.Text>
            <Form.Item name="school_number" rules={[{required:true,message:"Please enter school number"}]}>
              <Input
               onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setSchoolNumber(val);
              }}
              value={schoolNumber}
              maxLength={4} 
              placeholder="40" />
            </Form.Item>
          </Col>
          <Col span={8}>
          <Typography.Text className="mainFont text-[var(--main-color)]">{t("higher_education_name")}</Typography.Text>
            <Form.Item name="higher_education_name">
              <Input
                placeholder="TATU Kampyuter injinering" />
            </Form.Item>
          </Col>
        </Row>
    </>
  )
}

export default Education