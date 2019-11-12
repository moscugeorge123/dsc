import React from 'react';
import './contact.scss';

export class Contact extends React.Component {

  constructor() {
    super();
    this.socialMedia = [
      {
        name: 'instagram',
        link: '',
        logo: require('../../../../assets/svgs/instagram.svg')
      },
      {
        name: 'linkedin',
        link: '',
        logo: require('../../../../assets/svgs/linkedin.svg')
      },
      {
        name: 'facebook',
        link: '',
        logo: require('../../../../assets/svgs/facebook.svg')
      }
    ];
  }

  render() {
    return (
      <section className="dsc-contact" id="contact">
        <div className="title">
          <h1>Contact</h1>
        </div>

        <div className="details">
          <h4>Email: <span>dsc.uaic@gmail.com</span></h4>
          <h4>Address: <span>16 General Berthelot, Iași 700483</span></h4>
        </div>

        <div className="social-media">
          {this.socialMedia.map(social => (
            <a href={social.link} key={social.name}>
              <img src={social.logo} alt={social.name}/>
            </a>
          ))}
        </div>

        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.1767427515797!2d27.57272241602489!3d47.17397602575538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb6227e846bd%3A0x193e4b6864504e2c!2sFaculty%20of%20Computer%20Science!5e0!3m2!1sen!2sro!4v1573381857145!5m2!1sen!2sro" 
                  height="450"
                  frameBorder="0"
                  title="FII Map"
                  allowFullScreen="" />
        </div>
      </section>
    );
  }
}