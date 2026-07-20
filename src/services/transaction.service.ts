import { api } from "@/lib/api";

import {
    PageResponse,
    Transaction,
    TransactionFilters,
} from "@/types/transaction";

export async function searchTransactions(
    filters: TransactionFilters
) {
    const response = await api.get<PageResponse<Transaction>>(
        "/transactions/search",
        {
            params: filters,
        }
    );

    return response.data;
}




export async function uploadTransactions(
    file: File
) {

    const formData =
        new FormData();


    formData.append(
        "file",
        file
    );



    const response =
        await api.post<Transaction[]>(
            "/transactions",
            formData,
            {
                headers: {
                    "Content-Type":
                        "multipart/form-data"
                }
            }
        );


    return response.data;

}

export async function getTransactionCategories() {

    const response =
        await api.get<string[]>(
            "/transactions/categories"
        );

    return response.data;

}