import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
class GoogleAuth extends Component {
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
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn();
    else this.props.signOut();
  };

  renderAuthBtn() {
    if (this.state.isSignedIn === null) {
      return "Login isn't confirmed";
    } else if (this.state.isSignedIn)
      return (
        <button
          onClick={this.auth.signOut}
          className="bg-danger border-danger rounded text-white"
        >
          Sign out <i className="fab fa-google-plus-g"></i>
        </button>
      );
    else
      return (
        <button
          onClick={this.auth.signIn}
          className="bg-success border-success rounded text-white"
        >
          Sign in <i className="fab fa-google-plus-g"></i>
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
