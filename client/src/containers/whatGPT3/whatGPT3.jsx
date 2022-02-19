import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is L L" text="Vivamus pharetra pulvinar ligula eu rutrum. Sed dictum aliquam molestie. Cras sollicitudin magna eu interdum venenatis. Mauris aliquam lectus vitae nunc iaculis interdum. Sed vitae consequat nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam vel maximus ipsum. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. " />
      <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. " />
      <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. " />
    </div>
  </div>
);

export default WhatGPT3;