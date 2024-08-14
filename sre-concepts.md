# SRE Principles
## Objective: Understand the core principles of SRE

### Service Level Indicator (SLI), Service Level Objective (SLO), Service Level Agreement (SLA)
#### Definitions
##### Service Level Indicator (SLI)
A specific metric that quantifies the performance or reliability of a service. It's a measurable attribute of the service that reflects how well it is performing from the user's perspective. 
Common SLIs:
 - Latency 
 - Throughput (The number of requests served per unit of time, TPS)
 - Error Rate (Percentage of requests returning errors)
 - Availability (The proprotion of time the service is up and running this is usually the ratio of time the service is operational and able to serve requests)
 - Saturation (A measure of how full the system is, such as CPU or memory utilization)

##### Service Level Objective (SLO)
A target or goal for the perofmrance of a serivce, as measured by an SLI. It's essentially a promise you make internally about how reliable or performant a service should be.
 - To set SLOs, you should choose relevant SLIs that matter to your users and reflect their experience with your service.
 - Set specific measurable targets for each SLI. For example, you might set an SLO that 99.9% of requests should be served within 500ms.

##### Error budgets
The difference between 100% availability and your SLO is your error budget. For example, if your SLO is 99.9% availability, your error budget is 0.1% downtime. This budget can be "spent" on planned maintenance, experiments, or other operational issues.

Note: Some companies Prometheus AlertManager integrated with Pagerduty to notify when SLO budgets are exceeded. An alerting rule can be created in Prometheus to trigger when an SLO is breached.

##### Burn Rate
The rate at which your service is consuming your error budget. Short-term burn rate detects rapid spikes that could quickly deplete the error budget. Long-term burn rates detect slower, sustained issues that could deplete the error budget over time.

(short_term_burn_rate = rate(http_requests_total{status!~"2.."}[5m])) / 0.001
(long_term_burn_rate = rate(http_requests_total{status!~"2.."}[1h])) / 0.001

##### Service Level Agreements (SLAs)
An SLA is a formal contract between a service provider and a customer that defines the level of service expected. SLAs are typically legally binding and may include penalities if the service does not meet the agreed-upon SLOs.
 - SLOs are included in the SLA, but with legal backing. They define the expected level of service, such as 99.9% uptime.
 - SLAs can include penalties for not meeting SLOs, such as financial compensation or service credits.

#### Uses
- SLOs help guide operational priorities, focus engineering efforts, and set realistic expectations for service performance.
    - Note: Planned maintenances or necessary changes that cause impact should be factored into the error budget accounted
- SLIs are the raw metric that measure your service's performance. SLOs set targets for those metrics, guiding internal expectations and operation work. SLAs take those SLOs and put them into a formal agreement with customers, often including penalties if targets are missed.


## Four Golden Signals:
Latency: The time it takes to service a request.
Traffic: The demand on your system, often measured in requests per second or transactions per second.
Errors: The rate of requests that fail, either by returning an error or failing to complete.
Saturation: How "full" your service is, often measured by metrics like CPU or memory usage.
Operational Excellence: Be ready to discuss how you’ve implemented operational excellence in previous roles, particularly in setting up SLOs, managing error budgets, and designing for resilience.

## Cloud Platforms
AWS, Azure, Google Cloud: Since the job posting emphasizes strong knowledge of cloud platforms, ensure you are comfortable discussing the core services (Compute, Storage, Networking, Databases) of each platform, and how you've utilized them in your previous roles.
Serverless Architecture: You’ve used serverless architecture in your Enshape app. Be ready to explain the benefits and challenges of serverless design and how it impacts reliability and scalability.





## Containerization and Orchestration
Kubernetes and Docker: Understand how to design, deploy, and manage applications using Kubernetes. Be familiar with concepts such as pods, services, deployments, and how to manage stateful applications in Kubernetes.
Best Practices: Review best practices for containerization, including security, resource allocation, and scaling.


### Serverless design
Benefits
- Automatic scaling in response to incoming traffic. Allows to meet demand without downtime, latency, or manually intervention
- Less overhead as developers can focus on writing code rather than managing servers.
- Cost efficient, as only the capacity needed is used
Drawbacks
- Latency during "cold starts" which occur when they platform must intialize code that hasn't been invoked recently.
 - Cold starts can be optimize with periodic invocations to keep functions warm
