import React from 'react';
import './team.scss';

export class Team extends React.Component {
  constructor() {
    super();
    this.refresh = null;
    window.addEventListener('resize', this.resize);
    this.members = [
      {
        name: 'Răzvan-Ionuț Borșan',
        picture: require('../../../../assets/images/razvan.jpg'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
      },
      {
        name: 'Panagiotis Chontas',
        picture: require('../../../../assets/images/pana.png'),
        description: 'Final-year student at the Faculty of Computer Science of Iasi with a vast experience in volunteering and personal development trainings. He is also the main designer of the Faculty and their permanent helping hand. The domains in his area of expertise are marketing, public speaking, brand consultancy, graphic design and UI/UX.'
      },
      {
        name: 'Radu Marinoiu',
        picture: require('../../../../assets/images/member.png'),
        description: 'Final-year student at the Faculty of Computer Science of Iasi with experience in volunteering and skill development trainings. The domains in his area of expertise are Automation Testing, Backend, REST APIs and Git.'
      },
      {
        name: 'George Moscu',
        picture: require('../../../../assets/images/member.png'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
      },
      {
        name: 'Teodor Proca',
        picture: require('../../../../assets/images/member.png'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
      }
    ];
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

  qcMobile = (title, details, map) => {
    // qc top right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = 20 + 'px';
    qcTopRight.right = 0;
    qcTopRight.left = null;
  };

  qcDesktop = (title, details, map) => {
    // qc top right
    const qcTopRight = this.ge.qc.topRight.style;
    qcTopRight.top = map.offsetTop - 40 + 'px';
    qcTopRight.left = map.offsetLeft + map.clientWidth - 20 + 'px';
  };

  lineMobile = (title, details, map) => {
    // line title bottom
    const lineTitleBottom = this.ge.line.titleBottom.style;
    lineTitleBottom.top = title.offsetTop + title.clientHeight + 10 + 'px';
    lineTitleBottom.left = title.offsetLeft - 80 + 'px';
  };

  lineDesktop = (title, details, map) => {
    // line title bottom
    const lineTitleBottom = this.ge.line.titleBottom.style;
    lineTitleBottom.top = details.offsetTop + details.clientHeight + 40 + 'px';
    lineTitleBottom.left = details.offsetLeft + 40 + 'px';
  };

  circleMobile = (title, details, map) => {
    // circle title bottom
    const circleTitleBottom = this.ge.circle.titleBottom.style;
    circleTitleBottom.top = title.offsetTop + title.clientHeight + 30 + 'px';
    circleTitleBottom.left = title.offsetLeft + title.clientWidth + 10 + 'px';
  };

  circleDesktop = (title, details, map) => {
    // circle title bottom
    const circleTitleBottom = this.ge.circle.titleBottom.style;
    circleTitleBottom.top = details.offsetTop - 30 + 'px';
    circleTitleBottom.left = details.offsetLeft + details.clientWidth / 1.5 + 'px';
  };

  pointsMobile = (title, details, map) => {
  };

  pointsDesktop = (title, details, map) => {
  };

  componentDidMount(title, details, map) {
    this.re = [
      // title
      document.querySelector('#contact .title > h1'),
      
      // details
      document.querySelector('#contact .details'),

      // map
      document.querySelector('#contact .map')
    ];

    this.ge = {
      qc: {
        topRight: document.querySelector('#contact .qc-top-right'),
        bottomLeft: document.querySelector('#contact .qc-bottom-left')
      },
      line: {
        titleBottom: document.querySelector('#contact .line-title-bottom')
      },
      circle: {
        titleBottom: document.querySelector('#contact .circle-title-bottom')
      },
      points: {
      }
    };

    this.resize();
  }


  render() {
    return (
      <section className="dsc-team" id="team">
        <div className="title">
          <h1>Team</h1>
        </div>
        <div className="members">
          {this.members.map(member => (
            <div className="member" key={member.name}>
              <img src={member.picture} alt={member.name}/>
              <h3>{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}