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