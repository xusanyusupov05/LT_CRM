import { Col, Flex, Form, Input, Radio, Row, Space, Typography } from "antd";
import PersonalCardWrapper from "../../shared/ui/personal-card-wrapper";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const PersonalSection = () => {
  const gender = [
    { label: "Mele", value: "mele" },
    { label: "Femele", value: "femele" },
  ];
  const isMerried = [
    { label: "Married", value: "married" },
    { label: "Unmarried", value: "unmarried" },
  ];

  return (
    <>
      <Flex vertical gap={20}>
        <PersonalCardWrapper
          icon={<UserOutlined className="text-[var(--primary)] text-xl" />}
          title="1.User information"
        >
          <Row gutter={80}>
            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">First Name</Text>
                <Form.Item name="f_name" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input placeholder="e.g Alisher" />
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Last Name</Text>
                <Form.Item name="l_name" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input placeholder="e.g Usmanov" />
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Phone Number</Text>
                <Form.Item name="phone_number" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                <Space.Compact style={{ width: "100%" }}>
                  <Input style={{ width: "20%" }} value="+998" readOnly />
                  <Input
                    type="text"              
                    style={{ width: "80%" }}
                    placeholder="901234567"
                    maxLength={9}            
                    pattern="[0-9]*"         
                    inputMode="numeric"
                  />
                </Space.Compact>
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Email Address</Text>
                <Form.Item name="email" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input type="email" placeholder="alisher@example.com" />
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold">Date of Birth</Text>
                <Form.Item name="date" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Input type="date" placeholder="e.g 01.01.2000" />
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold pr-5">Gender:</Text>
                <Form.Item name="gender" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Radio.Group options={gender} />
                </Form.Item>
              </Flex>
            </Col>

            <Col span={8}>
              <Flex vertical>
                <Text className="mainFont font-semibold pr-5">Is Merried:</Text>
                <Form.Item name="merried" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
                  <Radio.Group options={isMerried} />
                </Form.Item>
              </Flex>
            </Col>
          </Row>
        </PersonalCardWrapper>
      </Flex>
    </>
  );
};

export default PersonalSection;
