import React from "react";
import { connect } from "react-redux";
import emitter from '../emitter'
class Tool extends React.Component {
  getCode = () => {
    emitter.emit('GET_CODE', function(data) {
      alert(data);
    })
  };
  render() {
    return (
      <div>
        <button onClick={this.getCode}>Get Code</button>
      </div>
    );
  }
}
export default connect(state => state)(Tool);
