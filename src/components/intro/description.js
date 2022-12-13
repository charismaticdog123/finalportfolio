import React from "react";
import Typewriter from "typewriter-effect";

function Description() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Hallo!"
        ],
        autoStart: true,
        delay: 50,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Description;