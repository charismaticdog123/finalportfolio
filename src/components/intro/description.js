import React from "react";
import Typewriter from "typewriter-effect";

function Description(props) {
  return (
    <Typewriter className="subtitle"
      options={{
        strings: props.description,
        autoStart: true,
        delay: 50,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Description;