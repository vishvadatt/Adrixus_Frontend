import axios from "axios";
const baseUrl = "http://localhost:8001/api/"

export const getUserApi = async (data) => {
    console.log("data...",data);
    const {search,pageNo,age} = data;
    // return await axios.get(`${baseUrl}user/get-users?search=${search}&pageNo=${pageNo}`);
    // return await axios.get(`${baseUrl}get-users?${search}&pageNo=${pageNo}&age=${age}`);
    return await axios.get(`http://localhost:8001/api/get-users?search=${search}&pageNo=${pageNo}&age=${age}`)
}

export const userSignUpApi = async (data) => {
    return await axios.post('http://localhost:8001/api/auth/signup',data);
}

export const userSignInApi = async (data) => {
    return await axios.post("http://localhost:8001/api/auth/login",data);
}