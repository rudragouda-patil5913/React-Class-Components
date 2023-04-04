import React, { Component } from "react";

class FormControlled extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      comments: "",
    };
    // console.log(this.state.username);
    // this.state={
    //     username: "rudra",
    // }
    // console.log(this.state.username);
    // this.state.username = "amar";
    // console.log(this.state.username);
  }

  userChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  passChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  commentUpdate = (event) => {
    this.setState({
      comments: event.target.value,
    });

  };

  handleSubmit = (event) => {
    // to prevent page refresh
    event.preventDefault();
    const { username, password, comments } = this.state;
    alert(
      `Hello! ${username} your password is ${password} and opinion is ${comments}`
    );
  };
  render() {
    // console.log(this.state.username);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            onChange={this.userChange}
            value={this.state.username}
          />
          <br />
          <label htmlFor="">Password </label>
          <input
            type="password"
            onChange={this.passChange}
            value={this.state.password}
          />
          <br />
          <label htmlFor="">Comments</label>
          <textarea
            value={this.comments}
            name=""
            id=""
            cols="20"
            rows="10"
            onChange={this.commentUpdate}></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormControlled;
