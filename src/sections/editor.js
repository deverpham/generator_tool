import React, { Fragment } from "react";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import emitter from '../emitter'
import $ from "jquery";
class Preview extends React.Component {
  onSelect = e => {
    e.stopPropagation();
    return this.getCode();
  };
  componentDidMount() {
    emitter.addListener('GET_CODE', (callback) => {
      const html  = this.getCode();
      callback(html)
    })
  }
  renderLayout = target => {
    let Inside = "";
    if (target.children) {
      if (typeof target.children == "string") {
        console.log("yes");
        Inside = target.children;
      } else Inside = target.children.map(child => this.renderLayout(child));
    }
    if (!target) return <h1>Missing Dom</h1>;
    const Tag = target.type;
    const style = target.style;
    const classList = target.class;
    return (
      <target.type style={style} className={classList} onClick={this.onSelect}>
        {Inside}
      </target.type>
    );
  };
  getCode = () => {
    const View = () => this.renderLayout(this.props.selected.dom);
    const html = ReactDOMServer.renderToStaticMarkup(<View />);
    console.log(html);
    return html;
  };
  render() {
    const View = () => this.renderLayout(this.props.selected.dom);
    return (
      <div className="col-9">
        <View />
      </div>
    );
  }
}
export default connect(state => state)(Preview);
