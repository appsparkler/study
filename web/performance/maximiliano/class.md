# Learning Enterprise Web Application Performance by Maximiliano Firtman

## Resources
- https://www.webpagetest.org/ - tool to check detailed website performance along with recommendations
- G Suite HAR file analyzer - https://toolbox.googleapps.com/apps/har_analyzer/
- HAR analyzer - http://www.softwareishard.com/har/viewer/
- HAR file comparision tool - 

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



    