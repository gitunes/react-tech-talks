import axios from "axios";

// export const register = async (user) =>
//   await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const login =  (user) => {
  return axios.get("http://localhost:3000/users");
};

export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem("auth")) {
    let auth = JSON.parse(localStorage.getItem("auth"));
    auth.user = user;
    localStorage.setItem("auth", JSON.stringify(auth));
    next();
  }
};

