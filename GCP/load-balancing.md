# Load Balancing
To balance the load across various instances

## Features
1. health check # route to healthy instances
1. auto scaling
1. global load balancing with single anycast IP

These features provide:
1. high availability
1. resiliency
1. auto scaling

## Understanding various protocols
Computers use a number of protocols to communicate just like we use a language to do so.  Each protocol has a propor structure and syntax.
1. Application Layer
    - the protocol to send and receive the bits and bytes
    - Examples:
        - HTTP - HyperText Transfer Protocol
        - HTTPS - Secure HTTP
        - SMTP - Email Transfer Protocol
        - FTP - File Transfer Protocol
        - etc...
1. Transport Layer
    - the protocol that ensures that that bits and bytes are transferred properly
    - increases reliability
    - Examples
        - TCP (Transmission Control Protocol) - reliability first, performance next.
        - TLS (Transport Layer Security) - secure TCP
        - UDP (User Datagram Protocol) - performance first, reliability next - for ex. used in gaming where performance is key, loosing few bytes here and there is fine.
1. Network Layer
    - the protocol to transfers the bits and bytes
    - very unreliable.
    - IP - Internet Protocol - unreliable as it may result in data loss or compromise without a transport layer.
Each layer makes use of the layer beneath it.  For ex. when we use the application layer to send bits and bytes, it uses the transport layer and network layer to get the bits and bytes to another receiver application.

## Cloud Load Balancing Terminology
1. Backend: Group of endpoints that receive traffic from a Google Cloud Load Balancer
1. FrontEnd: The front-end IP for our client requests
1. Routing Policy: For HTTP(S) load balancing to define rules directing the traffic to differnt backends.  
    - path based: For ex. we can rederict /v1 and /v2 to backend-service-v1 and backend-service-v2 respectively.
    - host based: a.abc.com and b.abc.com could be directed to directed to different backend services
    - http headers based: we can redirect traffic to a particular backend-service based on how the http headers are configured.

## SSL/TLS Termination/Offloading
- Client to load balancer: Over Internet - HTTPS recommended
- Load balancer to VM instances: Through GOogle internal netowrk so HTTP is ok; HTTPS is preferred.
- SSL/TLS Termination/Offloading 

## Choosing a load balancer
Choosing a load balancer, is based on traffic which can be either internal or external:
- Internal IPv4 clients > Internal (traffic to/from internal IP addresses)
    - > TCP or UDP traffic ? - Choose the Internal TCP/UDP load balancer
    - > HTTP or HTTPS traffic? - Choose the INternal HTTP(S) load balancer
- Extnernal IPv4 or IPv6 client > External (Internet to GCP Traffic)
    - > HTTP or HTTPS
        - > Regional - regional external HTTPS Load balancer
        - > Not Regional - External HTTPS load balancer
    - > TCP - SSL Offload?
        - > Yes - SSL Proxy
        - > No - 
    - > UDP
    - > ECP or IMPC

