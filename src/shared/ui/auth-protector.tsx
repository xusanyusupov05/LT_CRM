import type { ReactNode } from "react";
import { getLocalStorage } from "../lib/helpers/storage";
import { Navigate } from "react-router-dom";
type Props = { 
  permission?: string;
  children: ReactNode;
}
export function AuthProtector({ children }: Props) {
  const token = getLocalStorage("auth");

  if (token !== "true") {
    return <Navigate to="/auth" replace/>;
  }

  return <>{children}</>;
}