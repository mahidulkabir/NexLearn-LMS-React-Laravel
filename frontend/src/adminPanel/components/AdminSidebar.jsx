import React, { useEffect } from "react";
import logo from "../../assets/images/forfooter.png";
import MetisMenu from "metismenujs";

const AdminSidebar = () => {
  useEffect(() => {
    const menu = new MetisMenu("#menu");
    return () => {
      menu.dispose(); // clean up on unmount
    };
  }, []);

  return (
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img src={logo} className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">Admin Panel </h4>
        </div>
      </div>

      <ul className="metismenu" id="menu">
        {/* first  */}
        <li>
          <a href="#" className="has-arrow" onClick={(e) => e.preventDefault()}>
            <div className="parent-icon">
              <i className="bx bx-category" />
            </div>
            <div className="menu-title">Manage Category</div>
          </a>
          <ul>
            <li>
              <a href="index.html">
                <i className="bx bx-radio-circle" /> Add category
              </a>
            </li>
            <li>
              <a href="index2.html">
                <i className="bx bx-radio-circle" /> View Category
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> Edit Category
              </a>
            </li>
          </ul>
        </li>
        {/* second  */}
        <li>
          <a href="#" className="has-arrow" onClick={(e) => e.preventDefault()}>
            <div className="parent-icon">
              <i className="bx bx-category" />
            </div>
            <div className="menu-title">Manage Instructor</div>
          </a>
          <ul>
            <li>
              <a href="app-emailbox.html">
                <i className="bx bx-radio-circle" /> Add Instructor
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> View Instructor
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> Edit Instructor
              </a>
            </li>
          </ul>
        </li>
        {/* Third  */}
        <li>
          <a href="#" className="has-arrow" onClick={(e) => e.preventDefault()}>
            <div className="parent-icon">
              <i className="bx bx-category" />
            </div>
            <div className="menu-title">Manage Course</div>
          </a>
          <ul>
            <li>
              <a href="app-emailbox.html">
                <i className="bx bx-radio-circle" /> Add Course
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> View Course
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> Edit Course
              </a>
            </li>
          </ul>
        </li>
        {/* four  */}
        <li>
          <a href="#" className="has-arrow" onClick={(e) => e.preventDefault()}>
            <div className="parent-icon">
              <i className="bx bx-category" />
            </div>
            <div className="menu-title">Manage User</div>
          </a>
          <ul>
            <li>
              <a href="app-emailbox.html">
                <i className="bx bx-radio-circle" /> Add User
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> View User
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> Edit User
              </a>
            </li>
          </ul>
        </li>
        {/* five  */}
        <li>
          <a href="#" className="has-arrow" onClick={(e) => e.preventDefault()}>
            <div className="parent-icon">
              <i className="bx bx-category" />
            </div>
            <div className="menu-title">Manage Review</div>
          </a>
          <ul>
            <li>
              <a href="app-emailbox.html">
                <i className="bx bx-radio-circle" /> Add Review
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> View Review
              </a>
            </li>
            <li>
              <a href="app-chat-box.html">
                <i className="bx bx-radio-circle" /> Edit Review
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
