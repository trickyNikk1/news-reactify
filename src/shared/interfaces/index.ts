import { CategoriesType } from '@/entities/category'

export interface IFilters {
  page_number: number
  page_size: number
  category: CategoriesType | null
  keywords: string | number | null
}

export type ParamsType = Partial<IFilters>

export type SkeletonType = 'banner' | 'item'

export type DirectionType = 'row' | 'column'
