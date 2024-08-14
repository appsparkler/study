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
## What causes the event loop to be runnin?
Imagine event loop to be like a `while loop` which starts once a NodeJS program is executed.  The loop doesn't end until:
    1. there are any pending timers
    1. there are any pending OS operations
    1. there are any pending long running operations
- the body of this imaginary event loop (while loop) exececutes in a single tick (so, a tick is basically a single execution of an event-loop)
- Inside this imaginary event loop, there's a pause after 2 basic checks:
    1. Node looks at pendingTimers and see if any functions are ready to be called (`setTimeout` and `setInterval`)
    1. Node looks at pending OS Tasks and calls relevant callbacks
    1. now the never-ending pause - until
        1. a new timer is about to complete
        1. a new pending operation task is done
        1. a new pending task is done
    1. Look at pendingTimers, call any `setImmediate`s
    1. Handle any `close` events - for ex. `readStream.on('close', handleClose)`

## Is Node single threaded
- Some of Node Framework/Std. lib is not single threaded!
- If we execute this line multiple times (paralelly, max 4), we'll notice that it takes about the same time it does for executing it once:
```js 
console.log(Date.now()); crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {console.log(Date.now())})
```
- this efficiency is handle by `Thread pool` managed by the `libuv` library
- What functions use the thread-pool? - All fs functions
- All networking related operations are not handled by V8 or libuv, they are instead handed over to OS Aysnc/Networking Helpers.
- What functions in node std library use the OS's async features? - almost everything around networking for all OSs. 
    - the tasks under OS are reflected in our `pendingOsTasks` array.

