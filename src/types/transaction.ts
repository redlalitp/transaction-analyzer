export interface Transaction {

    id: number;

    accountId: number;

    transactionDate: string;

    description: string;

    amount: number;

    category: string;

}


export interface PageResponse<T> {

    content: T[];

    totalElements: number;

    totalPages: number;

    size: number;

    number: number;

}


export interface TransactionSearchParams {


    accountId?: number;

    category?: string;


    from?: string;

    to?: string;


    page?: number;

    size?: number;


    sort?: string;

}

export interface TransactionFilters {
    page: number;
    size: number;

    sort: string;

    query?: string;
    category?: string;

    from?: string;
    to?: string;

    accountId?: number;
}