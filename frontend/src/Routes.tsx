import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from 'components/Navbar'

export default function aaa() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element="a"></Route>
      </Routes>
    </BrowserRouter>
  )
}