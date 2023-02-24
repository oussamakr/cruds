import React, { useState } from "react";
import { toast } from "react-toastify";

// import axios from "axios";

const Register = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [adress, setAdress] = useState("");
  const [gender, setGender] = useState("Male");

  const [validation_id, setvalidation_id] = useState(false);
  const [validation_p, setValidation_p] = useState(false);
  const [validation_full, setValidation_full] = useState(false);
  const [validation_email, setvalidation_email] = useState(false);

  const handelsubmit = (e) => {
    e.preventDefault();
    let infoObject = {
      id,
      password,
      fullname,
      email,
      phone,
      country,
      adress,
      gender,
    };

    // axios.post(
    //   " http://localhost:8000/posts",
    //   {
    //     id,
    //     password,
    //     fullname,
    //     email,
    //     phone,
    //     country,
    //     adress,
    //     gender,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    fetch(" http://localhost:8000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(infoObject),
    })
      .then((res) => {
        toast.success("Succussfuly Register");

        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => {
        alert("Erreur is comming" + err.message);
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-3">
        <form className="container" onSubmit={handelsubmit}>
          <div className="card">
            <div className="card-header ">
              <h1>User register</h1>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">
                      User name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      value={id}
                      onMouseDown={() => setvalidation_id(true)}
                      onChange={(e) => setId(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                    {id.length === 0 && validation_id && (
                      <span className="text-danger">
                        Please enter your user Name
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">
                      Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
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

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">
                      Full Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      onMouseDown={() => {
                        setValidation_full(true);
                      }}
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                    {fullname.length === 0 && validation_full && (
                      <span className="text-danger">
                        Please enter your Full Name
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      onMouseDown={() => {
                        setvalidation_email(true);
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                    />
                    {email.length === 0 && validation_email && (
                      <span className="text-danger">
                        Please enter your Email
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">Country</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    >
                      <option value="Tunisia">Tunisia</option>
                      <option value="Lybia">Lybia</option>
                      <option value="Algerie">Algerie</option>
                      <option value="Marroco">Marroco</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="label">Adress</label>
                    <input
                      value={adress}
                      onChange={(e) => setAdress(e.target.value)}
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="label">Gender</label>
                    <br />
                    <input
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      name="gender"
                      value="Male"
                      className="me-1"
                    />
                    <label className="me-3">Male</label>
                    <input
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      type="radio"
                      name="gender"
                      value="Female"
                      className="me-1"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-header">
              <button type="submit" className="btn btn-primary me-2">
                Register
              </button>
              <button className="btn btn-danger">Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
