import React from 'react';
import './Promovideo.css';
import video from '../../Assets/promo_wish-where-is-home .mp4';


const Promovideo = () => {
  return (
    <div className='promovideo-section'>
        <h3>Promotional Video</h3>
        <div className='promovideo-content'>
            <div>
                            <video width="100%" height="100%" className="video2" autoPlay loop muted controls disablePictureInPicture controlsList="nodownload">                            
                                <source src={video} type="video/mp4"/>
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                            </div>
            </div>
    </div>
  );
};

export default Promovideo;