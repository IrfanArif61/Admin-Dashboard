import React, { useState } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = ({ addUser, inputs }) => {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    age: "",
    email: "",
    service: "",
    status: "",
  });

  const [error, setError] = useState({
    usernameError: "",
    emailError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;

    if (!formData.username.trim()) {
      setError({ ...error, usernameError: "Username is required" });
      isValid = false;
    } else {
      setError({ ...error, usernameError: "" });
    }

    if (!formData.email.trim()) {
      setError({ ...error, emailError: "Email is required" });
      isValid = false;
    } else {
      setError({ ...error, emailError: "" });
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // addUser(formData);

      setFormData({
        id: "",
        username: "",
        age: "",
        email: "",
        service: "",
        status: "",
      });
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Service</h1>
          <div className="bottom">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <div className="submition">
                <input
                  className="upFile"
                  type="file"
                  multiple
                  onChange={(e) => {
                    console.log(e.target.files);
                  }}
                />

                <button onSubmit={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
