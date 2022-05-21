import React, { useState, useEffect } from "react";

//Dependencies
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

//styles and components
import "./Profile.css";
import "../Dashboard.css";
import Sidebar from "../../../Sidebar";
import Loader from "../../../../Loader/Loader";
import { addProfile } from "../../../../../Store/Actions/ProfileMehod";

export default function Profile() {
  //States
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);

  //Reducers
  const { user, loading } = useSelector((state) => state.AuthReducer);
  const { profileErrors } = useSelector((state) => state.addProfileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (profileErrors.length > 0) {
      profileErrors.map((error) => toast.error(error.msg));
    }
  }, [profileErrors, user]);

  //Functions
  const submitHandler = e => {
    e.preventDefault()
    dispatch(addProfile({username, profession, location, gender, userId: user._id}))
  }

  return (
    <div className="container_profile">
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            fontSize: "14px",
          },
        }}
      />
      <div className="sidebar_panel">
        <Sidebar />
      </div>
      <div className="profile_panel">
        {!loading ? (
          <>
            <form onSubmit={submitHandler}>
              <div className="row ml-minus-15 mr-minus-15">
                <div className="col-8 p-15">
                  <div className="create_card">
                    <h3 className="card_h3">Profile</h3>
                    <div className="group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="group__control"
                        placeholder="Enter name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="profession">Profession</label>
                      <input
                        type="text"
                        id="profession"
                        className="group__control"
                        placeholder="Enter email"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="email">Hobbies</label>
                      <select
                        className="select"
                        multiple
                        data-mdb-placeholder="Example placeholder"
                      >
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                        <option value={5}>Five</option>
                      </select>
                    </div>
                    <div className="group">
                      <label htmlFor="gender">Gender</label>
                      <input
                        type="text"
                        id="gender"
                        className="group__control"
                        placeholder="Enter email"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="location">Location</label>
                      <input
                        type="text"
                        id="location"
                        className="group__control"
                        placeholder="Enter email"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="group">
                      <button className="btn btn_status" type="submit">
                        Create Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
