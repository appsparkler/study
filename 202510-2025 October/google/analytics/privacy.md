# Prioritizing User Privacy 

## Data collection and retention controls available in GA4
1. Disable data collection - the option to partially or completely disable data collection
1. IP Address - GA doesn't log or store IP addresses!!
1. Data retention period - we can set the time before the user-level and event-level data stored by GA is automatically deleted from Analytics servers
1. Consent Modes - once implemented, Google's tags will dynamically adapt based on the consent status of our users.  Measurement tools will be used only when permission is given by the user.

## Data Removal
Data can be removed at any time for any reason. These are options available to remove data:
1. request data deletion - option to delete data from the analytics servers (7 days grace period)
1. delete user data - option to delete single user account (using the exploration technique)
1. delete a property -  option to delete a property - the property will remain in the trash can for 35 days before being permanently deleted.

## Ad Personalization (AP)
When we enable ads personalization in Analytics, for example by activating Google Signals, we gain the ability to use our Analytics audiences to personalize our digital ads which can improve the performance of campaigns. 
What data is used for ad-personalization can be used at various levels:
1. property level - if we disable AP at property level, will mark all incoming events for that property to be marked as "not for use in AP".
1. country level - as the name suggests.  further, in US, we can also control it at state level.
1. event or user-property level -  for ex. we can exclude specific events or user properties from being used to personalize ads and only use the data for measurement purposes.
1. individual session or event - for ex. obtain consent before enabling the setting - we can dynamically disable ads personalization at the beginning of a session and on each subsequent event until consent is obtained.

## Sharing Analytics data with Google
1. Google Products & Services - if checked, our analytics data would be used by Google to improve its products and services.
1. Benchmarking - contribute anonymous data - it will help to understand data trends
1. Technical Support - our data to be used by Googles Techinical support team
1. Account Specialists - gives marketing and sales specialists access to our data which helps them improve configuration and analysis and share optimization tips with us.




