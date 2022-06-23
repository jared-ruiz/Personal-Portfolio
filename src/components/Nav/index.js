import React, { useEffect } from 'react'

function Nav () {

    // const {
    //     categories = [],
    // } = props;

    const categories = [
        {
            name: 'About Me'
        },
        {
            name: 'Portfolio'
        },
        {
            name: 'Contact Me'
        },
        {
            name: 'Resume'
        }
      ]

    //console log clicked category name
    function categorySelected(e) {
        console.log(`${e.target.innerText} has been clicked`)
    }

    return (
        <header className='px-1 nav-position'>
            <nav>
                <ul className='flex-row'>
                    {categories.map((category) => (
                        <li className='my-2' key={category.name}>
                            <span className='category-style' onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;