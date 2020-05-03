import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamCreate extends Component {
  onSubmit = (formProps) => {
    this.props.createStream(formProps);
  };

  render() {
    return (
      <div>
        <h3 className="mt-3">Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
