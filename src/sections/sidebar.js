import React from "react";
import { connect } from "react-redux";
import Tool from "./tool";
class Sidebar extends React.Component {
  select = layout => {
    this.props.dispatch({
      type: "SELECT",
      payload: layout
    });
  };
  render() {
    return (
      <div className="sidebar fill">
        <Tool />
        {this.props.layouts.map(layout => (
          <div
            className="layout_item"
            key={layout.id}
            onClick={() => this.select(layout)}
          >
            {layout.name}
          </div>
        ))}
      </div>
    );
  }
}
export default connect(state => state)(Sidebar);
