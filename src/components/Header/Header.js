import React from "react";
import { LanguageToggle } from "../LanguageToggle";
import { NavLink, /*Route,*/ BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import { withLocalize } from "react-localize-redux";


class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <Router>
          <div className="header-main">
            <div className="header-logo">
              <NavLink className="fidweb-logo" to="/">
                <span>fidweb</span>
              </NavLink>
            </div>
            <div className="header-interactables">
              <span className="header-nav">
                <NavLink className="nav-item" to="/">
                  <span>Home</span>
                </NavLink>
              </span>
              <LanguageToggle />
            </div>
          </div>
        </Router>
      </header>
    )
  }
}
export default withLocalize(Header);