import { createBrowserRouter } from "react-router-dom";
import { AuthProtector } from "../../ui/auth-protector";
import MainLayout from "../../../pages/layout";
import Auth from "../../../pages/shared/auth";
import { routesListForRouter } from "../../consts/route-list";

export const route = createBrowserRouter([
  { path: "/auth", element: <Auth /> },
  {
    element: (
      <AuthProtector>
        <MainLayout />
      </AuthProtector>
    ),
    children: routesListForRouter,
  },
]);