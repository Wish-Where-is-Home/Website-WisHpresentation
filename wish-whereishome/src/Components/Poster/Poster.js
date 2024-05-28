import React from 'react';
import './Poster.css';
import DownloadPresentations from '../../Components/DownloadPresentations/DownloadPresentations';
import posterimage from '../../Assets/poster.png';




const Poster = () => {
  return (
    <div className='promovideo-section'>
        <h3>Poster</h3>

            <div className='poster-content'>
                <DownloadPresentations filename="ST2024-Students-Exemplo-Poster.pdf" file="/Pptx/ST2024-Students-Exemplo-Poster.pdf" text="Poster"   img={posterimage}/>
            </div>
    </div>
  );
};

export default Poster;  