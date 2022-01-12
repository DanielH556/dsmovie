import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import InsertMovie from './pages/Form'
import Landing from './pages/Landing'
import Pagination from './pages/Pagination'

export default function Router() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/form">
          <Route path=":movieId" element={<InsertMovie />}/>
        </Route>
        <Route path="/catalog" element={<Pagination />}></Route>
      </Routes>
    </BrowserRouter>
  )
}