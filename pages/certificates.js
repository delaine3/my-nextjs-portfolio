import React from "react";
import Link from 'next/link'

//This is a function that displays my web apps
export default function Games() {
  return (
    <div >
         <Link href="/">
          <button>Home</button>
        </Link>
        <div className="certificates">
      <h1> Certificates</h1>
      <h1>These are the certificates I have attained thus far. Clicking on them will take you to their validation page.</h1>
      <ul className="center">

        <li className="certificate-list">
          
        <a href="https://freecodecamp.org/certification/skyflower/javascript-algorithms-and-data-structures"><img src="https://i.ibb.co/SrFyWv8/Js-algorithms-and-data-structures.jpg" alt="Js-algorithms-and-data-structures" border="0"/></a>
        
        </li>
        <li className="certificate-list">
          
        <a href="https://www.educative.io/verify-certificate/3l5A3ZfxW0YVDK0YGtEmNBWXGXyrUZ"><img src="https://i.ibb.co/Zcn0fDy/3l5-A3-Zfx-W0-YVDK0-YGt-Em-NBWXGXyr-UZ.png" alt="3l5-A3-Zfx-W0-YVDK0-YGt-Em-NBWXGXyr-UZ" border="0"/></a>          
          </li>
       
      </ul>
      </div>
    </div>
  );
}