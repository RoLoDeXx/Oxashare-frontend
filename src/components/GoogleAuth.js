import React, { Component } from "react";

export default class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "155979271724-dia2vrqaea2rftsdjcehdd1oelrbr3os.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    });
  };

  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return "Login isn't confirmed";
    } else if (this.state.isSignedIn)
      return (
        <button className="bg-danger border-danger rounded text-white">
          Sign out <i className="fa fa-google"></i>
        </button>
      );
    else return "Not signed in";
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}
