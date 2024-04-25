import React from 'react';
import './Presentations.css';
import DownloadPresentations from '../../Components/DownloadPresentations/DownloadPresentations';
import ppt1Preview from '../../Assets/InceptionPhasePptx.png';
import ppt2Preview from '../../Assets/ElaborationPhasePptx.png';
import ppt3Preview from '../../Assets/ConstructionPhasePptx.png';



const Presentations = () => {
  return (
    <div id="presentations" className='presentations-section'>
      <div className='presentations-content'>
            <div className='row-presentations-h3'>
              <h3>/ Presentations</h3>
            </div>
            <div className='row-presentations-p'>
                <p>Presentation files available for download, providing an overview of the project in a concise manner. </p>
            </div>
            <div className='show-presentations'>
              <DownloadPresentations  filename="Milestone_1_WisH_Where_is_Home.pdf" file="/Pptx/Milestone_1_WisH_Where_is_Home.pdf" text="Inception" img={ppt1Preview}/>
              <DownloadPresentations filename="Milestone_2_WisH_Where_is_Home.pdf" file="/Pptx/Milestone_2_WisH_Where_is_Home.pdf"  text="Elaboration" img={ppt2Preview} />
              <DownloadPresentations filename="Milestone_3_WisH_Where_is_Home.pptx" file="/Pptx/Milestone_3_WisH_Where_is_Home.pptx" text="Construction"   img={ppt3Preview}/>
              <DownloadPresentations text="Transition"/>
            </div>
            
        </div>
    </div>
  );
};

export default Presentations;
