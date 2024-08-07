# Learning Enterprise Web Application Performance by Maximiliano Firtman

## Resources
- https://www.webpagetest.org/ - tool to check detailed website performance along with recommendations
- G Suite HAR file analyzer - https://toolbox.googleapps.com/apps/har_analyzer/
- HAR analyzer - http://www.softwareishard.com/har/viewer/
- HAR file comparision tool - need to search
- Genymotion - tool to emulate android devices
- Samsung remote test lab - https://developer.samsung.com/remote-test-lab
- HSTS Preload - opt in for HTTPS here : https://hstspreload.org

## Web Performance Optimization
- intro - bounce rate is inversely proportional to the TTL.  More than 3 seconds TTL, the bounce rate increases exponentially.
- WPO in enterprise world - we have more control than the public WPO.
- where to focus - for EA, we need to focus more on the client side (FE).
- performance and perception goals - 
    - human perception is more important than technical rendering
    - time limits in human perception - 100ms - user needs to see feedback on interaction
    - time limit of users flow of though - 1000ms - user looses flow of thoughts
    - time limit to users tolerance - 10000ms - use feels frustrated
    - RAIL Performannce Goal (by Google)
        - Response - 100ms - time limit for response on user-interaction
        - Animation - 10ms - 
        - Idle - 50ms - idle time for any JS or CSS to load
        - Load - 1000ms - for a page to load
    - always remember, HUMAN PERCEPTION is more important than TECHINCAL DETAILS
- understanding the mobile web - 
    - browser: unless it is pre-defined - for ex. that all users will use the Chrome browser on Android - we'll have to consider different browsers - including web-views inside various apps such as FB, Google, etc.
    - network: we need to consider 4G, 3G and 2G connections used for browsing our app.  Also consider VPN latency.

## Charts & Metrics
- waterfall chart
    views:
        - first view - empty cache (first visit to site)
        - repeat view - all resources are available on cache
        - flexible view - some are cached but not all
    - vertical lines - may specify important events such as page-load, DOM complete, etc.
    - row colors - various colors may specify various things - for ex. yellow rows may specify redirect, red-rows may specify errors, etc.
    - resource-timing-bar - for each resource, there are various phases while the resource has completed download - for ex. DNS lookup, TCP connection, TTFB, Download, Stalled or hold, proxy-negotiation, SSL negotiation, 
- HAR format - a format to save waterfall data
    - its in JSON format
    - from web-page-test tool, we could export HAR files for various scenarios - for ex. Chrome on Android, Chrome on iOS, etc. and export the HAR files and then use the HAR file analyzer tools such as G Suite HAR file analyzer to analyze the results and compare them
    - helps us to compare HAR files
- performance milestones
    - TTFB - Time To First Byte - 
        - gives us information about server performance
    - First Render or First Paint
        - the primary content is visible
    - First Meaningful paint
        - the primary content is visible
        - the first above the fold layout change has happened
        - web fonts have loaded
        - i.e. the user has started to read and parse the content
    - First Interactive
        - the user can start interacting with the app i.e. the necessary scripts have loaded
        - and the CPU is idle enough to handle most user inputs
    - First Meaningful Interaction
        - it is a custom metric for our app
    - Consistently interactive
        - most network resources have finished loading
    - DOM Content Loaded
        - follows the DOM event with the same name
        - all resources have been download
    - ATF render - Above The Fold render
        - viewport dependent
    - Page Load
        - defines the DOM onload event is fired
        - all resources have been downloaded and executed by the application
- filmstrip views
    - this helps us analyze the screen-view against the waterfall
    - web-page-test-view has many tools for analyzing filmstrip - it can create a video from the filmstrips which helps us understand what the user is experiencing
- speed index (aka peceptual speed index) - defines how much blank screen content the user has seen on the screen during the loading process. 
    - it is viewport dependent
    - web-page-test toolkit has a tool to test speed-index
    - goal is to have a speed-index of 1500 or below.

## Measuring Performance
- measuring on different platforms
    - simulate various conditions - based on what your users are going to experience.
    - use personas to target all users
    - use iOS and Android emulators
    - Genymotion for Android emulators
    - modern.ie (by microsoft) has tools to download virtual machines so that we can test our app on Windows
    - cloud base solutions
        - samsung remote test lab - https://developer.samsung.com/remote-test-lab
        - AWS device farm
        - perfecto
        - browser-stack
- measuring on different networks
    - network throttling tools on browser developer tools
    - Network Link Conditioner Tool - available for free on Mac
    - Charles Proxy - available on Windows (free only for 30 mins)
    - Android Virtual Device - Advanced Settings - network speed configuration
