import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Upload de fichiers</h1>
        <form action="/profile" method="post" enctype="multipart/form-data">
          <input type="file" name="photos" className="input" />
        </form>
      </div>
    );
  }
}

export default App;
