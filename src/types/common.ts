export interface ILoginRequest {
  userName: string;
}
export type UserType = {
  name: string,
  image: any,
  userId: string
}
export type ArticleType = {
  // name: string,
  image: any,
  description: string
  category: string
}

export type CommentType  = { 
  followId: number, 
  updateHeart: boolean, 
  sum: number, 
  key: number, 
  name: string, 
  image: any, 
  description: string 
}
