import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

interface WrapProps {
  children: React.ReactNode;
  backBtn?: React.ReactNode;
  icon?: React.ReactNode;
  returnBtnText?: string;
}
const PageWrapper = ({ children, backBtn, icon, returnBtnText }: WrapProps) => {
  const navigate = useNavigate();
  return (
    <Flex vertical className="px-8 py-4 bg-[var(--bg-sec)] mt-5 mr-5 rounded-xl shadow-lg">
      {backBtn && (
        <Flex justify="flex-start">
          <Button
            onClick={() => navigate(-1)}
            className="bg-transparent !px-0 text-xs text-[var(--txt-gray)] hover:!text-[var(--txt-gray)] border-0 hover:!bg-transparent hover:!border-0 mainFont hover:!text-[var(--primary)]"
            icon={icon}
          >
            {returnBtnText}
          </Button>
        </Flex>
      )}
      {children}
    </Flex>
  );
};

export default PageWrapper;
