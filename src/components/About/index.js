import React from 'react'
import profilePicture from '../../assets/profile/front-smile.jpg'

function About () {
    return(
        <section>
            <div>
                <img src={profilePicture} style={{ width: 'auto', height: '450px', margin: 'auto', display: 'block', borderRadius: '10%', border: '10px solid white', objectFit: 'cover' }} />
            </div>
            <div className='about-me-p'>
                <p>My name is</p>
                <p><span className='name-highlight'>Jared Ruiz</span></p>
                <p>I am an aspiring web developer</p>
            </div>
        </section>
    )
}

export default About;