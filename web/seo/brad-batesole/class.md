# Advanced SEO

## Tools And Links
1. Screaming Frog 
1. Google Search Console
1. https://www.ayima.com/knowledge/guides/conquering-pagination-guide.html - guide for 
1. HTML Outliner extension for heading outlines
1. TF-IDF tool - https://en.ryte.com/wiki/TF*IDF/
1. Introduction to structured data (`ld-json`) - https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

## Creating your information architecture
- Indexable content
    - Check your website in how a crawler may see your page - tools like
        - Google Search Console has a `Crawl > Fetch as Google` option 
        - https://webcache.googleusercontent.com 
        - Chrome in headless mode - https://chrome-devtools-frontend.appspot.com
        - Screaming Frog SEO Spider
        - compare the rendered page to the crawled page
- improving site indexability
    - provide descriptive `alt` text for all images
    - suppliment any non-text content with text
    - provide transcript for video and audio content - tools like speach-pad may be helpful
    - ensure CSS or JS files are not blocked from being crawled
    - restrict PDF or convert them to HTML as appropriate
    - Exercise:
        - crawl your site with a tool like Screaming Frog SEO Spider and check how many pages were crawled
        - check your site by doing a search on Google like so: `site:appsparkler.com`
        - now match the number of pages on both results - if they are more or less same, your site is being crawled correctly.
- crawlability
    - crawlers don't like complicated, disorganized or redundant URLs
    - use `robots.txt` to disallow pages
    - try to keep 1:1 for URL:Page ratio - for ex. a page with a different session ID would have the same content but now there are infinite URLs with the same page popping up!
    -  ensure site is responsive
- the robots.txt file
    - update allow and disallow for all user agents
    - use globs to define allow and disallow
    - add the `Sitemap` in this file
    - avoid adding sensitive data
- site information architecture
    - plan your architecture with a sitemap (hierarchical site-map) - aka Taxonomy
    - keep your most popular content no more than 4 links away
    - Ontology - the complex relationships between concepts and taxonomies - for ex. paddles could be for row-boats, kayaks, kanoos, etc. they might also be classified into high-performance, leisure, etc. so the Ontology of paddles is just as important
    - Exercise:
        - Approach 1: Listing
            - you and your team list all the content pages
            - define whether the content must be reachable by primary or secondary navigation
            - keep everything no more than 4 clicks away
        - Approach 2: Card sorting
            - this is a well known methodology
            - this has two types:
                - Open Sort - as the name suggest, the user would give names for the categories
                - Close Sort - the categories are set by the product team.
-https - obtain and install a secure certificate layer (SSL) layer
    - check the list of websites that are using https - https://transparencyreport.google.com/https/top-sites
    - HTTP Checklist
        - verify the new URL
        - implent your 301 redirects
        - update internal links
        - update off property links
        - verify site-map and submit a new site in search console
        - double check the robots.txt file
        - confirm caononical tags
        - resubmit any disavows
        - re-configure URL params
        - verify existing rewrites
        - update analytics and tracking tags
- subdomains
    - subdomains shouldn't be the first choice i.e. https://example.com/blogs/article/... is preferred by the author than https://blogs.example.com/article/...
    - This way Google understands the relationship of the site and its content else it will take the two sites as different
- Picking a domain name
    - make it brandable
        - sounds like a brand
        - is it ealisy sharable?
        - is it memorable?
        - is it unique?
    - make it pronounceable
        - can you easily say it?
        - can other guess how to say it on the first try?
    - make it short
    - make it .com
    - make it legally sound - so it shouldn't be amaazon.com for ex.
    - make it intuitive
        - make it obvious what you do
        - your marketing helps with this as you grow
    - make it broad
        - use broad keywords
    - make it adaptable
        - work with what is available (for ex. if .com is not available, go for .shop :)
- sitemaps
    - a user friendly sitemap is good - another opportunity for crawlers to visit all the pages on the site
    - XML site map is very important which will be added in the robots.txt for the crawlers
    - Screaming Frog has a feature to create a site map

## Managing your URLs
- URL structure 
    - focus on URLs that are human-readable and short
    - focus on simplicity and brevity
    - static URLs are ideal - instead of parameters, etc. with various 
    - use only what is necessary - don't over organize folders
    - utilize hyphens for separation 
    - URL:page ratio of 1:1 is ideal
    - simplify additive filtering and sorting parameters
    - build a URL playbook
- Canonical URLs - if this is an issue, SE's crawling budget for your site would expire faster 
    - definitition of canonical - _included in the list of sacred books officially accepted as genuine_
    - define a canonical URL
    - have 301 redirects for URLs that might be duplicated - for ex. - https://example.com/blOG or https://example.com/blOG/ should redirect to https://example.com/blog if the later is the canonical URL.
    - another example is that - https://www.appsparkler.com and https://appsparkler.com both shouldn't be crawlable else the crawler will look at them at two separate pages.  Instead, we need to select which URL we prefer and set is as our canonical URL for that page.  Now, we need to re-direct the other to the one we have selected.
    - take care of parameters that are added in tracking by adding link with `rel="canonical"` - for ex:
        ```html <link rel="canonical" href="https://www.example.com/blog" />```
    - it can also be added to the http header.
