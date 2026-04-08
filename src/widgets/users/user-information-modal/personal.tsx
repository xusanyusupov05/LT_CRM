import { UserOutlined } from "@ant-design/icons"
import { Col, DatePicker, Divider, Form, Input, Row, Select, Typography } from "antd"
import { useTranslation } from "react-i18next"

const Personal = () => {
  const {t} = useTranslation()
  return (
    <>  
          <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"><UserOutlined/>{t("personal")}</Divider>
          <Row gutter={15} className="mt-3">
              <Col span={6}>
                <Typography.Text className="mainFont text-[var(--main-color)]">{t("name")}</Typography.Text>
                <Form.Item name="name" rules={[{required:true, message:"Please enter your name"}]}>
                  <Input placeholder="Akrom" />
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("surname")}</Typography.Text>
                <Form.Item name="surname" rules={[{required:true, message:"Please enter your surname"}]}>
                  <Input placeholder="Shovkatov" />
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("phone_number")}</Typography.Text>
                <Form.Item name="phone_number" rules={[{required:true, message:"Please enter your phone number"}]}>
                  <Input placeholder="+998 90 123 45 67" />
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("email")}</Typography.Text>
                <Form.Item name="email" rules={[{required:true, message:"Please enter your email"}]}>
                  <Input placeholder="your_email@gmail.com" />
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("birth_date")}</Typography.Text>
                <Form.Item name="birth_date" rules={[{required:true, message:"Please enter your birth date"}]}>
                  <DatePicker placeholder="2001.07.23" className="w-full ant-picker-cell-today ant-picker-cell-inner"/>
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("gender")}</Typography.Text>
                <Form.Item name="gender" rules={[{required:true, message:"Please enter your gender"}]}>
                  <Select placeholder={t("gender")} options={[
                    { value: 'Erkak', label: t("male") },
                    { value: 'Ayol', label: t("female") },
                  ]} />
                </Form.Item>
              </Col>
              <Col span={6}>
              <Typography.Text className="mainFont text-[var(--main-color)]">{t("is_married")}</Typography.Text>
                <Form.Item name="is_married" rules={[{required:true, message:"Please enter your is_married"}]}>
                  <Select placeholder={t("is_married")} options={[
                    { value: 'Turmush qurgan', label: t('is_married') },
                    { value: 'Turmush qurmagan', label: t('is_single') },
                  ]} />
                </Form.Item>
              </Col>
          </Row>
    </>
  )
}

export default Personal