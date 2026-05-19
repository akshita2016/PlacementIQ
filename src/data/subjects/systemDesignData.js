export const systemDesignData = {
  id: "system-design",
  title: "System Design",
  description: "Learn to architect large-scale, fault-tolerant distributed systems. Essential for senior engineering roles and product companies.",
  color: "from-red-600 via-orange-600 to-amber-600",
  topics: [
    {
      id: "basics",
      title: "System Design Basics",
      description: "Scalability, availability, CAP Theorem, and basic architecture.",
      questions: [
        {
          id: "sd-basic-1",
          question: "Difference between Vertical and Horizontal Scaling?",
          difficulty: "Easy",
          answer: "Vertical Scaling (Scale Up): Adding more power (CPU, RAM, Storage) to an existing machine. Limited by hardware maximums. Has a single point of failure.\nHorizontal Scaling (Scale Out): Adding more machines to your network to share the load. Virtually unlimited scaling and provides high availability.",
          notes: "Modern distributed systems almost exclusively rely on horizontal scaling."
        },
        {
          id: "sd-basic-2",
          question: "What is the CAP Theorem?",
          difficulty: "Hard",
          answer: "CAP Theorem states that a distributed data store can only guarantee two out of the following three properties simultaneously:\n1. Consistency: Every read receives the most recent write or an error.\n2. Availability: Every request receives a non-error response (without guarantee it contains the most recent write).\n3. Partition Tolerance: The system continues to operate despite network failures dropping messages between nodes.",
          notes: "In the real world, network partitions (P) are unavoidable, so you must choose between Consistency (CP) or Availability (AP)."
        },
        {
          id: "sd-basic-3",
          question: "What is PACELC Theorem?",
          difficulty: "Hard",
          answer: "An extension to CAP. It states: If there is a Partition (P), you must choose between Availability (A) and Consistency (C). Else (E), when the system is running normally (no partition), you must choose between Latency (L) and Consistency (C).",
          notes: "Example: DynamoDB chooses Availability during a partition, and Latency during normal operations."
        },
        {
          id: "sd-basic-4",
          question: "Latency vs Throughput?",
          difficulty: "Medium",
          answer: "Latency: The time it takes for a single request to complete (e.g., it takes 50ms to load a page).\nThroughput: The number of requests the system can handle over a given time period (e.g., 10,000 requests per second).",
          notes: "Goal of system design: Minimize latency, maximize throughput."
        },
        {
          id: "sd-basic-5",
          question: "What is a Single Point of Failure (SPOF)?",
          difficulty: "Easy",
          answer: "A SPOF is a part of a system that, if it fails, will stop the entire system from working. Removing SPOFs through redundancy is a primary goal in high-availability architectures.",
          notes: "Example: Having only one database server."
        },
        {
          id: "sd-basic-6",
          question: "Explain the difference between Stateful and Stateless architecture.",
          difficulty: "Medium",
          answer: "Stateful: Servers remember client data (state) from one request to the next (e.g., storing a user session in server RAM). Hard to scale horizontally because requests from the same user must route to the same server.\nStateless: Servers store no client state. Every request contains all info needed to process it (e.g., JWT). Very easy to scale horizontally.",
          notes: "REST APIs should be stateless."
        }
      ]
    },
    {
      id: "components",
      title: "Core Components",
      description: "Load Balancers, Caching, and CDNs.",
      questions: [
        {
          id: "sd-comp-1",
          question: "What is a Load Balancer?",
          difficulty: "Easy",
          answer: "A Load Balancer is a device or software that distributes incoming network traffic across a group of backend servers (a server farm). It ensures no single server bears too much demand, improving responsiveness and availability.",
          notes: "Can be hardware (F5) or software (Nginx, HAProxy, AWS ALB)."
        },
        {
          id: "sd-comp-2",
          question: "What are common Load Balancing Algorithms?",
          difficulty: "Medium",
          answer: "1. Round Robin: Requests distributed sequentially.\n2. Least Connections: Sends traffic to the server with the fewest active connections.\n3. IP Hash: Uses the client IP to hash to a specific server (useful for session stickiness).\n4. Weighted Round Robin: Servers get varying traffic based on their capacity.",
          notes: "Least Connections is best for unpredictable request durations."
        },
        {
          id: "sd-comp-3",
          question: "Layer 4 vs Layer 7 Load Balancing?",
          difficulty: "Hard",
          answer: "Layer 4 (Transport): Balances traffic based purely on network info (IP address and Port). Fast, but 'dumb' to the content.\nLayer 7 (Application): Balances traffic based on the actual content of the HTTP request (URL, cookies, headers). Slower, but allows smart routing (e.g., routing /images to image servers).",
          notes: "AWS ALB is Layer 7. AWS NLB is Layer 4."
        },
        {
          id: "sd-comp-4",
          question: "What is a CDN (Content Delivery Network)?",
          difficulty: "Medium",
          answer: "A CDN is a geographically distributed network of proxy servers. The goal is to provide high availability and performance by distributing static content (HTML, CSS, JS, Images, Videos) spatially relative to end-users.",
          notes: "Examples: Cloudflare, Akamai, AWS CloudFront."
        },
        {
          id: "sd-comp-5",
          question: "What is Caching and why is it important?",
          difficulty: "Easy",
          answer: "Caching is storing copies of frequently accessed data in a temporary, extremely fast storage layer (usually RAM), so future requests for that data can be served much faster than querying the primary database.",
          notes: "Dramatically reduces latency and database load."
        },
        {
          id: "sd-comp-6",
          question: "What are Cache Eviction Policies?",
          difficulty: "Medium",
          answer: "When a cache is full, it must decide what to delete:\n1. LRU (Least Recently Used): Discards the items not accessed for the longest time.\n2. LFU (Least Frequently Used): Discards items accessed the least number of times.\n3. FIFO (First In First Out): Discards the oldest items.",
          notes: "LRU is the most common policy."
        },
        {
          id: "sd-comp-7",
          question: "Explain Cache Aside vs Write-Through Cache.",
          difficulty: "Hard",
          answer: "Cache Aside: Application first checks cache. If miss, it queries DB, writes to cache, and returns data. Cache is independent.\nWrite-Through: Application writes data to the cache, and the cache immediately writes it synchronously to the database. Very safe but slower writes.",
          notes: "Cache Aside is best for read-heavy systems."
        }
      ]
    },
    {
      id: "databases",
      title: "Databases in System Design",
      description: "SQL vs NoSQL, Sharding, Replication, and Consistency.",
      questions: [
        {
          id: "sd-db-1",
          question: "SQL vs NoSQL?",
          difficulty: "Medium",
          answer: "SQL (Relational): Structured data, strict schema, ACID compliant, scales vertically. Best for complex queries and transactional data (banking).\nNoSQL (Non-Relational): Unstructured/semi-structured data (JSON, Key-Value), dynamic schema, scales horizontally. Best for massive data, rapid development, and high throughput (social media).",
          notes: "NoSQL types: Document (MongoDB), Key-Value (Redis), Column (Cassandra), Graph (Neo4j)."
        },
        {
          id: "sd-db-2",
          question: "What is Database Replication?",
          difficulty: "Medium",
          answer: "Replication is the process of keeping multiple copies of the same database running across different servers. Commonly set up as Master-Slave. The Master takes all WRITES, and Slaves sync from the Master and handle all READS.",
          notes: "Improves read performance and provides fault tolerance."
        },
        {
          id: "sd-db-3",
          question: "What is Database Sharding?",
          difficulty: "Hard",
          answer: "Sharding is a method of splitting a single massive database into multiple smaller, more manageable databases (shards), each hosted on a separate machine. Each shard contains a unique subset of the data.",
          notes: "It is a form of horizontal scaling for databases."
        },
        {
          id: "sd-db-4",
          question: "What is a Shard Key (Partition Key)?",
          difficulty: "Medium",
          answer: "The Shard Key is the attribute used to distribute data across shards. A good shard key ensures even distribution of data (avoiding hot spots) and minimizes cross-shard queries.",
          notes: "E.g., Sharding users by 'user_id' hash is good. Sharding by 'country' is bad if 90% users are from one country."
        },
        {
          id: "sd-db-5",
          question: "Eventual Consistency vs Strong Consistency?",
          difficulty: "Medium",
          answer: "Strong Consistency: After an update, any subsequent read will instantly return the updated value. (Slower, requires locking).\nEventual Consistency: After an update, reads might temporarily return old data, but given enough time, all nodes will synchronize and return the new data. (Faster, high availability).",
          notes: "NoSQL databases often default to Eventual Consistency."
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Architecture",
      description: "Microservices, Message Queues, and Rate Limiting.",
      questions: [
        {
          id: "sd-adv-1",
          question: "Monolith vs Microservices Architecture?",
          difficulty: "Medium",
          answer: "Monolith: Entire application is built as a single, unified codebase and deployed together. Hard to scale specific parts, a bug can crash everything, tight coupling.\nMicroservices: Application is broken down into small, independent services communicating via APIs. Easy to scale, deploy independently, and use different tech stacks. Complex to manage and monitor.",
          notes: "Microservices introduce challenges with distributed transactions and network latency."
        },
        {
          id: "sd-adv-2",
          question: "What is a Message Queue?",
          difficulty: "Medium",
          answer: "A Message Queue is an asynchronous communication mechanism where a sender places a message in a queue, and a receiver eventually takes it out and processes it. It decouples heavy background tasks from the main request thread.",
          notes: "Examples: RabbitMQ, Apache Kafka, AWS SQS."
        },
        {
          id: "sd-adv-3",
          question: "RabbitMQ vs Kafka?",
          difficulty: "Hard",
          answer: "RabbitMQ: Traditional message broker. Messages are deleted after being consumed. Great for complex routing and task queues.\nKafka: Distributed event streaming platform. Messages are appended to a log and retained for a configured time. Consumers read at their own pace. Great for massive data pipelines and event sourcing.",
          notes: "Kafka scales much better for massive throughput."
        },
        {
          id: "sd-adv-4",
          question: "What is an API Gateway?",
          difficulty: "Medium",
          answer: "An API Gateway is a server that sits between clients and microservices. It acts as a reverse proxy, routing requests to the correct service, and handles cross-cutting concerns like authentication, rate limiting, logging, and SSL termination.",
          notes: "Simplifies the client interface by hiding microservice complexity."
        },
        {
          id: "sd-adv-5",
          question: "What is Rate Limiting?",
          difficulty: "Medium",
          answer: "Rate Limiting restricts the number of requests a client can make to an API within a specific timeframe (e.g., 100 requests per minute). It protects the system from DoS attacks, brute force attacks, and abuse.",
          notes: "Common algorithms: Token Bucket, Leaky Bucket, Fixed Window, Sliding Window."
        },
        {
          id: "sd-adv-6",
          question: "Explain the Token Bucket algorithm.",
          difficulty: "Hard",
          answer: "A bucket holds a maximum number of tokens. Tokens are added to the bucket at a fixed rate. Every request consumes a token. If the bucket is empty, the request is dropped (HTTP 429 Too Many Requests).",
          notes: "Allows bursts of traffic up to the bucket capacity."
        }
      ]
    },
    {
      id: "case-studies",
      title: "Common Case Studies",
      description: "How to approach standard system design interview questions.",
      questions: [
        {
          id: "sd-case-1",
          question: "How would you design a URL Shortener (TinyURL)?",
          difficulty: "Hard",
          answer: "1. Core Requirement: Take long URL, return short URL. Redirect short URL to long.\n2. Scale: Read-heavy (100:1 read to write ratio).\n3. DB: NoSQL (Key-Value) like DynamoDB (short_hash -> long_url).\n4. Shortening Logic: Generate a unique ID (from DB or Zookeeper), then encode it using Base62 (a-z, A-Z, 0-9). A 7-character Base62 string gives 3.5 trillion URLs.\n5. Cache: Add Redis/Memcached in front of the DB for fast redirects.",
          notes: "The most classic system design question."
        },
        {
          id: "sd-case-2",
          question: "How would you design a Chat Application (WhatsApp)?",
          difficulty: "Hard",
          answer: "1. Connection: Clients use WebSockets for a persistent, real-time bidirectional connection to Chat Servers.\n2. Architecture: A user connects to a Chat Server. The server maps UserID -> ServerInstance in a Redis cache (Presence Service).\n3. Message Flow: User A sends a message. Server checks Redis to see which server User B is connected to, and forwards the message via a Pub/Sub system (Kafka).\n4. Storage: Store chat history in a NoSQL DB like Cassandra for high write throughput.",
          notes: "Key concepts: WebSockets, Presence Service, Pub/Sub."
        },
        {
          id: "sd-case-3",
          question: "How would you design Twitter / News Feed?",
          difficulty: "Hard",
          answer: "1. Core: Post tweets, view timelines.\n2. Challenge: Celebrity accounts with millions of followers (Fan-out problem).\n3. Fan-out on Write: When a normal user tweets, instantly push the tweet into the pre-computed timelines (Redis caches) of all their followers. Fast reads!\n4. Fan-out on Read: For celebrities (e.g., Elon Musk), don't push to millions of caches on write. Instead, pull their tweets dynamically and merge them into the user's feed at read time.",
          notes: "Hybrid approach is necessary to avoid system crash when a celebrity tweets."
        }
      ]
    }
  ]
};
