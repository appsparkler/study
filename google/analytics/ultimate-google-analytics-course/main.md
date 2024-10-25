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
    - 

