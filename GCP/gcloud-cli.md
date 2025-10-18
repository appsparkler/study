# `gcloud` CLI

## Notes
- `core` is the default namespace so for any properties under `core`, we don't need to provide the namespace.  For ex. `gcloud config list account` would work same as `gcloud config list core/account`

## Listing/Setting/Getting/Unsetting Config details
- `gcloud config list core`
- `gcloud config <set/get> core/project`
- `glcoud config <set/get> compute/zone`
- `gcloud config <set/get> core/verbosity`
- `gcloud config unset compute/zone`

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