# Instance Groups
Group of instances managed as a single entity

## Types
1. Managed
    - created using a instance template (as they need to have the same configuration)
    - features: 
        - auto maintain count # it can automatically maintain certain number of instances
        - auto-scaling 
        - auto-healing # detect application failure using health-checks
        - managed releases 
            - rolling update: release new application version without a downtime i.e. update percentage of instances to the new version; gradually covering 100%.
            - canary deployment: test new version with a group of instances before releasing it across all instances  
        - add load balancer to distribute load

1. Unmanaged
    - do not have the features of managed instance groups
    - these are not recommended.

## Location
They can be cofigured as zonal (all instances in the same zone) or regional (all instances in the same region; however, can be distrubuted across more than one zone)

## Creating an instance group
- instance templates are mandatory
- configure auto-scaling # 
    - number of instances: min, max number of instances
    - autoscaling metrics: for ex. CPU utilization, load balancer utilization or any other metric from stack driver
        - cool-down period # how long to wait before looking at the auto-scaling metrics again.
        - scale in controls # prevent sudden drop of vm instances.  For ex. don't scale in by more than 10% or 3 instances in 5 mins.
    - autohealing
        - initial delay: configure how long should you wait for the app to initialize before running a health check.

## Practical Exercises
1. Create a 
