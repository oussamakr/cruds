import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Myliste() {
  const [Products, setProducts] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    fetch(" http://localhost:8001/Products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        toast.warning("Error " + error.message);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card mt-2">
          <div className="card-title ">
            <h1>My List</h1>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-left">
              <Link to="/addlist">
                <button className="btn btn-success mb-3 ">
                  Creat New Products (+)
                </button>
              </Link>
            </div>
            <table className="table table-bordered  ">
              <thead className="bg-dark text-white ">
                <tr>
                  <td>Name</td>
                  <td>Discription</td>
                  <td>Prix</td>
                  <td>Quantité</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {Products &&
                  Products.map((Element, index) => {
                    return (
                      <tr key={index}>
                        <td>{Element.name}</td>
                        <td>{Element.discription}</td>
                        <td>{Element.prix}</td>
                        <td>{Element.quantite}</td>

                        <td className="d-flex justify-content-center">
                          <a
                            onClick={(e) => {
                              e.preventDefault();
                              navigate("/details/" + Element.id);
                            }}
                          >
                            <button className="btn btn-primary me-2">
                              Details
                            </button>
                          </a>
                          <a
                            href="#"
                            onClick={() => {
                              navigate("/edit/" + Element.id);
                            }}
                          >
                            <button className="btn btn-success me-5">
                              Edit
                            </button>
                          </a>
                          <a
                            href="#"
                            onClick={() => {
                              if (
                                window.confirm("Do you confirme the delate !,")
                              ) {
                                fetch(
                                  "   http://localhost:8001/products/" +
                                    Element.id,
                                  {
                                    method: "DELETE",
                                  }
                                )
                                  .then((res) => {
                                    setTimeout(() => {
                                      window.location.reload();
                                    }, 2000);
                                    toast.success("Generate the  Delate");
                                  })
                                  .catch((err) => {
                                    alert("Erreur is comming" + err.message);
                                  });
                              }
                            }}
                          >
                            <button className="btn btn-danger ">Delete</button>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myliste;
