#!/usr/bin/env bash

if [ -z "$INIT_COMPLETED" ]; then
  echo "Please run 00_set_env.sh first"
  exit 1
fi

kubectl get nodes -o wide
kubectl get pods -A
