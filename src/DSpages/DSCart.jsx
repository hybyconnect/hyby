import React from 'react'
import DSNavbar from '../components/DSNavbar'
import DSFooter from '../components/DSFooter'
import Cart from '../components/Cart'

const DSCart = () => {
  return (
    <div className='max-w-3xl mx-auto'><DSNavbar />
    {/* <Cart selectedProjects={selectedProjects} /> */}
    <DSFooter />

    </div>
  )
}

export default DSCart