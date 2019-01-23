import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    file: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", this.state.file);

    axios({
      method: "post",
      url: "http://localhost:3030/upload",
      data: formdata
    })
      .then(res => {
        if (res.status === 200) {
          alert("Fichier uploader avec succés !");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({
      file: e.target.files[0]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>Upload de fichiers</h1>
        <form
          action="/profile"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.handleSubmit}
        >
          <input
            type="file"
            name="photos"
            className="input"
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default App;
