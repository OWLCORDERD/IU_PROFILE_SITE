import axios from "axios";
import commonService from "./commonService";

const getService = axios.create({
  baseURL: "http://lim5570.cafe24.com:4000",
  timeout: 60000,
});

export default getService;
export { commonService };
