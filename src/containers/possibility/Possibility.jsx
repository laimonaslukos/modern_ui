import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos adipisci voluptate eum illum delectus minima sunt quasi, suscipit nihil placeat enim. Ducimus hic delectus odit? Reiciendis ut aliquam quae alias?</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;