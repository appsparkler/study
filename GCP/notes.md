
## Services:
1. CE: Compute Engine
1. VPC Network: Virtual Private Cloud Network

## Theoretical Questions
1. What are the advantages of cloud platform?
1. What are regions and zones?
1. What are committed-discounts?
1. What are preemptible VMs?  What are its advantages and restrictions?
1. What are spot VMs?  How are the different from preemptible VMs?
1. GCLOUD CLI:
    1. What is the command structure for `gcloud` commands?
    1. Render a list of machine-types filtered for 2 zones.
    1. How to configure the metadata?
    1. List
        1. List the regions for compute group, sort them by name in ascending and descending order, enlist the URI of these regions
        1. List the various zones, for a particular region (apply filter) and list the URI for these zones.
    1. Describe
        1. Output the description of a region; for ex. afriaca-south1 region
    1. Create, Delete, Describe, Start and Stop a VM with the `gcloud` CLI. 

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
1. CE: PLUS setup auto-restart if a VM shuts down when it becomes unresponsive.
1. CE: PLUS monitor an instance: the CPU, memory and disk-space utilization, etc. for a VM.
1. CE: PLUS CREATE a sole-tenant template and node.  Run a VM on the sole-tenant node. 

### Other
1. Setup a purchase-committment (for getting committed discounts)
1. Show example of how to create preemptible and spot VMs (low cost VMs)
1. Setup a budget and alerts

### Tips & Tricks
1. VM: When creating a VM with GPU, ensure to use an image which contains all the necessary libraries so that the VM can be used effeciently.

### `gcloud` CLI Practical exercies
1. start the CLI from the cloud console and set a default configuration.  Try all the commands mentioned in gcloud-cli.md file

