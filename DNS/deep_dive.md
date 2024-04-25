# Deep Dive DNS on Udemy

- DNS (Domain Name System) is aka the phonebook of the internet.  It translate human-readable domain names (such as google.com) into machine readable IP address such as 142.250.183.110 (`nslookup google.com`).
- it has evolved more than just a phonebook though :D

## Main Functions of DNS
- name space
- name resolution
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
- https://root-server.org


user enters google.com in url bar > dns resolver > root servers > authoritative name servers for ".com" > dns resolver > 

## The DNS Resolver fetching the DNS Record
![alt text](image.png)

## TLD - Top Level Domains
1. Generic TLD (gTLD) - com, arpa, edu, gov, org, etc
2. Country Code TLD (ccTLD) - in, ca, us, eu, etc.

## Authoritative Name Servers
- Within the DNS Tree, every node has a governing authority name server - thus known as authoritative name server.
- A governing authority can have authority over more than one name server.
- For ex. if I purchased example.com, I have authority over example.com and all sub domains.

# Name Resolution
Once the DNS resolver returns the DNS records which contains the ip address via name servers; its time for our application to connect to that server and get the necessary data.

## Local Name Resolution (`/etc/hosts` resolution)
- typically `/etc/hosts` file takes prcedence over external DNS resolutions.
- the DNS resolver kicks in only if correponding IP is not found in the `/etc/hosts` file.
- we can add entries here - `ip-address` and `domain name`.  This way we can access local server with a domain name.
- Example of 
```txt
192.168.1.43 mycolorprinter.com
192.168.1.1 myrouter.com
```

### `/etc/hosts/`
- wild card entries are not supported
- the file can contain any number of entries
- ip address can be IPv4 or an IPv6 address

### DNS Resolver
- DNS resolver is the middleware that helps to fetch the DNS record associated with the domain name we are looking for.
- `/etc/resolv.conf` on our system displays the DNS resolver used by our computer

#### Iterative resolution
- the DNS resolver sends a request to a server and receives either a referral or an answer.
- if it receives an answer, its stops sending further requests.
- on the other hand, if it receives a referral, it sends a request to the referred name server until it receives an authoritative name server.
- it is the clients responsibility to keep querying servers for the answer.

#### Recursive resolution
- it is the servers responsibility to obtain the DNS information requested by the original client.
- its like calling an agent who; on our behalf, finds the person we need to get in touch with and connects them to us.

## Caching
- `ipconfig /displaydns` - on windows, to get dns cache
- `ipconfig /flushdns` - to clear the cache
- the client as well as DNS resolver may cache resolutions so that the name resolution is more efficient.
- the cache has a Time To Live (TTL) on it to avoid outdated domain name resolutions  