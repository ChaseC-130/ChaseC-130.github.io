## Containerization and Orchestration

# Core Components
 - Pods
 - Services
 - Deployments

# Kubernetes Services
# Definitions 
Services are essentially mappings of IPs or DNS names to pods. The IP address is assigned by Kubernetes Control Plane through the kube-proxy component, based off the Cluster IP range setup by the cluster admin. 

Service types can be:
- Internal
 - ClusterIP (Internal cluster IP, only accessible from within the cluster)
- External 
 - [NodePort](./kubedefinitions/NodePort) Exposes the service on a specifc port on each node's IP address, allowing external traffic
 - LoadBalancer - Integrates with cloud providers to automatically create a load balancer that routes traffic to the service
 - ExternalName - Maps the service to an external DNS name, allowing to act as a proxy for external services.

Kube-proxy runs on each node in a cluster and watches Kubernetes API server for new or updated services. It then updates the iptables or IPVS rules on the node to route traffic destined for the service's IP to the appropriate backend pods. 
Kuve-proxy configures node's networking stack using ipstables or IPVS in more recent versions. No external load balancer is needed for Cluster IP services, everything is handled within the kubernetes cluster using iptables or IPVS rules managed by kube-proxy.



