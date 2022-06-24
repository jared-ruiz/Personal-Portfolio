import React from 'react'
import profilePicture from '../../assets/profile/front-smile.jpg'

function About () {
    return(
        <section>
            <div>
                <img src={profilePicture} alt='profile-picture' style={{ maxWidth: '100%', height: '450px', margin: 'auto', display: 'block', borderRadius: '10%', border: '10px solid white', objectFit: 'cover' }} />
            </div>
            <div className='about-me-p'>
                <p>My name is</p>
                <p><span className='name-highlight'>Jared Ruiz</span></p>
                <p>I am a San Antonio Based Web Developer!</p>
            </div>
        </section>
    )
}

export default About;