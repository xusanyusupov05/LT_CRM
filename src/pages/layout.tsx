/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "antd";
import React from "react";
import { Outlet} from "react-router-dom";
import { Sidebar } from "../widgets/shared/sidebar";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  
  return (
    <Layout className="h-screen">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Content 
          className={`h-screen transition-all duration-200 overflow-auto ${
            collapsed ? "ml-[90px]" : "ml-[340px]"
          }`}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
