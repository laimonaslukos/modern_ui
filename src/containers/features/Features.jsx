import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'What is Lorem Ipsum?',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end disLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis eros ac nisl tincidunt, ut facilisis ex molestie.trusts may instantly was household applauded.',
  },
  {
    title: 'What is Lorem Ipsum?',
    text: 'ConsideNullam maximus arcu erat, eu lobortis neque auctor a. Aliquam ac mollis est.red sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'What is Lorem Ipsum?',
    text: 'Praesent sodales rhoncus erat, sit amet varius ex euismod in. ',
  },
  {
    title: 'What is Lorem Ipsum?',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sNullam maximus arcu erat, eu lobortis neque auctor a. Aliquam ac mollis est.ex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;