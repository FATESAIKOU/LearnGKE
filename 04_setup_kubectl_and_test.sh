#!/usr/bin/env bash

if [ -z "$INIT_COMPLETED" ]; then
  echo "Please run 00_set_env.sh first"
  exit 1
fi

gcloud container clusters get-credentials "$CLUSTER_NAME" --zone "$ZONE"

kubectl get nodes -o wide
kubectl get pods -A
