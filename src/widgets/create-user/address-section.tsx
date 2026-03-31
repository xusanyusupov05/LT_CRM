import { Col, Flex, Form, Input, Row, Select, Typography } from "antd";
import PersonalCardWrapper from "../../shared/ui/personal-card-wrapper";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Text } = Typography;

const regions = [
  { label: "Andijan", value: "andijan" },
  { label: "Bukhara", value: "bukhara" },
  { label: "Fergana", value: "fergana" },
  { label: "Jizzakh", value: "jizzakh" },
  { label: "Khorezm", value: "khorezm" },
  { label: "Namangan", value: "namangan" },
  { label: "Navoiy", value: "navoiy" },
  { label: "Qashqadaryo", value: "qashqadaryo" },
  { label: "Samarkand", value: "samarkand" },
  { label: "Sirdaryo", value: "sirdaryo" },
  { label: "Surkhandaryo", value: "surkhandaryo" },
  { label: "Tashkent Region", value: "tashkent_region" },
];

const AddressSection = () => {
  return (
    <Flex vertical gap={20}>
      <PersonalCardWrapper
        icon={<EnvironmentOutlined />}
        title="4. Address info"
      >
        <Row gutter={80}>
          <Col span={8}>
            <Flex vertical>
              <Text className="mainFont font-semibold">Region</Text>
              <Form.Item name="region" rules={[{required:true ,message:'Iltimos maydonlarni to`ldiring'}]}>
                <Select options={regions} placeholder="Select region" />
              </Form.Item>
            </Flex>
          </Col>

          <Col span={8}>
            <Flex vertical>
              <Text className="mainFont font-semibold">Street</Text>
              <Form.Item name="street" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                <Input type="text" placeholder="Amir Temur street" />
              </Form.Item>
            </Flex>
          </Col>

          <Col span={8}>
            <Flex vertical>
              <Text className="mainFont font-semibold">House Number</Text>
              <Form.Item name="house_number" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                <Input type="text" placeholder="e.g. 60" />
              </Form.Item>
            </Flex>
          </Col>
        </Row>
      </PersonalCardWrapper>
    </Flex>
  );
};

export default AddressSection;
