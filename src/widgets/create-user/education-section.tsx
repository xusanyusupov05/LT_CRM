import { ReadOutlined } from "@ant-design/icons";
import PersonalCardWrapper from "../../shared/ui/personal-card-wrapper";
import { Col, Flex, Form, Input, Radio, Row, Typography } from "antd";
const { Text } = Typography;

const education = [
  {label: "Yes", value: "YES"},
  {label: "No", value: "NO"},
 ]
const EducationSection = () => {
  return (
    <PersonalCardWrapper icon={<ReadOutlined />} title="3.Education">
      <Row gutter={80}>
        <Col span={8}>
          <Flex vertical>
            <Text className="mainFont font-semibold">School Name</Text>
            <Form.Item name="school" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
              <Input type="text" placeholder="A.Temur school" />
            </Form.Item>
          </Flex>
        </Col>
        <Col span={8}>
          <Flex vertical>
            <Text className="mainFont font-semibold">School Number</Text>
            <Form.Item name="school_num" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
              <Input type="number" placeholder="46" />
            </Form.Item>
          </Flex>
        </Col>
        <Col span={8}>
          <Flex vertical>
            <Text className="mainFont font-semibold">Graduation Year school</Text>
            <Form.Item name="graduation_year_school" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
              <Input type="number" placeholder="2009" />
            </Form.Item>
          </Flex>
        </Col>
        <Col span={8}>
          <Flex vertical>
            <Text className="mainFont font-semibold">Higher Education</Text>
            <Form.Item name="education" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
              <Radio.Group options={education}/>
            </Form.Item>
          </Flex>
        </Col>
        <Col span={8}>
          <Flex vertical>
            <Text className="mainFont font-semibold">Graduation Year</Text>
            <Form.Item name="graduation_year" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
              <Input type="text" placeholder="2014" />
            </Form.Item>
          </Flex>
        </Col>
      </Row>
    </PersonalCardWrapper>
  );
};

export default EducationSection;
