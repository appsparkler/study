# Learning GCP

## Services:
1. CE: Compute Engine
1. VPC Network: Virtual Private Cloud Network

## Theoretical Questions
1. What are the advantages of cloud platform?
1. What are regions and zones?

## Practical Exercies
1. CE: Create a VM from scratch (with Debian OS)
    1. get super user access (sudo su)
    1. upgrade all package (apt update)
    1. install apache v2 (apt install apache2)
    1. render `hello world` on the IP address assigned to it: `echo "$(hostname), $(hostname -i)"`
    1. VPC: assign a static IP to it
