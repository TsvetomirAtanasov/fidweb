import React, { Component } from 'react';
import './App.css';
import { Header } from "./components";
import {Portfolio} from "./components/Portfolio";

import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/global.json";
import { renderToStaticMarkup } from "react-dom/server";


class App extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: "БГ", code: "bg" },
        { name: "EN", code: "en" },
        { name: "DE", code: "de" }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio/>
      </div>
    );
  }
}

export default withLocalize(App);