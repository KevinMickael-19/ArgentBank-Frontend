import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Account from "../components/Account";
import { getUserProfile, updateUserName } from "../store/authActions";

function Profile() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [inputError, setInputError] = useState("");

  const startEditing = () => {
    setNewUserName(user?.userName || "");
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!newUserName.trim()) {
      setInputError("The username can't be empty");
      return;
    }
    setInputError("");
    try {
      await dispatch(updateUserName({ userName: newUserName, token })).unwrap();
      setIsEditing(false);
    } catch {
      //Gestion erreur Redux
    }
  };

  useEffect(() => {
    dispatch(getUserProfile(token));
  }, [dispatch, token]);

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <div className="edit-user-content">
            <h1>Edit user info</h1>
            <div className="edit-input-wrapper">
              <label>User name:</label>
              <input
                type="text"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>
            <div className="edit-input-wrapper">
              <label> First name</label>
              <input type="text" value={user?.firstName || ""} disabled />
            </div>
            <div className="edit-input-wrapper">
              <label> Last name</label>
              <input type="text" value={user?.lastName || ""} disabled />
            </div>
            {inputError && <p>{inputError}</p>}
            <div className="edit-buttons">
              <button onClick={handleSave}>Save</button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setInputError("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1>
              Welcome back <br />
              {user?.firstName} {user?.lastName}
            </h1>
            <button className="edit-button" onClick={startEditing}>
              {" "}
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
