import React from "react";
import { Button } from "@material-ui/core";
import { deleteStream } from "../../actions";
import { connect } from "react-redux";
class StreamDelete extends React.Component {
  render() {
    return (
      <div className="modal fade" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                Are you sure you want to delete this stream?
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <Button variant="contained" color="primary" data-dismiss="modal">
                Cancel
              </Button>

              <Button
                className="ml-3"
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.props.deleteStream(this.props.deleteId);
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { deleteStream })(StreamDelete);
