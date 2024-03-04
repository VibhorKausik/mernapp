import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Signup() {

  const [credentials, setcredentials] = useState({ name: "", email: "", password: "", Geolocation: "" })
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3100/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:credentials.name, password:credentials.password, email:credentials.email, location: credentials.Geolocation })
    });
    const json = await response.json();
    console.log(json);

    if (!json.succes) {
      alert("Enter valid Credentials");
    }

  // const onchange = (event) => {
  //     setcredentials({ ...credentials, [event.target.name]:event.target.value });
  //   }

  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name="name" Value={credentials.name} onChange={onchange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onchange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onchange} />
            <div id="emailHelp" cla className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">location</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="geolocation" value={credentials.Geolocation} onChange={onchange} />
          </div>

          <button type="submit" className=" m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </>
  )
}