- pagination - this could confuse the SE since it doesn't crawl pages in any particular order so it might end up crawling the 4th page and index it without indexing any other page
    - use `<link>` tag with `rel="prev"` and `rel="next"` attributes to let the crawler know that this is one of the pages in the pagination list.
    - we could also consider adding `rel="canonical"` on all paginated pages with `href="/the/view-all/page"` so that the view-all pages shows up in the search results.
    - if the paginated is not useful in search results, simple exclude with `NOINDEX` as shown below.  Add this to the head section of every page.  Include the `FOLLOW` tab so that the crawler does crawl the page for all destinations on that page.
    ```html
        <head>
        <META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW"> </head>
    ```
    - excellent guide for pagination : https://www.ayima.com/knowledge/guides/conquering-pagination-guide.html
- http status codes:
    - 100s - informational
    - 200s - success
    - 300s - redirections
    - 400s - client errors
    - 500s - server errors
    - 7 key http status codes:
        - 200s -  success
        - 301 - permanent redirects
        - 302 - found/temporary-redirect -
        - 404 - file not found
        - 410 - Gone
        - 500 - server error
        - 503 - service unavailable
    - Ensure everything in the status-code column of our page-response is true and correct
- mobile and desktop friendly
    - always design mobile-first
    - prefer responsive design over dynamic-serving or dynamic-serving with different URLs (for ex. m.example.com and example.com)

## Optimizing Content Structure
- Site Tags
    - Title 
        - found in the head section of the HTML Document
        - ensure it is relevant to the page
        - front-load with keywords
        - should be less than 50 characters
        - know your audience
        - canonalize title tags - make each title tag unique
    - meta description tag
        - every page has one
        - doesn't directly impact rank
        - impacts clickability
        - think of it like an advertisement
        - include a few keywords
        - keep meta descriptions to 140 characters or less
    - heading tags
        - H1 - a single heading for the page
        - H2 - sub headings
        - H3 - tertiary headings
        - SEs show preference for keywords in heading tags
        - sometimes matches the title tag
        - must be in sequential order
- TF-IDF (Term Frequency - Inverse document frequency)
    - reflects how important a word is to a document within a collection - for ex. ("recite" would have high TF-IDF for our Lets Recite home page)
    - a tool called RYTE - https://ryte.com - https://en.ryte.com/wiki/TF*IDF/
- Image optimization
    - filenames need to be descriptive
    - alt tags need to be descriptive

## Introducing Structured Data
- Structured data 
    - add structured data to our site - `application/ld-json` is the preferred format.
    - determine the relevant content for our document
    - define the action markup
- Schema.org
    - add the schema to the document which will provide the metadata

## Technical Makeup
- Site Speed
    - SEs prefer website that load really fast
    - 1 second is the total benchmark time to have all content, above the fold, rendered.
        - 500-600ms is taken up in other overheads such as DNS resolution, etc.
        - so, we actually have only around 400 ms to deliver the content above the fold
        - So:
            1. get the server to send the response in under 200ms
            1. minimize or eliminate redirects (max of 1)
            1. minimize the number of round trips necessary to render the first piece of content
            1. avoid any external-blocking JS and CSS above the fold
            1. reserve 200 ms for browser layout and rendering
            1. optimize JS execution and rendering time
        - go through page speed insights : https://pagespeed.web.dev/ to understand how to maximize website speed.
-  Javascript and DOM   
    - Each element is a DOM note
    - view-source will never change but the DOM will change based on how JS edits it.
- Critical Rendering Path
    - Lighthouse
        - run each webpage through lighthouse and see how the site can be optimized.
    - Optimizing CSS styles
        - some CSS styles are only used under certain conditions
        - so we don't want to load them when they are not in use
        - For ex:
            ```html
                <link href="style.css" rel="stylesheet">
                <link href="print.css" rel="stylesheet" media="print">
                <link href="other.css" rel="stylesheet" media="(min-width: 40em)">
            ```
        - with these tags, we can optimize for certain medias
        - Put CSS in document head
        - avoid CSS imports - they introduce additional round trips
        - consider inline render-blocking
        - analyze the unused CSS using dev-tools
    - Optimizing JS styles
        - prfer async (non blocking) 
        - defer parsing the JS for non-critical JS
        - avoid long-running JS

HTTP/2
    - multiplexing - can make multiple concurrent connecting over a single connection
    - has push feature
- PWA
    - these are progressive, responsive, responsive, independent, app-like, fresh, 
    safe, discoverable, re-engagable, installable, linkable
