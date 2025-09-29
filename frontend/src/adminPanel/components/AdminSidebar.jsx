import React from 'react';
import logo from '../../assets/images/forfooter.png'
const AdminSidebar = () => {
    return (
       <> 
         {/*sidebar wrapper */}
          <div className="sidebar-wrapper" data-simplebar="true">
            <div className="sidebar-header">
              <div>
                <img
                  src={logo}
                  className="logo-icon"
                  alt="logo icon" 
                />
              </div>
              <div>
                <h4 className="logo-text">Admin Panel </h4>
              </div>
              
            </div>
            {/*navigation*/}
            <ul className="metismenu" id="menu">
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon">
                    <i className="bx bx-home-alt" />
                  </div>
                  <div className="menu-title">Dashboard</div>
                </a>
                <ul>
                  <li>
                    {" "}
                    <a href="index.html">
                      <i className="bx bx-radio-circle" />
                      Default
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="index2.html">
                      <i className="bx bx-radio-circle" />
                      Alternate
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="index3.html">
                      <i className="bx bx-radio-circle" />
                      Graphical
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="has-arrow">
                  <div className="parent-icon">
                    <i className="bx bx-category" />
                  </div>
                  <div className="menu-title">Application</div>
                </a>
                <ul>
                  <li>
                    {" "}
                    <a href="app-emailbox.html">
                      <i className="bx bx-radio-circle" />
                      Email
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-chat-box.html">
                      <i className="bx bx-radio-circle" />
                      Chat Box
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-file-manager.html">
                      <i className="bx bx-radio-circle" />
                      File Manager
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-contact-list.html">
                      <i className="bx bx-radio-circle" />
                      Contatcs
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-to-do.html">
                      <i className="bx bx-radio-circle" />
                      Todo List
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-invoice.html">
                      <i className="bx bx-radio-circle" />
                      Invoice
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="app-fullcalender.html">
                      <i className="bx bx-radio-circle" />
                      Calendar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          
          </div>
          {/*end sidebar wrapper */}

       </>
    );
};

export default AdminSidebar;