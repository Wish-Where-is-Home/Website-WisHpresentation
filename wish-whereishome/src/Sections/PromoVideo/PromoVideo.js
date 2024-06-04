import React from 'react';
import './PromoVideo.css';
import video from '../../Assets/promo_wish-where-is-home .mp4';

const PromoVideo = () => {


  return (
    <div id="promovideo" className='promoVideo-section'>
      <div className='promoVideo-content'>
        <div className='row-product-h3'>
          <h3 style={{marginBottom:'2rem'}}>/ Promotional Video</h3>
        </div>
        <div className='promovideo-section'>
        <div className='promovideo-content'>
            <div>
                            <video width="100%" height="100%" className="video2" autoPlay loop muted controls disablePictureInPicture controlsList="nodownload">                            
                                <source src={video} type="video/mp4"/>
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                            </div>
            </div>
    </div>
    </div>
    </div>
  );
};

export default PromoVideo;