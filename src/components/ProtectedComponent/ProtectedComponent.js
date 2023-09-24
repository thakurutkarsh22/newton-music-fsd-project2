import { Navigate, useNavigate } from "react-router-dom";
import { useUser } from "../../Providers/UserProvider";

// Higher order compont
function ProtectedComponent(props) {
  const { isUserLoggedIn: isAuth } = useUser();

  console.log("ProtectedComponent isUserLoggedIn", isAuth);

  const { children } = props;

  if (!isAuth) {
    // return navigate("/login");
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
}

export default ProtectedComponent;
