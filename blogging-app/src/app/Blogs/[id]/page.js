import UserDetail from '@/Components/UserDetail'
import GetPosts from '@/app/API/GetPosts'
import GetUserDetails from '@/app/API/GetUserDetails'
import Home from '@/app/page'
import React, { Suspense } from 'react'
export async function generateMetadata({ params }) {
  const userInfo = await GetUserDetails(params.id)
  return {
      title: userInfo.name,
      description: userInfo.email
  }
}
const page =async ({params}) => {
    const userInfo=GetUserDetails(params.id)
    const UserPosts=GetPosts(params.id)
    const [user]=await Promise.all([userInfo])
    
    return (
        <>
        <Home/>
        <Suspense fallback={<h2 className="text-center text-2xl">Loading.....</h2>}>
     < UserDetail user={user} usersPost={UserPosts}/>
        </Suspense>
        </>
    // <div>page</div>
  )
}

export default page