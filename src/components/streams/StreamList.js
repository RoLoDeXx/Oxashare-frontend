import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";
import { Typography, Divider, Button } from "@material-ui/core";
import StreamDelete from "./StreamDelete";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId)
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>

          <Button
            className="ml-3"
            variant="contained"
            color="secondary"
            data-toggle="modal"
            data-target="#deleteModal"
          >
            Delete
          </Button>
          <StreamDelete deleteId={stream.id}></StreamDelete>
        </div>
      );
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="d-flex flex-row-reverse">
          <Button className="mt-3" variant="contained" color="primary">
            Create Stream
          </Button>
        </Link>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => (
      <div key={stream.id}>
        <div className="d-flex align-items-baseline justify-content-between">
          <div>
            <Typography variant="h5" component="h5">
              {stream.title}
            </Typography>
            <Typography variant="body1">{stream.disc}</Typography>
          </div>
          {this.renderAdmin(stream)}
        </div>

        <Divider />
      </div>
    ));
  };

  render() {
    console.log(this.props.streams);

    return (
      <div>
        <h3 className="my-3">Active Streams</h3>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
