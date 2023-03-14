import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Dashboard/dashboard.css";
import moment from "moment";
import Pagination from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import Signin from "../Signin";
import { useDispatch, useSelector } from "react-redux";
import { getData, viewUser } from "../../Redux/Action/action";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [ages, setAges] = useState("");
  const [currentPage, setCurrentpage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(5);
  const details = useSelector((state) => state?.user?.users);
  
  const totalPages = Math.ceil(details?.length / itemPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const itemsToShow = details?.slice(startIndex, endIndex);

  const loginDetails = JSON.parse(localStorage.getItem("login"));
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(viewUser({
      search : search,
      pageNo : currentPage
    }))
  }, []);

  useEffect(() => {
    dispatch(viewUser({
      search : search,
      pageNo : currentPage,
      age : ages
    }))
  }, [search, ages]);

  const ageNumber = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50,
  ];
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear()
    navigate('/Signin')
  }
  return (
    <>
    {
      loginDetails?.token !== undefined ?
    
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "10px",
        }}
      >
        <input
          className="searchInput"
          type="text"
          placeholder="search here.."
          onChange={(e) => setSearch(e.target.value)}
        />
        Filter By Age<select
          className="AgeFilter"
          onChange={(e) => {
            console.log("e..", e.target.value);
            setAges(e.target.value);
          }}
        >
          {ageNumber.map((data, i) => (
            <option value={data} key={i}>{data}</option>
          ))}
        </select>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold" }}>
          {loginDetails?.user?.firstname}
        </span>
        <button style={{ padding: "5px",cursor : "pointer" }} onClick={logout}>Logout</button>
      </div>
      <table border={1} className="content-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>User Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Age</th>
            <th>Register Date</th>
          </tr>
        </thead>
        <tbody>
          {itemsToShow && itemsToShow?.length > 0
            ? itemsToShow.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td style={{ width: "18%" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdoYHw9ZwGYiPLsFrmgP2mHG86-wDYX0Wd0aftnqy1w&s"
                          alt=""
                          width="18%"
                          style={{ borderRadius: "18px" }}
                        />
                        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                          {data?.firstname}
                        </p>
                      </div>
                    </td>
                    <td>{data?.mobileNo}</td>
                    <td>{data?.email}</td>
                    <td>{data?.age}</td>
                    <td>{moment(data?.createdAt).format("ll")}</td>
                  </tr>
                );
              })
            : "No Data Found"}
        </tbody>
      </table>
    
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
    </div>
  : <Signin />  
  }
    </>
  );
};

export default Dashboard;
