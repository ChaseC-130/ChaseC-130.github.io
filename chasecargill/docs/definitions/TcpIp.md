# TCP/IP (Transmission Control Protocol/Internet Protocol)

## Definitions
TCP/IP is the fundamental suite of communication protocols used to interconnect network devices on the internet and other private networks. TCP/IP defines how data should be packetized, addressed, transmitted, routed, and received by devices in a network. It is the foundation for most networking functions and applications on the internet today.

# The TCP/IP Model
The TCP/IP model is a conceptual framework for understanding how data is transmitted over a networking. In consists of four layers, each with specific responsibilities.

## Application Layer
 - Role
    - Provides network services to end-user applications
 - Protocols
    - HTTP, HTTPS, FTP, SMTP, DNS, Telnet, SSH, and more APIs
 - Functionality
    - This layer is responsible for application-specific networking functionality. It enables communication between applications on different devices. Protocols at this layer define how data is formatted, transmitted, and interpreted

## Transport Layer
 - Role
    - Ensures reliable data transfer between devices
 - Protocols
    - TCP (Transmission COntrol Protocol), UDP (User Datagram Protocol)
 - Functionality
    - The Transport Layer is responsible for establishing connections, error correction, data flow control, and ensuring complete data transfer. TCP provides reliable, connection-oriented communicatino, while UDP offers a faster, connectionless service without guarantees

## Internet Layer
 - Role
    - Routes data across networks and ensures it reaches its destination
 - Protocols
    - IP (Internet Protocol), ICMP (Internet Control Message Protocol), ARP (Address Resolution Protocol)
 - Functionality
    - This layer handles packet routing, addressing, and fragmentation. The Internet Protocol (IP) is responsible for defining logical addresses (IP addresses) and routing data between different networks

## Link Layer
 - Role
    - Handles the physical transmission of data over a network
 - Protocols
    - Ethernet, Wi-Fi, PPP (Point-to-Point Protocol)
 - Functionality
    - The Link Layer encompasses the physical hadrware and protocols used to transmit data over physical media (e.g., cables, radio waves). It deals iwth framing, physical addressing (MAC addressses), and error detection at the data link level

# Key Protocols

## Transmission Control Protocol (TCP)
Provides reliabe, ordered, and error-checked delivery of data between applications
 - Connection-Oriented
    - TCP establishes a connection between two devices before transmitting data
 - Reliable
    - TCP ensures that all data sent is received by the recipient, in the correct order, without errors
 - Flow Control
    - TCP manages data flow to prevent overwhelming the recipient
 - Error Checking
    - TCP includes mechanisms for error detection and retransmission of lost or corrupted data

### Use cases
 - Web Browsing (HTTP/HTTPS), email (SMTP), file transfer (FTP), remote login (SSH)

## User Datagram Protocol (UDP)
Provides a simpler, faster, but less reliable data transmission service than TCP
 - Connectionless
    - UDP does not establish a connection before sending data
 - Unreliable
    - UDP does not guarantee delivery, ordering, or error-checking of data
 - Low Overhead
    - UDP is lightweight, making it suitable for applications that prioritize speed over reliability

### Use cases
 - Streaming media (video/audio), online gaming, DNS queries

## Internet Protocol (IP)
Provides logical addressing and routing for data packets across network boundaries
 - Addressing
    - IP assigns a unique IP address to each device on a network
    - IP routes data packets from the source device to the destination device across different network
 - IPv4
    - THe most widely used version, with 32-bit addresses
 - IPv6
    - The newer version with 128-bit addresses, designed to address the limitations of IPv4

### Use cases
 - Internet connectivity, data routing, network address translation (NAT)

## Internet Control Message Protocol (ICMP)
Used for error reporting and network diagnostics
 - Echo Request/Reply
    - Used in the `ping` command to test network connectivity
 - Error Messages
    - ICMP sends message about issues such as unreachable destinations, packet timeouts, and more

### Use cases
 - Networking troubleshooting, diagnostic tools like `ping` and `traceroute`

 ## Address Resolution Protocol (ARP)
 Maps an IP address to a physical MAC address on a local network
 - ARP Request
    - Broadcasts a request to find the MAC address associated with a specific IP address
 - ARP Reply
    - Responds with the corresponding MAC address

