import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

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
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                type="userName"
                name="UserName"
                className="form-control form-group"
                placeholder="Username"
                required
              />
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                name="password"
                className="form-control form-group"
                placeholder="contraseña"
                required
              />
              <button
                className="btn btn-lg btn-primary btn-block btn-signin"
                type="submit"
                onClick={() => {
                  actions.getLogin(userName, password);
                  console.log(store.token);
                  if (
                    store.token &&
                    store.token != "" &&
                    store.token != undefined
                  ) {
                    navigate("/single");
                  }
                }}
              >
                Enter
              </button>

              <Link to="/demo">
                <button
                  type="Register"
                  name="Register"
                  className="btn btn-lg btn-warning btn-block btn-signin my-4"
                >
                  Registrarse
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
