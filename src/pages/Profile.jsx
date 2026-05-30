import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import { getUserProfile } from "../store/authActions";

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(getUserProfile(token));
  }, [dispatch, token]);

  return (
    <main className=" main bg-dark">
      <div className="header">
        <h1>
          Welcome back <br />
          {user && user.firstName} {user && user.lastName}
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>

      <Account
        title="Argent Bank checking (x8949)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <Account
        title="Argent Bank Credit Card (x8949)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default Profile;
