import React from "react";

import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <h5>Search Job Path</h5>
        <div className="feed_input">
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed_inputOption"></div>
      </div>
    </div>
  );
}

export default Feed;
