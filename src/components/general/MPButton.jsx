import React from "react";
import "./MPButton.css";

export default function MPButton({children, onClick}) {
    console.log(children);
    return (
        <div className="MPButton-container" onClick={onClick}>
            {children}
        </div>
    );
}
