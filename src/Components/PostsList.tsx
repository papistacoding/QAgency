import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { IComment, IData, IPost, IUser } from '../interfaces/Data';
import { ILoggerProps } from '../interfaces/LoggerProps';
import "./postList.css"

export const PostsList = (props: ILoggerProps) => {
  console.log(props.consoleLogger, "<PostsList>");
  
  const [initialLoad ,setInitialLoad] = useState<boolean>(true)
  const [dataLoaded, setDataLoaded] = useState<boolean>(false)
  const [data, setData] = useState<IData>()
  const navigate = useNavigate()

  useEffect(()=>{
    if(!initialLoad){
      let usersArray: IUser[] = [];
      let postsArray: IPost[] = [];
      let commentsArray: IComment[] = [];

      getUsers().then((users) => {
        usersArray = users;
        getPosts().then((posts) => {
          postsArray = posts
          const promises = posts.map((post:IPost) =>getComments(post.id))
          Promise.all(promises).then((comments) => {
            comments.forEach((comments) => {
              commentsArray = [...commentsArray, ...comments]
              console.log(commentsArray);
              
            })            
              setData({
                users: usersArray,
                posts: postsArray,
                comments: commentsArray
              })
              setDataLoaded(true)
          });     
        })
      })
    }
    setInitialLoad(false)
    
  },[initialLoad])
  
  const getPosts = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    };
  }
  const getComments = async (id:number) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    };
  } 
  const getUsers = async () =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!response.ok) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.json()
    };
  } 


  
  return (
    <>
      {dataLoaded && data &&  data.posts.map((post:IPost) => 
        <div className='post' key={post.id} onClick={() => {navigate(`/posts/${post.id}`, { state: {...data, postId: post.id}})}}>
        <h5> post title: {post.title}</h5>
          <ul> post body:{post.body}
            <li> comment body: {data?.comments.filter((comment:IComment) => comment.id === post.id).map((comment:IComment) => comment.body) }</li>
            <li> user name: {data?.users.filter((user:IUser) => user.id === post.userId).map((users:IUser) => users.name) }</li> 
          </ul>
      </div>)}
    </>
  )
}
