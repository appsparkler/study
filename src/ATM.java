public class ATM {
    public synchronized void withdrawCash(Integer amountRequested, BankAccount account) {
        if (account.getWithdrawableAmount() >= amountRequested) {
            account.withdraw(amountRequested);
            System.out.println("Transaction Successful!!");
        } else {
            System.out.println("The amount you requested is more than your withdrawable limit.");
        }
    }
}
