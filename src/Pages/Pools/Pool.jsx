import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Poll extends Component {
  render() {
    const { poll, listOfUsers, pollType } = this.props;
    const author = listOfUsers[poll.author]
    return (
      <div className="col-lg-4 col-md-6">
        <Link to={`questions/${pollType === 2 ? poll.id : poll.id + "/result"}`} className="box_topic">
          <span>
            {/* <img src="" width="70" height="70" alt="" /> */}
            <img src="https://img.icons8.com/windows/96/000000/poll-vertical.png" alt="" />
          </span>
          <div className="w-100 mt-2 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img src={author.avatarURL} className="user_avatar mr-2" alt="avatar" /><b>{author.name}</b>
            </div>
            <div className="flex-1"></div>
            <em>{new Date(poll.timestamp).toLocaleDateString()}</em>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const su = state.user;

  return {
    listOfUsers: su.listOfUsers
  }
}

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
