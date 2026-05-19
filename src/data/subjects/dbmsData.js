export const dbmsData = {
  id: "dbms",
  title: "Database Management Systems",
  description: "Learn how data is stored, managed, and retrieved efficiently. Essential for backend architecture and full-stack engineering.",
  color: "from-fuchsia-600 via-pink-600 to-rose-600",
  topics: [
    {
      id: "intro-architecture",
      title: "Introduction & Architecture",
      description: "Fundamental concepts, schemas, data independence, and the 3-tier architecture.",
      questions: [
        {
          id: "dbms-intro-1",
          question: "What is a DBMS?",
          difficulty: "Easy",
          answer: "A Database Management System (DBMS) is a software system that enables users to define, create, maintain, and control access to the database. It acts as an interface between the user/application and the database.",
          notes: "Examples: MySQL, PostgreSQL, Oracle, MongoDB."
        },
        {
          id: "dbms-intro-2",
          question: "What are the advantages of DBMS over File Systems?",
          difficulty: "Easy",
          answer: "1. Reduces data redundancy and inconsistency.\n2. Facilitates data sharing.\n3. Ensures data security and privacy.\n4. Supports concurrent access.\n5. Provides backup and recovery mechanisms.\n6. Enforces data integrity.",
          notes: "File systems suffer from data isolation, duplication, and difficulty in concurrent access."
        },
        {
          id: "dbms-intro-3",
          question: "What is Data Independence?",
          difficulty: "Medium",
          answer: "Data independence is the capacity to change the schema at one level of a database system without having to change the schema at the next higher level. There are two types:\n1. Logical Data Independence: Changing the conceptual schema without altering the external schema.\n2. Physical Data Independence: Changing the internal/physical schema without altering the conceptual schema.",
          notes: "Physical data independence is easier to achieve than logical data independence."
        },
        {
          id: "dbms-intro-4",
          question: "Explain the Three-Schema Architecture.",
          difficulty: "Medium",
          answer: "1. Internal Level (Physical Schema): Describes how data is actually stored on storage devices.\n2. Conceptual Level (Logical Schema): Describes what data is stored and the relationships among them (hides physical details).\n3. External Level (View Schema): Describes the part of the database relevant to a particular user.",
          notes: "The goal of this architecture is to separate the user applications from the physical database."
        },
        {
          id: "dbms-intro-5",
          question: "What is the role of a Database Administrator (DBA)?",
          difficulty: "Easy",
          answer: "A DBA is responsible for authorizing access to the database, coordinating and monitoring its use, acquiring hardware/software resources, schema definition, storage structure and access method definition, and performing backups.",
          notes: "The DBA holds the superuser account."
        },
        {
          id: "dbms-intro-6",
          question: "What is a Data Model?",
          difficulty: "Easy",
          answer: "A Data Model is a collection of conceptual tools used to describe data, data relationships, data semantics, and consistency constraints. E.g., Relational Data Model, ER Model, Object-Oriented Model.",
          notes: "The Relational Model is the most widely used."
        },
        {
          id: "dbms-intro-7",
          question: "What is an Entity-Relationship (ER) Model?",
          difficulty: "Medium",
          answer: "The ER model defines the conceptual view of a database. It works around real-world entities and the associations among them. The main components are Entities (objects), Attributes (properties of entities), and Relationships (associations between entities).",
          notes: "ER diagrams are primarily used for database design."
        },
        {
          id: "dbms-intro-8",
          question: "What is a weak entity?",
          difficulty: "Medium",
          answer: "A weak entity is an entity that cannot be uniquely identified by its attributes alone. It depends on a strong entity (identifying entity) for its existence and uses a foreign key in conjunction with its partial key to form a primary key.",
          notes: "Represented by a double rectangle in ER diagrams."
        },
        {
          id: "dbms-intro-9",
          question: "What is the difference between schema and instance?",
          difficulty: "Medium",
          answer: "Schema: The overall design or logical structure of the database. It rarely changes.\nInstance: The actual data contained in the database at a specific point in time. It changes frequently as data is inserted, updated, or deleted.",
          notes: "Schema is like a class definition; Instance is like an object of that class."
        },
        {
          id: "dbms-intro-10",
          question: "Explain Generalization and Specialization in ER Models.",
          difficulty: "Hard",
          answer: "Generalization: A bottom-up approach where multiple lower-level entities combine to form a higher-level entity (e.g., combining Car and Truck into Vehicle).\nSpecialization: A top-down approach where a higher-level entity is broken down into lower-level entities based on distinct characteristics (e.g., breaking Employee into Developer and Tester).",
          notes: "Used to model inheritance in databases."
        }
      ]
    },
    {
      id: "relational-sql",
      title: "Relational Model & SQL",
      description: "Mastering Relational Algebra, complex SQL queries, Joins, and Triggers.",
      questions: [
        {
          id: "dbms-sql-1",
          question: "What are the fundamental operations of Relational Algebra?",
          difficulty: "Medium",
          answer: "The fundamental operations are:\n1. Select (σ): Filters rows.\n2. Project (π): Filters columns.\n3. Union (∪): Combines two relations.\n4. Set Difference (-): Tuples in one relation but not the other.\n5. Cartesian Product (×): Combines every tuple of one relation with every tuple of another.\n6. Rename (ρ): Renames the output relation.",
          notes: "Relational Algebra is procedural, SQL is declarative."
        },
        {
          id: "dbms-sql-2",
          question: "What is the difference between WHERE and HAVING clauses?",
          difficulty: "Easy",
          answer: "WHERE is used to filter rows BEFORE grouping is performed by the GROUP BY clause. It cannot contain aggregate functions.\nHAVING is used to filter groups AFTER the GROUP BY clause has been applied. It is typically used with aggregate functions (like SUM, COUNT, AVG).",
          notes: "Execution order: WHERE -> GROUP BY -> HAVING."
        },
        {
          id: "dbms-sql-3",
          question: "Explain the different types of Joins in SQL.",
          difficulty: "Medium",
          answer: "1. INNER JOIN: Returns records that have matching values in both tables.\n2. LEFT (OUTER) JOIN: Returns all records from the left table, and matched records from the right table. Nulls if no match.\n3. RIGHT (OUTER) JOIN: Returns all records from the right table, and matched records from the left.\n4. FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table.\n5. CROSS JOIN: Returns the Cartesian product of the two tables.",
          notes: "Inner join is the most common default join."
        },
        {
          id: "dbms-sql-4",
          question: "What is a Subquery? Differentiate between Correlated and Non-correlated subqueries.",
          difficulty: "Hard",
          answer: "A Subquery is a query nested inside another query. \n- Non-correlated Subquery: Independent of the outer query. It executes first, and its result is used by the outer query.\n- Correlated Subquery: Depends on the outer query for its values. It executes once for every row processed by the outer query, making it slower.",
          notes: "Avoid correlated subqueries on large datasets due to O(N * M) time complexity."
        },
        {
          id: "dbms-sql-5",
          question: "What is a View in SQL?",
          difficulty: "Medium",
          answer: "A View is a virtual table based on the result-set of an SQL statement. It contains rows and columns just like a real table, but it does not store data itself (unless it's a materialized view).",
          notes: "Views are used for security (restricting data access) and simplifying complex queries."
        },
        {
          id: "dbms-sql-6",
          question: "What is a Trigger?",
          difficulty: "Hard",
          answer: "A Trigger is a special type of stored procedure that automatically executes (or fires) when a specific event occurs in the database server. Events can be DML operations (INSERT, UPDATE, DELETE) or DDL operations.",
          notes: "Used for maintaining audit trails, enforcing complex business rules, and referential integrity."
        },
        {
          id: "dbms-sql-7",
          question: "Difference between TRUNCATE, DELETE, and DROP?",
          difficulty: "Medium",
          answer: "1. DELETE: DML command. Removes specific rows based on a WHERE clause. Can be rolled back. Slower as it logs individual row deletions.\n2. TRUNCATE: DDL command. Removes all rows from a table. Cannot be rolled back (in most DBMS). Faster as it deallocates data pages.\n3. DROP: DDL command. Completely removes the table structure and data from the database.",
          notes: "TRUNCATE resets identity columns (auto-increment), DELETE does not."
        },
        {
          id: "dbms-sql-8",
          question: "What are Window Functions?",
          difficulty: "Hard",
          answer: "Window functions perform calculations across a set of table rows that are somehow related to the current row. Unlike aggregate functions, they do not cause rows to become grouped into a single output row; the rows retain their separate identities. Examples: ROW_NUMBER(), RANK(), DENSE_RANK().",
          notes: "Defined using the OVER() clause."
        },
        {
          id: "dbms-sql-9",
          question: "Difference between RANK() and DENSE_RANK()?",
          difficulty: "Medium",
          answer: "Both are window functions used to rank rows.\nRANK() skips ranks if there are ties. If two rows tie for rank 1, the next row gets rank 3.\nDENSE_RANK() does not skip ranks. If two rows tie for rank 1, the next row gets rank 2.",
          notes: "Extremely common interview question for data engineering."
        },
        {
          id: "dbms-sql-10",
          question: "What is a Stored Procedure?",
          difficulty: "Medium",
          answer: "A Stored Procedure is a prepared SQL code that you can save, so the code can be reused over and over again. It can accept parameters, perform conditional logic, and return multiple result sets.",
          notes: "Reduces network traffic and improves security against SQL injection."
        }
      ]
    },
    {
      id: "normalization",
      title: "Database Design & Normalization",
      description: "Reducing redundancy and dependency in database schemas.",
      questions: [
        {
          id: "dbms-norm-1",
          question: "What are the different types of Keys in DBMS?",
          difficulty: "Easy",
          answer: "1. Super Key: Any combination of attributes that uniquely identifies a row.\n2. Candidate Key: A minimal super key.\n3. Primary Key: A candidate key chosen by the DBA to uniquely identify rows.\n4. Foreign Key: An attribute that establishes a relationship with the primary key of another table.\n5. Alternate Key: Candidate keys that are not chosen as the primary key.",
          notes: "A table can have multiple candidate keys but only one primary key."
        },
        {
          id: "dbms-norm-2",
          question: "What is Functional Dependency?",
          difficulty: "Medium",
          answer: "Functional Dependency (FD) is a relationship that exists when one attribute uniquely determines another attribute. If R is a relation with attributes X and Y, a functional dependency X -> Y means that for any two tuples, if their X values are the same, their Y values must also be the same.",
          notes: "X is the determinant, Y is the dependent."
        },
        {
          id: "dbms-norm-3",
          question: "What is Normalization and why is it needed?",
          difficulty: "Easy",
          answer: "Normalization is the process of organizing data in a database to reduce redundancy (data duplication) and eliminate undesirable characteristics like Insertion, Update, and Deletion anomalies.",
          notes: "It divides larger tables into smaller ones and links them using relationships."
        },
        {
          id: "dbms-norm-4",
          question: "Explain First Normal Form (1NF).",
          difficulty: "Easy",
          answer: "A relation is in 1NF if it contains only atomic (indivisible) values. It cannot contain repeating groups or multi-valued attributes (arrays/lists) in a single column.",
          notes: "Every intersection of a row and column must contain exactly one value."
        },
        {
          id: "dbms-norm-5",
          question: "Explain Second Normal Form (2NF).",
          difficulty: "Medium",
          answer: "A relation is in 2NF if it is in 1NF AND there are no Partial Dependencies. A partial dependency occurs when a non-prime attribute depends on only a part of a composite primary key.",
          notes: "If a table has a single-column primary key and is in 1NF, it is automatically in 2NF."
        },
        {
          id: "dbms-norm-6",
          question: "Explain Third Normal Form (3NF).",
          difficulty: "Medium",
          answer: "A relation is in 3NF if it is in 2NF AND there are no Transitive Dependencies. A transitive dependency is when a non-prime attribute depends on another non-prime attribute (X -> Y and Y -> Z).",
          notes: "Rule: Non-key attributes must depend on the key, the whole key, and nothing but the key."
        },
        {
          id: "dbms-norm-7",
          question: "What is Boyce-Codd Normal Form (BCNF)?",
          difficulty: "Hard",
          answer: "BCNF is a stricter version of 3NF. A relation is in BCNF if, for every non-trivial functional dependency X -> Y, X is a superkey of the relation.",
          notes: "BCNF handles anomalies that can occur in 3NF tables with overlapping composite candidate keys."
        },
        {
          id: "dbms-norm-8",
          question: "What is Denormalization?",
          difficulty: "Medium",
          answer: "Denormalization is the process of intentionally introducing redundancy into a database design to improve read performance. It involves combining tables to reduce the number of complex joins required by read-heavy queries.",
          notes: "Used heavily in Data Warehousing and OLAP systems."
        },
        {
          id: "dbms-norm-9",
          question: "What is a Lossless Decomposition?",
          difficulty: "Hard",
          answer: "When a relation R is decomposed into R1 and R2, the decomposition is lossless if we can reconstruct the original relation R by performing a natural join on R1 and R2, without losing any data or creating spurious/fake tuples.",
          notes: "Lossless join property is mandatory for any normalization decomposition."
        },
        {
          id: "dbms-norm-10",
          question: "What is Dependency Preservation?",
          difficulty: "Hard",
          answer: "When decomposing a relation to achieve higher normal forms, dependency preservation ensures that all original functional dependencies can still be checked efficiently within the new decomposed tables, without requiring a join.",
          notes: "Decomposition into 3NF is always dependency-preserving. BCNF decomposition might NOT be dependency-preserving."
        }
      ]
    },
    {
      id: "transactions-acidity",
      title: "Transaction Management & Concurrency",
      description: "Ensuring database reliability, isolation, and handling concurrent access.",
      questions: [
        {
          id: "dbms-trans-1",
          question: "What is a Transaction?",
          difficulty: "Easy",
          answer: "A transaction is a single logical unit of work that contains one or more SQL operations. A transaction must either execute entirely or not at all.",
          notes: "E.g., Transferring money from Account A to Account B involves two updates, which must succeed or fail together."
        },
        {
          id: "dbms-trans-2",
          question: "Explain the ACID properties.",
          difficulty: "Medium",
          answer: "1. Atomicity: 'All or nothing' execution.\n2. Consistency: Database goes from one valid state to another.\n3. Isolation: Concurrent transactions do not interfere with each other.\n4. Durability: Committed changes survive system crashes.",
          notes: "The foundation of reliable transactional databases."
        },
        {
          id: "dbms-trans-3",
          question: "What are the common Concurrency Problems?",
          difficulty: "Medium",
          answer: "1. Dirty Read: Reading uncommitted data from another transaction.\n2. Non-Repeatable Read: Reading the same row twice in a transaction but getting different values (because another transaction updated it).\n3. Phantom Read: Reading a set of rows twice and getting a different number of rows (because another transaction inserted/deleted).",
          notes: "Isolation levels exist to solve these specific problems."
        },
        {
          id: "dbms-trans-4",
          question: "What are the standard Isolation Levels?",
          difficulty: "Hard",
          answer: "From lowest to highest safety (and lowest to highest performance cost):\n1. Read Uncommitted: Allows dirty reads.\n2. Read Committed: Solves dirty reads. (Default in Postgres/SQL Server).\n3. Repeatable Read: Solves non-repeatable reads. (Default in MySQL).\n4. Serializable: Solves phantom reads by executing transactions sequentially.",
          notes: "Higher isolation = lower concurrency."
        },
        {
          id: "dbms-trans-5",
          question: "What is a Deadlock in DBMS?",
          difficulty: "Medium",
          answer: "A deadlock occurs when two or more transactions are waiting indefinitely for one another to release locks on resources. E.g., T1 holds lock on A and waits for B; T2 holds lock on B and waits for A.",
          notes: "DBMS typically detects deadlocks using wait-for graphs and aborts one transaction (the victim)."
        },
        {
          id: "dbms-trans-6",
          question: "What is Two-Phase Locking (2PL)?",
          difficulty: "Hard",
          answer: "2PL is a concurrency control protocol that ensures serializability. It has two phases:\n1. Growing Phase: Transaction can acquire locks but cannot release any.\n2. Shrinking Phase: Transaction can release locks but cannot acquire any new ones.",
          notes: "Basic 2PL ensures serializability but can still suffer from deadlocks."
        },
        {
          id: "dbms-trans-7",
          question: "What is the difference between Shared (S) and Exclusive (X) locks?",
          difficulty: "Medium",
          answer: "Shared Lock (S): Used for reading data. Multiple transactions can hold a shared lock on the same item simultaneously.\nExclusive Lock (X): Used for writing data. Only one transaction can hold an exclusive lock on an item. No other locks (S or X) can be granted on that item.",
          notes: "Read operations request S-locks; Write operations request X-locks."
        },
        {
          id: "dbms-trans-8",
          question: "What is the Write-Ahead Logging (WAL) protocol?",
          difficulty: "Hard",
          answer: "WAL is the standard approach to ensuring Atomicity and Durability. The rule is: before a transaction's changes to the database can be written to disk, a log record detailing the changes MUST be written to stable storage first.",
          notes: "If the system crashes, the log is read to redo committed transactions and undo uncommitted ones."
        },
        {
          id: "dbms-trans-9",
          question: "What is Timestamp Ordering Protocol?",
          difficulty: "Hard",
          answer: "A non-lock-based concurrency control protocol. Each transaction is assigned a unique timestamp. The protocol ensures that conflicting read/write operations execute in the order of their timestamps, guaranteeing serializability without deadlocks.",
          notes: "Can suffer from starvation and cascading rollbacks."
        },
        {
          id: "dbms-trans-10",
          question: "What is a Cascading Rollback?",
          difficulty: "Medium",
          answer: "A situation where the failure and rollback of one transaction causes the rollback of other dependent transactions (because they read uncommitted data written by the failed transaction), which in turn causes further rollbacks.",
          notes: "Recoverable schedules and Strict 2PL prevent cascading rollbacks."
        }
      ]
    },
    {
      id: "indexing-hashing",
      title: "Indexing & Hashing",
      description: "Data structures used internally by databases for ultra-fast data retrieval.",
      questions: [
        {
          id: "dbms-index-1",
          question: "What is Indexing?",
          difficulty: "Easy",
          answer: "Indexing is a data structure technique to efficiently retrieve records from the database files based on some attributes on which the indexing has been done. It works similar to an index in a book.",
          notes: "Speeds up SELECT queries but slows down INSERT/UPDATE/DELETE."
        },
        {
          id: "dbms-index-2",
          question: "What is a Primary Index vs Secondary Index?",
          difficulty: "Medium",
          answer: "Primary Index: An index created on the primary key of a file, where the file is already sequentially ordered by that key.\nSecondary Index: An index created on non-primary key attributes. The file is not ordered based on the secondary index key.",
          notes: "There can be only one primary index (or clustered index), but multiple secondary indexes."
        },
        {
          id: "dbms-index-3",
          question: "What is a Clustered Index?",
          difficulty: "Medium",
          answer: "A clustered index determines the physical order of data rows in a table. The leaf nodes of a clustered index contain the actual data pages of the table.",
          notes: "Because it dictates physical storage, a table can only have ONE clustered index."
        },
        {
          id: "dbms-index-4",
          question: "What is a B-Tree and B+ Tree?",
          difficulty: "Hard",
          answer: "Both are self-balancing search trees.\nB-Tree: Data pointers are stored in both internal nodes and leaf nodes.\nB+ Tree: Data pointers are stored ONLY in leaf nodes. Internal nodes act purely as a navigational index. Leaf nodes are linked as a linked list.",
          notes: "B+ trees are widely used in DBMS because range queries are much faster due to linked leaf nodes."
        },
        {
          id: "dbms-index-5",
          question: "Why do databases use B+ Trees instead of Binary Search Trees (BST)?",
          difficulty: "Hard",
          answer: "B+ Trees have a high branching factor, making the tree extremely shallow (short height). This minimizes the number of disk I/O operations required to fetch data, which is the main bottleneck in databases. BSTs can be highly unbalanced and deep, requiring many disk reads.",
          notes: "Disk accesses are slow; B+ trees optimize for minimal disk access."
        },
        {
          id: "dbms-index-6",
          question: "What is Hashing in DBMS?",
          difficulty: "Medium",
          answer: "Hashing is a technique to directly search the location of desired data on the disk without using an index structure. Data is stored in data blocks whose addresses are generated by applying a hash function to the search key.",
          notes: "Extremely fast for exact match queries (O(1)), but terrible for range queries."
        },
        {
          id: "dbms-index-7",
          question: "What is the difference between Static and Dynamic Hashing?",
          difficulty: "Hard",
          answer: "Static Hashing: The number of data buckets is fixed. Leads to bucket overflow as data grows, requiring overflow chaining.\nDynamic (Extendible) Hashing: The number of buckets grows dynamically as data is inserted, preventing bucket overflow and maintaining fast access times.",
          notes: "Dynamic hashing uses a directory of pointers that doubles in size when needed."
        },
        {
          id: "dbms-index-8",
          question: "What is a Covering Index?",
          difficulty: "Hard",
          answer: "A covering index is a non-clustered index that includes all the columns needed to process a particular query. Since the index itself contains all required data, the DBMS does not need to look up the actual data row in the clustered index, making the query lightning fast.",
          notes: "Index-only scan is performed."
        },
        {
          id: "dbms-index-9",
          question: "What is an execution plan (EXPLAIN)?",
          difficulty: "Medium",
          answer: "An execution plan is the sequence of operations the database query optimizer chooses to execute a SQL query. Using the EXPLAIN command before a query shows whether it's doing a full table scan, using an index, the join types used, and the estimated cost.",
          notes: "Essential tool for query performance tuning."
        },
        {
          id: "dbms-index-10",
          question: "What is the difference between an Index Scan and a Table Scan?",
          difficulty: "Easy",
          answer: "Table Scan (Sequential Scan): The database reads every single row in the table to find matches. Extremely slow for large tables.\nIndex Scan: The database searches the much smaller index tree to find the exact memory locations of the required rows.",
          notes: "Always aim for index scans in production systems."
        }
      ]
    }
  ]
};
