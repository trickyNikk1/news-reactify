export interface INews {
  author: string
  category: CategoriesType[]
  description: string
  id: string
  image: string
  language: string
  published: string
  title: string
  url: string
}

export interface NewsApiResponse {
  news: INews[]
  page: number
  status: string
}

export interface CategoriesApiResponse {
  categories: CategoriesType[]
  description: string
  status: string
}

export interface IFilters {
  page_number: number
  page_size: number
  category: CategoriesType | null
  keywords: string | number | null
}

export interface PaginationProps {
  totalPages: number
  currentPage: number
  handleNextPage: () => void
  handlePreviousPage: () => void
  handlePageClick: (page: number) => void
}

export type ParamsType = Partial<IFilters>

export type SkeletonType = 'banner' | 'item'

export type DirectionType = 'row' | 'column'

export type CategoriesType =
  | 'regional'
  | 'technology'
  | 'lifestyle'
  | 'business'
  | 'general'
  | 'programming'
  | 'science'
  | 'entertainment'
  | 'world'
  | 'sports'
  | 'finance'
  | 'academia'
  | 'politics'
  | 'health'
  | 'opinion'
  | 'food'
  | 'gaming'
