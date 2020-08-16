import { Icomment } from './comment'
export interface Icolor {
    color: string[],
    comments: Icomment[],
    content: string,
    date: string,
    like: string[],
    title: string,
    url: string,
    user: string,
    _id: string
  }
