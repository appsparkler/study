# Ultimate Google Analytics 4 course - with 50+ practical examples:
Everything revolves around Segments, Dimensions, Metrics and Comparisions.

## What is GA?
A huge table (like the ones we have in SQL DB)

## What are its two aspects?
Like any table, it has to aspects - 
    1. dimensions - these are descriptive measurement aspects - for ex. "session source/medium" (what are the sources for the sessions?).  The values for a dimension will be the names of various sources/mediums.  For ex:
        - google/cpc
        - google-play
        - whats-app
        - google-organic, etc.
    1. metrics - these are the aggregated values for the dimension.  Its values would be:
        - total sessions
        - engaged sessions
        - events (the events during the session)
    1. Segments - These are complex dimensions.  They contain 2 or more dimensions - for ex. Desktop Users From India, Mobile Users From USA, etc.
- The metrics and dimensions come together to give us meaningful data and answer questions.  For ex.
    - How many sessions that have a source of google/cpc? Ans - 100002
    - How many events were triggered for a sessions that have a source of whats-app? 20,0000
- So, ideally, the questions that we have around our application should drive our dimensions and metrics configuration.

## How is measurement done?
Its done with browser cookie.  This is the structure of a GA cookie: `GA.1.2.1808482521.1486727369`.
- the client-id (cid): the last two numbers - `1808482521.1486727369` which is `random-number.first-timestamp` is set as the client-id.  It is the id that GA uses to identify as a a user/browser/client.
- GA sends this 

## User/Client Identification
- in GA world the `user` is defined as the `client` i.e. the device
- There are 4 ways for identifying user-data
    1. user-id - our custom implementation - we tell GA to use some specific data for 
    1. Google Signals - given that the human user has given us permission to collect data, we use that data use the Google Signals feature to identify a user
    1. device-id - the most common - the cid stored in the cookie
    1. modelling - user hasn't given consent, but Google uses its algorithms to identify a client.
- we can configure this under 

## Session, Engagement, Active User and Bounce Rate Definition
- A session is termed as ENGAGED SESSION if:
    1. it lasted more than 10 seconds - this can be configured in GA
    1. includes a conversion
    1. 2 or more page views
- Otherwise, its a SESSION
- Session Expiry - the only way session would expire for GA client is if the client is inactive for more than 30 minutes (configurable in GA)
- bounce rate - (total-sessions - engaged-sessions)/total sessions
- active users - are users that have atleast 1 engaged session
- time measurement - the time user spends on a page is calculated with `events` - especially the page `load` and `before-unload` events.

## Navigating through the interface
- The various cards on the HOME section are mostly links to the reports page and we can configure what appears on the HOME page.
- The Reports Tab
    - reports-snapshot - use the compare feature - to compare metrics between two time periods
    - realtime-reports - here we can see real-time data for our app. We can see key-events, events, users by country and a lot more. 
    - traffic acquisition - here we can see 

## Reports
- **secondary dimension** - we could add a dimension on top of a selected dimension - for ex. if we have a more specific question about our data - how many direct users are we getting from United States v/s organic users from India? - in this question, session is the primary dimension whereas country is the secondary dimension.

## Creating Custom Triggers in GTM
- Triggers are actions to which GA sends data from the client.
- Creating a custom scroll trigger
    1. Click on `Trigger` and create a new one.  Name it `Custom Scroll`
    1. Select `Trigger Type` as `Scroll Depth`
    1. Now we can configure it - vertical, horizontal, %age or px, etc.  We can add multiple values - for ex. `25,50,75,100` which will send data when scroll depth is 25%,50%,75% and 100%
    1. Save this trigger and now go to Tags section and start creating a new tag
    1. Provide an event name and add the parameters.
    1. set the trigger and publish the tag.

## GA Configuration - important setup
- Data Settings > data retention - change  from 2 months to 14 months in `Data Settings` for more aggregate data
- Tag Configuration > List Unwanted Referrals - set any unwanted referrals - for ex. payment gateways, auth gateways, etc.
- Adjust Session Timeout - i.e. set the timer for which when user remains inactive, the session ends.  Also, define the Engaged sessions timeouts - definitely increase it more than the default of 10 seconds (which says that if user leaves the page within 10 seconds, it was not an engaged session)
- Admin > Streams > Modify Events - We can modify events for use cases such as combining two sources into 1 - for ex. we want eylearning.udemy.com and udemy.com to to be counted as the same source - udemy.com

## GA - Setting up Goals
- Click on the `Configure` tab and select `Events`
- Turn on the switch for all events that we need to be set as `conversions`
- **custom conversion event** 
    1. click on create event
    1. define the parameters and conditions
    1. click on create

##  Explore
- **Free Form** 
    - this reports allows us to visually review our report for segments, dimensions and their metrics
    - further we can visualize the report as a bar-graph, donut-chart, line-chart, etc.
    - this is a simple report and can have many use cases
- **Funnel**
    - https://support.google.com/analytics/answer/9327974?hl=en
    - this is great to visualize how many users are "flowing" into what we want them to do.
- **Path Exploration**
    - in this report we can start visualizing from a starting point or ending point
    - very helpful, if we want to visualize user journeys from one event to another or from one page to another
    - Also, we can easily visualize how the user got to an ending point (for ex. purchase)
- **Segment Overlap** 
    - this reports help us to see overlaps between 2 or more segments.  This is great when we want to see; for ex. how many desktop users are from USA compared to total users.

## Report Customization
- click on the `pencil` button to customize a report
- change the rows and columns and set one of them as default

