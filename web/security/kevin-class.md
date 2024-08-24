# Web Security Assessment
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

