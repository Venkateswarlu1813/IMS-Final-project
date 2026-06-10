import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://ims-final-project.onrender.com/api/",
});

export default API;