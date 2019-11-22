import React, { Component } from "react";
import "./formulaire.css";

class Formulaire extends Component {
  state = {};
  render() {
    return (
      <section className="container">
        <div className="sign">
          <h2>SIGN UP</h2>
        </div>
        <div className="cadre">
          <div className="intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <form className="formulaire col-md-8">
              <div id="asterix">
                <p>(*) Lorem ipsum, dolor sit amet</p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="number "
                    className="form-control"
                    id="firstName"
                    placeholder="First name*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text col"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name*"
                  />
                </div>
              </div>

              <div className="row">
                <div className=" col-md-2">
                  <label htmlFor="inputState"></label>
                  <select id="inputState" className="form-control">
                    <option selected>FR</option>
                    <option>FR</option>
                    <option>FR</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="number"
                    className="form-control"
                    id="phonenumber"
                    placeholder="Phone number*"
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputState"></label>
                  <select id="inputState" className="form-control">
                    <option selected>FR</option>
                    <option>FR</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input
                    type="number "
                    className="form-control"
                    id="phonenumber"
                    placeholder="Phone number*"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="number "
                    className="form-control"
                    id="dateBirth"
                    placeholder="Date of birth*"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email "
                    className="form-control"
                    id="email"
                    placeholder="Email*"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text "
                    className="form-control"
                    id="password"
                    placeholder="Password *"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text "
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm password *"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text "
                    className="form-control"
                    id="referralCode"
                    placeholder="Referral Code"
                  />
                </div>
              </div>

              <div
                className="custom-control custom-checkbox my-1 ml-sm-2 "
                id="cocher1"
              >
                <input type="checkbox" className="custom-control-input" />
                <label
                  className="custom-control-label"
                  htmlFor="customControlInline"
                >
                  I agree with the <a href="">TOS</a>
                </label>
              </div>
              <div
                className="custom-control custom-checkbox my-1 ml-sm-2"
                id="cocher2"
              >
                <input type="checkbox" className="custom-control-input" />
                <label
                  className="custom-control-label"
                  htmlFor="customControlInline"
                >
                  I agree to receive communications
                </label>
              </div>

              <button className="btn btn-light btn-lg">SIGN UP</button>
            </form>
          </div>
        </div>
        <hr width="0%" />
        <hr width="25%" color="black"></hr>
        <div className="footer">
          Already have an account ?<a href="">Login</a>
        </div>
      </section>
    );
  }
}

export default Formulaire;
