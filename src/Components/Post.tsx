import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IComment, IPost, IUser } from '../interfaces/Data';
import { ILoggerProps } from '../interfaces/LoggerProps'

export const Post = (props: ILoggerProps) => {
  console.log(props.consoleLogger, "<Post>");
  const [data, setData] = useState<any>()
  const {state}:any = useLocation();

  useEffect(()=>{
    const postObj = state.posts.find((post:IPost) => post.id === state.postId)
    const postComments = state.comments.filter((comment:IComment) => comment.postId === postObj.id)
    const userName = state.users.find((user:IUser) => user.id === postObj.userId)
    setData({
      comments: postComments,
      post: postObj,
      user: userName
    })
    
  },[state])
    
  return (
    <>
      {data && <div className='post postMalone'>
        <h5> post title: {data.post.title}</h5>
        <ul> post body:{data.post.body}
          <li> comment body: {data.comments.map((comment:IComment) => comment.body) }</li>
          <li> user name: {data.user.name}</li> 
        </ul> 
      </div>}</>
  )
}
