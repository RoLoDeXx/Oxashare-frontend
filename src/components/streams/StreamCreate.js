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

  onSubmit = (formProps) => {
    console.log(formProps);
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
  if (!formValues.title) {
  }

  return {};
};

export default reduxForm({
  form: "stream create",
})(StreamCreate);
