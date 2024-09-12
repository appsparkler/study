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
    

