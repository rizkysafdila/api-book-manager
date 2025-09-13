export interface IBook {
  id: string
  title: string
  author: string
  year: number
  createdAt: Date
  updatedAt: Date
}

export type TBookPayload = Omit<IBook, 'id' | 'createdAt' | 'updatedAt'>