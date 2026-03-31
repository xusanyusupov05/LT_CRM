import { Flex, Form, Input, Typography } from "antd";
import PersonalCardWrapper from "../../shared/ui/personal-card-wrapper";
import { BranchesOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const { Text } = Typography;

const FamilySection = () => {
  return (
    <Flex vertical>
      <PersonalCardWrapper
        icon={<BranchesOutlined className="text-xl text-[var(--primary)] " />}
        title="5.Family Details"
      >
        <Flex vertical>
          <Text className="mainFont font-semibold">Father & Mother name</Text>
          <Form.Item name="parents_name" rules={[{required:true,message:'Iltimos maydonlarni to`ldiring'}]}>
            <Input type="text" placeholder="Emily Brown & Sophia Williams" />
          </Form.Item>
        </Flex>
        <Flex vertical>
          <Text className="mainFont font-semibold">Children's name</Text>
          <Form.Item name="childs" rules={[{required:true, message: 'Iltimos maydonlarni to`ldiring'}]}>
            <TextArea placeholder="Enter each on a new line" />
          </Form.Item>
        </Flex>
      </PersonalCardWrapper>
    </Flex>
  );
};

export default FamilySection;
