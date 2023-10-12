import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("user added succesfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <Users></Users>
      <h1 className="text-4xl font-bold my-10">Explore mongoDB</h1>
      <div>
        <form onSubmit={handleAddUser} className=" bg-gray-100 p-10">
          <input
            className="px-3 py-2 text-xl font-medium mb-6 w-[50%]"
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
          />
          <br />
          <input
            className="px-3 py-2 text-xl font-medium w-[50%] mb-6"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email"
          />
          <br />
          <input className="btn btn-secondary" type="submit" value="Sumbit" />
        </form>
      </div>
    </>
  );
}

export default App;
