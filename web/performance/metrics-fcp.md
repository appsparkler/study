# FCP

## Optimize FCP
- eliminate render-blocking resources
- minify CSS
- remove unused JS
- preconnect to required origins
- reduce TTFB
- avoid multiple page redirects
- preload key requests
    - ensure text remains visible during webfont load - web.dev recommends `font-prelaod along with font-display: optional`
- avoid enormous network payloads
- serve static assets with an efficient cache policy
- avoid an excessive DOM size
- minimize critical request depth
- ensure text remains visible during webfont load
- keep request count low and transfer size small
