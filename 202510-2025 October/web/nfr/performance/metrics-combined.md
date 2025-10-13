# FCP

## Optimize FCP
- eliminate render-blocking resources
- reduce TTFB
    - minify CSS
    - remove unused JS
    - preconnect to required origins
    - avoid multiple page redirects
    - preload key requests
    - serve static assets with an efficient cache policy
    - avoid an excessive DOM size
- ensure text remains visible during webfont load
- minimize critical request depth
- keep request count low and transfer size small

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

# LCP - Largest Contentful Paint
It represents how quickly the main content (largest image or text-block) of a page is loaded.

## Optimizing LCP
1. Eliminate Resource availability delay - 10%
    - preload images, or if using the picture tag, set `fetchpriority="high"` on the picture element
1. Element Render Delay - 10%
    - reduce or inline render-blocking scripts like a/b testers, large CSS and JS files in `<head>` tag
    - defer or inline render-blocking JS
    - SSR
    - break up long task - i.e. any task that takes more than 50ms needs to broken up into smaller tasks so that the LC can be painted in between those tasks.
1. Reduce Resource Load duration - 40%
    - remove unused CSS
    - defer non-critical CSS
    - minify and compresss CSS
    - use CDNs 
    - hydrate caches so that next user visits are faster - cache headers, service workers, etc.
1. Reduce TTFB
    
## TTFB - Time To First Byte
TTFB is the foundation metric.  A delay in this metric will cause a delay in all other metrics!  Thus, we need to ensure this metric is within bounds for optimal performance.

## Optimizing TTFB
- Heavily dependent on frameworks - for ex. if a WP site is imacted by the number and quality of plugin and themes,
- Hosting, hosting, hosting - memory allocation, up-to-date stack
- Use CDN - featuers like edge workers (similar to service workers), quick DNS resolution times, modern HTTP protocols, compression, caching, etc.
-  use cached content wherever possible - server caching (Redis), CDN caching (Akamai) or browser caching (cache-control headers, service workers, etc)
- avoid multiple page redirects
- use streams
- use `state-while-revalidate` strategy
- use app shell model

# TTI - Time To Interactive

## Optimize TTI
- improve TTFB
- improve LCP
- reduce JS execution times
- minimize main thread work
- keep request counts low and transfer size small
- keep request count low and transfer size small