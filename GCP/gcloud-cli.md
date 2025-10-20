# `gcloud` CLI

## Notes
- `core` is the default namespace so for any properties under `core`, we don't need to provide the namespace.  For ex. `gcloud config list account` would work same as `gcloud config list core/account`

## Anatomy of the `gcloud` CLI
- `gcloud <GROUP> <SUB-GROUP> <ACTION> <--options>` is the bare bones structure of a gcloud command.
- GROUP # could be any of config, compute, network-security, iam, etc.
- SUBGROUP # examples are `instances` for `compute` or `configurations` for `config`, etc.
- ACTION # examples are `describe`, `create`, `edit`, `delete`, etc.
- examples:
    - `gcloud compute instances describe <instance-name>`
    - `gcloud compute instances create <instance-name>`
    - `gcloud compute instances delete <instance-name>`
- OPTIONS # examples are `--filter` for `machine-types` in `compute` 
    - `gcloud compute machine-types list --filter zone:asia-southeast3-a`
    - `gcloud compute machine-types list --filter "zone:(asia-southeast3-a asia-southeast3-b)"`

## Configuring Default Settings and Overriding them
- Default settings can be set with the command line or the UI/UX
- Example with command line is `gcloud compute project-info add-metadata --metadata=...`
- The default values can be overridded with local configuration values (in gcloud CLI).
- Local configuration values can be further be overridden with command line options. 

## `list` and `describe` commands
- List are for getting a list of items whereas describe is to get informationon a particular item.
- LIST # `gcloud compute regions/zones/images/machine-types/etc. list`
    - common options are 
        - `--filter=zone:<value>` # example `gcloud compute zones list --sort-by ~name --filter region:africa-south1`
        - `--sort-by=<property>` # `--sort-by=region`.  for reverse sorting `--sort-by=~region` # example `gcloud compute regions list --sort-by ~name`
        - `--uri` # will output the URI # `gcloud compute zones list --sort-by ~name --filter region:africa-south1 --uri`
- DESCRIBE # `gcloud compute region  

## Listing/Setting/Getting/Unsetting Config details
- `gcloud config list` # Lists the configuration.
- `gcloud config list account` # List the account configured in `core`
- `gcloud config <set/get> core/project` # get/set the project configured in `core`
- `glcoud config <set/get> compute/zone` # get/set the zone configured in `compute`
- `gcloud config <set/get> core/verbosity` # get/set the verbosity in core configuration
- `gcloud config unset compute/zone` # unset a particular configuraiton

## Listing/Creating/Activiating/Deleting/Describing Configurations
- `gcloud config configurations`
- `gcloud config configurations list` # Lists all configurations
- `gcloud config configurations create <configuration-name>` # Creates a new configuration with the provided `configuration-name`
- `gcloud config configurations activate <configuration-name>` # Activates the configuration provided
- `gcloud config configurations describe <configuration-name>` # Describes the configuration provided
- `gcloud config configurations delete <configuration-name>` # Deletes the configuration provided

## Using Instance Templates
We can create, delete or describe instance-templates using the `instance-templates` sub-group
- `gcloud compute instance-templates <action>` 

## Help!
Help can be requested at any level.  For ex:
- `gcloud --help`
- `gcloud config --help`
- `gcloud config list --help`

## Useful commands
```bash
gcloud init
gcloud config list project
gcloud config configurations list
gcloud config configurations activate my-default-configuration
gcloud config list
gcloud config configurations describe my-second-configuration
gcloud compute instances list
gcloud compute instances create
gcloud compute instances create my-first-instance-from-gcloud
gcloud compute instances describe my-first-instance-from-gcloud
gcloud compute instances delete my-first-instance-from-gcloud
gcloud compute zones list
gcloud compute regions list
gcloud compute machine-types list
 
gcloud compute machine-types list --filter zone:asia-southeast2-b
gcloud compute machine-types list --filter "zone:(asia-southeast2-b asia-southeast2-c)"
gcloud compute zones list --filter=region:us-west2
gcloud compute zones list --sort-by=region
gcloud compute zones list --sort-by=~region
gcloud compute zones list --uri
gcloud compute regions describe us-west4
 
gcloud compute instance-templates list
gcloud compute instance-templates create instance-template-from-command-line
gcloud compute instance-templates delete instance-template-from-command-line
gcloud compute instance-templates describe my-instance-template-with-custom-image

```