import { NotFound } from "../Components/NotFound"
import { Post } from "../Components/Post"
import { PostsList } from "../Components/PostsList"

export const routes = [
    { path: '/posts', component: <PostsList/> },
    { path: '/posts/:postId',  component: <Post/> },
    { path: '/*',  component: <NotFound/>},
]