# Advanced SEO

## Tools And Links
1. Screaming Frog 
1. Google Search Console
1. 


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
-https - 
