import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Auth/auth-actions";
const Login = ({ history }) => {
  const [email, setEmail] = useState("hanifikirtilli@gmail.com");
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      let response = await login({ email, password });
      if (response.data) {
        let findUser = await response.data.filter(function (item, index) {
          return item.email === email;
        });
        if (findUser) {
          window.localStorage.setItem("auth", JSON.stringify(findUser));
          dispatch({
            type: "LOGGED_IN_USER",
            payload: findUser,
          });
          history.push("/");
        }else{
            history.push("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="w-50 m-auto mt-4 border rounded p-4">
      <div class="row mb-3">
        <label for="inputEmail3" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="email"
            class="form-control"
            id="inputEmail3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small class="form-text text-danger">*Bu alan zorunludur</small>
        </div>
      </div>
      <div class="row mb-3">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPassword3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small
            class="form-text text-danger"
          >
            *Bu alan zorunludur
          </small>
        </div>
      </div>
      <div class="w-100 d-flex align-items-center justify-content-center">
        <button
          disabled={!email || !password}
          class="btn btn-primary text-center"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
