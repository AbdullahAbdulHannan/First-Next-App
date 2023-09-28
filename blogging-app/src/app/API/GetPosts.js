// import React from 'react'

const GetPosts = async(id) => {
   const res=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    return res.json()
  
}

export default GetPosts