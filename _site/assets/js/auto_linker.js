document.addEventListener("DOMContentLoaded", function() {
    const keywordLinks = {
      "circuit breakers": "/sre-concepts/Definitions/CircuitBreaker.html",
      "circuit breaker": "/sre-concepts/Definitions/CircuitBreaker.html",
      "distributed tracing": "/sre-concepts/Definitions/DistributedTracing.html",
      "trace": "/sre-concepts/Definitions/DistributedTracing.html",
      "service level": "/sre-concepts/Definitions/ServiceLevel.html",
      "four golden signals": "/sre-concepts/Definitions/FourGoldenSignals.html",
      "containerization and orchestration": "/sre-concepts/Definitions/Kubernetes.html",
      "serverless": "/sre-concepts/Definitions/Serverless.html"
      // Add more keywords and URLs as needed
    };
  
    // Get the current page URL
    const currentUrl = window.location.pathname;
  
    let bodyContent = document.body.innerHTML;
  
    for (const [keyword, url] of Object.entries(keywordLinks)) {
      // Only apply the link if the destination URL is not the current page URL
      if (!currentUrl.endsWith(url)) {
        const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
        bodyContent = bodyContent.replace(regex, `<a href="${url}">$1</a>`);
      }
    }
  
    document.body.innerHTML = bodyContent;
  });
  