import React from 'react';
import resume from '../../assets/docs/Resume (Jared Ruiz).pdf';

function Resume () {
    return(
        <div>
            <button type='button' className='resume-button'>
                <a href={resume} download={resume} className='resume-download-text'>Download Resume</a>
            </button>
        </div>
    )
}

export default Resume;