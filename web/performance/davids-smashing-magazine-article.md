# Keeping Node.js FastKeeping Node.js Fast 
https://www.smashingmagazine.com/2018/06/nodejs-tools-techniques-performance-servers/

> Source Code: https://github.com/davidmarkclements/keepings-node.js-fast

## Tools
- autocannon - NPM module for benchmarking
- clinic - NPM module for diagnozing perfomrance with NodeJS
    - clinic doctor
    - clinic flame
- pino - NPM NodeJS logger

## Executing Benchamarking Calls with AutoCannon and clinic
- autocannon
    > Note: Server needs to be running at port 3000
    - `autocannon -c100 localhost:3000/seed/v1` - 100 connections
    - `autocannon -c10 localhost:3000/seed/v1` - 100 connections
- clinic
    > Note: no need to start a server separately - this command with start the server as well
    - doctor - `clinic doctor --on-port='autocannon -c100 localhost:3000/seed/v1' -- node index.js`
    - flame - `clinic flame --on-port='autocannon -c100 localhost:3000/seed/v1' -- node index.js`

## Preventing performance problems
- making `autocannon` and `clinic` as part of everyday development
- use these tools to evaluate libraries being added to the project
- use an efficient logger - for ex. `pino` is the fastest one recommended.
