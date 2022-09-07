import axios from "axios";



class AuthService {

  register(username, email, password) {
    return axios.post("auth/signup", {
      username,
      email,
      password,
    });
  }

  async login(email, password) {
    const { data } = await axios.post("/auth/login", {
      email,
      password,
    });
    return data;
  }

  // async googleLogin(token) {
  //   const { data } = await API.post("/auth/google", {
  //     token,
  //   });
  //   return data;
  // }

  // logout() {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('expiresAt')
  // }

  // forgotPassword(email) {
  //   return API.post("/auth/forgot-password", {
  //     email,
  //   });
  // }

  // checkToken(token, email) {
  //   return API.post("auth/check-token", {
  //     token,
  //     email,
  //   });
  // }

  // resetPassword(token, email, password, password2) {
  //   return API.post("auth/reset-password", {
  //     token,
  //     email,
  //     password,
  //     password2,
  //   });
  // }

  // getCurrentUser() {
  //   return API.get("/users/profile");
  // }
}

export default new AuthService();