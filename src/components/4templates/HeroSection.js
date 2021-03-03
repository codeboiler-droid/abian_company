import React from 'react';
import FeaTag from '../1atoms/FeaTag';
import GhostTag from '../1atoms/GhostTag';

import heroSectionIllustrator from '../../img/illustrators/heroSectionIllustrator.png';
import todo from '../../img/todo.png';
import hand from '../../img/hand.png';

export default function HeroSection() {
  return (
    <>
      <div className="containerCenter" id="centerSingleBlock">
        <div id="heroSection" className="centerContainer">
          <div id="leftBlock">
            <h1 className="poppins_light_300">
              Let's find you
              <br />
              the
              <span className="poppins_semibold_600"> Best Services</span>
            </h1>

            <div className="flexContainer">
              <FeaTag logo={todo} />
              <FeaTag logo={hand} />
            </div>
          </div>
          <div id="rightBlock">
            <div id="left">
              <GhostTag />

              <h3 className="poppins_regular_400">
                A commitment
                <br /> to our customers
              </h3>
              <button className="blueBtn cursor">Know more</button>
            </div>
            <div id="right">
              <img src={heroSectionIllustrator} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
