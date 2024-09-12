# Learning the OWASP Top 10
The Open Web Application Security Project

## 2021

### 1 - Broken Access Control
- ensureing people have access to what they're supposed to and don't have access to what they are not.

### 2 - Cryptographic Failures
> The first thing is to determine the protection needs of data in transit and at rest. For example, passwords, credit card numbers, health records, personal information, and business secrets require extra protection.
- the two parts to avoid failures
    1. define data that needs to be protected
    1. follow well known measures to encrypt
- outsource the responsibility of storing sensitive data to credible 3rd parties

### 3 - Injection
- real world example - naming a dog "Sit".  This confuses the dog
- occurs when there's an opportunity for a user to provide an input and the application handles it incorrectly.
- Types of injection
    - cross-site scripting occurs when 
        - application doesn't neutralize user input
        - doesn't verify the input is safe, legitimate and in the correct format
        - example, we have a form where user has to fill out DOB, and our responsibility is that we verify the data before processing it - for ex. we verify the data for 6-digits.  So if the user sends some malicious code, it will not be processed further.
    - SQL injection
        - is an attack to create, read, update or delete something in BE SQL
        - again, take advantage of unmonitored user input field to trick application

### 4 - Insecure Design
- as developers, we sometimes include the file path and name of an important file in the error message - if we don't remove this in production, this information could be used for an attack.
- passwords stored in plain text is another loop hole which could be used for an attack

### 5 - Security Misconfiguration
- real world examples
    - not wearing a helmet for bike ride
    - leaving the house without locking it
    - not wearing a seatbelt in a car
- examples, are - weak passwords, etc.

### 6 - Vulnerable and outdated components
- real world examples 
    - building a house with asbestos as insulation - anyone living there will like get poisoned.
    - using glaze that has lead to mould a creamic bowl - anyone who eats that will get lead poisoning. 
- we are vulnerable if the 3rd part software packages we use are vulnerable, outdated or unsuported.
- steps to take to protect ourselves
    - know what our assets are
    - know if each component is vulnerable or not
    - update out-of-date software and ensure all patches known vulnerabilities.

### 7 - Identification and Authentication
- real world example
    - someone shows up as a pilot and somehow the auth-check for this person is missed.
- confirmation of the user's identity, authentication and session management is critical to protect from this.
- example
    - user "forgot password" - if the system doesn't check the OTP and accepts any OTP to reset the password
    - certificate fraud - software communicates with host that provides certificate, but doesn't ensure the certificate is actually associated with the host.
    - web app establishes a new user session without closing the previous one - expire session every 5 minutes to protect users from this kind of attacks

### 8 - Software and data integrity failures
- CI/CD pipelines, for ex., have auto-update features - where dependencies are auto-updated without sufficient verification
- ensure security checks within automated updates

### 9 - Security logging and montoring failures
- Without logging and monitoring, breaches cannot be detected.

### 10 - Server Side Request Forgery (SSRF)
- allows an attacker to coerce the application to send a crafted request to an unexpected destination.