## Calculations
- User conversion rate = total-users/total-users-converted
- Conversion rate = total-sessions-that-had-conversions/total-sessions

## Practicals
- reports
    - Compare two periods in the report snapshot
    - go through the real-time reports and get details about events, key-events, etc.
    - review the traffic acquisition report & 
        - toggle the granuality - day, week, month
        - plot only the `totals` on the graph.
        - use secondary dimension to get breakdown by country
        - use the search to search only "United States" in the secondary dimension
        - use the sort buttons to sort data by a specific metric - for ex. engaged sessions, etc.
    - change the pre-selected dimension for a report
- create a custom_scroll trigger
- Explore
    - create a free form report visualized in line-chart for total users over the last 12 months, compared with the previous 12 months
    - create a funnel report with the following 3 steps:
        1. View Category page (/shop/)
        1. Views Product detail page (/product/)
        1. Adds to cart (add to cart event)
        1. Purchase event
        ...also add 2 segments to the report - for ex. "desktop users india" and "desktop users USA"
    - customize the pages and screen path
    - create a free-form report with the following:
        - Dimensions - Browser, Language
        - Metric - Total Users, Bounce Rate, Sessions, Engagement Rate
        - Play around with the filters, date-ranges, 
    - create a free-form report to understand the location of our uses (where from Earth are our users accessing our app?  What is the conversion rate for each location?)
        - Dimensions - country, city, region
        - Metrics - total users, sessions, bounce rate/conversion rate
        - play around with filters to see users coming from a specific country or region (state)
    - browser conversion rate (use a custom conversion rate - for ex. which only includes purchases)
        - Dimensions - Browsers, 
        - Metrics - Total Users
        - next, also include the device category dimension and observe the conversion rate - if there is much variation between mobile and desktop conversion rate, for ex., we need look into why users are not getting converted on the lower one.
        - next, also include the screen resolution and check which screen resolutions have the lowest lowest conversion rate.  Check how our app looks on that resolution on an addon like Mobile Simulator or the Chrome Dev tools mobile simulator and check for any issues on those screen resolutions.  We could further drill down.
    - use Google's Page Speed Insights tool to analyze app performance.
    - we can dive deeper by adding these dimensions - mobile OS, device brand, dimensions and the metric - Average Revenue Per User to understand which OS and/or device brand is yielding the maximum revenue and optimize our site for those users
    
## UTM parameters - Urchin Tracking Module
- medium, source, campaign, content and term - are the types of parameters we can track.  these are prefixed by `utm_`
    - source - domain, ad platform name - ex. google
    - medium - ad-type - for ex. post, banner, cpc (cost per click), etc.
    - campaign - campaign name
    - content - ad details - 
    - term - keyword - should only be used for paid-search-campaign - the keyword on which our ad will show.
- only source, medium and campaign are mandatory (since 2019)
- tips
    - avoid diacritics
    - be consistent with the values for the parameters
    - use `+` for blank space
    - don't leave any parameter value empty
    - use only lowercase
- tool to use: https://ga-dev-tools.google/ga4/campaign-url-builder/ to build a link with utm parameters

## Landing pages and Bounce Rate 
- Add dimension `Landing Pages + query string`
- Add metric - `sessions` and `bounce rate`
- remove unnecessary items from the list
- filter sessions above a chosen threshold
- sort descending by bounce rate.
- additional tip
    - add a filter with dimension `Session source / medium`
    - filter for the `cpc` or equivalent cost per count value.
    - look out for links with high bounce rate and remove them from target list to reduce the cost.

## Custom Channel Grouping
link: https://marcelclasses.udemy.com/course/ultimate-google-analytics-course-50-practical-tips/learn/lecture/40943508?start=15#overview
Sometimes we want a more in-depth report wrt to groups.  For ex. we get the "Referrals" dimension in the Acquisition > Traffic Acquisition Report.  However, the referral could be from any party.  To get more detailed report about from where the referral is coming, we need to create a **custom channel group**.
- So we go to Admin panel > Channel Groups. 
- GA already provides a `Default Channel Group`.  Instead of modifying it, we duplicate it and work with it to avoid any unintended changes to the default one.
- Once duplicated(copied), we need to add in the the specific referral we want to see the metrics for - add the equation - `source contains udemy` and name is `Udemy`.
- The order of the channels list is critical.  For ex. if `Udemy Referrals` comes **after** general `Referrals`, `Udemy Referrals` will not show up because `Referral` catches all so there's nothing left for `Udemy Referral` to catch.  Thus, we need to move `Udemey Refferal` before `Referral` for it to catch some numbers.

## Session Source/medium in-depth analysis
This report helps us to do a in-depth analysis of which campaign in CPC is giving us the highest returns.  Further, it also gives us info about which landing pages are giving us the highest return - so we can focus more on those landing pages.
Again, in the `Acquisitions > Traffic Acquisition Report`, we selec the dimension to `Session source/medium` - i.e. where the sessions are pouring in from.
- Select a sessions source/medium that we want to deep dive into.  We will deep dive into that session source/medium dimension in the Explore reports
- Explore - Free Form Report
    - Dimensions - Session source/medium, event name, session campaign, landing page query string
    - Metrics - purchase conversion rate, engagement rate, session key event rate
    - filters   
        - Sessions source/medium equals `google / cpc`
        - event name matches regexp `session_start|purchase`
        - session campaign matches the campaign we are analyizing.
    - Review the landing page that has the various conversion rate and make budget decisions - for ex. for a goal for maximum profitability, one can reduce spending on landing pages which has very low conversion rate and increase spending on landing pages which has high conversion rate.
    

