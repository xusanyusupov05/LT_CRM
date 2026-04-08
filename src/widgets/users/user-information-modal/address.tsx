import { PushpinOutlined } from "@ant-design/icons"
import { Col, Divider, Form, Input, Row, Select, Typography } from "antd"
import { useTranslation } from "react-i18next";

function Address() {
    const { t } = useTranslation();
    const regions = [
  { value: "Toshkent_vil", label: t("tashkent_vil") },
  { value: "Toshkent_sh", label: t("tashkent_sh") },
  { value: "Andijon", label: t("andijon") },
  { value: "Fargona", label: t("fargona") },
  { value: "Namangan", label: t("namangan") },
  { value: "Samarqand", label: t("samarqand") },
  { value: "Buxoro", label: t("buxoro") },
  { value: "Xorazm", label: t("xorazm") },
  { value: "Qashqadaryo", label: t("qashqadaryo") },
  { value: "Surxondaryo", label: t("surxondaryo") },
  { value: "Jizzax", label: t("jizzax") },
  { value: "Sirdaryo", label: t("sirdaryo") },
  { value: "Navoiy", label: t("navoiy") },
];
    return (
        <>
          <Divider titlePlacement="start" className="text-lg mainFont font-semibold !text-[var(--main-color)] custom-divider"> <PushpinOutlined />Address</Divider>
            <Row gutter={15}>
              <Col span={6}>
                <Typography.Text className="mainFont text-[var(--main-color)]">{t("region")}</Typography.Text>
                <Form.Item name="region" rules={[{required:true,message:"Please select region"}]}>
                  <Select
                    placeholder={t("tashkent_vil")}
                    options={regions}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Typography.Text className="mainFont text-[var(--main-color)]">{t("city")}</Typography.Text>
                <Form.Item name="city" rules={[{required:true,message:"Please enter city"}]}>
                  <Input type="text" placeholder='Mirobod tumani' />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Typography.Text className="mainFont text-[var(--main-color)]">{t("street")}</Typography.Text>
                <Form.Item name="street" rules={[{required:true,message:"Please enter street"}]}>
                  <Input type="text" placeholder="Yangi yo'l" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Typography.Text className="mainFont text-[var(--main-color)]">{t("house_number")}</Typography.Text>
                <Form.Item name="house_number" rules={[{required:true,message:"Please enter house number"}]}>
                  <Input type="text" placeholder="12" />
                </Form.Item>
              </Col>
            </Row>
        </>
    )
}

export default Address