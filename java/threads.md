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