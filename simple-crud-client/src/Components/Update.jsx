import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUSer = { name, email };
    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUSer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };
  console.log(loadedData);
  return (
    <div>
      <h3>Updated data:{loadedData.name}</h3>
      <form onSubmit={handleUpdate} className=" bg-gray-100 p-10">
        <input
          className="px-3 py-2 text-xl font-medium mb-6 w-[50%]"
          type="text"
          name="name"
          defaultValue={loadedData?.name}
          id=""
          placeholder="Enter your name"
        />
        <br />
        <input
          className="px-3 py-2 text-xl font-medium w-[50%] mb-6"
          type="email"
          name="email"
          defaultValue={loadedData?.email}
          id=""
          placeholder="Enter your email"
        />
        <br />
        <input className="btn btn-secondary" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
