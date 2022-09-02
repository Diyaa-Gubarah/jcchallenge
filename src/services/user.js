import axios from "axios";

const BASE_LOGIN_URL = "https://challenge.testing-room.com/api/v1/auth/login/";

const login = async (user) => {
  const response = await axios.post(BASE_LOGIN_URL, user);
  return response.data;
};

export default { login };
