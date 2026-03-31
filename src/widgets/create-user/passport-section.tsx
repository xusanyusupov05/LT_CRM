import { Col, Flex, Form, Input, Row, Typography } from "antd";
import PersonalCardWrapper from "../../shared/ui/personal-card-wrapper";
import { FilePptOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PassportSection = () => {
  return (
    <>
      <Flex vertical>
        <PersonalCardWrapper
          icon={<FilePptOutlined className="text-xl text-[var(--primary)] " />}
          title="2.Documents"
        >
          <Row gutter={80}>
            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Passport Series</Text>
                <Form.Item name="passport_series" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input placeholder="AA" maxLength={2} style={{ textTransform: "uppercase" }}/>
                </Form.Item>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Passport Number</Text>
                <Form.Item name="passport_number"  rules={[{required:true, pattern: /^[0-9]+$/,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input placeholder="1234567" maxLength={7} />
                </Form.Item>
              </Flex>
            </Col>
            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Place of Issue</Text>
                <Form.Item name="place_Issue" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input  placeholder="Uzbekistan (Toshkent,Uch tepa) " />
                </Form.Item>
              </Flex>
            </Col>
          </Row>
        </PersonalCardWrapper>
      </Flex>
    </>
  );
};

export default PassportSection;
