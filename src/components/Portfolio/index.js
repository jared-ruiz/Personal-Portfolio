import React from 'react';
import Photos from '../Photos';

function Portfolio ({ currentCategory }) {
    const { name } = currentCategory;
    return( 
        <section>
            {/* <h1>{name}</h1> */}
            {/* <p>{description}</p> */}
            <Photos category={currentCategory.name} />
        </section>
    )
}

export default Portfolio;