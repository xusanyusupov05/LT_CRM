import { Flex, Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router-dom";
import { routesListForSidebar } from "../../../shared/consts/route-list";
import TopContent from "./top-content";
import BottomContent from "./bottom-content";

type MenuItem = Required<MenuProps>["items"][number];



interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <Sider
      trigger={null}
      collapsed={collapsed}
      theme="light"
      width={330}
      className="transition-all duration-200 fixed top-0 left-0 h-screen"
    >
      <Flex className={`h-full flex-col border shadow-xl`}>
        <Flex vertical className={collapsed ? 'mb-32': 'mb-0'}>
          <TopContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </Flex>

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={routesListForSidebar as unknown as MenuItem[]}
          onClick={({ key }) => navigate(key)}
          className="flex-1 mainFont"
        />

        <BottomContent collapsed={collapsed} />
      </Flex>
    </Sider>
  );
};
