import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "./Banner.less";
import { regNewHref } from "@/utils";

const BgElement = Element.BgElement;

const Banner = ({ data }) => {
  console.log(data);
  const imgBox = data.map((o, i) => {
    return (
      <Element prefixCls="banner-user-elem" key={i}>
        <BgElement
          key="bg"
          className="banner-img"
          style={{
            backgroundImage: `url(${o.img})`,
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <Link to={regNewHref(o.href)} />
        </BgElement>
      </Element>
    );
  });

  return (
    <BannerAnim className="block-banner" type="across" autoPlay={true}>
      {imgBox}
    </BannerAnim>
  );
};

Banner.propTypes = {};

export default Banner;
