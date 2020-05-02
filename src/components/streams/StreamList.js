import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList = () => {
    return this.props.streams.map((stream) => (
      <div className="item my-2" key={stream.id}>
        {stream.title}
        <br></br>
        {stream.disc}
      </div>
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
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
