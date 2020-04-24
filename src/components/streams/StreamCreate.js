import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="my-3">
        <TextField
          className="w-100"
          {...input}
          label={label}
          variant="outlined"
          autoComplete="off"
        />
        {meta.error && meta.touched && (
          <div className=" my-3 alert alert-danger" role="alert">
            {meta.error}
          </div>
        )}
      </div>
    );
  };

  onSubmit = (formProps) => {
    this.props.createStream(formProps);
  };

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderInput} />
        <Field name="disc" label="Discription" component={this.renderInput} />
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.handleSubmit(this.onSubmit)}
        >
          Submit
        </Button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must add a title!";
  }

  if (!formValues.disc) {
    errors.disc = "You must add a description!";
  }

  return errors;
};

let formWrapper = reduxForm({
  form: "stream create",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapper);
