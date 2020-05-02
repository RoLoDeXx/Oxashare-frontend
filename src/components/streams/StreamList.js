import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Typography, Divider, List, Button } from "@material-ui/core";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId)
      return (
        <div>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button className="ml-3" variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      );
  };

  renderList = () => {
    return this.props.streams.map((stream) => (
      <List component="nav" key={stream.id}>
        <div className="d-flex align-items-baseline justify-content-between">
          <div>
            <Typography variant="h5">{stream.title}</Typography>
            <Typography variant="p">{stream.disc}</Typography>
          </div>
          {this.renderAdmin(stream)}
        </div>

        <Divider />
      </List>
    ));
  };

  render() {
    console.log(this.props.streams);

    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
