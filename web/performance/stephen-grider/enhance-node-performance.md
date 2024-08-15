# NodeJS Performance

## Modes
- Two strategies for improving NodeJS performance
    1. Cluster Mode (recommended) 
    1. Use-Worker-Threads (experimental) 

## What is Clustering
- This method sets up a **cluster manager** that orchestrates the child nodes.
- `cluster` is a std library
```js
const cluster = require('cluster');

if(cluster.isMaster) {
    cluster.fork(); // start server 1
    cluster.fork(); // start server 2
    cluster.fork(); // start server 3
} else {
    const express = require('express');
    const app = express();
    app.get("/", (req, res) => {
        return res.send()
    })
    app.listen(3000, () => {

    })
}
```

## Functions to benchmark
```js
const doWork = (duration) => {
    const start = Date.now();
    while(Date.now() - start < duration) { } 
}

const crypto = require('crypto')
const encrypt = () => {
    crypto.pbfdk2('a', 'b', 100000, 512, 'sha512', () => {
        // anything we want to execute - for ex. 
    })
}
```

## Flushing DNS
- it is important to flush DNS whenever

## Benchmarking Performance
- On Linux we have `ab` tool (Apache Benchmark) tool which is great for analysing the performance of a server
- `ab -c 50 -n 500 http://localhost:3000/` - this will make 50 concurrent request 
- When we do the benchmarking using the the `pbkdf2` methods, we notice that if the number of `cluster-forks` are increased above the number of CPU cores on a machine, the performance degrades.
- Reference: https://marcelclasses.udemy.com/course/advanced-node-for-developers/learn/lecture/9646768#overview

## PM2
- PM2 is an opensource software to manage a NodeJS server.  We can use this for best performance.

## Using Worker Threads
- We can use `webworker-threads` npm package for some concurrency as well.
- The Worker and the client both have `postmessage` and `onmessage` APIs which will be used to get the work done.
- Again, this is efficient only until the concurency is upto the number of CPUs in the system.


