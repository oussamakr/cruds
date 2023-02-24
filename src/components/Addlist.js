import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Addlist() {
  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");
  const [validation_N, setValidationN] = useState(false);
  const [validation_D, setValidationD] = useState(false);
  const [validation_p, setValidationP] = useState(false);
  const [validation_Q, setValidationQ] = useState(false);

  const navigate = useNavigate();
  const handelemply = (e) => {
    e.preventDefault();
    let empldata = { name, discription, prix, quantite };

    fetch("   http://localhost:8001/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empldata),
    })
      .then((res) => {
        toast.success("Succussfuly Add");
        navigate("/mylist");
      })
      .catch((err) => {
        alert("Erreur is comming" + err.message);
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-3">
        <form className="container" onSubmit={handelemply}>
          <div className="card">
            <div className="card-header ">
              <h1>Add Products</h1>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label className="label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={name}
                  onMouseDown={(e) => setValidationN(true)}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                />
                {name.length === 0 && validation_N && (
                  <span className="text-danger"> please enter your name</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">
                  Discription <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={discription}
                  onMouseDown={(e) => setValidationD(true)}
                  onChange={(e) => setDiscription(e.target.value)}
                  type="text"
                  className="form-control"
                />
                {discription.length === 0 && validation_D && (
                  <span className="text-danger"> please enter your name</span>
                )}
              </div>
              <div className="form-group">
                <label className="label">
                  Prix <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={prix}
                  onMouseDown={(e) => setValidationP(true)}
                  onChange={(e) => setPrix(e.target.value)}
                  type="number"
                  className="form-control"
                />
                {prix.length === 0 && validation_p && (
                  <span className="text-danger"> please enter your name</span>
                )}
              </div>
              <div className="form-group">
                <label className="label">
                  Quantité <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  required
                  value={quantite}
                  onMouseDown={(e) => setValidationQ(true)}
                  onChange={(e) => setQuantite(e.target.value)}
                  type="number"
                  className="form-control"
                />
                {quantite.length === 0 && validation_Q && (
                  <span className="text-danger"> please enter your name</span>
                )}
              </div>
            </div>
            <div className="card-header">
              <button type="submit" className="btn btn-primary">
                Add to List
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addlist;
