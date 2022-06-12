import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./Employ.scss";

// api link 'https://retoolapi.dev/GFHqAV/getemployees'
export const Employee = () => {
  const [employee, setEmploye] = useState([]);

  const fetchapi = async () => {
    const res = await fetch("https://retoolapi.dev/GFHqAV/getemployees");
    const data = await res.json();
    setEmploye(data);
    console.log(data);
  };
  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      <h1 className="head">Demo Employee Lists</h1>
      <div className="employee">
        {employee.map((curr, index) => {
          {
           
          }
          return (
            <motion.div
            whileHover={{scale:[1,1.1]}}
              whileInView={{ x: [-150, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <div className="employe__listBox" key={index}>
                <div className="company__img">
                  <img src={curr.company_logo} alt="companyImage" />
                </div>
                <div className="employe__delt">
                  <h3 className="user__name">
                    UserName:<span> {curr.name}</span>
                  </h3>
                  <h3 className="company__name">
                    Company: <span> {curr.company}</span>
                  </h3>
                  <h3 className="designation">
                    Designation:<span> {curr.designation}</span>
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
