import React from "react";
import { useState } from "react";
import "./AddUsers.css";
import axios from "axios";
const AddUsers = () => {
  let [userData, setUserData] = useState({
    name: "",
    mobile: "",
    password: "",
    content: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  let onSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:5000/adduser", userData);
      console.log("data add succssfully",response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sectt">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            placeholder="enter ur name "
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile </label>
          <input
            type="text"
            placeholder="enter ur mobile "
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="text"
            placeholder="enter ur password "
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label htmlFor="content">Content </label> */}
          <textarea
            type="text"
            placeholder="Write Some Content "
            name="content"
            value={userData.content}
            onChange={handleChange}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddUsers;
