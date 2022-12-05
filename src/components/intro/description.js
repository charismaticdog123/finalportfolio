import React from "react";
import Typewriter from "typewriter-effect";

function Description() {
  return (
    <Typewriter 
      options={{
        strings: [
          "currently, designer @IBM",
          "previously, swe @HBO",
          "occasionally, computer science and economics student @BrownUniversity",
          "always, a storyteller and mango enthusiast @LosAngeles"
        ],
        autoStart: true,
        delay: 1,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Description;