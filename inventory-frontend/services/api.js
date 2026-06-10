import axios from "axios";

const API = axios.create({
  baseURL: "https://ims-final-project.onrender.com/api/",
});

export default API;