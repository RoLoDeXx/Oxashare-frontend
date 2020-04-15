import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput = () => {
    return <div>I'm a input</div>;
  };

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="disc" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "stream create",
})(StreamCreate);
