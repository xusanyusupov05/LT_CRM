// src/shared/consts/route-list.tsx
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";
import MainPage from "../../pages/main";
import MainUserTable from "../../pages/users";
import ROUTE_PATH from "./route-path";
import DetailPage from "../../pages/detail-page/index";

export interface Child {
  key?: string;
  index?: boolean;
  element: ReactNode;
}

export interface Menu {
  key: string;
  label: string;
  icon: ReactNode | null;
  element: ReactNode;
  children?: Child[];
}

// Sidebar uchun route'lar (faqat ko'rinadiganlar)
export const routesListForSidebar: Menu[] = [
  {
    key: ROUTE_PATH.MAIN,
    label: "Main",
    icon: <HomeOutlined />,
    element: <MainPage />,
  },
  {
    key: ROUTE_PATH.ADD_USER,
    label: "Users",
    icon: <UserOutlined />,
    element: <MainUserTable />,
  },
];

export const routesListForRouter = [
  ...routesListForSidebar.map((route: Menu) => ({
    path: route.key,
    element: route.element,
    children: route.children?.map((child) =>
      child.index
        ? { index: true, element: child.element }
        : { path: child.key, element: child.element }
    ),
  })),
  {
    path: "users/:id",
    element: <DetailPage />,
  },
];