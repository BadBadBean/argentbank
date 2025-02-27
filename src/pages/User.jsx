import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery, useUpdateProfileMutation } from "../features/user/userApiSlice";
import { credentials } from "../features/auth/authSlice";
import Account from "../components/Account";
import Button from "../components/Button";
import accountsData from "../data/accounts.json";

export default function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const { data } = useGetProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  // Charger les infos utilisateur quand elles sont récupérées
  useEffect(() => {
    if (data?.body) {
      dispatch(credentials({ token, user: data.body }));
      setFirstName(data.body.firstName);
      setLastName(data.body.lastName);
      setUsername(data.body.userName);
    }
  }, [data, token, dispatch]);

  const handleEditClick = () => setIsEditing(true);

  const handleSave = async (event) => {
    event.preventDefault();
    const newFirstName = event.target.firstName.value.trim();
    const newLastName = event.target.lastName.value.trim();
    const newUsername = event.target.username.value.trim();

    if (newFirstName && newLastName && newUsername && token) {
      try {
        await updateProfile({ firstName: newFirstName, lastName: newLastName, userName: newUsername, token }).unwrap();
        setFirstName(newFirstName);
        setLastName(newLastName);
        setUsername(newUsername);
        setIsEditing(false);
      } catch (error) {
        console.error("Erreur mise à jour :", error);
      }
    }
  };

  return (
    <main className="dark-bg">
      {isEditing ? (
        <section className="user__header">
          <h2 className="user__header__title">Edit User Info</h2>
          <form className="user__header__form" onSubmit={handleSave}>
            <div className="input__wrapper">
              <label htmlFor="username">User Name:</label>
              <input type="text" id="username" name="username" defaultValue={username} required />
            </div>
            <div className="input__wrapper">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" defaultValue={firstName} disabled />
            </div>
            <div className="input__wrapper">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" defaultValue={lastName} disabled />
            </div>            
            <div className="user__edit__button">
              <Button type="submit" label="Save" buttonClass="edit__button" />
              <Button type="button" label="Cancel" buttonClass="edit__button" onClick={() => setIsEditing(false)} />
            </div>
          </form>
        </section>
      ) : (
        <section className="user__header">
          <h2 className="user__header__title">Welcome back, {firstName} {lastName}!</h2>
          <Button type="button" label="Edit Name" buttonClass="edit__button" onClick={handleEditClick} />
        </section>
      )}

      <section className="accounts">
        {accountsData.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
            button={<Button buttonClass="account__button" type="button" label="View transactions" />}
          />
        ))}
      </section>
    </main>
  );
}
