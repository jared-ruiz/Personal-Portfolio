import React, { useState } from 'react'

import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'


const App = () => {

  const [categories] = useState([
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
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    if (currentCategory === categories[0]) {
      return <About/>
    }
    return <Portfolio currentCategory={currentCategory}/>

  }

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
      <>
        {/* <Portfolio currentCategory={currentCategory}></Portfolio>
        <About></About> */}
        {renderPage()}
      </>
      </main>
    </div>

  )
}

export default App;