import React from "react";
import { connect } from "react-redux";
import Preview from "./preview";
class Tool extends React.Component {
  getCode = () => {};
  render() {
    return (
      <div>
        <button onClick={this.getCode}>Get Code</button>
      </div>
    );
  }
}
export default connect(state => state)(Tool);
