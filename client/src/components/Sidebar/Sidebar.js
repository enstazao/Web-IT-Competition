import React from "react";

//Depedencies
import { Link } from "react-router-dom";

//styles and components
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { IoCreate } from "react-icons/io5";
import { MdPending } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="sidebar_ul">
        <Link to="/admin">
          <li>
            <AiFillHome className="sidebar_icon" />
            <span className="sidebar_title">Dashboard</span>
          </li>
        </Link>
        <Link to="/createEvent">
          <li>
            <IoCreate className="sidebar_icon" />
            <span className="sidebar_title">Create Event</span>
          </li>
        </Link>
        <Link to="/createProfile">
          <li>
            <MdPending className="sidebar_icon" />
            <span className="sidebar_title">Create Profile</span>
          </li>
        </Link>
        <Link to="/update_profile">
          <li>
            <AiFillSetting className="sidebar_icon" />
            <span className="sidebar_title">Setting</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

<></>;
