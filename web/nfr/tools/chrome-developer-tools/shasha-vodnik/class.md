# Learning Chrome Developer Tools

## Tools
- VS Code plugins
    - Bracket Pair Colorizer
    - Indenticator
    - Live Server

## Responsive View
- in responsive view:
    - blue bars on top - max-width
    - orange bars below them - min-width
    - ruler - can be activated from the menu - we can also click on the ruler to re-size the view port to any px
    - we can also take a screenshot with the device
    - Inclusive audience - we can select one of the 4 options for network throttling:
        - Online
        - mid-tier mobile
        - low-end mobile
        - offline

## Using the elements panel
- open the elements panel with - `CMD + SHIFT + P`
- take screenshots with the screenshot panel

## Using the console panel
- there many types of console statements:
    - error
    - warning
    - info
    - log
    - trace
    - table
- we can use the command line within this panel for various things.  For ex.
    - to copy a variable, we can `copy(variableName)`
    - we can inspect an element with `inspect($_)`
    - we can inspect all `div` elements, for ex., with `$$('ul')` 

## Using the Sources panel
- we can use this panel to view the compiled files and folders for the app
- to open a file, we can use `CMD + P`
- we can use the `File system` sub-tab to use Chrole Dev Tools as an editor and make LIVE changes

## Using the Network panel
- each request has several sub-tabs which can be very helpful.  For ex. the `Timing` tab is super useful to see the performance of a file

## Using the application panel
- This panel has sub-sections
    - Application Section - for managing PWA - service workers, PWA, etc.
    - Storage Section - all kinds of persistent storage - session storage, local storage, cookies, index-db, web-sql
    - Cache section - all cache related information
    - Background Services
