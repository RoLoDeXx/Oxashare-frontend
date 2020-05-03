import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
export class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (this.props.stream)
      return (
        <div>
          <h3 className="my-3">Edit Stream</h3>
          <StreamForm
            onSubmit={this.onSubmit}
            initialValues={{
              title: this.props.stream.title,
              disc: this.props.stream.disc,
            }}
          ></StreamForm>
        </div>
      );
    else
      return (
        <div>
          <h3 className="my-3">Edit Stream</h3>
          <p>Loading...</p>
        </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
