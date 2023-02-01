import React from "react";

export default function UserAvatar({ imgSrc, width, height }) {
  if(!(width && height)){
    width = 150
    height = 150
  }
  const _styles = {
    container: {
      overflow: "hidden",
      borderRadius: "50%",
      width: width,
      height: height,
    },
    img: {
      width: width,
      height: height,
    },
  };
  
  return (
    <div style={_styles.container}>
      <img style={_styles.img} src={imgSrc} />
    </div>
  );

}


