#!/usr/bin/env bash

if [ -z "$INIT_COMPLETED" ]; then
  echo "Please run 00_set_env.sh first"
  exit 1
fi

# Create VPC (custom mode)
gcloud compute networks create "$NETWORK_NAME" --subnet-mode=custom

# Create subnet with secondary ranges for Pods/Services
gcloud compute networks subnets create "$SUBNET_NAME" \
  --network="$NETWORK_NAME" \
  --region="$REGION" \
  --range="$SUBNET_PRIMARY_CIDR" \
  --secondary-range "$POD_RANGE_NAME=$POD_SECONDARY_CIDR","$SVC_RANGE_NAME=$SVC_SECONDARY_CIDR"

# Enable Private Google Access on subnet (good for private nodes)
gcloud compute networks subnets update "$SUBNET_NAME" \
  --region="$REGION" \
  --enable-private-ip-google-access

# If not need ssh to nodes, firewall rules can be omitted
# (TBD)