import axios from "axios";
import commonService from "./commonService";

const getService = axios.create({
  baseURL: "http://localhost:3080",
  timeout: 60000,
});

export default getService;
export { commonService };
