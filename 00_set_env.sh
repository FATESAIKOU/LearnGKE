#!/usr/bin/env bash

# ====== REQUIRED: change these ======
# export PROJECT_ID="YOUR_PROJECT_ID"
export REGION="asia-northeast1"
export ZONE="asia-northeast1-a"

# ====== Naming ======
export NETWORK_NAME="learn-gcp-kou-gke"
export SUBNET_NAME="learn-gcp-kou-gke-subnet"
export CLUSTER_NAME="learn-gcp-kou-gke-cluster"

# ====== IP planning ======
export SUBNET_PRIMARY_CIDR="10.30.0.0/20"
export POD_RANGE_NAME="learn-gcp-kou-gke-pods"
export POD_SECONDARY_CIDR="10.31.0.0/16"
export SVC_RANGE_NAME="learn-gcp-kou-gke-svcs"
export SVC_SECONDARY_CIDR="10.32.0.0/16"

# Control plane CIDR (must be /28 for private cluster control plane range)
export MASTER_CIDR="10.255.0.0/28"

# Enable required services
gcloud services enable compute.googleapis.com container.googleapis.com

export INIT_COMPLETED=true