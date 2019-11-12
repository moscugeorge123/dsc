import React from 'react';
import { Circle, QuarterCircle, Line, VerticalPoints, HorizontalPoints } from '../../../../shared/svg';
import './home.scss';

const title = 'Helping students bridge the gap between theory and practice';
const subtitle =
  'Developer Student Clubs are university based community groups for students interested in Google developer technologies.';

export class Home extends React.Component {
  render() {
    return (
      <section className='dsc-home' id='home'>
        <div className='words'>
          <h2>Learn.</h2>
          <h2>Create.</h2>
          <h2>Collaborate.</h2>
        </div>

        <h3 className='title'>{title}</h3>

        <p className='subtitle'>{subtitle}</p>

        <div className='actions'>
          <button className='btn btn-primary'>APPLY NOW</button>
        </div>
      </section>
    );
  }
}
