import React from "react";
import { useLax, useLaxElement } from "use-lax";
import "./styles.css";


function Content() {
  useLax();

  const refA = useLaxElement();
  const refB = useLaxElement();

  return (
    <div className="App">
      <div
        ref={refA}
        className="block sticky"
        data-lax-scale="0.95 1, vh 0.95"
        data-lax-opacity="0 1, vh 0"
      >
        <h1>
          I'm Danny Keane, a British digital product designer currently creating
          experiences for billions at Google in San Francisco, California.
        </h1>
      </div>

      <div
        ref={refB}
        className="content-block"
        data-lax-translate-y="3vw 0, 0 vh, -200 0"
        // data-lax-translate-y="(vh*0.7) 0, 0 vh, -500 0"
      >
        <h2>
          For over a decade, my passion, curiosity, and multidisciplinary skills
          have presented me with opportunities to lead and establish design
          teams, ship successful products at scale, and help companies go from
          zero to one.
          <br />
          <br />
          My journey started a little different than most. If we rewound the
          clock to the early 2000s, I was a young 13 year old kid with a
          fascination with how the internet enabled us to communicate, connect
          and conquer.
          <br />
          <br />
          Starting from humble beginnings, I established my first online
          business at the age of 14 and continued to cut my teeth in the
          industry as a self-taught designer. Throughout the journey, I have
          been fortunate to meet many incredibly talented people that have
          helped shape my career into what it is today.
          <br />
          <br />I draw an incredible amount of energy from seeing those around
          me succeed, and I strive to create environments that welcome
          improvement, foster psychological safety and promote growth.
        </h2>
      </div>
    </div>
  );
}

export default Content;