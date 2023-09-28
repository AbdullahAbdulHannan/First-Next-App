import React from 'react'
import UserPosts from './UserPosts'

const UserDetail = ({user,usersPost}) => {
    return (
        <>
    
    
     <div>
            <div>UserDetail</div>
    <h3 className="font-semibold">User Name : {user.name}</h3>
    <h3 className="font-semibold">User Email : {user.email}</h3>
        <UserPosts post={usersPost}/>
</div>
    </>
    
  )
}

export default UserDetail