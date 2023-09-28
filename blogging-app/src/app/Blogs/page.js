import React from 'react'
import Home from '../page'
import GetUsers from '../API/GetUsers'
import Link from 'next/link'
const Users = async() => {
  const users=await GetUsers()
 console.log(users);
  return (
    <>
    <Home/>
    <div>Users</div>
    {users.map((v,i)=><>

  <Link href={`/Blogs/${v.id}`}>
        <div key={i} className=' bg-slate-500 rounded m-12 ms-32 p-10'>
    <h1 className=' font-bold text-2xl'>{v.name}</h1>
    <h3>{v.email}</h3>
    </div>
    </Link>

    </>
    )
    }
    
    
  </>
  )
}

export default Users