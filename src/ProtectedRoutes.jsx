import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const auth = sessionStorage.getItem("auth-code");

  if (auth != null) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export { ProtectedRoutes };
