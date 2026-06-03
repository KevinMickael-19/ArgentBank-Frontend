import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserProfile } from "../store/authActions";

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    console.log("useEffect lancée, token:", token);
    if (!token) return;

    const verify = async () => {
      try {
        await dispatch(getUserProfile(token)).unwrap();
        setIsValid(true);
      } catch {
        setIsValid(false);
      }
    };

    verify();
  }, [dispatch, token]);

  if (!token) return <Navigate to="/login" />;
  if (isValid === null) return <div> Loadingt</div>;
  if (!isValid) return <Navigate to="/login" />;
  return children;
}

export default PrivateRoute;
