import React from 'react'
import { FaLeaf } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            {/* Logo  */}
            <div>
                <p className='text-primary'>Fruit</p>
                <p>Verse</p>
                <FaLeaf />
            </div>
        </div>
    </nav>
  )
}

export default Navbar