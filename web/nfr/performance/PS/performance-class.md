# PS NFR Training Session Notes

## Metrics
- TTFB - Time To First Byte
- FCP - First Contentful Paint
- LCP - Largest Contentful Paint - 0 - Good - 2.5s - Avg - 4.0s - Poor
- FID - First Input Delay - 0 - Good - 100ms - Avg - 300ms - Poor
- CLS - Cumulative Layout Shift - 0 - Good - 0.1 - Avg - 0.24 - Poor

## Focus Areas
- Loading
    1. Caching
    1. Server Side Rendering
    1. Preload/Prefetch
    1. Optimize Requests
    1. Transaction Size
    1. External Calls
- Interactivity
    1. Code Splitting
    1. JS/CSS minification
    1. Request Optimization
- Visual Stability
    1. Preload fonts
    1. Reduce screen jitter

## Loading
- Caching
    - page level caching with CDN
    - API cache with CDN and/or Redis
    - Content caching in rendering layer
    - Keep in mind, the invalidation strategy for each cache layer - use a messaging system like Kafka
    - Browser side caching
        - Browser Cache - set TTL for all assets - JS, IMG, FONTS, etc.
        - Enable Brotli Compression if possible or use GZIP (do check if CDN provides it by default though)
        - Service Worker 
    - Server Side Rendering - try to render for ATF + 1 fold - total first 2 folds
    - Responsive Images with `<picture >` tags
    - Preload critical CSS 
    - preload only critical assets
    - Next gen images - WebP
    - remove unused and redundant CSS
    - Preconnect to 3rd Party domains (other origins)
    - Prefetch and dns-prefetch - for common path
    - Lazy loading - for non-critical assets
        - for images BTF, we can use `<img loading="lazy" /> />`
        - use sprites for all small images on the page
    - Optimize requsts
        - reduce size and/or number of cookies
        - reduce the number of images
        - avoid unnecessary redirects
        - use GET instead of POST requests wherever possible as POST requests are never cached
        - avoid iframes - they block browsers onload event
    - use bundlephobia to check each client-side asset-size and download time to ensure they are loading fast

## Interactivity And Visual Stability
- Metrices that help in measuring interactivity:
    - FID - First Input Delay - The time between user interaction and systems response
    - TTI - Time To Interactive - Time between page load and systems ability to respond to user input
    - TBT - Total Blocking Time - time between FCP and first user input responsiveness

## Reduce JS/CSS Size
- Strategies
    - Code Splitting - this is usually taken care of by tools like Vite
    - JS/CSS Minification - This too is taken care of by tools like Vite
    - Tree Shaking - This too is taken care of by tools like Vite
    - use bundlephobia - it provides lot of information like - 
        - is it treeshakable
        - size
        - download latency added to our project
    - Defer scripts
    - remove unnecessary library and try native implementations, avoid polyfills for projects target only modern browsers
    - continuous review of scripts and styles being loaded and optimize by removing unused styles

## Tools to audit JS
- Webpack Bunlde Analyzer
- Bundlephobia
- Import Cost VS Code Extension - to check 
- Source map explorer
- size-limit plugin

## Fixing CLS - Cumulitive Layout Shift
- Preload fonts and optimize their loading
- reduce jitter, reshuffle or resizing changes - for ex. show a smaller image with same w:h ratio initiall before showing the main image
- preventing content-reflow from lazy loaded images: https://css-tricks.com/preventing-content-reflow-from-lazy-loaded-images/
