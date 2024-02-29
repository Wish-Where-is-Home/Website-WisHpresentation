import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div id="timeline" className='timeline-section'>
      <div className='timeline-content'>
            <div className='row-timeline-h3'>
              <h3>/ Timeline</h3>
            </div>
            <div className='row-timeline'>
              <span>
                <div className='timeline-bloco1'></div>
                <span>To Do</span>
              </span>
              <span>
                <div className='timeline-bloco2'></div>
                <span>In Progress</span>
              </span>
              <span>
              <div className='timeline-bloco3'></div>
                <span>Done</span>
              </span>
            </div>
            <div className='timeline-container'>
              <p>
                <span>Date: 27/02/2024</span>
                <span className='timeline-title'>
                  Presentation of the lifecycle objectives and calendar for the project.
                </span>
                <span>
                  <ul>
                    <li>
                    Research about the project and real estate websites
                    </li>
                    <li>
                    Project and Comunitication Planification
                    </li>
                  </ul>
                </span>
              </p>
              
              <p>
              <span>Date: 12/03/2024</span>
                <span className='timeline-title'>
                Presentation of the lifecycle architecture; the milestone is achieved when the architecture has been validated.
                </span>
                <span>
                  <ul>
                    <li>
                    Functional and non-functional requirement analysis | Define architecture
                    </li>
                    <li>
                    Define the problem domain
                    </li>
                    <li>
                    Define the frameworks to be used and explore them
                    </li>
                  </ul>
                </span>
                </p>
              <p> 
              <span>Date: 23/04/2024</span>
                <span className='timeline-title'>
                Prototype; mid-term presentation with supervisors; peer evaluation.
                </span>
                <span>
                  <ul>
                    <li>
                    Database Modelling and BackEnd Development based on the main core user stories
                    </li>
                    <li>
                    UI Development based on the main core user stories
                    </li>
                  </ul>
                </span>
              </p>
              <p>
              <span>Date: 04/06/2024</span>
              <span className='timeline-title'>
              Project presentation; all functionality has been developed! 
                </span>
                <span>
                  <ul>
                    <li>
                    Developing the remaining user stories and API and backend stabilization
                    </li>
                    <li>
                    Final development of the UI
                    </li>
                    <li>
                    Integration and Developing of additional features 
                    </li>
                    <li>
                    Write the documentation
                    </li>
                    <li>
                    Demo and poster for students@deti & video.
                    </li>
                  </ul>
                </span>
              </p>
          </div>
            
        </div>
    </div>
  );
};

export default Timeline;
