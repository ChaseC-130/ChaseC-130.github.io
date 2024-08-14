document.addEventListener("DOMContentLoaded", function() {
    const keywordLinks = {
      "circuit breakers": "/sre-concepts/Definitions/CircuitBreaker.md",
      "circuit breaker": "/sre-concepts/Definitions/CircuitBreaker.md",
      "distributed tracing": "/sre-concepts/Definitions/DistributedTracing.md",
      "trace": "/sre-concepts/Definitions/DistributedTracing.md",
      "prometheus": "/sre-concepts/Definitions/Prometheus.md",
      "datadog": "/sre-concepts/Definitions/Datadog.md"
    };
  
    const bodyContent = document.body.innerHTML;
  
    for (const [keyword, url] of Object.entries(keywordLinks)) {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      document.body.innerHTML = bodyContent.replace(regex, `<a href="${url}">$1</a>`);
    }
  });
  