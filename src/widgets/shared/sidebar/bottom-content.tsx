import { SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"

interface BottomContentProps {
  collapsed?: boolean;
}

const BottomContent = ({ collapsed }: BottomContentProps) => {
  return (
    <>
      <Flex
        justify={collapsed ? "center" : "space-between"}
        className="p-6 border-t cursor-pointer"
      >
        <Flex align="center" gap={10}>
          <UserOutlined className="text-xl text-[var(--primary)] " />
          {!collapsed && (
            <Flex vertical>
              <Typography.Text className="mainFont text-[var(--primary)] text-nowrap">
                Xusan yusupov{" "}
              </Typography.Text>
              <Typography.Text className="mainFont  text-[var(--success)] text-xs text-nowrap">
                Admin Account
              </Typography.Text>
            </Flex>
          )}
        </Flex>
        {!collapsed && (
          <SettingOutlined className="text-xl text-[var(--primary)]" />
        )}
      </Flex>
    </>
  );
};

export default BottomContent