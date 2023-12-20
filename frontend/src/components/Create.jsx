import { useState } from "react";
// import { json } from "react-router-dom";
import axios from "axios"

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
      const adduser = { name, email, age };

  // console.log(name);
  const handlesubmit =async(e)=>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/create",adduser)
    } 
    catch (error) {
      console.log(error);
    }
  }
  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  //   const adduser = { name, email, age };

  //   const response = await fetch("http://localhost:5000", {
  //     method: "POST",
  //     body: JSON.stringify({adduser}),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });


  //   const results = await response.json();
  //   console.log(results);
    
  //   if (!response.ok) {
  //     // Handle the error, e.g., log it or show a user-friendly message
  //     console.log(results.error);
  //     console.error(`HTTP error! Status: ${response.status}`);
  //     return;
  //   }
  // };
  return (
    <form
      className=" m-4 "
      // action="POST"
      onSubmit={
        handlesubmit
      }
    >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Create;


