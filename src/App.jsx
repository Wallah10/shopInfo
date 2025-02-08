
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import NotFound from './components/NotFound'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
      
    </>
  )
}

export default App
