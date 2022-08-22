import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/single.css";

export const Single = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getAutentification();
  }, []);
  if (store.autentificacion == true) {
    return (
      <div className="container ">
        <div className="row m-5">
          <ul>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item ">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-image fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> Designing</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-lightbulb-o fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> Developing</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-truck fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> Marketing</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-diamond fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> Branding</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-line-chart fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3>Analytics</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-mobile fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3>Mobil Apps</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-money fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> e-commerce</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <i className="fa fa-bullhorn fa-5x fa-icon-image"></i>
                  <p className="item-title">
                    <h3> Support</h3>
                  </p>
                  <p>
                    This is an amazing set of animated accordions based
                    completely on CSS. They come oriented both vertically and
                    horizontally in order to fit properly in your project. In
                    order to see the slides,
                  </p>
                </div>
              </div>
            </div>
          </ul>
          <div className="text-center">
            <Link to="/">
              <button className="btn btn-danger px-5" type="submit">
                Go Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container text-center">
        <h1 id="fail">NO TIENES DERECHO A VER LA MAGIA</h1>
        <Link to="/">
          <button onSubmit="button" className="btn btn-lg btn-danger">
            Go Login
          </button>
        </Link>
      </div>
    );
  }
};

Single.propTypes = {
  match: PropTypes.object,
};
