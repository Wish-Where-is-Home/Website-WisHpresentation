import React from 'react';
import './Poster.css';
import DownloadPresentations from '../../Components/DownloadPresentations/DownloadPresentations';
import posterimage from '../../Assets/poster.png';
import poster1 from '../../Assets/ST2024-Students-Exemplo-Poster.png';




const Poster = () => {
  return (
    <div className='poster-section'>
        <h3>Poster</h3>

            <div className='poster-content'>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                <DownloadPresentations filename="ST2024-Students-Exemplo-Poster.pdf" file="/Pptx/ST2024-Students-Exemplo-Poster.pdf" text="Download Poster"   img={poster1}/>
              </div>
                <div className='poster-img'>
                    <img src={poster1}>
                    </img>
                </div>
            </div>
            <div id="modal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="imgModal"/>
    </div>
    </div>
    
  );
};

export default Poster;  