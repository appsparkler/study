/**
 * BankAccount
 */
public class BankAccount {

    double balance = 0;
    double overdraftLimit = 0;

    public BankAccount(Integer overdraftLimit) {
        this.overdraftLimit = overdraftLimit;
    }

    public void topUp(double amount) {
        balance = balance + amount;
    }

    public void withdraw(Integer amount) {
        balance = balance - amount;
    }

    public double getWithdrawableAmount() {
        return balance + overdraftLimit;
    }
}