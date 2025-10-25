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

