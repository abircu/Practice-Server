import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUser(newUsers);
        form.reset();
      });
  };

  return (
    <>
      <h1>users management system</h1>
      <h4> total user:{users.length}</h4>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Enter your name" />
        <br />
        <input type="email" name="email" id="" placeholder="Enter your email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID No:{user.id}</p>
          <h3>Name:{user.name}</h3>
          <h6>Email:{user.email}</h6>
        </div>
      ))}
    </>
  );
}

export default App;
