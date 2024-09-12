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
