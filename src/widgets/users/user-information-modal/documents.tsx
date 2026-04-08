import { IdcardOutlined } from "@ant-design/icons"
import { Col, Divider, Form, Input, Row, Typography } from "antd"
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Documents = () => {
  const { t } = useTranslation();
  const [passportSeria, setPassportSeria] = useState("");
  const [passportNumber, setPassportNumber] = useState("");

  return (
    <>
      <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><IdcardOutlined />{t("document")}</Divider>
      <Row gutter={15}>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">{t("passport_seria")}</Typography.Text>
          <Form.Item name="passport_seria" rules={[{required:true,message:"Please enter passport seria"}]}>
            <Input type="text" value={passportSeria} onChange={(e) => {
              const val = e.target.value
                .replace(/[^a-zA-Z]/g, "")
                .toUpperCase();
              setPassportSeria(val);
            }} maxLength={2} placeholder="AD" />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">{t("passport_number")}</Typography.Text>
          <Form.Item name="passport_number" rules={[{required:true,message:"Please enter passport number"}]}>
            <Input type="text" value={passportNumber}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                setPassportNumber(val);
              }}
              maxLength={7} placeholder="1386948" />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">{t("passport_issued_place")}</Typography.Text>
          <Form.Item name="passport_issued_place" rules={[{required:true,message:"Please enter place where passport was issued"}]}>
            <TextArea autoSize={{ minRows: 1, maxRows: 1 }} placeholder="Toshkent / Yakkasaroy / Ming o'rik ko'chasi / 12" />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Typography.Text className="mainFont text-[var(--main-color)]">{t("name_workplace")}</Typography.Text>
          <Form.Item name="name_workplace" rules={[{required:true,message:"Please enter name of workplace"}]}>
            <TextArea autoSize={{ minRows: 1, maxRows: 1 }} placeholder="Toshkent shahar, Guliston shahri, “Albiston Tex” MChJ, Marketing bo‘limi boshlig‘i." />
          </Form.Item>
        </Col>
      </Row>
    </>
  )
}

export default Documents