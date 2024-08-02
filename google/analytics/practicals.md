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
- Further, we can also breakdown this data based on, for ex, "Device Category"
    - This shows us that majority of our users are visiting us from the Desktop
    - We can also "include only these users" for desktop and focus only on Desktop dimension

### Can you tell show me user engagement before they add an item to the cart?
- Yes, we can use the "path exploration" in the explore section.
- Once selected, click on "Start Over" and set the end-point to event > "add_to_cart"
- We, can now track backward from there to see the event or page paths users are visiting before adding to cart

## Explore with GA4
- https://www.youtube.com/watch?v=u3APRpZfitk
- https://skillshop.docebosaas.com/learn/courses/18104/answer-business-questions-with-google-analytics/lessons/50845:16669/visualize-your-user-journeys-in-explore
- There are various reports in Explore that can help us analyze a lot of things about our business


## Key Events
Key events are defined by the Analyast as events that are most useful for the business.  For an online-store,  it could be a "purchase" event, for a blog, it could be a "subscription", for a learn to recite app, it could be a recitation.  We can use these key events to understand the performance of our ad-campaigns, etc.

## Customized Reports
We can create customise reports unique to our business needs by changing the dimensions, metrics, charts, filters, summary cards, linking/unlinking reports, etc.
- We can click the "pencil" icon on the upper-right hand corner to edit/customize the report.

## Collections
Collections helps us to group reports for easier access:
https://youtu.be/aZbehHVoG2s?si=DvjIX8I7h0Lb6lEQ

## Segments
Segments allows us to view and analyze a specific set of users from our target audience who are are of significance for our business.  For ex:
- customers who spent over $100
- segment users who came from paid searches and thus see the performance of paid searches

Important Notes:
- segments are created and viewed within "Explore"
- "Segment Overlaps" helps us to see overlap upto 3 segments. 

### Audience
- a set of users from our site that share one or more characteristics - for ex. "mobile users", "Users from India", "KSV Users", etc.
- we can also compare audiences to understand how various sets of users are interacting with the app.
- audiences are more relevant when sharing in Google Ads and/or the Google Marketing Platform

### Audience Triggers
- triggers each time user is added to audience
- this helps us with additional insights into user behavior, mark key events or create conversions...need to see how this works.

Audiences creation can be based on various features:
1. Scope - the scope when user is added to an audience - for ex. across all sessions, during a single session or a single event.
1. Static v/s Dynamic Evaluation 
    - static is when the audience will include users that met the condition and they won't be removed even when the condition is no longer true for them
    - dynamic is when new users will be added to audience as soon as they meet the condition and users that no longer meet the condition will be removed from it.
1. Time Windowed - time based conditions - for ex. metric condition must be true during any point in the lifetime of a user or that it must be true during a specific number of days - for ex. less than five during any seven day period.
1. Sequences - lets us specify the order in which the condition must be met for the user to be added to an audience.

### Predictive Audience
- A predictive audience has atleast one metric based on predictive metric.
- basically, this audience gives us information on well an ad-campaing is expected to perform

## Linking Google Analytics to Google Ads
https://youtu.be/Mof7-OW201M?si=cvi0s_0Ogb9K5JU5
- We can link Google Analytics with Google Ads for host of benefits.
Linking your Google Ads to your Google Analytics property can help you answer business questions like "If I link Google Analytics to Google Ads, how can I:
- Inform and optimize my targeting and bidding strategies?
- Better understand how users interact with my ads and assess campaign performance?
- Analyze the performance of my Google Ads conversions to make informed decisions?
- Measure ROAS?
- Analyze attribution and understand user journey paths?
- Reengage users based on their behavior in my app or on my website?

## How can our website be discovered by others?
- Organic Search - by improving our sites SEO features, this will work great
- Referrals - other webistes, blogs, posts review and post our website link via which users reach us
- Social - WhatsApp, Facebook, Instagram, Twitter, etc.
- Paid search ads - paying search engines to post our add on their search engine when user searches products similar to what we offer.
- Paid Display Ads - show our ads on various websites (this is not something we want to do)
- Email Campaigns - for customers who have subscribed to our store mailing list, we can send them updates and new features

## Conversions
Some customer activities are very important to your business, and in Google Analytics these are called conversions

## Attributions
Attribution can help us see how a customer gets to and completes a key-event on our app.
There are many cross-channel models for attribution.  Examples:
1. last click - as the name suggests, attributes 100% traffic to the last click before the key event.
1. first click - as the name suggests, attributes 100% traffic to the first channel that user clicked
1. linear - attributes the credit equally to all channels
1. position based - attributes 40% to first and last channel and 20% to the remaining channels in between
1. time decay - attributes more credit to touchpoints that happen closer in time to the key-event (conversion). credit is distributed using a 7 day half-life.  In other words, a click 8 days before a conversion gets half as much credit as a click 1 day before a conversion.
1. data driven attribution - attributes credit for the conversion based on observed data for each conversion type
1. Ads preferred last-click model - Ads-preferred last click attributes 100% of the conversion value to the last Google Ads channel a customer interacted with before converting. If there's no Google Ads interaction in the path, the attribution model falls back to cross-channel last click.

## Linking Googles Ads with Google Analytics
Google Ads can be placed in:
- search
- display ads
- video ads
- shopping ads

### What happens when we link?
- ...the data automatically generates campaign releated metrics (like clicks and costs) and dimensions (like campaign name).  These metrics and dimensions are available throughout the reports and explore workspaces.
- ...the Advertising workspace becomes available - the reports here can provide a strong understanding of the return on investment for our spends, help us evaluate attribution models and make informed decisions about budget allocation in Google Ads.
- Conversion events can be imported into Google Ads and this data can be used to understand how much we're bidding for different placements.
- Google Ads uses your chosen conversion window(s) to determine which conversion events to import from Analytics. For example, if you use the 30-day default window for a conversion event, Google Ads only imports conversions that occurred within 30 days of that click (https://support.google.com/google-ads/answer/2375435)

### Smart Bidding
- Smart Bidding is a set of automated bid strategies in Google Ads that use machine learning to optimize for conversions or conversion value in every auction.

### Leveraging Audiences
- we can target specific audiences (defined in GA) for our campaigns



