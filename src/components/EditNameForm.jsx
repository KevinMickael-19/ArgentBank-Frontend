import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from "../store/authActions"

function EditNameForm({ onCancel }) {
  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.auth)
  const [newUserName, setNewUserName] = useState(user?.userName || "")
  const [inputError, setInputError] = useState("")

  const handleSave = async () => {
    if (!newUserName.trim()) {
      setInputError("The username can't be empty")
      return
    }
    setInputError("")
    try {
      await dispatch(updateUserName({ userName: newUserName, token })).unwrap()
      onCancel()
    } catch {
      // Redux gère l'erreur
    }
  }

  return (
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
        <label>First name:</label>
        <input type="text" value={user?.firstName || ""} disabled />
      </div>
      <div className="edit-input-wrapper">
        <label>Last name:</label>
        <input type="text" value={user?.lastName || ""} disabled />
      </div>
      {inputError && <p style={{ color: "red" }}>{inputError}</p>}
      <div className="edit-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => { onCancel(); setInputError("") }}>Cancel</button>
      </div>
    </div>
  )
}

export default EditNameForm