import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmpty } from "../config/helper";

export default function AuthLayout({ children }) {
  const navigate = useNavigate();
  let user = useSelector((state) => state.user);
  useEffect(() => {
    user = checkEmpty(user) ? user : JSON.parse(user);
    if (!user._id) {
      navigate("/signin");
    }
  }, [user]);
  return <>{children}</>;
}
