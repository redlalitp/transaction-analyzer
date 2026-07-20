import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";


import {
    getTransactionCategories,
    searchTransactions,
    uploadTransactions,
} from "@/services/transaction.service";


import {
    TransactionFilters,
} from "@/types/transaction";



export function useTransactions(
    filters: TransactionFilters
) {

    return useQuery({

        queryKey: [
            "transactions",
            {
                ...filters
            }
        ],

        queryFn: () =>
            searchTransactions(filters),

    });

}



export function useUploadTransactions() {

    const queryClient =
        useQueryClient();


    return useMutation({

        mutationFn:
            uploadTransactions,


        onSuccess: () => {

            queryClient.invalidateQueries({

                queryKey: [
                    "transactions"
                ]

            });

        },

    });

}

export function useTransactionCategories() {

    return useQuery({

        queryKey: [
            "transaction-categories"
        ],

        queryFn:
            getTransactionCategories,

        staleTime:
            1000 * 60 * 60,

    });

}