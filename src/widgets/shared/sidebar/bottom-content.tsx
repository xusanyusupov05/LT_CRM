import { SettingOutlined, UserOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"
import { useUserLoginGetQuery } from "../../auth/api/request"
interface BottomContentProps {
  collapsed?: boolean;
}
const BottomContent = ({ collapsed }: BottomContentProps) => {
  const { data } = useUserLoginGetQuery();

  return (
    <>
      <Flex
        justify={collapsed ? "center" : "space-between"}
        className="p-6 border-t cursor-pointer"
      >
        <Flex align="center" gap={10}>
          <UserOutlined className="text-xl text-[var(--main-color)] " />
          {!collapsed && (
            <Flex vertical>
              <Typography.Text className="mainFont text-[var(--main-color)] text-nowrap">
                {data?.username.toUpperCase()}
              </Typography.Text>
              <Typography.Text className="mainFont  text-[var(--success)] text-xs text-nowrap">
                {data?.role === 'admin' ? 'Admin Account' : 'Viewer Account'}
              </Typography.Text>
            </Flex>
          )}
        </Flex>
        {!collapsed && data?.role === 'admin' && (
          <SettingOutlined className="text-xl text-[var(--main-color)]" />
        )}
      </Flex>
    </>
  );
};

export default BottomContent