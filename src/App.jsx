import React, { useState } from 'react'

import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'


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
    if (currentCategory === categories[1]) {
      return <Portfolio currentCategory={currentCategory}/>
    }
    if (currentCategory === categories[2]) {
      return <Contact/>
    }
    return <Resume/>

    

  }

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
      <>
        {renderPage()}
      </>
      </main>
      <Footer/>
    </div>

  )
}

export default App;