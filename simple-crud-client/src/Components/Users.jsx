import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("data deleted succesfully");
        }
      });
  };
  return (
    <div>
      <h1>users:{users.length}</h1>
      {users.map((user) => (
        <div>
          <p key={user._id}>
            {user._id}:{user.name}:{user.email}
            <button
              onClick={() => handleDelete(user._id)}
              className="btn btn-sm"
            >
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Users;
