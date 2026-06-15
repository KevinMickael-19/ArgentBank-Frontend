import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import { getUserProfile } from "../store/authActions";
import EditNameForm from "../components/EditNameForm";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <EditNameForm onCancel={() => setIsEditing(false)} />
        ) : (
          <>
            <h1>
              Welcome back <br />
              {user?.firstName} {user?.lastName}
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </>
        )}
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
