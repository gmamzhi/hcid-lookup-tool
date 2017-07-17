import React, {Component} from 'react';
import '../hcidlogo.png';
export default class Header extends Component {
  render() {
    return (
      <div className="header valign-wrapper">
        <img className="header-logo" src={require("../hcidlogo.png")} alt="smiley"></img>
		    <span className="header-title flow-text">HCID - Look Up Tool
		    </span>
      </div>
    );
  }
}