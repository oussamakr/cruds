import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [validation_user, setvalidation_user] = useState(false);
  const [validation_p, setValidation_p] = useState(false);

  const navigate = useNavigate();
  const handellogin = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/posts")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        const newArray = resp.filter(function (el) {
          return el.id === username && el.password === password;
        });
        if (newArray.length === 0) {
          toast.error("Failed login ");
        } else {
          toast.success("successfuly login");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-3">
        <form className="container" onSubmit={handellogin}>
          <div className="card">
            <div className="card-header ">
              <h1>Login</h1>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label className="label">
                  User name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  id="user"
                  onMouseDown={() => setvalidation_user(true)}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="form-control"
                />
                {username.length === 0 && validation_user && (
                  <span className="text-danger">
                    Please enter your user name
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="label">
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  id="pass"
                  onMouseDown={() => setValidation_p(true)}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
                {password.length === 0 && validation_p && (
                  <span className="text-danger">
                    Please enter your PAssword
                  </span>
                )}
              </div>
            </div>
            <div className="card-header">
              <button type="submit" className="btn btn-primary me-2">
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-danger mt-2"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
