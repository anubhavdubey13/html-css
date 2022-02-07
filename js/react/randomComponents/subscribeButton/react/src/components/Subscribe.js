import React from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import "./Subscribe.css";

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", submit: false };
    this.inputNameHandler = this.inputNameHandler.bind(this);
    this.inputEmailHandler = this.inputEmailHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  inputNameHandler(e) {
    var nameVal = e.target.value;
    this.setState({
      name: nameVal
    });
  }

  inputEmailHandler(e) {
    var emailVal = e.target.value;
    this.setState({
      email: emailVal
    });
  }

  buttonClickHandler() {
    this.setState({
      submit: true
    });
  }

  render() {
    return (
      <div className="SubsExp">
        {this.state.submit ? (
          <div>
            <h2>
              {this.state.name}, it means a lot that you subscribed. Thank you!
            </h2>
            <CheckCircleOutlinedIcon className="checkIcon" />
          </div>
        ) : (
          <div>
            <h2>Please subscribe to my newsletter</h2>
            <input
              className="name"
              type="text"
              placeholder="Name"
              onChange={this.inputNameHandler}
            />
            <br />
            <input
              className="email"
              type="email"
              placeholder="Email"
              onChange={this.inputEmailHandler}
            />
            <br />
            <button
              className="btnSubscribe"
              disabled={this.state.name === "" || this.state.email === ""}
              onClick={this.buttonClickHandler}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Subscribe;

/*
Part 1: Name
1. name should be updated
2. subscribe should be disabled if name is null
3. name input should disappear
4. subscribe button should turn to subscribed with a tick
5. please subscribe should change to something personal
*/
