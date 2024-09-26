# Circuit Breaker 


## Definitions

# Closed state
- Allows requests to pass through to the downstream service
- Monitors success or failures of these requests
- If a certain threshold of failures (e.g., 5 consecutive failures) is reached within a specified time period, the circuit breaker trips and moves to the open state

# Open state
- All requests blocked from reaching the downstream service. Instead it returns an error immediately or executes a fallback operation (Such as returning cached data or a default response)
- Prevents the sytem from continuing to send requests to a service that is known to be failing. This reduces unnecssary load and prevents potential cascading failures
- After a specified timeout period, the circuit breaker moves to the half-open state

# Half-Open state
- Allows a limited number of requests to pass through to the downstream service
- Serves as a test to check if the service has recovered
- If the requests suceeded, the circuit breaker transitions back to the closer state, allowing all traffic to resume
- If the requests fail again, the circuit break reverts to the open state

# Circuit Breakers Uses
Handling an open circuit breaker effectively can mitigate user impact by providing a more graceful degration of service rather than a complete failure.
 - Graceful degration such as external third-party payment gateway can allow the user to save their cart and notify them when the payment system is back online
 - Provide clear feedback to the user about the issue such as "Service temporarily unavailable. Please try again later." Instead of waiting for a long timeout and this error not being handled in the same way.
