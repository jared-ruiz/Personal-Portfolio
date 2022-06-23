import React, { useEffect } from 'react'

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory])

    return (
        <header className='px-1 nav-position'>
            <nav>
                <ul className='flex-row'>
                    {categories.map((category) => (
                        <li className={`my-2' ${currentCategory.name === category.name && "navActive"}`} key={category.name}>
                            <span className='category-style' onClick={() => { setCurrentCategory(category)}}>
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