# Learning Enterprise Web Application Performance by Maximiliano Firtman

## Resources
- https://www.webpagetest.org/ - tool to check detailed website performance along with recommendations
- G Suite HAR file analyzer - https://toolbox.googleapps.com/apps/har_analyzer/
- HAR analyzer - http://www.softwareishard.com/har/viewer/
- HAR file comparision tool - need to search
- Genymotion - tool to emulate android devices
- Samsung remote test lab - https://developer.samsung.com/remote-test-lab

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
- 
    


    