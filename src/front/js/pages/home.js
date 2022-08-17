import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container h-80">
      <div className="row align-items-center h-100">
        <div className="col-3 mx-auto">
          <div className="text-center">
            <img
              id="profile-img"
              className="rounded-circle profile-img-card"
              src="https://i.imgur.com/6b6psnA.png"
            />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin">
              <input
                onChange={(e) => actions.getUsername(e.target.value)}
                name="UserName"
                className="form-control form-group"
                placeholder="Username"
                required
              />
              <input
                onChange={(e) => actions.getPassword(e.target.value)}
                name="password"
                className="form-control form-group"
                placeholder="contraseña"
                required
              />
              <button
                className="btn btn-lg btn-primary btn-block "
                onClick={() => {
                  actions.getLogin();
                }}
              >
                Enter
              </button>

              <button
                type="Register"
                name="Register"
                className="btn btn-lg btn-warning btn-block btn-signin my-4"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
