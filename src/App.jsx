import './App.css'
import Filter from './component/Filter'
import Hero from './component/Hero'
import Footer from './component/layout/Footer'
import Navbar from './component/layout/Navbar'
import Brandedproperty from './component/porperty/brandedproperty'
import Listproperty from './component/porperty/Listproperty'
import Propertyarea from './component/porperty/Propertyarea'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <Filter/>
     <Listproperty/>
    <Brandedproperty/>
    <Propertyarea/>
    <Footer/>
    </>

  )
}

export default App
