
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import NotFound from './components/NotFound'
import About from './components/About'
import Contact from './components/Contact'
import Service from './components/Service'
import Comment from './components/Comment'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/comment' element={<Comment/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes> 
      
    </>
  )
}

export default App
