import React, { useState } from 'react'

import Nav from './components/Nav'
import About from './components/About'


const App = () => {


  // const [currentCategory, setCurrentCategory] = useState[0];

  return (
    <div>
      <Nav></Nav>
      <main>
      <>
        <About></About>
      </>
      </main>
    </div>

  )
}

export default App;