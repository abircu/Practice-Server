import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [delteUsers, setDeleteUSers] = useState(users);
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
          const remaining = delteUsers.filter(
            (delteUser) => delteUser._id !== _id
          );
          setDeleteUSers(remaining);
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
            <Link to={`/update/${user._id}`}>
              <button className="btn btn-sm btn-secondary mx-2">Update</button>
            </Link>
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
