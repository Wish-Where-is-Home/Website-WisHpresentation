import React from 'react';
import './Team.css';

import TeamMemberCard from '../../Components/Team-member-card/Team-member-card';

const Team = () => {
 

    return (
      <div id="team" className='team-section'>
        <div className='team-content'>
            <div className='row-team-h3'>
              <h3>/ Team & Mentors</h3>
            </div>
            <div className='row-team-p'>
                <p>Our dedicated team of students and mentors from  <a href='https://www.ua.pt/' target="_blank" rel="noreferrer" >Universidade de Aveiro</a></p>
            </div>
            <div className='show-team-cards'>
              <TeamMemberCard name="Cristiano Nicolau" email="cristianonicolau@ua.pt" role="Student" github="https://github.com/cristiano-nicolau" />
              <TeamMemberCard name="Gonçalo Lopes"  email="goncalorcml@ua.pt" role="Student" github="https://github.com/MoreiraLopes" />
              <TeamMemberCard name="Miguel Miragaia"  email="miguelmiragaia@ua.pt" role="Student" github="https://github.com/Miragaia"/>
              <TeamMemberCard name="Joana Gomes"  email="joanaagomes@ua.pt" role="Student" github="https://github.com/joanaagomesua"/>
              <TeamMemberCard name="Tiago Cruz"  email="tiagofcruz78@ua.pt" role="Student" github="https://github.com/TiagoC18"/>
              <TeamMemberCard name="Vasco Faria"  email="vascomfaria@ua.pt" role="Student" github="https://github.com/Vasco-Faria"/>
              <TeamMemberCard name="José Moreira"  email="jose.moreira@ua.pt" role="Mentor" github="https://github.com/josemoreiraUA"/>
            </div>
        </div>
      </div>
    );
  }

export default Team;
