import React from 'react'

const UserPosts =async ({post}) => {
const posts=await post
    return (
    <>
    {
        posts.map((v,i)=><div key={i} className=' bg-blue-300 rounded m-12 ms-32 p-10'>
            <h1 className='font-bold'>{v.title}</h1>
            <p>{v.body}</p>
            </div>
        )
    }
    </>
  )
}

export default UserPosts