import React from "react";

export default function UserAvatar({ imgSrc }) {
  return (
    <div style={_styles.container}>
      <img style={_styles.img} src={imgSrc} />
    </div>
  );
}

const _styles = {
  container: {
    overflow: "hidden",
    borderRadius: "50%",
    width: 150,
    height: 150,
  },
  img: {
    width: 150,
    height: 150,
  },
};
