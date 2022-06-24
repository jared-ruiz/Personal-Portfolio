import React, { useState } from 'react';
import Modal from '../Modal';

const Photos = ({ category }) => {

    const [photoList] = useState([
        {
            name: 'Patio',
            category: 'Porfolio',
            description: "Local bar locator using geographic location and brewery API's to populate application.",
            link: 'https://kyrotomato.github.io/Patio/'
        },
        {
            name: 'Fantasy Chat',
            category: 'Portfolio',
            description: "Online role playing application with ability to store posts and comments for every campaign's needs.",
            link: 'https://vast-refuge-25222.herokuapp.com/login'
        }
    ])

    // const currentPhotos = photoList.filter((photo) => photo.category === category)

    const [currentPhoto, setCurrentPhoto] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
    }

    return(
        <div>
            {isModalOpen && (<Modal currentPhoto={currentPhoto} onClose={toggleModal} />)}
            <div className='flex-row'>
                {photoList.map((image, i) => (
                    <img
                        src={require(`../../assets/project-images/${i}.PNG`)}
                        alt={image.name}
                        className='project-image project-margin'
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Photos