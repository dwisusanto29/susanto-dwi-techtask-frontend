import axios from "axios";

export default axios.create({
  baseURL: "https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev",
  headers: {
    "Content-type": "application/json"
  }
});
