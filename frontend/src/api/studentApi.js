import axios from "axios";

const API = axios.create({
  baseURL: "https://student-management-system-b4ut.onrender.com/students",
});

export default API;
