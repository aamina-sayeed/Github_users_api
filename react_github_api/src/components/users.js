import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

export const UsersList = () => {
  //useState and Effect must be inside react component always
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //need to use useEffect for async function
    const api_fetch = async () => {
      let resp = await axios.get("https://api.github.com/users");
      console.log(resp.data);
      let db = resp.data.slice(0, 10);
      setUsers(db);
    };
    api_fetch();
  }, []); //empty array means useEffect called only once
  if (!users) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      {users.map((user) => {
        return (
          <Users
            image={user.avatar_url}
            user_name={user.login}
            git={user.html_url}
            key={user.id}
          />
        );
      })}
    </div>
  );
};

export default function Users({ image, user_name, git, key,users }) {
  return (
    <section className="user_list">
      <h3>{key}</h3>
      <img src={image} alt="Image alt" />
      <h2>{user_name}</h2>
      <a href={git}>Git Profile</a>
    </section>
  );
}

