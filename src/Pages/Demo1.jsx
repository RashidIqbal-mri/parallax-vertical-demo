import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "../img/Demo1/money.gif"
import land from "../img/Demo1/land.png"
import money from "../img/Demo1/money.gif"

import superman from "../img/Demo1/superman.gif";
const Demo1 = () => {
    return (
      <>
          <Parallax pages={4}>
         
  
         <ParallaxLayer
          offset={0} 
          speed={1}
          factor={2}
          style={{
          backgroundImage:`url(${moon})`,
          backgroundSize:'cover'
          }}
          >
         </ParallaxLayer>
  
         <ParallaxLayer 
         offset={2} 
         speed={1}
         factor={4}
         style={{
           backgroundImage:`url(${land})`,
           backgroundSize:'cover',
         }}
         >
         </ParallaxLayer>
  
         <ParallaxLayer
           sticky={{ start: 0.6, end: 1 }}
           style={{backgroundSize:"5px"}}
         >
           <img src={superman} />
         </ParallaxLayer>
  
         <ParallaxLayer
         offset={0.2}
         speed={0.5}
         >
           <h2>Welcome to my website</h2>
  
         </ParallaxLayer>
         <ParallaxLayer
         offset={2.1}
         speed={0.5}
         >
           <h2>Superman Entry</h2>
  
         </ParallaxLayer>
  
  
         <ParallaxLayer
         sticky={{ start: 2.4, end: 4 }}
         style={{backgroundSize:"5px"}}
         >
           <img src={money}/>
         </ParallaxLayer>
  
         <ParallaxLayer
         offset={3.2}
         speed={2}
         >
           <h2>Web Development is fun!</h2>
  
         </ParallaxLayer>
  
       </Parallax>
      </>
    )
  }
  
  export default Demo1