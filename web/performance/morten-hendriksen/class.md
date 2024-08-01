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
    - 

    