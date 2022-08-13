export interface ListResponse<T>{
    items: T[],
    page: number,
    itemsPerPage: number,
    totalItems: number
}