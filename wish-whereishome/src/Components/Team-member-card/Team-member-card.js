import React from 'react';
import './Team-member-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import user from '../../Assets/default-user.png';

const TeamMemberCard = ({name,email, role, github}) =>{
 
    return (
        <div className='team-member-card'>
            <img src={user} alt='default-user'></img>
            <h3>{name}</h3>
            <span>{email}</span>
            <span className='role'>{role}</span>
            <div className='team-social'>
                <a href={github}  target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='github-team' color="#2f95ac"/>
                </a>
            </div>
      </div>
    );
  }


export default TeamMemberCard;