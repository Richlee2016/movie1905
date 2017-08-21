import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const menus = [{
      type: "很强",
      href: "/movies"
    }, {
      type: "厉害了",
      href: "/news"
    }, {
      type: "good",
      href: "/good"
    }, {
      type: "nice",
      href: "/nice"
    }]

    const menu = menus.map(o => {
      return (<li key={o.href}>
        <Link to={o.href}>{o.type}</Link>
      </li>)
    })

    return (
      <div className="header">
        <ul>
          {menu}
        </ul>
      </div>
    )
  };

}
