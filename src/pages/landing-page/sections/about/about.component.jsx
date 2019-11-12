import React from 'react';
import './about.scss';

export class About extends React.Component {
  render() {
    return (
      <section className="dsc-about" id="about">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="post-image">
          <img src="https://miro.medium.com/max/3840/1*nfBaSJBPD5Dm8_HgY4xZnA.jpeg" alt="About"/>
        </div>
        <div className="description">
          <p>Developer Student Clubs (DSC) is a program presented by Google Developers, 
            which consists of forming communities of university students. DSC was 
            introduced in 2017 in India, and this is the first time the program is 
            organized world- wide. Currently, there are around 50 DSCs in Europe, 
            and more than 700 worldwide. DSC conducts multiple workshops and talks 
            about development technologies, soft skills (Teamwork, communication, 
            problem solving ...) and showcases of the solutions developed for our 
            community.</p>
        </div>
      </section>
    );
  }
}