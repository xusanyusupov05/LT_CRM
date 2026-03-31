import { Flex } from "antd";
import TopContent from "../../../widgets/auth/top-content";
import AuthForm from "../../../widgets/auth/auth-form";

const Auth = () => {
  return (
    <Flex vertical>
      <TopContent />
      <AuthForm />
    </Flex>
  );
};

export default Auth;