- Limited control over the hardware, network configurations, or runtimes.
- Vendor lock-in making it hard to migrate to another provider
 - Can be designed to be vendor agnostic
- Complex debugging and monitoring as the system is distributed and you may lack direct access to underlying infrastructure
- Some limitations on execution time, memory usage, payload size, etc.
- Stateless by design, which means that states must be managed externally such as databases, cache, or object storage. Increased complexity.


### Kubernetes Services
#### Definitions 
Services are essentially mappings of IPs or DNS names to pods. The IP address is assigned by Kubernetes Control Plane through the kube-proxy component, based off the Cluster IP range setup by the cluster admin. 

Service types can be:
- Internal
 - ClusterIP (Internal cluster IP, only accessible from within the cluster)
- External 
 - NodePort - Exposes the service on a specifc port on each node's IP address, allowing external traffic
 - LoadBalancer - Integrates with cloud providers to automatically create a load balancer that routes traffic to the service
 - ExternalName - Maps the service to an external DNS name, allowing to act as a proxy for external services.

Kube-proxy runs on each node in a cluster and watches Kubernetes API server for new or updated services. It then updates the iptables or IPVS rules on the node to route traffic destined for the service's IP to the appropriate backend pods. 
Kuve-proxy configures node's networking stack using ipstables or IPVS in more recent versions. No external load balancer is needed for Cluster IP services, everything is handled within the kubernetes cluster using iptables or IPVS rules managed by kube-proxy.




## Monitoring and Observability
Datadog, NewRelic, Splunk: Familiarize yourself with how these tools are used to monitor, log, and trace applications. Be prepared to discuss how you've used these tools to detect and resolve incidents, and how you’ve set up monitoring dashboards in your past roles (e.g., Grafana/PromQL dashboards).
Prometheus: Since you’ve worked with PromQL, be ready to discuss Prometheus and its use in metrics collection, querying, and alerting.

## Microservices and Distributed Systems
Architecture: Be prepared to explain how microservices architecture impacts system reliability, and discuss strategies for managing distributed systems, such as circuit breakers, retries, and distributed tracing.
Communication: Understand the different methods of communication between microservices (e.g., REST, gRPC, message queues) and how to ensure resilience in these communications.

## Networking and Security
Networking Basics: Review key networking concepts, including TCP/IP, DNS, load balancing, and how they relate to reliability in distributed systems.
Security Best Practices: Familiarize yourself with security practices in cloud environments, such as IAM roles, network policies, encryption, and how you’ve implemented security measures in your previous roles.

## Incident Management
Incident Command: You’ve served as an incident commander, so be prepared to discuss how you’ve handled major incidents, coordinated with teams, communicated with stakeholders, and conducted post-incident reviews.
Documentation and Communication: Highlight your experience in documenting incidents, creating post-mortems, and ensuring clear communication during and after incidents.

## Collaboration and Leadership
Mentorship and Team Collaboration: Since the role involves mentoring and cross-functional collaboration, think of examples where you’ve led technical discussions, mentored junior engineers, or contributed to design decisions that had a broad impact.

## Technical Design and Systems Thinking
End-to-End Design: Be ready to discuss projects where you drove the technical design from start to finish, especially focusing on how you ensured the system's reliability, scalability, and maintainability.
Holistic Problem Solving: Reflect on instances where you took a whole-system approach to solve complex issues, ensuring that all components (structure, people, process, technology) were aligned.




## Setting up a system highly available and resilient to failures:
### Monitoring and observability
 - Notes on this
### Health checks on application level
 - Notes on this
### Tooling for operations
 - Notes on this
