
## Services:
1. CE: Compute Engine
1. VPC Network: Virtual Private Cloud Network

## Theoretical Questions
1. What are the advantages of cloud platform?
1. What are regions and zones?
1. What are committed-discounts?
1. What are preemptible VMs?  What are its advantages and restrictions?
1. What are spot VMs?  How are the different from preemptible VMs?

## Practical Exercies

### Compute Engine | Creating VM Instances
1. CE: Create a VM from scratch (with Debian OS)
    1. get super user access (sudo su)
    1. upgrade all package (apt update)
    1. install apache v2 (apt install apache2)
    1. render `hello world` on the IP address assigned to it: `echo "$(hostname), $(hostname -i)"`
    1. VPC: assign a static IP to it
1. CE: Create a VM and add an automation script that installs apache2 and echos the hostname information to the index.html.  End result is that we should see the web page on the external IP address.  Use the following automation script:
```bash
#!/bin/bash
apt update 
apt -y install apache2
echo "Hello world from $(hostname) $(hostname -I)" > /var/www/html/index.html
```
1. CE: Create a VM with automation script and then create a machine image from that VM.
    1. Create instance from that image.  When accessing it with the external IP, it should have the name of the current VM instead of the original VM from which the machine image was created. 

