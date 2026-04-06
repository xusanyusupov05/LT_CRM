import { App as AntdApp, ConfigProvider } from "antd";
import type { ReactNode } from "react";

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter, system-ui, sans-serif",
        },
        components: {
          Table:{
            headerColor: "#1677FF",
          },
          Menu: {
            iconSize: 20,
          },
          Input: {
            paddingBlock: 5,    
          },
          Button: {
            boxShadow: "none",
            defaultHoverBg: "#ffffff",
            defaultHoverColor: "rgba(0, 0, 0, 0.88)",
            defaultHoverBorderColor: "#d9d9d9",
            defaultActiveBg: "#ffffff",
            defaultActiveColor: "rgba(0, 0, 0, 0.88)",
            defaultActiveBorderColor: "#d9d9d9",
          }
        },
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}
