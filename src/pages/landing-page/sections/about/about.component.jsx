import React from 'react';
import { Circle, QuarterCircle, Line, VerticalPoints, HorizontalPoints } from '../../../../shared/svg';
import './about.scss';

const image = require('../../../../assets/images/dsc_hero.jpg')

export class About extends React.Component {
  constructor() {
    super();
    this.refresh = null;
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    // debounce time at 100ms
    if (!this.refresh) {
      this.refresh = setTimeout(() => {
        // Mobile
        if (window.innerWidth < 769) {
          this.qcMobile(...this.re);
          this.lineMobile(...this.re);
          this.circleMobile(...this.re);
          this.pointsMobile(...this.re);
        }
    
        // Desktop
        if (window.innerWidth > 768) {
          this.qcDesktop(...this.re);
          this.lineDesktop(...this.re);
          this.circleDesktop(...this.re);
          this.pointsDesktop(...this.re);
        }

        this.refresh = null;
      }, 100);
    }
  };

  qcMobile = () => { };

  qcDesktop = () => { };

  lineMobile = () => { };

  lineDesktop = () => { };

  circleMobile = () => { };

  circleDesktop = () => { };

  pointsMobile = () => { };

  pointsDesktop = () => { };

  componentDidMount() {
    this.re = [];

    this.ge = {
      qc: { },
      line: { },
      circle: { },
      points: { }
    };

    this.resize();
  }

  render() {
    return (
      <section className="dsc-about" id="about">
        <div className="background">

        </div>
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="post-image">
          <img src={image} alt="About"/>
        </div>
        <div className="first description">
          <p>Developer Student Clubs (DSC) is a program presented by Google Developers, 
            which consists of forming communities of university students. DSC was 
            introduced in 2017 in India, and this is the first time the program is 
            organized world- wide. Currently, there are around 50 DSCs in Europe, 
            and more than 700 worldwide. DSC conducts multiple workshops and talks 
            about development technologies, soft skills (Teamwork, communication, 
            problem solving ...) and showcases of the solutions developed for our 
            community.</p>
        </div>
        <p className="second description">Developer Student Clubs are university 
          based community groups for students interested in Google developer technologies. 
          Students from all undergraduate or graduate programs with an interest in growing 
          as a developer are welcome. By joining a DSC, students grow their knowledge in a 
          peer-to-peer learning environment and build solutions for local businesses and 
          their community</p>
      </section>
    );
  }
}