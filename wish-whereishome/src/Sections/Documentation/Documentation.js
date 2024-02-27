import React from 'react';
import './Documentation.css';

const Documentation = () => {
  const openDocumentation = () => {
    window.open('https://whereishomedocumentation.netlify.app/', '_blank');
  };

  return (
    <div id="documentation" className='documentation-section'>
      <div className='documentation-content'>
        <div className='row-documentation-h3'>
          <h3>/ Documentation</h3>
          <p>See all project documentation here:</p>
        </div>
        <div className='doc-button-div'>
          <button className='documentation-button' onClick={openDocumentation}><span>Documentation</span></button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;