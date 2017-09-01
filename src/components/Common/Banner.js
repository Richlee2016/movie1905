import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BannerAnim, { Element, Thumb } from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "./Banner.less";
import { regNewHref } from "@/utils";

const BgElement = Element.BgElement;

const Banner = ({ data, isThumb }) => {
  const thumbChildren = images =>
  images.map((o, i) => {
    return (
      <span key={i}>
        <i style={{ backgroundImage: `url(${o.img})` }} />
      </span>
    );
  });

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
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ 0: -70 }}
        >
          {thumbChildren(data)}
        </Thumb>
      </Element>
    );
  });

  const createThumb = isThumb => {
    var test = true;
    if (test) {
      return (
        <Thumb
          prefixCls="user-thumb"
          key="thumb"
          component={TweenOne}
          animation={{ 0: -70 }}
        >
          {thumbChildren(data)}
        </Thumb>
      );
    } else {
      return null;
    }
  };

  

  return (
    <BannerAnim className="block-banner" type="across" autoPlay={true}>
      {imgBox}
      <div key="thumb">321</div>
    </BannerAnim>
  );
};

Banner.propTypes = {};

export default Banner;
