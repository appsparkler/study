# Securing React Apps by Emanuel Henri
https://www.linkedin.com/learning/react-securing-applications-2/securing-react-applications

## Resources and Tools
- https://cheatsheetseries.owasp.org/ - OWASP Cheat Sheet
- XSS demo - https://www.google.com/about/appsecurity/learning/xss/

## Overview of security threats
- Cheat-sheet section of OWASP is an excellent resource for finding out how to secure our app
- XSS - Cross Site Scripting React inherently has a security mechanism to protect from XSS - it provides the attribute `dangerouslySetInnerHTML` instead of the normal `innerHTML` propery.
- CSRF (XRF) - Cross Site Request Forgery - two ways to secure our app from this type of attack
    1. avoid cross-origin-request-sharing
    1. signed-token to be provided for every authenticated request

## Security Considerations for React
- use best practices suggested by framework
- refer OSWAP iteratively
- nevery publish sensitive files
- be careful with any data on client - always use server-side implementation for validations, etc.
- use `<React.Strict>` on the application root


