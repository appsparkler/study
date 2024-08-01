# Performance

Websites should load efficiently and effectively for all users - someone with a fastest speed connection on an ultra HD device as well as someone in a village with extremely poor network and a legacy device.

## Web Developer Tools
- Network Tab - we can reload the page by disabling cache and analyze the waterfall table for resource-loading
- Performance Tab - click on start profiling
- Lighthouse (only for Chrome) - It measures (for mobile as well as desktops) basic metrics like:
    - performance
    - accessibility
    - best practices
    - SEO

## Hosted 3rd Party tools
- Page Speed Insights - This is lighthouse on the web
- WebPage Test
- GT Metrics (actually Lighthouse)

## Performance Metrics
- LCP - Largest contentful paint - before the user sees content - text, images, etc.
- FMP - as the name suggests
- TTI - the amount of time it takes to interact with the app

## How is a webpage rendered
- Device > ISP > DNS > ISP - The DNS provides the IP Address we are trying to connect to
- Once IP Address is available, TCP handshake is established `Browser <> Server`
- Now the request-response occurs between browser and server
- DOM trees and CSSOM trees are setup for HTML and CSS respectively
- For all assets except Javascript, the rendering is not blocked.
- Javascript is render-blocking.  All rendering (DOM and CSSOM, etc.) is blocked and waits for the Javascript to download before the rendering continues
> Javascript is render-blocking.  All rendering (DOM and CSSOM, etc.) is blocked and waits for the Javascript to download before the rendering continues

## HTTP2 and multiplexing
- HTTP1.1 disadvantages - synchronous loading - HTML > CSS > CSS > JS > JS > JS (first HTML, then CSS and then JS files) - one after the another - this is slow and in-efficient.  Browsers cheat by creating multiple connections and downloading multiple files at a time but this causes a lot of strain on the computer.
- HTTP2 
    - browser can download many files at same time over a single connection.
    - server must support HTTP2
    - requires HTTPS encryption - available for free from services like lets-encrypt

## Server Bottlenecks
- processor speed
- available RAM
- storage type
- available bandwidth
- shared resources

- Server/hosting optimizations:
    - get sufficiently powerful hosting
    - explore dynamic cloud options
    - optimize files for server - compression, minification, etc.
    - add CDN to our service
- connection optimizations (fixes for TCP ):
    - pre-connect to servers - DNS prefetch and pre-connect
    - preload content -  
    - consider server push - push files to browser before request is made
    - pre-cache select assets (which we are sure will be used by user)
- file transmit optimization
    - modularize JS and CSS (good for HTTP2)
    - async/defer JS
    - defer non-critical CSS
    - lazy loading images
    - compress all files using GZIP and/or BROTLI
- caching
    - can be done at any of three levels:
        1. on the server
            - vital for server side rendered content from a CMS like WP, Drupal, etc.
            - this way server doesn't have to generate the page for every request.  instead, it returns it from cache
        1. on the CDN
            - these are external caching for assets
            - served from servers closest to the visitor
            - "EDGE COMPUTING" moves dynamic asset building to the CDN for quicker and closer service
        1. in the browser
            - browser caches files automatically
            - can be controlled using http-headers - use short caching for JS and CSS and long caching for main CSSs, main JS, images, fonts, etc. 
            - caching strategies are now often controlled by CDN
            - HTTP2 multiplexing - split CSS and JS into smaller modules
- PRPL pattern - 
    - P - Push/pre-load important resources
    - R - Render the initial routes as soon as possible
    - P - Pre-cache remaining assets
    - L - Lazy Load other routes and non-critical assets


    