### Circuit breakers and retries
#### Definitions
 - Circuit Breakers
   - Closed state
   - Allows requests to pass through to the downstream service
   - Monitors success or failures of these requests
   - If a certain threshold of failures (e.g., 5 consecutive failures) is reached within a specified time period, the circuit breaker trips and moves to the open state
  - Open state
    - All requests blocked from reaching the downstream service. Instead it returns an error immediately or executes a fallback operation (Such as returning cached data or a default response)
    - Prevents the sytem from continuing to send requests to a service that is known to be failing. This reduces unnecssary load and prevents potential cascading failures
    - After a specified timeout period, the circuit breaker moves to the half-open state
  - Half-Open state
    - Allows a limited number of requests to pass through to the downstream service
    - Serves as a test to check if the service has recovered
    - If the requests suceeded, the circuit breaker transitions back to the closer state, allowing all traffic to resume
    - If the requests fail again, the circuit break reverts to the open state

#### Uses
Handling an open circuit breaker effectively can mitigate user impact by providing a more graceful degration of service rather than a complete failure.
 - Graceful degration such as external third-party payment gateway can allow the user to save their cart and notify them when the payment system is back online
 - Provide clear feedback to the user about the issue such as "Service temporarily unavailable. Please try again later." Instead of waiting for a long timeout and this error not being handled in the same way.

Load balanacing and auto-scaling
### Distributed tracing
#### Definitions
 - Span 
    - Represents a single unit of work within a trace. Could be a function call, database query, external API Call, or any other operation that occurs when processing a request
    - Each span typically records information such as the start time, duration, and any errors or logs associated with that operation
 - Trace
    - A trace is a collection of spans that togethe represent the entire journey of a request through the system. Provides a complete picture of how the request moved from service to service, including the timing information for each span

#### Uses
 - If a user reports an operation is slow, tracing can help identify which part of the system is causing the delay
 - Sometimes, logs or metrics alone do not provide enough context to troubleshoot an issue. By correlating traces with logs and metrics, you can get a more comprehensive view of what's happening in the system. For example, if a trace shows a slow databsae query, you can look at the corresponding logs to see if there was any database errors, or check metrics to see if there was a spike in load at that time.
 - Monitoring and alerting can be setup on traces based on trace data. For example, you could trigger an alert if the duration of a particular span exceeds a threshold or if the erro rate for a certain service increases.

 #### Correlating Traces
  - Unified Identifiers (Trace IDs). The most effective way to correlate logs, metrics, and traces is to use a common identifier, such as a Trace ID, that is included in each of these data types. 
    - When a trace is initiaed (e.g., when a request enters your system), a unique Trace ID is generated. This ID is propogated across all services involved in handling the request
    - Ensure that the Trace ID is included in all logs generated during the handling of the request. For example, you can use logging frameworks that support adding context (e.g., MDC in Java, logrus in Go) to automatically include the Trace ID in log entries.
    - When metrics are recordied (e.g., latency, error rates), include the Trace ID as a label or tag where possible.
 - Observability Platforms. Modern observability platoforms like Grafana, Elastic Stack (ELK - ElasticSearch, Logstash, Kibana), Datadog, New Relic, and Splunk provide integrated solutiosn for collecting and correlating logs, metrics, and traces
    - Centralized Collection, use an observability platform that collects logs, metrics, and traces in a unified way. For example, Datadog allows you to view logs, metrics, and traces side-by-side and automatically correlates them using common identifiers.
    - Dashboards and Alerts, set up dashboards that display logs, metrics, and traces together. You can create alerts that trigger based on metrics, and when an alert fires, automatically link to the relevant logs and traces
    - In Datadog, when a trace shows an error, you can directly jump to the logs associated with that trace and see the relveant metrics in the same view. This immediate context-siwtching helps quickly diagnosse the root cause.



Disaster recovery planning
 - Data backups
 - Failover strategies


 


## Glossary
### Data Dog 
 - Full SaaS Platform. 
 - Has a framework "APM" (Application Performance Monitoring)
  - APM injects trace ID, parent ID, and span IDs at the application level via a client library

### Prometheus
 - Prometheus exposes defined metrics on /metrics endpoint and 
  - Like Datadog, setup via a cli6ent library
 - Prometheus server can scrape /metrics endpoints at regular intervals and store in a time-series database
 - Supports service discovery via Kubernetes annotations 
 

### Istio
You can use Istio to inject trace/span/parent IDs on the service mesh level.

Kubernetes liveness, readiness, and startup probes help monitor healt hand automate recovery actions like restarting failed pods. 
