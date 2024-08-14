# Advanced NodeJS
https://marcelclasses.udemy.com/course/advanced-node-for-developers/learn/lecture/9636084

## NodeJS Internals
- 2 most important dependencies of NodeJS:
    - V8 
        - is an open source JS engine created by Google
        - its purpose is to be able to execute JS code outside of the browser.
        - 70% C++ and 30% JS
        - v8 project is used to translate the NodeJS values in our program like boolean, object to C++ equivalents.
    - libuv 
        - a C++ open source project that gives Node access to 
            - the operating systems underlying file system
            - the networking system
            - concurrency, etc.
            - 100% C++
- it provides wrappers with very consistent and unified APIs to use inside of our projects such as `http, fs, crypto, path, etc.` - most of these functionalities are provided by `libuv`


## Threads
- a CPU can run several processes (parallely) at any point.
- each process can have multiple threads.
- a `thread` is a unit of instruction that is waiting to be executed by the CPU. 
- deciding which order to execute the threads in is referred to as `scheduling`. 
- 2 ways we can improve performance 
    1. add more CPU cores
    1. allow the OS scheduler to detect big pauses in processing time in expensive i/o processes.

## Event Loop
- each thread has a `event loop` which is a control protocol that defines what the thread will be doing at any point in time.
- every program has only one event loop
- 