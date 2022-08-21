export interface IData {
    users: IUser[],
    posts: IPost[],
    comments: IComment[]
}

export interface IUser {
    name: string,
    id: number
}
export interface IPost {
    body: string,
    id: number,
    title: string,
    userId: number
}
export interface IComment {
    body: string,
    id: number,
    name: string,
    postId: number
}