- using web-page-test tool (https://webpagetest.org)
    - this tool has many options - few of the ones easy to miss are
        - multiple URLs
        - and many other features - maybe it can be covered as part of a separate learning module
- creating scripts with web-page-test tool - allows us to write scripts for testing on the web tool
- using Microsoft Edge developer tools
    - using the Performance Tab
    - using the Memory Tab to review the memory utilization
- using Safari developer tools - it has timeline tool on a different tab
- using Firefox developer tools
    - it has a performance tab that we can use to analyze the performance
- using Google Chrome developer tools
    - network, performance, memory and audit tabs for analyzing performance
- using Lighthouse - npm module - lighthouse
    - allows us to run lighthouse locally
    - can be added to the build chain
- measuring on iOS and Android
    - iOS - devices > simulator
    - Android - emulator by Android Studio
- measuring in production with APIs
    - `window.performance` object has many useful timestamps and other important performance data
    - use `performance.now()` instead of `Date.now()` for measuring performance
    - using resources:
        ```js
            let resourceList =
            window-performance.getEntriesByType("resource");
            for (let resourceInfo of resourceList) {
                let totalTime = resourceInfo. responseEnd -
                resourceInfo.startTime;
            }
        ```
    - adding lines on waterfall - `performance.mark()`
    - first paint and first contentful paint - 
        ```js
            let paintMetrics = performance.getEntriesByType("paint");
            paintMetrics.forEach ( metric => {
                console.log ('${metric.name}: ${metric.startTime}');
            }) ;
        ```

## improving the loading experience
- loading step review
    - HTTP2
        - can multiplex the same TCP connection
        - HTTP header compression
        - supports server push
    - steps involved in a web app access
        1. DNS Query - to convert the web-address into an ip-address
        1. TCP connection - a handshake is started and a connection is established
        1. HTTP Request - browser creates a request 
        1. Server - server queue and execution
        1. HTTP Response - by the server
        1. HTML Parsing - DOM and CSSOM creation.  JS is render blocking.  Setup queue for resources
        1. Resources Download
        1. Rendering 
- optimizing network layer
    1. upgrade to HTTPS - free TLS certificates are available on Lets Encrypt
    1. upgrade to HTTP2 - Akamai or Cloudfare CDNs support it even if our server doesn't support it.
    1. compression - ensure GZIP, zopli or brotli (br)
    1. Reduce DNS queries - use fewer 3rd party resources - which will reduce DNS queries
    1. enable keep-alive (only for HTTP 1)
    1. use CDN - Akamai or Cloudfare
- optimizing network layer - part 2
    1. domain sharding - solved with a multidomain certificate
    1. cookies - travels on every request
    1. service worker can help
    1. reduce unnecessary redirects - redirects takes time so be careful to use redirects
    1. redirects to HTTPS 
        - use HSTS header - `Strict-Transport-Security: max-age=<expire-time-s>`
        - opt in at - `https://hstspreload.org`
- optimizing the parsing
    - avoid client side rendering - use server side framework
    - use isomporphic rendering - server side rendered and then it shifts to client side rendering
    - compress, minify and uglify CSS and JS files
    - load only necessary resources for initial loading
    - use a build tool - like Vite.js
    - use non blocking scripts
        - use `<script defer>` or `<script async>` - use `async` only for very important scripts
        - on-demand JS or lazy load JS scripts
- optimizing the rendering
    - both CSS and web fonts can block rendering
    - `dns-prefetch` for resources on a different domain - for ex. `<link rel="dns-prefetch" href="//newdomain.com">`
    - use CSS as an appetizer
        - CSS blocks rendering
        - add `<link>` as close to the top as possible
        - avoid using `@import`
        - push it on `HTTP/2`
    - stop using `onload`
    - avoid rendering BTF (below the fold)
    - render first ATF and after load, render BTF
    - fixing FOIT (flash of invisible text)
        - reduce web-font usage in ATF content
        - use WOFF 2.0 - it has better compression
        - reduce glyphs and unused characters - online tools are available to remove unnecessary glyphs and chars
        - embed it in base64
        - use CSS font loading API if it is available
        - preload font file - `<link rel="preload" type="font" href="font.woff" ...>`
        - CSS Font Rendering Control 
            - make text invisible until it is loaded
        - `font-display: swap` in the `@font-face`
    - Fixing FOUT - Flash of Unstyled Text
        - use an alternate font until it is loaded
- optimizing the images
    - compress the files
    - embrace SVG when possible
    - use WebP with `<picture>` tag - they are 35% smaller in size
    - opt in for HTTP Client Hints
    - HTTP Client Hints - if opted in, the browser will expose data to the server on every image request
        - data can be width, viewport-width, DPR, save-data, etc.
        - can be opted in with ```html <meta http-equiv= "Accept-CH" content="DPR, Viewport-Width, Downlink" >```
    - embed small images
        - convert small images into base64
        - embed them into HTML, JSON, or CSS
        - avoids extra http request for them
        - ex: `data: image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAARBAMAAACSi8F4AAAAANCSVQICAjb4U/gAAAAGFBMVEX///////8AAACpqanMzMxmZmaHhoQ/Pz9kt3AEAAAACHRSTLMA` 
    - preview data images faster
        - load a very low resolution version
        - apply some canvas blur effects while it is loading
        - or apply blur and scale effect
- achieving extreme loading
    - What to fit in critical rendering
        - all HTML necessary for ATF
        - all CSS embeded in `<style>` tag
        - all the JS in `<script>` tag
        - if there is room, we can also add images, icons and logos in base64
    - what to load after
        - data images, BTF content, other JS files, other responsive web-design needs
    - critical npm tool by Addy Osmani - to create a critical HTML page.

## improving recurrent user performance
- the cache - resources store in browser storage for retrieving later.
    - first the browser looks for the resource in the cache - if its not available it makes the request
    - it reads the cache HTTP headers such as `Expire` (absolute expiration) or `Cache-Control: max-age` (relative expiration).  If no cache headers are sent, the browser has an algorithm based on the date of the file.  So that the browser doesn't use an algorithm for cache expiry, WE MUST ALWAYS include cache headers.
    - ETags - another complex way to manage cache
    - Scenarios
        - if cache is not expired - the browser takes it from the cache immediately
        - if is in cache, not expired 
            - the browser doesn't delete it
            - the browser makes a conditional HTTP request to the server with `If-Modified-Since` header.
            - if that resource didn't change, it will respond with `304 - Not Modified` and new cache headers
            - it it did change, the sever makes a new response with the new resource and headers
    - learn how to set cache policies on server or CDN
    - static assets must be cached with a far future expiration
- 
        

    