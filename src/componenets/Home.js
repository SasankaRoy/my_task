import React, { useEffect, useState } from "react";


import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./home.scss";


export const Home = () => {

  const navigate = useNavigate();

  const [userInt, setuserInt] = useState({
    userid: "",
    password: "",
  });
  const [apiData, setApiData] = useState([]);


  const { userid, password } = userInt;


  // setting and getting user Inputs.........>

        const InputHandle = (event) => {
          const { name, value } = event.target;
          setuserInt({ ...userInt, [name]: value });
        };

// <...............setting and getting user Inputs

// fetching the api data and setting it into useState...........>

        const fetchData = async () => {
          const res = await fetch("https://retoolapi.dev/B13laa/getusers");
          const data = await res.json();
          setApiData(data);
        };
        useEffect(() => {
          fetchData();
        }, []);

// <..................................fetching the api data and setting it into useState

// checking user here........................>>>>>>

      const auth = () => {
        if (!userid || !password) {
          toast.error("Plz enter userId and password!!");
        } else {
          const user_id = apiData.filter((curr) => {
            return curr.name === userid && curr.password === password;
          });

          if (user_id.length === 0) {
            toast.error("User Not Found! Plz check the fields!!");
          } else {
            navigate("/employesses");  //navigatting to another page here
            // console.log(user_id);
          }
        }
      };

// <<<<<<...............................checking user here


  return (
    <>
      <div className="container">
        <h1 className="heading">Demo UserLogin </h1>
        <div className="int">
          <input
            type="text"
            placeholder="User Name"
            name="userid"
            className="ints"
            value={userid}
            onChange={InputHandle}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            className="ints"
            value={password}
            onChange={InputHandle}
          />
        </div>
        <button className="btn" onClick={auth}>
          Login
        </button>
      </div>
    </>
  );
};
