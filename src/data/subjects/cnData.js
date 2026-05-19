export const cnData = {
  id: "cn",
  title: "Computer Networks",
  description: "Discover how systems communicate across the globe. Master OSI, TCP/IP, routing, and security protocols.",
  color: "from-orange-600 via-amber-600 to-yellow-600",
  topics: [
    {
      id: "osi-tcpip",
      title: "OSI & TCP/IP Models",
      description: "The fundamental architecture and layered approach of networking.",
      questions: [
        {
          id: "cn-osi-1",
          question: "What is a Computer Network?",
          difficulty: "Easy",
          answer: "A computer network is a set of interconnected nodes (computers, servers, networking devices) that share resources and exchange data using communication protocols over digital interconnections.",
          notes: "Classified into LAN, MAN, WAN."
        },
        {
          id: "cn-osi-2",
          question: "What are the 7 layers of the OSI Model?",
          difficulty: "Easy",
          answer: "From bottom to top:\n1. Physical Layer\n2. Data Link Layer\n3. Network Layer\n4. Transport Layer\n5. Session Layer\n6. Presentation Layer\n7. Application Layer",
          notes: "Mnemonic: Please Do Not Throw Sausage Pizza Away."
        },
        {
          id: "cn-osi-3",
          question: "What is the function of the Physical Layer?",
          difficulty: "Easy",
          answer: "It is responsible for transmitting raw bit streams over a physical medium (cables, radio waves). It deals with mechanical and electrical specifications like voltage levels, data rates, and physical topologies.",
          notes: "Devices: Hubs, Repeaters, Cables."
        },
        {
          id: "cn-osi-4",
          question: "What is the function of the Data Link Layer (DLL)?",
          difficulty: "Medium",
          answer: "The DLL is responsible for node-to-node delivery of frames. It handles error detection and correction, flow control, and physical addressing (MAC addresses). It is divided into two sublayers: LLC (Logical Link Control) and MAC (Media Access Control).",
          notes: "Devices: Switches, Bridges."
        },
        {
          id: "cn-osi-5",
          question: "What is the function of the Network Layer?",
          difficulty: "Medium",
          answer: "The Network layer is responsible for host-to-host delivery of packets across multiple networks. It handles logical addressing (IP addresses) and routing (determining the best path).",
          notes: "Devices: Routers."
        },
        {
          id: "cn-osi-6",
          question: "What is the function of the Transport Layer?",
          difficulty: "Medium",
          answer: "The Transport layer ensures end-to-end (process-to-process) delivery of entire messages. It handles segmentation/reassembly, connection multiplexing (using port numbers), and optionally reliability (TCP) and flow/error control.",
          notes: "Protocols: TCP, UDP."
        },
        {
          id: "cn-osi-7",
          question: "Difference between OSI and TCP/IP models?",
          difficulty: "Hard",
          answer: "OSI is a 7-layer theoretical conceptual model. TCP/IP is a 4-layer practical model based on standard protocols used in the Internet.\nTCP/IP layers: Network Access (combines Physical+Data Link), Internet (Network), Transport, Application (combines Session+Presentation+Application).",
          notes: "TCP/IP was developed before OSI and is what actually runs the internet."
        },
        {
          id: "cn-osi-8",
          question: "What is a Protocol Data Unit (PDU)?",
          difficulty: "Hard",
          answer: "A PDU is the specific name for the data packet at each layer of the OSI model.\nApplication -> Data/Message\nTransport -> Segment (TCP) / Datagram (UDP)\nNetwork -> Packet\nData Link -> Frame\nPhysical -> Bit",
          notes: "Vital for understanding encapsulation."
        },
        {
          id: "cn-osi-9",
          question: "What are Simplex, Half-Duplex, and Full-Duplex?",
          difficulty: "Easy",
          answer: "Simplex: Unidirectional communication (e.g., TV broadcast, Keyboard).\nHalf-Duplex: Bidirectional communication, but only one at a time (e.g., Walkie-Talkie).\nFull-Duplex: Bidirectional communication simultaneously (e.g., Telephone call).",
          notes: "Ethernet switches operate in full-duplex."
        },
        {
          id: "cn-osi-10",
          question: "What is Encapsulation and Decapsulation?",
          difficulty: "Medium",
          answer: "Encapsulation is the process of adding headers (and sometimes trailers) to data as it moves down the OSI layers from Application to Physical.\nDecapsulation is the reverse process of stripping those headers as data moves back up from Physical to Application at the receiver.",
          notes: "Each layer adds its own specific protocol information."
        }
      ]
    },
    {
      id: "data-link",
      title: "Data Link Layer & MAC",
      description: "Error detection, flow control, switches, and MAC addresses.",
      questions: [
        {
          id: "cn-dll-1",
          question: "What is a MAC Address?",
          difficulty: "Easy",
          answer: "Media Access Control (MAC) address is a 48-bit hardware address burned into the Network Interface Card (NIC) by the manufacturer. It uniquely identifies a device on a local network segment.",
          notes: "Represented in hexadecimal (e.g., 00:1A:2B:3C:4D:5E). First 24 bits are OUI (vendor), last 24 bits are device specific."
        },
        {
          id: "cn-dll-2",
          question: "How does a Switch differ from a Hub?",
          difficulty: "Medium",
          answer: "Hub (Layer 1): A 'dumb' device that receives a signal on one port and broadcasts it to all other ports. Creates one large collision domain.\nSwitch (Layer 2): An 'intelligent' device that learns MAC addresses and forwards frames only to the specific port where the destination device resides. Each port is a separate collision domain.",
          notes: "Switches use a MAC Address Table (CAM table)."
        },
        {
          id: "cn-dll-3",
          question: "What is a Collision Domain and a Broadcast Domain?",
          difficulty: "Hard",
          answer: "Collision Domain: A network segment where data packets can collide with one another when being sent simultaneously (separated by Switches/Routers).\nBroadcast Domain: A logical division of a network where all nodes can reach each other by broadcast at the data link layer (separated by Routers/VLANs).",
          notes: "A 24-port switch has 24 collision domains but 1 broadcast domain."
        },
        {
          id: "cn-dll-4",
          question: "What is CSMA/CD?",
          difficulty: "Hard",
          answer: "Carrier Sense Multiple Access with Collision Detection is a protocol used in Ethernet networks. \n1. Carrier Sense: Listen to the wire before sending.\n2. Multiple Access: Many devices share the wire.\n3. Collision Detection: If a collision happens, devices detect the voltage spike, stop transmitting, send a jam signal, and wait a random backoff time before retrying.",
          notes: "Largely obsolete in modern full-duplex switched networks."
        },
        {
          id: "cn-dll-5",
          question: "What is CSMA/CA?",
          difficulty: "Medium",
          answer: "Carrier Sense Multiple Access with Collision Avoidance is used in Wireless networks (Wi-Fi). Because wireless devices cannot easily detect collisions while transmitting (hidden node problem), they use mechanisms like RTS/CTS (Request To Send / Clear To Send) to reserve the channel and avoid collisions before sending data.",
          notes: "Used in IEEE 802.11 (Wi-Fi)."
        },
        {
          id: "cn-dll-6",
          question: "What is ARP (Address Resolution Protocol)?",
          difficulty: "Medium",
          answer: "ARP is used to map a known logical IP address to an unknown physical MAC address on a local network. The device broadcasts an ARP Request ('Who has IP X?'), and the target responds with an ARP Reply ('I have IP X, my MAC is Y').",
          notes: "ARP tables cache these mappings."
        },
        {
          id: "cn-dll-7",
          question: "Explain the Stop-and-Wait ARQ Protocol.",
          difficulty: "Medium",
          answer: "A simple flow control protocol where the sender transmits one frame and then waits for an acknowledgment (ACK) from the receiver before sending the next frame. If a timeout occurs before receiving the ACK, the sender retransmits the frame.",
          notes: "Very low efficiency on links with high propagation delay."
        },
        {
          id: "cn-dll-8",
          question: "What is Cyclic Redundancy Check (CRC)?",
          difficulty: "Hard",
          answer: "CRC is a highly effective error-detecting code used in digital networks. It involves polynomial division. The sender appends a remainder (the CRC bits) to the data. The receiver divides the received data by the same predetermined polynomial; if the remainder is zero, no error occurred.",
          notes: "Detects burst errors much better than parity or checksums."
        },
        {
          id: "cn-dll-9",
          question: "What is a VLAN (Virtual LAN)?",
          difficulty: "Medium",
          answer: "A VLAN is a custom network created from one or more existing local area networks. It enables devices on different physical LAN segments to be grouped together logically as if they were on the same wire.",
          notes: "Used to isolate broadcast domains and improve security."
        },
        {
          id: "cn-dll-10",
          question: "What is the Spanning Tree Protocol (STP)?",
          difficulty: "Hard",
          answer: "STP is a Layer 2 network protocol that prevents broadcast storms and bridge loops in networks with redundant paths. It dynamically disables certain switch ports to create a loop-free logical topology (a spanning tree), while keeping redundant paths available as backups.",
          notes: "Operates at the Data Link layer."
        }
      ]
    },
    {
      id: "network-layer",
      title: "Network Layer & Routing",
      description: "IP Addressing, Subnetting, and Routing Algorithms.",
      questions: [
        {
          id: "cn-net-1",
          question: "What is an IP Address? IPv4 vs IPv6?",
          difficulty: "Easy",
          answer: "An IP address is a logical address identifying a device on the internet. \nIPv4 is 32 bits long (approx 4.3 billion addresses), represented in dotted-decimal format (e.g., 192.168.1.1).\nIPv6 is 128 bits long (virtually infinite addresses), represented in hexadecimal format (e.g., 2001:0db8::ff00:42:8329).",
          notes: "IPv6 was introduced due to IPv4 address exhaustion."
        },
        {
          id: "cn-net-2",
          question: "What are the classes of IPv4 addresses?",
          difficulty: "Medium",
          answer: "Class A: 1.0.0.0 to 126.255.255.255 (Huge networks)\nClass B: 128.0.0.0 to 191.255.255.255 (Medium networks)\nClass C: 192.0.0.0 to 223.255.255.255 (Small networks)\nClass D: 224.0.0.0 to 239.255.255.255 (Multicast)\nClass E: 240.0.0.0 to 255.255.255.255 (Experimental)",
          notes: "127.x.x.x is reserved for loopback (localhost)."
        },
        {
          id: "cn-net-3",
          question: "What is Subnetting and why is it used?",
          difficulty: "Hard",
          answer: "Subnetting is the practice of dividing a single large network into multiple smaller logical sub-networks (subnets). It improves network performance (reduces broadcast domain size), enhances security, and conserves IP addresses by reducing wastage.",
          notes: "Involves borrowing bits from the host portion of the IP address to create subnet bits."
        },
        {
          id: "cn-net-4",
          question: "What is a Subnet Mask?",
          difficulty: "Medium",
          answer: "A subnet mask is a 32-bit number that masks an IP address, dividing the IP address into a network address and a host address. A '1' bit in the mask denotes the network portion, and a '0' bit denotes the host portion.",
          notes: "E.g., 255.255.255.0 means the first 24 bits are the network ID."
        },
        {
          id: "cn-net-5",
          question: "What is CIDR (Classless Inter-Domain Routing)?",
          difficulty: "Hard",
          answer: "CIDR replaces the rigid class-based IP addressing (A, B, C) with a flexible method. It uses a suffix indicating the number of network bits (e.g., 192.168.1.0/24). This allows for Variable Length Subnet Masking (VLSM) and route aggregation (supernetting).",
          notes: "Helps dramatically in slowing the exhaustion of IPv4 addresses."
        },
        {
          id: "cn-net-6",
          question: "What is the difference between a Router and a Gateway?",
          difficulty: "Medium",
          answer: "Router: Forwards packets between different IP networks based on IP addresses. Operates at Layer 3.\nGateway: A much broader term for a node that serves as an entrance to another network. It can operate at any layer and often translates protocols (e.g., translating a web request to a proprietary database query).",
          notes: "All routers can be gateways, but not all gateways are just routers."
        },
        {
          id: "cn-net-7",
          question: "Explain Distance Vector vs Link State Routing.",
          difficulty: "Hard",
          answer: "Distance Vector (e.g., RIP): Routers share their entire routing table only with their immediate neighbors. Uses Bellman-Ford algorithm. Slower convergence, prone to routing loops (count-to-infinity problem).\nLink State (e.g., OSPF): Routers flood information about their local links to the entire network. Every router builds a complete topological map and uses Dijkstra's algorithm to find the shortest path. Fast convergence, highly scalable.",
          notes: "Link state requires more CPU and memory on the router."
        },
        {
          id: "cn-net-8",
          question: "What is BGP (Border Gateway Protocol)?",
          difficulty: "Hard",
          answer: "BGP is the protocol that makes the internet work. It is an Exterior Gateway Protocol (EGP) used to route data between different Autonomous Systems (AS - like ISPs or large tech companies). It determines the best path based on network policies, paths, and rule sets rather than pure technical metrics.",
          notes: "Often called the 'Postal Service' of the internet."
        },
        {
          id: "cn-net-9",
          question: "What is NAT (Network Address Translation)?",
          difficulty: "Medium",
          answer: "NAT allows multiple devices on a private local network to share a single public IP address to access the internet. The router translates the private IP/Port to the public IP/Port for outbound traffic, and vice-versa for inbound traffic.",
          notes: "NAT is the primary reason IPv4 hasn't completely run out yet."
        },
        {
          id: "cn-net-10",
          question: "What is ICMP?",
          difficulty: "Easy",
          answer: "Internet Control Message Protocol is a network layer protocol used by devices to diagnose network communication issues and report errors. It does not carry application data.",
          notes: "The 'ping' and 'traceroute' utilities rely on ICMP echo requests and replies."
        }
      ]
    },
    {
      id: "transport-layer",
      title: "Transport Layer",
      description: "TCP vs UDP, 3-way handshakes, and congestion control.",
      questions: [
        {
          id: "cn-trans-1",
          question: "Explain the differences between TCP and UDP.",
          difficulty: "Medium",
          answer: "TCP (Transmission Control Protocol): Connection-oriented, reliable, guarantees delivery, guarantees order (via sequence numbers), handles flow and congestion control. Heavyweight. Used in HTTP, FTP, SSH.\nUDP (User Datagram Protocol): Connectionless, unreliable, no guarantee of delivery or order, no congestion control. Lightweight and very fast. Used in DNS, VoIP, Video Streaming, Gaming.",
          notes: "Choose TCP for accuracy; choose UDP for speed."
        },
        {
          id: "cn-trans-2",
          question: "What is Port Addressing?",
          difficulty: "Easy",
          answer: "While an IP address identifies a specific computer on a network, a Port Number (16-bit) identifies a specific process/application running on that computer. Together, IP + Port = Socket Address.",
          notes: "Well-known ports: HTTP (80), HTTPS (443), FTP (21), SSH (22)."
        },
        {
          id: "cn-trans-3",
          question: "Explain the TCP 3-Way Handshake.",
          difficulty: "Hard",
          answer: "The process used by TCP to establish a connection:\n1. SYN: Client sends a segment with the SYN (Synchronize) flag set and an initial sequence number (X).\n2. SYN-ACK: Server receives it, responds with SYN and ACK flags set, acknowledging client's sequence (X+1), and sending its own sequence (Y).\n3. ACK: Client acknowledges the server's sequence (Y+1). Connection is established.",
          notes: "Guarantees that both sides are ready to transmit and receive."
        },
        {
          id: "cn-trans-4",
          question: "How does TCP handle connection termination?",
          difficulty: "Hard",
          answer: "TCP uses a 4-Way Handshake to terminate:\n1. Client sends FIN.\n2. Server sends ACK (Client can no longer send data, but can still receive).\n3. Server finishes sending its remaining data, then sends its own FIN.\n4. Client sends ACK. Connection is fully closed.",
          notes: "TCP connections are full-duplex, requiring both directions to be closed independently."
        },
        {
          id: "cn-trans-5",
          question: "What is TCP Congestion Control?",
          difficulty: "Hard",
          answer: "A mechanism to prevent network collapse due to too many packets. TCP uses a Congestion Window (cwnd). Phases include:\n1. Slow Start: cwnd grows exponentially until a threshold.\n2. Congestion Avoidance: cwnd grows linearly (Additive Increase).\n3. Multiplicative Decrease: If congestion (packet loss) is detected, cwnd is cut in half or reset to 1.",
          notes: "AIMD (Additive Increase Multiplicative Decrease) is the core principle."
        },
        {
          id: "cn-trans-6",
          question: "What is the difference between Flow Control and Congestion Control?",
          difficulty: "Medium",
          answer: "Flow Control: Prevents a fast sender from overwhelming a slow receiver. Handled by the Receiver's Window (rwnd).\nCongestion Control: Prevents the sender from overwhelming the intermediate network (routers). Handled by the Congestion Window (cwnd).",
          notes: "TCP transmission rate is dictated by the minimum of rwnd and cwnd."
        },
        {
          id: "cn-trans-7",
          question: "What is Multiplexing and Demultiplexing in the Transport Layer?",
          difficulty: "Medium",
          answer: "Multiplexing (Sender side): Gathering data chunks from different sockets, encapsulating them with transport headers, and passing them to the network layer.\nDemultiplexing (Receiver side): Delivering the received segments to the correct socket based on the destination port number.",
          notes: "Port numbers make multiplexing possible."
        }
      ]
    },
    {
      id: "application-sec",
      title: "Application Layer & Security",
      description: "DNS, HTTP, Cryptography, and network defense.",
      questions: [
        {
          id: "cn-app-1",
          question: "What is DNS and how does it work?",
          difficulty: "Medium",
          answer: "Domain Name System (DNS) translates human-readable domain names (www.google.com) into machine-readable IP addresses (142.250.190.46). It works hierarchically: Root Servers -> Top Level Domain (TLD) Servers (.com) -> Authoritative Name Servers.",
          notes: "DNS primarily uses UDP on port 53 for speed."
        },
        {
          id: "cn-app-2",
          question: "Difference between HTTP and HTTPS?",
          difficulty: "Easy",
          answer: "HTTP (HyperText Transfer Protocol) transmits data in plain text, making it vulnerable to interception.\nHTTPS is HTTP secure. It encrypts the data using SSL/TLS before transmission, ensuring confidentiality, integrity, and authentication.",
          notes: "HTTP uses port 80; HTTPS uses port 443."
        },
        {
          id: "cn-app-3",
          question: "What are the common HTTP Methods?",
          difficulty: "Easy",
          answer: "GET (Retrieve data), POST (Submit new data), PUT (Update/Replace entire resource), PATCH (Partial update), DELETE (Remove data).",
          notes: "GET requests should be idempotent (safe to repeat)."
        },
        {
          id: "cn-app-4",
          question: "What happens when you type a URL in the browser?",
          difficulty: "Hard",
          answer: "1. Browser checks cache for DNS. If not found, calls OS, then DNS resolver.\n2. DNS resolves the domain to an IP address.\n3. Browser initiates a TCP 3-way handshake with the server IP on port 443.\n4. TLS handshake occurs to establish a secure encrypted connection.\n5. Browser sends an HTTP GET request.\n6. Server responds with the HTTP response and HTML payload.\n7. Browser parses HTML, renders the DOM, and requests additional assets (CSS, JS).",
          notes: "One of the most frequently asked network interview questions."
        },
        {
          id: "cn-app-5",
          question: "Symmetric vs Asymmetric Encryption?",
          difficulty: "Medium",
          answer: "Symmetric: Uses the SAME key for both encryption and decryption. Extremely fast, but sharing the key securely over a network is difficult. (e.g., AES).\nAsymmetric: Uses a PAIR of keys (Public key to encrypt, Private key to decrypt). Slower, but solves the key distribution problem. (e.g., RSA).",
          notes: "TLS uses Asymmetric to securely exchange a Symmetric session key, then uses Symmetric for the actual data."
        },
        {
          id: "cn-app-6",
          question: "What is a Firewall?",
          difficulty: "Easy",
          answer: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies.",
          notes: "Can be hardware or software. Types include Packet-filtering, Stateful inspection, and Proxy firewalls."
        }
      ]
    }
  ]
};
