public class Main {
    public static void main(String[] args) {
        BankAccount myBankAccount = new BankAccount(50);
        ATM oneBankATM = new ATM();
        
        myBankAccount.topUp(100);
        
        Thread t1 = new Thread(() -> {
            oneBankATM.withdrawCash(100, myBankAccount);
        });

        Thread t2 = new Thread(() -> {
            oneBankATM.withdrawCash(100, myBankAccount);
        });
        
        t1.start();
        t2.start();
    }
}
