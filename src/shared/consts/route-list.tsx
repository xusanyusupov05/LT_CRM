import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import type { ReactNode } from "react";

import MainPage from "../../pages/main";
import ROUTE_PATH from "./route-path";
import MainUsers from "../../pages/users";

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

const routes = [
  {
    key: ROUTE_PATH.MAIN,
    labelKey: 'main',
    icon: <HomeOutlined />,
    element: <MainPage />,
  },
  {
    key: ROUTE_PATH.USERS,
    labelKey: 'users',
    icon: <UserOutlined />,
    element: <MainUsers />,
  },
];

export const getRoutesListForSidebar = (t: any): Menu[] => {
  return routes.map(({ labelKey, ...route }) => ({
    ...route,
    label: t(labelKey),
  }));
};

export const routesListForRouter = routes.map((route: any) => ({
  path: route.key,
  element: route.element,
  children: route.children?.map((child: any) =>
    child.index
      ? { index: true, element: child.element }
      : { path: child.key, element: child.element }
  ),
}));