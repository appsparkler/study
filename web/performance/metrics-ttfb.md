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