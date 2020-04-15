import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
class StreamCreate extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="mt-3">
        <TextField {...input} label={label} variant="outlined" />
      </div>
    );
  };

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderInput} />
        <Field name="disc" label="Discription" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: "stream create",
})(StreamCreate);
