# FID - First Input Delay
The delay a user faces when trying to interact with an application for the first time.  Ideal FID is <100ms, >300ms is poor

## Optimize FID
- Break up long tasks into smaller async tasks
- first-party and third-party scripts - size, execution time and inefficient chunking
- data-fetching - 
- use web-worker - use tools like workerize, conincident and Complink to easily work with workers
- reduce JS execution time
    - defer unused JS
    - minimize unused polyfills
- code-splitting


