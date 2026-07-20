export interface CategoryAmount {
    category: string;
    amount: number;
}


export interface MonthlyAmount {
    month: string;
    amount: number;
}


export interface DashboardSummary {

    totalIncome: number;

    totalExpense: number;

    transactionCount: number;

    averageExpense: number;

    topCategory?: string | null;

    categoryBreakdown: CategoryAmount[];

    monthlySpending: MonthlyAmount[];

}