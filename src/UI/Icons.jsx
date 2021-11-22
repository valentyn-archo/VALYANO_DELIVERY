import React from "react";

const Icons = ({ icon }) => (
  <svg>
    <use xlinkHref={`/images/sprite.svg#${icon}`} />
  </svg>
);

export default Icons;
