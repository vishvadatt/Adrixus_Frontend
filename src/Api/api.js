import axios from "axios";
const baseUrl = "http://localhost:8001/api/"

export const getUserApi = async (data) => {
    console.log("data...",data);
    const {search,pageNo,age} = data;
    // return await axios.get(`${baseUrl}user/get-users?search=${search}&pageNo=${pageNo}`);
    // return await axios.get(`${baseUrl}get-users?${search}&pageNo=${pageNo}&age=${age}`);
    return await axios.get(`https://adrixus-backend.onrender.com/api/get-users?search=${search}&pageNo=${pageNo}&age=${age}`)
}

export const userSignUpApi = async (data) => {
    return await axios.post('https://adrixus-backend.onrender.com/api/auth/signup',data);
}

export const userSignInApi = async (data) => {
    return await axios.post("https://adrixus-backend.onrender.com/api/auth/login",data);
}