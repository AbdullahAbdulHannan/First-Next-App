import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className=' p-5 bg-orange-300 text-white flex justify-end '>
    <Link className=' pe-28' href={'/Blogs'}>Home</Link>
    <Link className=' pe-28' href={'/About'}>About</Link>
    <Link className=' pe-28' href={'/Blogs'}>Blogs</Link>
    <Link className=' pe-28' href={'/Contacts'}>Contacts</Link>
    </div>
    </>
  )
}

export default Home