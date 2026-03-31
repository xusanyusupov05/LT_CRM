import { RouterProvider } from "react-router-dom";
import { route } from '../../shared/lib/react/route' 

export const RouterProviderWrapper = () => {
  return <RouterProvider router={route} />;
};
