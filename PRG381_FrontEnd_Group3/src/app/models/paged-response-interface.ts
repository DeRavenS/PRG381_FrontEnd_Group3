export interface PagedResponse<T>{
    items: T[],
    page: number,
    pageCount:number,
    size: number,
    totalItems: number
}