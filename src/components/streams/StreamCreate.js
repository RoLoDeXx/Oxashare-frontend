import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Button } from "@material-ui/core";
class StreamCreate extends Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="my-3">
        <TextField {...input} label={label} variant="outlined" />
      </div>
    );
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="Title" component={this.renderInput} />
        <Field name="disc" label="Discription" component={this.renderInput} />
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  }
}

export default reduxForm({
  form: "stream create",
})(StreamCreate);
