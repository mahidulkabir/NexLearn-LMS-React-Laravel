import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Newsletter = () => {
  return (
    <>
      <div className="subscribe_newsletter">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="newsletter_text">
                <h3 className="text-white fs-1 fw-bold">Subscribe Newsletter</h3>
                <p className="text-light fs-4">
                  Your domain control panel is designed for ease-of-use and
                  allows for all aspects of your
                </p>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="newsletter_form">
                <h4 className="text-white">Your Online Learning Journey Starts Here</h4>
                <form action="#" className="newsletter_form ">
                  <input type="text" placeholder="Enter your mail" className=" bg-white rounded-2 px-3 py-4 border-0 w-75 rounded-end-0" />
                  <button type="submit" className=" bg-warning rounded-2 px-3 py-4 border-0 w-25 rounded-start-0">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
