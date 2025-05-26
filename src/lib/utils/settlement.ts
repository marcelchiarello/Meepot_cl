import { UserBalance, Transfer } from '@/types/models'

/**
 * Optimizes settlement transactions to minimize the number of transfers needed
 * Uses a greedy algorithm to match creditors and debtors efficiently
 */
export function optimizeSettlement(balances: Map<string, number>): Transfer[] {
  const transfers: Transfer[] = []
  const creditors: Array<{ userId: string; amount: number }> = []
  const debtors: Array<{ userId: string; amount: number }> = []
  
  // Separate creditors and debtors
  balances.forEach((balance, userId) => {
    if (balance > 0.01) { // Creditor (owed money)
      creditors.push({ userId, amount: balance })
    } else if (balance < -0.01) { // Debtor (owes money)
      debtors.push({ userId, amount: Math.abs(balance) })
    }
  })
  
  // Sort by amount (descending) for optimal matching
  creditors.sort((a, b) => b.amount - a.amount)
  debtors.sort((a, b) => b.amount - a.amount)
  
  // Match creditors with debtors
  let creditorIndex = 0
  let debtorIndex = 0
  
  while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
    const creditor = creditors[creditorIndex]
    const debtor = debtors[debtorIndex]
    
    const transferAmount = Math.min(creditor.amount, debtor.amount)
    
    if (transferAmount > 0.01) { // Only create transfer if amount is significant
      transfers.push({
        from: debtor.userId,
        to: creditor.userId,
        amount: Math.round(transferAmount * 100) / 100 // Round to 2 decimal places
      })
    }
    
    creditor.amount -= transferAmount
    debtor.amount -= transferAmount
    
    // Move to next creditor/debtor if current one is settled
    if (creditor.amount < 0.01) creditorIndex++
    if (debtor.amount < 0.01) debtorIndex++
  }
  
  return transfers
}

/**
 * Calculates user balances from expenses
 */
export function calculateBalances(
  expenses: Array<{
    paidBy: string
    amount: number
    splits: Array<{ userId: string; amount: number }>
  }>
): Map<string, number> {
  const balances = new Map<string, number>()
  
  expenses.forEach(expense => {
    // Add amount paid by user
    const currentPaidBalance = balances.get(expense.paidBy) || 0
    balances.set(expense.paidBy, currentPaidBalance + expense.amount)
    
    // Subtract amounts owed by each user
    expense.splits.forEach(split => {
      const currentOwedBalance = balances.get(split.userId) || 0
      balances.set(split.userId, currentOwedBalance - split.amount)
    })
  })
  
  // Round all balances to 2 decimal places
  balances.forEach((balance, userId) => {
    balances.set(userId, Math.round(balance * 100) / 100)
  })
  
  return balances
}

/**
 * Converts balances map to UserBalance array for storage
 */
export function createUserBalances(balances: Map<string, number>): UserBalance[] {
  const userBalances: UserBalance[] = []
  
  balances.forEach((balance, userId) => {
    userBalances.push({
      userId,
      paid: balance > 0 ? balance : 0,
      owed: balance < 0 ? Math.abs(balance) : 0,
      balance
    })
  })
  
  return userBalances
}