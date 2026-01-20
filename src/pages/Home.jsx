import React from 'react'
import Filter from '../component/Filter'
import Hero from '../component/Hero'
import Brandedproperty from '../component/porperty/brandedproperty'
import Listproperty from '../component/porperty/Listproperty'
import Propertyarea from '../component/porperty/Propertyarea'
function Home() {
  return (
   <>
   {/* <Navbar/> */}
   <Hero/>
     <Filter/>
     <Listproperty/>
    <Brandedproperty/>
    <Propertyarea/>
    {/* <Footer/> */}
   </>
  )
}

export default Home
