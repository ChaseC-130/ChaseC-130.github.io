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

