# ⭐️ Web Security Assessment
https://www.linkedin.com/learning/programming-foundations-web-security-22680062/the-importance-of-security

## Security
- Threat Model - think of web security in terms of how a king and queen would protect their castle.  Depending on the current state of affairs, they need to draw up a threat model:
    - profile of an attacker
    - likely attack vectors
    - high value assets
    - vulnerabilities

## Profile of an attacker
- hackers can be of two kinds - 
    1. white hat - very skilled security tester
    1. black hat - doing harm
- For an attacker on the web, these are a few kind of black hat hackers:
    type | skill | persistence | goals | about
    -|-|-|-|-
    curious users | no | nope | abc | curious about the internet, etc.
    script kiddies | low | random | feels like pro | uses scripts from the internet and tries to attack
    hacktivists | mixed | very high | their cause, embarass | they try to attack a site that they are activating against
    criminals | mixed | high | thefts, scams | as the name suggest
    tropy hunters | high | medium | bragging rights | for name and fame
    governments | very high | very high | intel, espionage, etc.

## General Security Principle
- least privilage 
    - users ought to be given least privilege to a system - only enough to accomplish the task
    - this principle can be applied to
        - APIs
        - system resources
        - database access
        - software version control
        - public facing webpages
        - code - not all methods and variables need to be exported!
- simple is more secure - write clean code
    - Use clearly named functions and variables
    - Write code comments
    - Prefer built-in functions
    - Remove cruft
    - Disable unused features
    - Break up long sections of code
    - Don't repeat yourself
- never trust users - be vigilant as the one interacting with you might be 
- expect the unexpected - assume you'll be hacked and think like a hacker - try to hack your own application
- defense in depth - have layers of defenses instead of just one layer.
- resilience - has three 
    - identify - monitorings, notifications, etc.
    - respond - let users know, ETAs, etc.
    - recover - survey and prioritize, restore services, assess and improve
- security through obscurity - serialize, encode, mangle code, etc. - be mindful about what information we are broadcasting - for ex. file paths, secrets, etc.
- deny and allow list - add everything to deny-list by default and then add items to allow-list as and when needed
- map exposure points and data passageways - map out how your data is moving in the application and your various

## Filter input, Control output
- regulating request
    - sanitize the http request
        - the request method - check if it is as expected - if we don't the system will execute the same code for any method
        -  request headers - `Content-Type` and `Accept` - ensure the data format coming in as expected
        - ip address - ensure ip address is on allow-list
        - URL - 
        - query parameters - sanitize the query parameters, 
        - `User-Agent` string - could be used to disallow web-crawlers and search engines
        - size - ensure the size (for ex. file size) is within bounds
- validate input - validate the data to ensure it is what we are expecting
- sanitize data - do this before processing the data further
    - encode characters - for ex. encode `>` with `&gt;`, etc.
    - add escape characters
    - sanitize data from our internal systems (ex. database, etc.) as well as data from external sources (for ex. browser)
    - use names to identify condition of data
        - dirty, raw, tainted, unsafe 
        - clean, filtered , sanitized, safe 
        - by default, all new data (either from internal or external sources) should be treated as dirty, raw, tainted or unsafe
- keep code private
- keep credentials private - use environment variables
- keep error messages vague 
    - for ex. use 500 (internal server error) instead of 404 or other speicific error - this will create obscurity which will add another layer of protection
    - ensure logging is removed for production environments
- smart logging (logs)
    - three main activities that need to be logged:
        1. errors - as many details as possible to understand the state of the application 
        1. sensitive actions
        1. suspicious activity

## The Most Common Attack
- credential attacks: Protection from this attack:
    - strong passwords
            - min 12 chars
            - use character variety
            - avoid patterns and dictionary words
            - use a password manager with features
                - strong password generator
                - form autofill
                - note storage
            - popular password managers
                - 1Password
                - LastPass
                - BitWarden
                - Dashlane
    - where available - use SSH keys instead of password - for ex. on GitHub and other domains where available
    - use Yubi Key 
    - use MS or Google authenticators 
    - our architecture
        - protect users - hash their passwords with an encrypting system - Bcrypt aka Blowfish
        - use login throttling - wait time before next-try for 5 wrong attemts, for ex.
- URL Manipulation - an attacker may add parameters that could leak information from our site
    - this is called IDOR - Insecure Direct Object Reference - i.e. access is permitted without auth check
    - protection agains this attack
        - use allow list for acceptable params
        - handle params gracefully and vaguely
        - use access-control for privileged pages and actions
- SQL Injection
    


