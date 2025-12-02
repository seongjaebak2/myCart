import axios from "axios";
// Axios 객체 생성과 기본설정
export default axios.create({
  baseURL: "http://10.100.105.3:5000/api",
});
