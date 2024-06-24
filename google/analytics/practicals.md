# Answer Questions For Your Website

## Acquisition

### Why is there a 70% increase in "Cross Network Traffic" between two periods - Oct 16 - 22 AND Oct 9 - 15, 2023
- https://www.youtube.com/watch?v=W861y2lcATk&t=146s
- First, lets COMPARE the two periods and see this 70% increase in Cross Network traffic
- Next, remove COMPARE and go to Acquisitions > Traffic Acquisitions
- Next, add secondary dimension - "Session Campaign" by clicking on the "+" button.
    - Notice the three campaigns for NA(US), CA and NA(US) without Liftstyle images
    - Notice the poor performance of the CA campaign
        - Notice the lower "Average Engagement Time"
        - Notice the lower "Events per session"
        - Notice the lower "Event Count" and "Key Events Count"
- Having analyzed the report, we could consider a few steps:
    - Focus more on the performing campaigns
    - Improvement strategies for the CA campaign


## Engagement

- https://www.youtube.com/watch?v=u3APRpZfitk

### How many page-views, sessions and active users in the last 28 days?
- We can use a free-form report to analyse this data for various date ranges
- If there are any anomolies, we can use create segments with that anomaly and apply it to figure out what caused the anomaly.

### Can you show me a funnel of users who followed: "website-home-page > added product to cart > added billing information > completed purchase" path?
- Yes, we'll create a funnel exploration
- We'll edit the steps and add the 4 steps:
    1. page_path and screen class exactly matches "/":
    1. event - add_to_cart
    1. event - add_billing_info
    1. event - purchase 
- Now, observe this funnel - it shows the abandonment rate at each step

## Key Events
Key events are defined by the Analyast as events that are most useful for the business.  For an online-store,  it could be a "purchase" event, for a blog, it could be a "subscription", for a learn to recite app, it could be a recitation.  We can use these key events to understand the performance of our ad-campaigns, etc.