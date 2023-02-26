# Threads
Threads allow to use multiple processes to run simultaneously.
They are very helpful for expensive and time consuming processs
to avoid blocking an application.

# Implementing a process on a Thread
We need to override the run method on the Thread class

```java
// override the run method
public class Thready extends Thread {
     @Override
    public void run() {
        int i = 1;
        while(i< 100) {
            System.out.println(i + " " + getName());
            i++;
        }
    }
}

Thread.getActiveCount(); // get count of threads running 
Thread t1 = new Thready();
t1.start(); // start the thread
t1.setName("memory allocation calculator"):
```

# Implementing threads with `Runnable @FunctionalInterface` 
One major benefit with this approach is that we can implement Thread as
well as extend a class other than Thread as we are allowed to extend a 
maximum of one class in Java (note above that once `Thready` extends `Thread`,
it cannot extend any other class).
```java
// Runny.java
public class Runny implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println(Thread.currentThread().getName() + "-" + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // With the thread logic abstracted out in Runny
        Thread t1 = new Thread(new Runny());
        t1.start();

        // With Runnable defined within the main function itself
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    System.out.println(Thread.currentThread().getName() + "-" + i);
                }
            }
        });
        t2.start();

        // With lambda (implementing the Runnable @Functional Interface)
        Thread t3 = new Thread(() -> {
                for (int i = 0; i < 100; i++) {
                    System.out.println(Thread.currentThread().getName() + "-" + i);
                }
        });
        t3.start();
    }
}

```

# Synchronized Methods
Methods that are not `synchronized` will be allowed to execute simultaneously
by multiple threads.  This can be dangerous for applications which have methods
whose logic depends on the one another - for ex. an ATM's withdraw cash method; if
executed simultaneously, will allow to withdraw cash before updating the balance
affected by one of the executions.
To avoid this situation; we can make that method `synchronized` - i.e. it can
execute only by one thread at any given time.
```java
// ATM class
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

```

# Deadlocks
Sometimes 2 or more threads could end up in a deadlock - for ex. when all threads are waiting on the
same object.  To avoid deadlocks; we can consider:
- avoiding nested synchronized methods
- if nested synchronized methods cannot be avoided; its best to have threads work with the objects in
the same sequence.
```java
// deadlock
public class Main {
    public static Object spoon = new Object();
    public static Object bowl = new Object();
    public static void main(String[] args) {
       Thread cook1 = new Thread(() -> {
        synchronized(spoon) {
            System.out.println("Cook 1: Holding the spoon");
            System.out.println("Cook 2: Waiting for the bowl");

            synchronized(bowl) {
                System.out.println("Cook 1: Holding the spoon & the bowl.");
            }
        }
       });

       Thread cook2 = new Thread(() -> {
        synchronized(bowl) {
            System.out.println("Cook 1: Holding the bowl");
            System.out.println("Cook 2: Waiting for the spoon");

            synchronized(spoon) {
                System.out.println("Cook 1: Holding the bowl & the spoon.");
            }
        }
       });

       cook1.start();
       cook2.start();
    }
}

// breaking the deadlock
public class Main {
    public static Object spoon = new Object();
    public static Object bowl = new Object();
    public static void main(String[] args) {
       Thread cook1 = new Thread(() -> {
        synchronized(bowl) {
            System.out.println("Cook 1: Holding the bowl");
            System.out.println("Cook 2: Waiting for the spoon");

            synchronized(bowl) {
                System.out.println("Cook 1: Holding the spoon & the bowl.");
            }
        }
       });

       Thread cook2 = new Thread(() -> {
        synchronized(bowl) {
            System.out.println("Cook 1: Holding the bowl");
            System.out.println("Cook 2: Waiting for the spoon");

            synchronized(spoon) {
                System.out.println("Cook 1: Holding the bowl & the spoon.");
            }
        }
       });

       cook1.start();
       cook2.start();
    }
}

```
