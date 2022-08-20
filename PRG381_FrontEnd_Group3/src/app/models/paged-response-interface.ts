export interface PagedResponse<T>{
    items: T[],
    page: number,
    pageCount:number,
    itemsPerPage: number,
    totalItems: number
}