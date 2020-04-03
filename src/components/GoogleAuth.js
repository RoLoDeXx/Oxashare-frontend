import React, { Component } from "react";

export default class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "155979271724-dia2vrqaea2rftsdjcehdd1oelrbr3os.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div>Google auth</div>;
  }
}
