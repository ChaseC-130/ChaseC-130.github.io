# SRE Principles
Understand the core principles of SRE

# Four Golden Pillars
 - Service level objectives (SLOs) — Quantitative and objective metrics that define successful service levels.
 - Monitoring — Collecting metrics about the service to understand how it’s performing.
 - Emergency response — Having processes in place to respond to incidents when they occur to minimize customer impact.
 - Change management — Processes for planning, testing and deploying code or configuration changes to ensure high quality and minimize risk.


 
# Monitoring and Observability
 - [Four Golden Signals](./definitions/FourGoldenSignals)
 - [Service Level](./definitions/ServiceLevel)
 - Health checks and automation
 - [Distributed Tracing](./definitions/DistributedTracing)
 - Common tools
    - Grafana, Prometheus, Datadog, Splunk, NewRelic


# Architecture
 - Containerization and Orchestration
   - Docker
   - [Kubernetes](./definitions/Kube)
 - [Serverless](./definitions/Serverless)
 - Cloud Platforms 
    - Compute, Storage, Networking, Databases


# Microservices and Distributed Systems
 - Reliability, Resilience, and Highly Available concepts
    - [Circuit breakers](./definitions/CircuitBreaker)
    - [REST](./definitions/Rest)
    - [gRPC](./definitions/Grpc)
    - [Message Queues](./definitions/MessageQueues)

# Networking and Security
  - [TCP/IP](./definitions/TcpIp)
  - DNS
  - Load Balancing
  - OSI Model
  - Cluster-based networking
  - IAM Roles
  - OAuth2
  - Encryption

# Incident Management
 - Pagerduty
 - Post-mortems
 - Clear communication

# Collaboration and Leadership
Mentorship and Team Collaboration: Mentoring and cross-functional collaboration, technical discussions, mentored junior engineers, or contributed to design decisions that had a broad impact.

# Systems Design
  - Reliable
  - Scalable
  - Maintainable
  - Highly available

# Disaster recovery planning
 - Data backups
 - Failover strategies


 


# Glossary
## Data Dog 
 - Full SaaS Platform. 
 - Has a framework "APM" (Application Performance Monitoring)
  - APM injects trace ID, parent ID, and span IDs at the application level via a client library

## Prometheus
 - Prometheus exposes defined metrics on /metrics endpoint and 
  - Like Datadog, setup via a cli6ent library
 - Prometheus server can scrape /metrics endpoints at regular intervals and store in a time-series database
 - Supports service discovery via Kubernetes annotations 
 

## Istio
You can use Istio to inject trace/span/parent IDs on the service mesh level.

Kubernetes liveness, readiness, and startup probes help monitor healt hand automate recovery actions like restarting failed pods. 
