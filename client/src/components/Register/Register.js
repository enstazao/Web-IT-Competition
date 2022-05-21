import React, { useState, useEffect } from "react";

//Dependencies
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

//styles and components
import { register } from "../../Store/Actions/AuthMethods";
import Loader from "../Loader/Loader";

export default function Register() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    isVetran: false,
  });
  const dispatch = useDispatch();
  const { loading, user, registerErrors } = useSelector(
    (state) => state.AuthReducer
  );

  //Error Cases
  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.map((error) => toast.error(error.msg));
    }
  }, [registerErrors, user]);

  //Functions
  const handleInputs = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(state));
  };

  return (
    <>
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
                          SignUp
                        </h1>
                        <div className="form-outline mb-4">
                          <label className="form-label">Name</label>
                          <input
                            type="text"
                            name="username"
                            id="name"
                            className="form-control form-control-lg"
                            onChange={handleInputs}
                            value={state.username}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
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

                        <div
                          className="form-check"
                          style={{ marginBottom: "1rem" }}
                        >
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            defaultChecked
                            value={true}
                            onChange={handleInputs}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            Are You A Veteran?
                          </label>
                        </div>
                        <button
                          className="btn btn-primary btn-lg btn-block"
                          type="submit"
                        >
                          Signup
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
