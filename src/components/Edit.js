import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
function Edit() {
  const navigator = useNavigate();
  const aa = useParams().id;

  useEffect(() => {
    fetch(" http://localhost:8001/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        const newArray = resp.filter(function (el) {
          return el.id == aa;
        });

        setName(newArray[0].name);
        setDiscription(newArray[0].discription);
        setPrix(newArray[0].prix);
        setQuantite(newArray[0].quantite);

        setName1(newArray[0].name);
        setDiscription1(newArray[0].discription);
        setPrix1(newArray[0].prix);
        setQuantite1(newArray[0].quantite);
      });
  }, []);

  const [name, setName] = useState("");
  const [discription, setDiscription] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");

  const [name1, setName1] = useState("");
  const [discription1, setDiscription1] = useState("");
  const [prix1, setPrix1] = useState("");
  const [quantite1, setQuantite1] = useState("");

  const empldata = { name, discription, prix, quantite };

  const handeledit = (e) => {
    e.preventDefault();
    fetch("   http://localhost:8001/products/" + aa, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empldata),
    })
      .then((res) => {
        if (
          name == name1 &&
          discription == discription1 &&
          prix == prix1 &&
          quantite == quantite1
        ) {
          window.confirm("No changes detected , confirme your back ");
          toast.warning("No changes detected");
          navigator("/mylist");
        } else {
          toast.success("Changes detected , successfuly Save ");
          navigator("/mylist");
        }
      })
      .catch((err) => {
        alert("Erreur is comming" + err.message);
      });
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 mt-3">
        <form className="container" onSubmit={handeledit}>
          <div className="card">
            <div className="card-header bg-primary ">
              <h1>Products Edit</h1>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label className="label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="label">
                  Discription <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="label">
                  Prix <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={prix}
                  onChange={(e) => setPrix(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="label">
                  Quantité <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="card-header">
              <button type="submit" className="btn btn-success me-2">
                Save
              </button>
              <button
                onClick={() => navigator("/mylist")}
                className="btn btn-danger"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
