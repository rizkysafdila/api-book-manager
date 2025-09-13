export interface IBook {
  id: string
  title: string
  author: string
  year: number
  // createdAt: string
  // updatedAt: string
}

export type TBookPayload = Omit<IBook, 'id'>