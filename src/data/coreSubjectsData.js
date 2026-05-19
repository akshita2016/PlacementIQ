export const subjects = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    progress: 82,
    difficulty: "Hard",
    topics: 48,
    color: "from-blue-500 to-cyan-500",
    concepts: ["Arrays", "Trees", "Graphs", "DP"],
    description: "Master problem-solving and algorithmic thinking."
  },
  {
    id: "dbms",
    title: "Database Management Systems",
    progress: 65,
    difficulty: "Medium",
    topics: 24,
    color: "from-purple-500 to-pink-500",
    concepts: ["SQL", "Normalization", "ACID", "Joins"],
    description: "Learn how data is stored, managed, and retrieved efficiently."
  },
  {
    id: "os",
    title: "Operating Systems",
    progress: 40,
    difficulty: "Hard",
    topics: 30,
    color: "from-emerald-500 to-teal-500",
    concepts: ["Threads", "Deadlocks", "Memory", "Paging"],
    description: "Understand the bridge between software and hardware."
  },
  {
    id: "cn",
    title: "Computer Networks",
    progress: 20,
    difficulty: "Medium",
    topics: 35,
    color: "from-orange-500 to-red-500",
    concepts: ["OSI Model", "TCP/IP", "Routing", "DNS"],
    description: "Discover how systems communicate across the globe."
  },
  {
    id: "oops",
    title: "Object Oriented Programming",
    progress: 90,
    difficulty: "Easy",
    topics: 15,
    color: "from-indigo-500 to-blue-500",
    concepts: ["Inheritance", "Polymorphism", "Encapsulation"],
    description: "Master the design patterns used in modern software."
  },
  {
    id: "system-design",
    title: "System Design",
    progress: 10,
    difficulty: "Hard",
    topics: 20,
    color: "from-rose-500 to-orange-500",
    concepts: ["Scalability", "Microservices", "Caching"],
    description: "Learn to architect large-scale distributed systems."
  }
];

export const dailyChallenge = {
  id: "dc-1",
  question: "What is the difference between 3NF and BCNF in DBMS?",
  difficulty: "Hard",
  subject: "DBMS"
};

export const interviewStatsData = [
  { subject: 'DSA', value: 95 },
  { subject: 'DBMS', value: 88 },
  { subject: 'OS', value: 81 },
  { subject: 'Networks', value: 73 },
  { subject: 'OOPs', value: 85 }
];

export const recentActivity = [
  { id: 1, title: "SQL Joins", subject: "DBMS", time: "2 hours ago", type: "topic" },
  { id: 2, title: "Binary Search Trees", subject: "DSA", time: "5 hours ago", type: "topic" },
  { id: 3, title: "Deadlocks in OS", subject: "OS", time: "1 day ago", type: "topic" },
];