### Use cases
 - LAN communication, IP address resolution within local networks

# TCP/IP Data Transmission
## Data Encapsulation
As data moves down the TCP/IP layers, it is encapsulated with additional headers (e.g., TCP, IP headers) at each layer. When the data reaches the Link Layer, it is transmitted over the physical medium
 - Applcation layer
    - Data is generated by the application
 - Transport layer
    - The Data is segmented, and TCP or UDP headers are added
 - Internet layer
    - An IP header is added, specifying the source and destination IP addresses
 - Link layer
    - A frame header (e.g., Ethernet) is added, and the data is transmitted as bits over the network

## Packet Switching
TCP/IP networks use packet switching, where data is broken into small packets before being transmitted. Each packet is routed indepdently and reassembled at the destination.
 - Efficiency
    - Packet switching optimizes the use of network resources
 - Resilience
    - Packets can take different paths to avoid congestion or failures

## Three-Way Handshake
Establishes a reliable connection between two devices using TCP
 - SYN
    - The client sends a SYN (synchronize) packet to the server to initiate a connection
 - SYN-ACK
    - The server responds with a SYN-ACK (synchronize-acknowledge) packet to acknowledge the request
 - ACK
    - The client sends an ACK (acknowledge) packet to confirm the connection is established

### Use cases
 - Any application requiring a reliable TCP connection (e.g., HTTP, FTP)

## TCP/IP Addressing
### IPv4 Addressing
32-bit address, typically written as four decimal numbers separated by dots (e.g., 192.168.1.1)
 
Sometimes separated into Classes A - E
 - Class A
    - 1.0.0.0 to 126.0.0.0 (large networks)
 -  Class B
    - 128.0.0.0 to 192.255.0.0 (medium-sized networks)
 - Class C
    - 192.0.0.0 to 223.255.255.0 (small networks)
 - Class D
    - 224.0.0.0 to 239.255.255.255 (multicast)
 - Class E
    - 240.0.0.0 to 255.255.255.255 (experimental)

### IPv6 Addressing
128-bit address, typically written as eight groups of four hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)

- Larger Address Space
    - Vastly more IP addresses avaialble compared to IPv4
- Built-in Security
    - IPv6 has integrated IPsec for encryption and authentication
 - Simplified Addressing
    - NO need for NAT (Network Address Translation) due to the larger address space

### Use cases
 - Modern networking, IoT devices, future-proofing networks

# Troubleshooting
 - Ping
    - Tests connectivity between two network devices
    - Sends ICMP Echo Request messages and listens for Echo Reply messages
 - Traceroute
    - Diagnoses the path packets take from the source to the destination
    - Sends packets with gradually increasing TTL (Time to Live) valoues to trace the route and measure transit delays
 - Netstat
    - Displays network connections, routing tables, and interface statistics
    - Monitoring networl status, troubleshooting connectivity issues
 - Wireshark
    - A network protocol analyze that captures and analyzes network traffic
    - Deep packet inspection, troubleshooting complex network issues

# Best Practices
 - Network Monitoring
    - Regularly monitor network traffic, latency, and errors using tools like Wireshark, NetFlow, or SNMP to ensure optimal network performance
 - Security
    - Implement security measures such as IPsec, firewalls, and access control lists (ACLs) to protect netowrk communications
 - Documentation
    - Maintain accurate documentation of network configurations, IP address allocations, and routing tables to facilitate troubleshooting and maintenance
 - Redundancy
    - Design netowrks with redundancy in mind, using techniques like load balancing, failover, and multi-homing to ensure high availability
 - IPv6 Adoption
    - Plan for and gradually adopt IPv6 to future-proof your network as IPv4 address space becomes increasingly scarce

# Summary
TCP/IP is the backbone of modern networking, enable reliable communcation across diverse and distributed systems. Understanding TCP/IP model, protocols, addressing, and troubleshooting techniques is essential for maintaining the performance, reliability, and security of networks. By adhering to best practices and leveraging the appropriate tools, SREs can ensure their network infrastructure remains robust and scalable.
