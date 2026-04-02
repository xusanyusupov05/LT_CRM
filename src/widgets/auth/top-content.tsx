import secure from "../../../public/images/auth/secure.png";
// import {Link} from "react-router-dom";
import { Flex, Image, Typography } from "antd";

const { Text } = Typography;

const TopContent = () => {
  return (
    <Flex align="center" justify="space-between" className="px-6 py-4 border-b bg-[var(--bg-sec)]!">
      <Flex align="center" gap={8}>
        <Image width={30} height={30} alt="logo" preview={false} src={secure} />
        <Text className="secondaryFont font-bold text-[18px]">Admin Portal</Text>
      </Flex>
        {/* <Link to="">Documentation</Link> */}
        <a href="https://binarybridge-bb234.tilda.ws" target="_blank" className="mainFont text-xs hover:underline">Documentation</a>
    </Flex>
  );
};

export default TopContent;