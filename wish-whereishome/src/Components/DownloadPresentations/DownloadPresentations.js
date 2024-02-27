import React from 'react';
import './DownloadPresentations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDownload } from '@fortawesome/free-solid-svg-icons';



const DownloadPresentations = ({file,filename, text,img}) => {

  const handleDownload = () => {
   
    const link = document.createElement('a');
    link.href = {file};
    link.download = {filename};
    link.click();
  };

  return (
    <div className="powerpoint-carddd" >
    <div className="powerpoint-card">
      <img src={img} alt="No Powerpoint Available" />
      <div className="overlay" onClick={handleDownload}>
      <FontAwesomeIcon className='transfer-icon' icon={faDownload} />
      </div>

    </div>
    <div className='powerpoint-text'>
    <p>{text}</p>
  </div>
</div>
  );
};

export default DownloadPresentations;
