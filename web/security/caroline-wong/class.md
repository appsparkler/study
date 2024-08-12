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
- occurs when there's an opportunity for a user to provide an input and the application handles it incorrectly.
- Types of injection
    - cross-site scripting occurs when 
        - application doesn't neutralize user input
        - doesn't verify the input is safe, legitimate and in the correct format
        - example, we have a form where user has to fill out DOB, and our responsibility is that we verify the data before processing it - for ex. we verify the data for 6-digits.  So if the user sends some malicious code, it will not be processed further.
    - SQL injection
        - is an attack to create, read, update or delete something in BE SQL
        - again, take advantage of unmonitored user input field to trick application
        - 