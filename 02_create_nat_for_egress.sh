#!/usr/bin/env bash

if [ -z "$INIT_COMPLETED" ]; then
  echo "Please run 00_set_env.sh first"
  exit 1
fi

gcloud compute routers create "$ROUTER_NAME" \
  --network="$NETWORK_NAME" \
  --region="$REGION"

gcloud compute routers nats create "$NAT_NAME" \
  --router="$ROUTER_NAME" \
  --router-region="$REGION" \
  --nat-all-subnet-ip-ranges \
  --auto-allocate-nat-external-ips
