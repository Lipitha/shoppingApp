import axios from "axios";
import { useState } from "react";
function UserInformation() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    phone: ""
  });
  const fetchUserInfo = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log(response.data.results[0]);
        setUser({
          name:
            response.data.results[0].name.title +
            " " +
            response.data.results[0].name.first +
            " " +
            response.data.results[0].name.last,
          email: response.data.results[0].email,
          age: response.data.results[0].dob.age,
          phone: response.data.results[0].phone
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <h1>User Information</h1>
        <button onClick={fetchUserInfo}>Fetch User Data</button>
      </div>
      {user.name !== "" ? (
        <div>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Age: {user.age}</h3>
          <h3>Phone: {user.phone}</h3>
        </div>
      ) : (
        <h4>click button to fetch user info!!!!</h4>
      )}
    </div>
  );
}
export default UserInformation;
