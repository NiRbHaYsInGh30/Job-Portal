import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();
  if (!isSignedIn && isLoaded && isSignedIn !== undefined){
    return <Navigate to="/?sign-in=true"/>
  }
     return <div></div>;
};

export default ProtectedRoutes;
