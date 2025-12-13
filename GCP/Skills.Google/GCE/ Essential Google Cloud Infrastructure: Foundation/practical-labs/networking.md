# Practical Labs
QU\aN2kNW23*MxC
## 7 - Implement Private Google Access and Cloud NAT
https://www.skills.google/paths/11/course_templates/50/labs/578291
https://www.youtube.com/watch?v=9wRvnOAka7g
- Create a private network with custom subnets
    - This subnet should not have access to Google services
- Create a firewall rule
- Attach a VM without external IP to this network
    - Verify access to public IP addresses of Google APIs and services and other connections to the internet

## 6 - Understand Network Designs
https://www.youtube.com/watch?v=tqwn3GPGroc

## 5 - VPC Networking (Advanced)
https://www.youtube.com/watch?v=NF1TDOInL5M
- review network, subnetwork, routes and firewall in a project
- delete default network and firewall rules
- create network `mynetwork` with auto subnet (not recommended for production)
- edit `mynetwork` network with custom subnet (recommended for production)
- create two VMs on `mynetwork` in different

## 4 - VPC Networking
1. create an auto mode VPC network with firewall rules and two VM instances. 
1. convert the auto mode network to a custom mode network and create other custom mode networks as shown in the example network diagram below:
    ![example network diagram](example-network-diagram.png)
1. Also test connectivity across networks.

## 3 - Creating, deleting and switching between projects
1. Create two projects
1. Switch between projects on Cloud Console and on Cloud Shell 
1. Shutdown a project from Cloud Console as well as Cloud Shell
Ref link: https://www.youtube.com/watch?v=P_QHiOYwt0o


## 2.2 - Readymad Jenkins Solution
1. Setup Jenkins via the market place
https://www.youtube.com/watch?v=T2OV_dkgny4


## 2.1 - Readymade LAMP stack in miniutes
1. Setup a LAMP stack via the market place and visit 

## 1 - Cloud Console and Cloud Shell Intro
1. Create a storage bucket on Cloud Console
1. Create a storage bucket from the Cloud Shell
    1. Checkout the UI and various features and options of the shell.
    1. Upload a file from our local machine to the shell instance
    1. Copy that file to the storage buckets created above
    1. **Customise local environment**
    1. Create INFRACLASS_REGION and INFRACLASS_PROJECT_ID environment variables
    1. Create `infraclass/config` file and save these variables in it.
    1. Use Nano to edit `.profile` and add `source infraclass/config` at the end of the file.
    1. Restart the environment variable and verify that the variables are available in the local environment.
