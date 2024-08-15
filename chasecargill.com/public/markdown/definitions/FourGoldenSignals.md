# Four Golden Signals
The Four Golden Signals are a foundational concept in Site Reliability Engineering (SRE) that provide a structured way to monitor the health and performance of a system. By focusing on these four metrics—Latency, Traffic, Errors, and Saturation—SREs can gain critical insights into the operational state of services and detect issues before they impact users.


# Latency
The time it takes to service a request. It is a critical indicator of user experience, as higher latency often translates to slower response times, which can lead to user dissatisfaction.
 - End-to-End latency
    - The total time from when a request is initiated by the client to when a response is received. This includes network latency, server processing time, and any delays caused by middleware or third-party services
 - Server-Side latency
    - The time it takes for a server to process a request and generate a response, excluding network delays. This is often measured from the moment a request reaches your service to the moment a response is sent back
 - P99 latency
    - A common practice is to monitor the 99th percentile latency (P99), which indicates the latency experienced by the slowest 1% of requests. Monitoring P99 helps in identifying outliers and ensuring that the service remains performant even under heavy load

 - User Experience
    - Users expect quick responses, especially in web applications. High latency can lead to frustration and abandonment
 - Service Health
    - Spikes in latency can be an early indicator of underlying issues such as resource contention, slow dependencies, or netowrk congestion

### Example Metrics
 - Average Latency
    - Average time taken to respond to requests
 - P99 Latency
    - The time it takes to servce the slowest 1% of requests
 - Request Processing Time
    - The time spent in your application processing a request


# Traffic
The demand on your system. It is typically quantified in terms of requests per second (RPS), transactions per second (TPS), or data transferred per second.

 - Request Rate
    - The number of incoming requests over a given period. Monitoring this helps in understanding load patterns and detecting traffic spikes or drops
 - Throughput
    - The amount of work performed by the system in a given time frame, such as the number of successful transaction or bytes processed per second
 - Resource Utilization
    - Traffic metrics often correlate with resource usage, helping SREs plan capacity and scale infrastructure accordingly

- Capacity Planning
    - Understanding traffic patterns is essential for scaling resources to meet demand without over-provisioning
- Incident Detection
    - Sudden changes in traffic can signal issues such as a DDoS attack, deployment problems, or upstream service failures


### Example Metrics
 - Requests Per Second (RPS)
    - Number of requests received by the service per second
 - Transactions Per Second (TPS)
    - Number of transactions processed per second
 - Data Transfer Rate
    - The amount of data (in byes) sent or received per second

# Errors
Errors represent the rate of requests that fail, either due to returning an error code or failing to complete as expected. This includes HTTP 5xx errors, application exceptions, and timeouts

 - Error Rate
    - The percentage of failed requests compared to the total number of requests. A higher error rate indicates potential issues iwth the service or its dependencies
 - Types of Errors
    - It's important to categorize errors by type, such as client errors (4xx), server errors (5xx), and network-related issues. This helps in pinpointing the root cause
 - Impact of Errors
    - Some errors might have a more significant impact on the system or users, such as payment processing failures, so it's critical to prioritize monitoring and resolution of these errors

 - Relaibility
    - A high error rate can lead to system instability, poor user experience, and ultimately, loss of trust in the service
 - Service Quality
    - Monitoring errors helps ensure that the service meets SLAs and remaing reliable and available to users

### Example Metrics
 - Error Rate
    - The ratio of failed requests to total requests, often expressed as a percentage
 - HTTP 5xx Errors
    - Count of service-side errors (e.g., 500, 502, 503) over a period
 - Timeout Errors
    - Number of requests that timed out without receiving a response

# Saturation
Saturation indicates how "full" your service is. It measures the usage of critical resources such as CPU, memory, disk I/O, and network bandwidth. Saturation is an early warning of capacity limits.

 - Resource utillization
    - Monitoring the percentage of resource usage helps identify when a resource is nearing its capacity, which could lead to degraded performance or outages
 - Queue Length
    - In systems where tasks are queued (e.g., background jobs, message queues), then length of the queue can indicate saturation. A growing queue suggests that the system is struggling to keep up with incoming work
 - Headroom
    - The remaining capacity before a resource reaches its limit. Understanding headroom allows for proactive scaling and capacity planning

- Preventing Overload
    - When a resource is fully saturaged, the system may become unresponsive or crash. Monitoring saturation helps prvent this by enabling timely scaling or optimization
 - Performance Degradation
    - As a system approaches saturation, performance can degrade leading to latency, errors, or even downtime

### Example Metrics
 - CPU Utilization 
    - Percentage of CPU capacity used
 - Memory Usage
    - Percentage of available memory in use
 - Disk I/O
    - Rate of input/output operations per seconds (IOPS) and disk latency
 - Queue Length
    - Number of tasks waiting to be processed in a queue

# Summary
The Four Golden Signals—Latency, Traffic, Errors, and Saturation—are essential metrics that provide a comprehensive view of your system’s health. By continuously monitoring these signals, SREs can quickly detect and diagnose issues, optimize system performance, and ensure that the service meets its reliability and performance objectives. Integrating these signals into your monitoring and alerting strategy is crucial for maintaining a resilient and scalable infrastructure.