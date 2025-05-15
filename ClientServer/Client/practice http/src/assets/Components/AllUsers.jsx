import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./AllUsers.css";
const AllUsers = () => {
  const [usersData, setUserDetails] = useState([]);
  console.log(usersData);

  useEffect(() => {
    let getuser = async () => {
      try {
        let response = await axios.get("http://localhost:5000/users");
        let { data } = response.data;

        // console.log(data);
        setUserDetails(data);
      } catch (error) {
        console.log(error);
        console.log("data faild");
      }
    };
    getuser();
  }, []);
  return (
    <div className="section">
      {usersData.map((m) => {
        return (
          <React.Fragment key={m._id}>
            <div className="contain">
              <h1>{m.name}</h1>
              <h2>{m.mobile}</h2>
              <p>{m.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllUsers;
