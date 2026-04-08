import { Layout } from "antd";
import React from "react";
import { Outlet} from "react-router-dom";
import { Sidebar } from "../widgets/shared/sidebar";
import { TopHeader } from "../widgets/shared/header";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  
  return (
    <Layout className="h-screen bg-slate-50">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout
        className={`transition-all duration-200 ${
          collapsed ? "ml-[79px]" : "ml-[329px]"
        }`}
      >
        <TopHeader />
        <Content 
          className="h-full overflow-auto p-4 transition-all duration-200"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
