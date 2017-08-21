import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const navs = [{
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

    const nav = navs.map(o => {
      return (<li key={o.href}>
        <Link to={o.href}>{o.type}</Link>
      </li>)
    })

    return (
      <ul className="footer">
        {nav}
      </ul>
    )
  };

}
