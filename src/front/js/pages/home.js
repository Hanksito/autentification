import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container">
        <div id="caja" className="row text-center">
          <h1 className="text-light">Login</h1>
          <div className="col-3"></div>
          <div className="col-6 ">
            <div className="row py-2">
              <input
                onChange={(e) => {
                  actions.getUsername(e.target.value);
                }}
                id="inputtext"
                type="text"
                placeholder="Username"
              ></input>
            </div>
            <div className="row py-2">
              <input
                onChange={(e) => {
                  actions.getPassword(e.target.value);
                }}
                id="inputtext"
                type="password"
                placeholder="Password"
              ></input>
            </div>
            <button
              onSubmit="button"
              onClick={() => {
                actions.getLogin();
              }}
              className="btn btn-lg btn-primary"
            >
              login
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};
