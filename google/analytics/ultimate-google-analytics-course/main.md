# Ultimate Google Analytics 4 course - with 50+ practical examples:

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



