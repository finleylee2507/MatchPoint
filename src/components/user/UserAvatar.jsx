import React from "react";

export default function UserAvatar({ imgSrc, width, height }) {
  if (!(width && height)) {
    width = 100
    height = 100
  }
  const _styles = {
    img: {
      width: width,
      height: height,
      borderRadius: "50%",
    },
  };

  return (
    <img style={_styles.img} src={imgSrc} />
  );

}


