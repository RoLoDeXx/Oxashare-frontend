import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
export class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{this.props.stream.title}</h1>
          <h1>{this.props.stream.disc}</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = { fetchStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
