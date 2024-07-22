# SEO Optimization

## Links & Resources
- Google Trends
- Google Structured Data Testing Tool - https://developers.google.com/search/docs/appearance/structured-data
    - https://schema.org
- Moz
- https://answerthepublic.com
- Google Search Central - https://developers.google.com/search
- Site Maps - https://sitemaps.org - to create sitemaps for our website
- robotstxt.org - for adding a `robots.txt` file
- Google Search Console
- Bing Search Console

## SEO Terms
- SERPs - Search Engine Results Pages
- keywords -  

## Keyword Research Plan
- Put yourself in the shoes of your customers - if you were a client for your own website/idea, what would you search for on Google to get to your website?
- Google Trends and https://answerthepublic.com are two websites that will help us the value of our keywords.
- Long Tail Keywords - descriptive keywords used in less common variations.  For ex. case is extremely competetive, "iphone cases" too is very competetive, "protective blue iPhone cases" - this is a long tail (more descriptive keyword) and is less competetive.
- https://moz.com also has a great tool for keyword research
- **Relevance** - ensure the keyword is relevant
- **Search Volume** - ensure the keyword has a significant volume (unless you're targeting a very specific group). There are various tools for this:
    - Moz Keyword Explorer
    - WordStream
    - Ahrefs Keyword Explorer
    - SEMRush Keyword Magic Tool
    - Google Trends
    - Google Keyword Plan (on your Google Ads account)
- **Keyword Competetion** - aka "Keyword difficulty" - expensive keywords due to many bidders.
- **Ongoing Keyword Evaluation** - keep reviewing our keywords to check if they are scoring well on ROI or not.  Use paid search from Google or Bing to see the performance of our keywords.

## Keyword Distribution
Every page in a website has different content.  Thus it is important to perform a keyword distribution - i.e. align page content with target keywords
- organise mapping to keywords
- track keywords that still need pages
- use a spreadsheet tool to organize the data
- the columns would be something like this:
    - URL of the page
    - `<title>` tag
    - number of characters in title (65 is the general target)
    - `<meta-description>` tag
    - number of characters in meta-description (156 is the general target)
    - `<h1>` header
![alt text](image.png)

## Content Optimization (Human Aspects)
- **Quality Content** - content needs to be clear and of good quality - both people and search engines look for this.  Just like, we would bin a page that doesn't give us information we need, search engines don't index pages that are not of good quality.
- **Clean Site Structure and elements** - always have a clean and clear site structure which will help SEs easily understand it.
    - URL should contain usable information about the page itself - for ex. https://letsrecite.app/the-essence-of-the-bhagavad-gita/chapter-02-verse-47
    - use `-` instead of spaces or underscores
    - Page title needs to be clear - for ex. `<title>Chapter 2, Verse 47 - Lets Recite App<title>`
    - Add a `meta-description` tag - `<meta name="description" content="Easily recite The Essence Of The Bhagavad Gita - " />`
    - Add a single descriptive `h1` tag - `<h1>Lets Recite The Essence of The Bhagavad Gita</h1>`
    - Keep tweaking the `title and meta description, h1 etc.` to see difference in performance 
    - Content needs to be optimized for people first and SEs later because SEs also are trying to emulate human behavior so if you're able to attract humans, SE will follow the trail
- **Optimizing non-text components of webpage** - 
    - add `alt` attribute to images, properly describing the image.
    - also, the image file name can be descriptive - for ex `<img src="../images/backpacking-tours-in-california-">`.
    - we can also use image-captions
    - for links, we can use a `title` attribute
    - Structured Data - use Google's Structured Data
    - Also, look at https://schema.org/imageObject to 

## Content Optimization (Technical Aspects)
SE doesn't see the same webpage that we see.  They see the code (HTML).
- **Clean Compatible Code** - we need to ensure that our code is clean and free from bugs of any sort.
- **Sitemap & Links** - SEs click on every link on the HTML.  
    - create a HTML site map for our website.
    - create a XML site map - easier for SEs and these can be submitted directly to the SE
    - add a `robots.txt` file to control how easily SEs crawl our site 
    - add `<meta name="robots" content="noindex" />` to ensure pages are never returned in search results and don't block the page in `robots.txt` else the page will never be found
    - visit robotstxt.org for how to configure the robots
- **Canonical URLs and redirects** - 
    - **Canonical URLs**: we need to tell the SE to index the correct page especially for pages that turn up the same content for different URLs.  For ex
        - http://somedomain.com/index.php?id=200
        - http://somedomain.com/index.php?id=200&code=82823
        - http://somedomain.com/index.php?id=200&code=828211&country=in
        - though all 3 URL have the same URL, their parameters are different and they could render different content confusing the SE and users.
        - thus, we need to inform the SE to index "http://somedomain.com/index.php?id=200" as the canonical URL - i.e. no matter what URL is in the address bar, we need to index the one mentioned as the primary URL.  This is the tag that will help us do that:
            - ```html
                <link rel="canonical" href="http://somedomain.com/index.php?id=200%27" />
                ```
        - We can also specifiy the effect URL parameters will have on the Google or Bing Search Console
    - **Redirect URLs** - use redirect rules for webpages when content has moved
        - 301 - Permanent Redirect - use this when the page has moved permenantly
        - 302 - Temporary Redirect - use this when the page has moved temporarily - should be used only for short term
        - avoid other techs such as:
        -    ```html
                <script > window.location.href =
                "https://www.example.com"; </script>
            ```
        - or
        - ```html
                <meta http-equiv="refresh" content="0;url=http://www.example.com/"
                />
            ```
    
        




