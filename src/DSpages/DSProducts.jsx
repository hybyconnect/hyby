import React from 'react'
import Navbar from '../components/Navbar'
import DSFooter from '../components/DSFooter'
import DSproductPage from '../components/DSproductPage'
import DSNavbar from '../components/DSNavbar'

const DSProducts = () => {
  return (
    <>
    <div className='bg-gray-100 max-w-3xl mx-auto'>
    <DSNavbar />
    <DSproductPage />
    
    <DSFooter />
    </div>
    
    </>
  )
}

export default DSProducts