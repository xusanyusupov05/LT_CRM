import { useEffect, type ReactNode } from "react";
import { getLocalStorage, removeLocalStorage } from "../lib/helpers/storage";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserLoginGetQuery } from "../../widgets/auth/api/request";

type Props = { 
  permission?: string;
  children: ReactNode;
}

export function AuthProtector({ children }: Props) {
  const isAuth = getLocalStorage("auth");
  const token = getLocalStorage("token")
  const { data, isSuccess, isError } = useUserLoginGetQuery();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isError || !isAuth || !token) {
      removeLocalStorage("auth");
      navigate("/auth", { replace: true });
      return;
    }

    const parsedToken = token.replace(/^"|"$/g, "");

    if (isSuccess && data?.token && data.token !== parsedToken) {
      removeLocalStorage("auth");
      navigate("/auth", { replace: true });
    }
  }, [data, isSuccess, isError, isAuth, token, navigate]);
  

  if (isAuth !== "true") return <Navigate to="/auth" replace />;


  return <>{children}</>;
}