#!/usr/bin/env bash

if [ -z "$INIT_COMPLETED" ]; then
  echo "Please run 00_set_env.sh first"
  exit 1
fi

export MY_PUBLIC_IP="$(curl -4 -s https://ifconfig.me)"
echo "$MY_PUBLIC_IP"

gcloud container clusters create "$CLUSTER_NAME" \
  --zone="$ZONE" \
  --network="$NETWORK_NAME" \
  --subnetwork="$SUBNET_NAME" \
  --enable-ip-alias \
  --cluster-secondary-range-name="$POD_RANGE_NAME" \
  --services-secondary-range-name="$SVC_RANGE_NAME" \
  --enable-private-nodes \
  --master-ipv4-cidr="$MASTER_CIDR" \
  --enable-master-authorized-networks \
  --master-authorized-networks="${MY_PUBLIC_IP}/32" \
  --num-nodes=1 \
  --enable-autoscaling --min-nodes=1 --max-nodes=3 \
  --machine-type="e2-small" \
  --disk-type="pd-standard" --disk-size="30" \
  --release-channel="regular"
