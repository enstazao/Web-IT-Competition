import React, { useState, useEffect } from "react";

//Dependenceies
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

//Styles and components
import { login } from "../../Store/Actions/AuthMethods";
import Loader from "../Loader/Loader";

export default function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { loading, user, loginError } = useSelector(
    (state) => state.AuthReducer
  );

  //Error Cases
  useEffect(() => {
    if (loginError.length > 0) {
      loginError.map((error) => toast.error(error.msg));
    }
  }, [loginError, user]);

  //Functions
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(state));
  };

  return (
    <>
      {" "}
      {!loading ? (
        <div>
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              className: "",
              style: {
                fontSize: "14px",
              },
            }}
          />
          <form onSubmit={submitHandler}>
            <section className="vh-100" style={{ backgroundColor: "#fff" }}>
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div
                      className="card shadow-2-strong"
                      style={{ borderRadius: "1rem" }}
                    >
                      <div className="card-body p-5 text-center">
                        <h1 className="text-uppercase text-center mb-5">
                          Login
                        </h1>
                        <div className="form-outline mb-4">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control form-control-lg"
                            onChange={handleInputs}
                            value={state.email}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            onChange={handleInputs}
                            value={state.password}
                          />
                        </div>

                        <button
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
