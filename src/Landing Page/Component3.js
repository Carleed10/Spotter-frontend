import React from 'react';
import CountUp from 'react-countup';
import '../Landing Page Style/Component3.css';
import Animation from '../Components/Animation';

const Component3 = () => {
  return (

    <Animation>

<div className="bg33">
      <div data-aos="fade-up" data-aos-duration="2000" className="counter">
        <div  className="counter1">
          <h1>
            <CountUp start={0} end={12000} duration={5.5} separator="," />
            +
          </h1>
          <p>Job Posted</p>
        </div>

        <div className="counter1">
          <h1>
            <CountUp start={0} end={15000} duration={5.5} separator="," />
            +
          </h1>
          <p>Applications</p>
        </div>

        <div className="counter1">
          <h1>
            <CountUp start={0} end={9000} duration={5.5} separator="," />
            +
          </h1>
          <p>Members</p>
        </div>
      </div>
    </div>



    </Animation>


  );
}

export default Component3;
