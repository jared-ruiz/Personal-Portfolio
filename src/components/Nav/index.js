import React, { useEffect } from 'react'

function Nav () {
    return (
        <header className='px-1 nav-position'>
            <nav>
                <ul className='flex-row'>
                    <li className='my-2'>
                        <a href='#about'>About Me</a>
                    </li>
                    <li className='my-2'>
                        <a href='#portfolio'>Portfolio</a>
                    </li>
                    <li className='my-2'>
                        <a href='#contact'>Contact Me</a>
                    </li>
                    <li className='my-2'>
                        <a href='#resume'>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;