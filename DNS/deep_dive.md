# Deep Dive DNS on Udemy

- DNS (Domain Name System) is aka the phonebook of the internet.  It translate human-readable domain names (such as google.com) into machine readable IP address such as 142.250.183.110 (`nslookup google.com`).
- it has evolved more than just a phonebook though :D

## Main Functions of DNS
- name resolution
- name space
- name registration

## Domain Name Format
It is written from right to left starting with the root ".".  Though the root is omitted in common parlance.

### rules
- each label can be <= 63 characters
- labels can contain on Letters(A-Z, a-z), Digits(0-9) or =Hyphen(-) (LDH rule)
- labels may not start with hyphen `-`.
- top level domain names should not be all numeric
- no maximum limit on the number of sub domains.
- FQDN <= 255 characters including the dots


### parts of a domain name
- Root - is a dot (.)
- Top Level Domain (TLD) - com, in, ca, io, etc.
- Second level domain - the name
- Third level domain - for ex. www, aaa, etc.

### Zone Apex/Naked Domain
- the top and second level domain make up the Zone Apex/Naked Domain - for ex. example.com

### Understanding with example
for a domain like "www.google.com.", it can be said that :
- the www.google.com is a subdomain of google.com
- google.com is a sudomain of .com
- every name after root are called labels
- Root is label of null

### FQDN - Fully Qualified Domain Name
A fully qualified domain name is one that has the root, top-level domain, second level domain and third level domain.  So "www.google.com." is a FQDN

### URL - Uniform Resource Locator
- A URL includes also the 
  - transfer protocol - for ex. https2:// or https:// or http://
  - path - for ex. `/learning` or `/account`, etc.
- example of URL - https://www.example.com/learning

### PQDN - Partially Qualified Domain Name
- these domains don't reach upto the root - for ex. `example`, `localhost` or `subdomain.example` are all subdomains
- these are usually used on local networks for use cases such as testing where the first level domain is not necessary or relevant.

## The DNS Tree
- DNS uses a hierarchical name architecture
- authority is distributed
- name uniqueness is guaranteed

## The Root Server
- When the DNS resolver receives a query, for ex. for www.google.com, it first queries one of the root servers to find out which name servers are authoritative for the .com TLD.
- The root server then responds with the IP addresses of the authoritative name servers for ".com."


user enters google.com in url bar > dns resolver > root servers > authoritative name servers for ".com" > dns resolver > 

## The DNS Resolver fetching the DNS Record
![alt text](image.png)

#




