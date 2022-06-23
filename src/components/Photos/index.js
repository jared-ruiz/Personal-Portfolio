import React, { useState } from 'react';

const Photos = ({ category }) => {

    const [photoList] = useState([
        {
            name: 'Patio',
            category: 'Porfolio',
            description: "Local bar locator using geographic location and brewery API's to populate application."
        },
        {
            name: 'Fantasy Chat',
            category: 'Portfolio',
            description: "Online role playing application with ability to store posts and comments for every campaign's needs."
        }
    ])

    const currentPhotos = photoList.filter((photo) => photo.category === category)

    return(
        <div>
            <div className='flex-row'>
                {photoList.map((image, i) => (
                    <img
                        src={require(`../../assets/project-images/${i}.PNG`)}
                        alt={image.name}
                        className='project-image project-margin'
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Photos