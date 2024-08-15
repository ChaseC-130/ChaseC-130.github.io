
# Service Level Indicator (SLI), Service Level Objective (SLO), Service Level Agreement (SLA)
## Definitions
## Service Level Indicator (SLI)
A specific metric that quantifies the performance or reliability of a service. It's a measurable attribute of the service that reflects how well it is performing from the user's perspective. 
Common SLIs:
 - Latency 
 - Throughput (The number of requests served per unit of time, TPS)
 - Error Rate (Percentage of requests returning errors)
 - Availability (The proprotion of time the service is up and running this is usually the ratio of time the service is operational and able to serve requests)
 - Saturation (A measure of how full the system is, such as CPU or memory utilization)

## Service Level Objective (SLO)
A target or goal for the perofmrance of a serivce, as measured by an SLI. It's essentially a promise you make internally about how reliable or performant a service should be.
 - To set SLOs, you should choose relevant SLIs that matter to your users and reflect their experience with your service.
 - Set specific measurable targets for each SLI. For example, you might set an SLO that 99.9% of requests should be served within 500ms.

### Error budgets
The difference between 100% availability and your SLO is your error budget. For example, if your SLO is 99.9% availability, your error budget is 0.1% downtime. This budget can be "spent" on planned maintenance, experiments, or other operational issues.

Note: Some companies Prometheus AlertManager integrated with Pagerduty to notify when SLO budgets are exceeded. An alerting rule can be created in Prometheus to trigger when an SLO is breached.

### Burn Rate
The rate at which your service is consuming your error budget. Short-term burn rate detects rapid spikes that could quickly deplete the error budget. Long-term burn rates detect slower, sustained issues that could deplete the error budget over time.

`(short_term_burn_rate = rate(http_requests_total{status!~"2.."}[5m])) / 0.001`
`(long_term_burn_rate = rate(http_requests_total{status!~"2.."}[1h])) / 0.001`

## Service Level Agreements (SLAs)
An SLA is a formal contract between a service provider and a customer that defines the level of service expected. SLAs are typically legally binding and may include penalities if the service does not meet the agreed-upon SLOs.
 - SLOs are included in the SLA, but with legal backing. They define the expected level of service, such as 99.9% uptime.
 - SLAs can include penalties for not meeting SLOs, such as financial compensation or service credits.

## Uses
- SLOs help guide operational priorities, focus engineering efforts, and set realistic expectations for service performance.
    - Note: Planned maintenances or necessary changes that cause impact should be factored into the error budget accounted
- SLIs are the raw metric that measure your service's performance. SLOs set targets for those metrics, guiding internal expectations and operation work. SLAs take those SLOs and put them into a formal agreement with customers, often including penalties if targets are missed.

