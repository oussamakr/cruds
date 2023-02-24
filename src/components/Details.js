import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  const navigator = useNavigate();
  const idnavg = useParams().id;
  const [infodetails, setInfodetails] = useState("");

  useEffect(() => {
    fetch(" http://localhost:8001/products")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        const newArray = resp.filter(function (el) {
          return el.id == idnavg;
        });
        setInfodetails(newArray[0]);
      });
  });

  return (
    <div className="container mt-2">
      <div className="card">
        <div className="card-title">
          <h1> Info Emplyee</h1>
          <div className="card-body  ">
            <div className=" ">
              <ul
                className="list-group ms-auto me-auto  "
                style={{ width: 400 }}
              >
                <li className="list-group-item   ">Name :{infodetails.name}</li>
                <li className="list-group-item">
                  Discription : {infodetails.discription}
                </li>
                <li className="list-group-item">Prix :{infodetails.prix} </li>
                <li className="list-group-item">
                  Quantité : {infodetails.quantite}
                </li>
              </ul>

              <button
                onClick={() => {
                  navigator("/mylist");
                }}
                className="btn btn-danger mt-2"
              >
                Back to My list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
