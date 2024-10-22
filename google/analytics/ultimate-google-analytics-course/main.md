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
