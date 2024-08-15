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
