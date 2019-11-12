import React from 'react';
import './team.scss';

export class Team extends React.Component {
  constructor() {
    super();
    this.members = [
      {
        name: 'Răzvan-Ionuț Borșan',
        picture: require('../../../../assets/images/razvan.jpg'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
      },
      {
        name: 'Panagiotis Chontas',
        picture: require('../../../../assets/images/pana.png'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
      },
      {
        name: 'Radu Marinoiu',
        picture: require('../../../../assets/images/member.png'),
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quibusdam eius possimus, ab ipsam atque. Quaerat cupiditate nulla, explicabo quasi deleniti et autem repudiandae consequatur rem expedita amet soluta?'
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