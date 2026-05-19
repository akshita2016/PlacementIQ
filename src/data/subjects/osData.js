export const osData = {
  id: "os",
  title: "Operating Systems",
  description: "Understand the critical bridge between hardware and software, focusing on memory, processes, and concurrency.",
  color: "from-teal-600 via-emerald-600 to-green-600",
  topics: [
    {
      id: "fundamentals",
      title: "OS Fundamentals",
      description: "Basic concepts, types of OS, and system calls.",
      questions: [
        {
          id: "os-fun-1",
          question: "What is an Operating System?",
          difficulty: "Easy",
          answer: "An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between the user and the computer hardware.",
          notes: "Key functions: memory management, process management, file management, device management."
        },
        {
          id: "os-fun-2",
          question: "What is the difference between Kernel and Shell?",
          difficulty: "Medium",
          answer: "The Kernel is the core component of the OS that directly manages hardware, memory, and processes. The Shell is a user interface (CLI or GUI) that allows users to communicate with the Kernel by executing commands.",
          notes: "Think of Shell as the outer layer and Kernel as the inner core."
        },
        {
          id: "os-fun-3",
          question: "What is a System Call?",
          difficulty: "Medium",
          answer: "A System Call is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on. It provides an interface between a process and the OS.",
          notes: "Examples: open(), read(), write(), fork(), exec()."
        },
        {
          id: "os-fun-4",
          question: "Explain Monolithic vs Microkernel architectures.",
          difficulty: "Hard",
          answer: "Monolithic Kernel: All OS services (memory management, process management, file systems) run in the kernel space. It is fast but a single bug can crash the entire system. (E.g., Linux)\nMicrokernel: Only the absolutely essential services run in the kernel space. Other services (like file systems) run in user space. It is more stable and secure, but slower due to message passing. (E.g., QNX, Minix)",
          notes: "Modern OSes like Windows and macOS use Hybrid Kernels."
        },
        {
          id: "os-fun-5",
          question: "What is Spooling?",
          difficulty: "Medium",
          answer: "Spooling (Simultaneous Peripheral Operations On-Line) is a process in which data is temporarily held to be used and executed by a device, program, or system. Data is sent to and stored in memory or other volatile storage until the program or computer requests it.",
          notes: "Most common example: Print spooling."
        },
        {
          id: "os-fun-6",
          question: "What is Multiprogramming vs Multitasking?",
          difficulty: "Medium",
          answer: "Multiprogramming: Multiple programs are loaded into memory to maximize CPU utilization. When one process does I/O, the CPU switches to another.\nMultitasking (Time-sharing): A logical extension of multiprogramming. The CPU switches between processes so frequently that users can interact with each program while it is running.",
          notes: "Multitasking is essentially multiprogramming with a time limit (time quantum)."
        },
        {
          id: "os-fun-7",
          question: "What is Dual Mode operation in OS?",
          difficulty: "Easy",
          answer: "To ensure proper execution of the OS, systems have two modes:\n1. User Mode: Where user applications run. Cannot execute privileged instructions.\n2. Kernel Mode (Supervisor/System Mode): Where OS runs. Has full access to hardware and privileged instructions.",
          notes: "A trap or interrupt switches the system from User mode to Kernel mode."
        },
        {
          id: "os-fun-8",
          question: "What is Bootstrapping?",
          difficulty: "Easy",
          answer: "Bootstrapping (Booting) is the process of loading the Operating System into the computer's main memory or RAM when the system is turned on. It is done by a small program called the bootstrap loader stored in ROM.",
          notes: "POST (Power-On Self-Test) happens during booting."
        },
        {
          id: "os-fun-9",
          question: "What is a Trap vs Interrupt?",
          difficulty: "Hard",
          answer: "Interrupt: A signal from a hardware device (like a keyboard) to the CPU indicating an event that needs immediate attention. Asynchronous.\nTrap: A software-generated interrupt caused either by an error (like division by zero) or a specific request from a user program (system call). Synchronous.",
          notes: "Traps handle exceptions and system calls."
        },
        {
          id: "os-fun-10",
          question: "What is an RTOS (Real-Time Operating System)?",
          difficulty: "Medium",
          answer: "An RTOS is an operating system intended to serve real-time applications that process data as it comes in, typically without buffering delays. Processing time requirements are measured in tenths of seconds or shorter increments of time.",
          notes: "Hard RTOS (missed deadline = system failure) vs Soft RTOS (missed deadline = degraded performance)."
        }
      ]
    },
    {
      id: "process-management",
      title: "Process Management & Scheduling",
      description: "How the OS handles multiple processes, context switching, and scheduling algorithms.",
      questions: [
        {
          id: "os-proc-1",
          question: "What is a Process?",
          difficulty: "Easy",
          answer: "A process is a program in execution. While a program is a passive entity (a file containing a list of instructions stored on disk), a process is an active entity with a program counter specifying the next instruction to execute and a set of associated resources.",
          notes: "Processes have a memory space divided into Text, Data, Heap, and Stack sections."
        },
        {
          id: "os-proc-2",
          question: "What is a Process Control Block (PCB)?",
          difficulty: "Medium",
          answer: "A PCB (or Task Control Block) is a data structure used by the OS to store all information about a specific process. It includes the process state, program counter, CPU registers, CPU scheduling info, memory info, accounting info, and I/O status.",
          notes: "The PCB is crucial for context switching."
        },
        {
          id: "os-proc-3",
          question: "What are the various Process States?",
          difficulty: "Easy",
          answer: "1. New: The process is being created.\n2. Ready: The process is waiting to be assigned to a processor.\n3. Running: Instructions are being executed.\n4. Waiting (Blocked): Waiting for some event to occur (like I/O completion).\n5. Terminated: The process has finished execution.",
          notes: "A process moves from Ready -> Running when scheduled."
        },
        {
          id: "os-proc-4",
          question: "What is Context Switching?",
          difficulty: "Medium",
          answer: "Context switching is the procedure of storing the state (context) of the currently running process and restoring the state of the next process to run. This allows multiple processes to share a single CPU.",
          notes: "Context switching is pure overhead; the system does no useful work while switching."
        },
        {
          id: "os-proc-5",
          question: "What is the difference between a Process and a Thread?",
          difficulty: "Hard",
          answer: "Process: Heavyweight, isolated memory space, high context-switching overhead, communication via IPC (Inter-Process Communication).\nThread: Lightweight, shares memory and resources with other threads in the same process, low context-switching overhead, easy communication via shared memory.",
          notes: "Threads are called 'lightweight processes'."
        },
        {
          id: "os-proc-6",
          question: "Explain User-Level Threads vs Kernel-Level Threads.",
          difficulty: "Hard",
          answer: "User-Level Threads: Managed by a thread library in user space. Fast to create and switch. But if one thread blocks (e.g., waiting for I/O), the entire process blocks because the kernel is unaware of the threads.\nKernel-Level Threads: Managed directly by the OS. Slower to create and switch, but if one thread blocks, the kernel can schedule another thread from the same process.",
          notes: "Most modern OSes use a mapping between user and kernel threads."
        },
        {
          id: "os-proc-7",
          question: "What is Preemptive vs Non-Preemptive Scheduling?",
          difficulty: "Medium",
          answer: "Preemptive: The OS can forcefully interrupt a running process and assign the CPU to another process (usually based on priority or time quantum).\nNon-Preemptive: Once a process gets the CPU, it keeps it until it releases it voluntarily (by terminating or requesting I/O).",
          notes: "Preemptive is necessary for responsive interactive systems."
        },
        {
          id: "os-proc-8",
          question: "Explain the FCFS Scheduling Algorithm.",
          difficulty: "Easy",
          answer: "First-Come, First-Served (FCFS) is a non-preemptive algorithm that allocates the CPU to processes in the order they arrive in the ready queue. Implemented using a FIFO queue.",
          notes: "Suffers from the Convoy Effect (short processes waiting behind a very long one)."
        },
        {
          id: "os-proc-9",
          question: "Explain the SJF Scheduling Algorithm.",
          difficulty: "Medium",
          answer: "Shortest Job First (SJF) schedules the process with the smallest execution time next. It can be preemptive (Shortest Remaining Time First) or non-preemptive.",
          notes: "Provides the minimum average waiting time, but it's impossible to perfectly predict future burst times."
        },
        {
          id: "os-proc-10",
          question: "Explain Round Robin Scheduling.",
          difficulty: "Medium",
          answer: "Round Robin is a preemptive scheduling algorithm where each process is assigned a fixed time slot (time quantum) in a cyclic order. If a process doesn't complete within its quantum, it's preempted and put at the back of the ready queue.",
          notes: "If the quantum is too large, it degenerates to FCFS. If too small, context switch overhead dominates."
        }
      ]
    },
    {
      id: "synchronization",
      title: "Process Synchronization",
      description: "Managing concurrent access to shared data to prevent inconsistencies.",
      questions: [
        {
          id: "os-sync-1",
          question: "What is the Critical Section Problem?",
          difficulty: "Medium",
          answer: "A critical section is a segment of code where a process modifies shared resources (variables, files, etc.). The problem is to design a protocol ensuring that when one process is executing in its critical section, no other process is allowed to execute in its critical section.",
          notes: "Prevents race conditions."
        },
        {
          id: "os-sync-2",
          question: "What are the three requirements for a solution to the Critical Section problem?",
          difficulty: "Hard",
          answer: "1. Mutual Exclusion: Only one process at a time can be inside the critical section.\n2. Progress: If no process is in the CS, and some wish to enter, the selection of the next process cannot be postponed indefinitely.\n3. Bounded Waiting: There must be a limit on how many times other processes can enter their CS after a process has made a request to enter its CS.",
          notes: "These are mandatory requirements for any synchronization mechanism."
        },
        {
          id: "os-sync-3",
          question: "What is a Race Condition?",
          difficulty: "Easy",
          answer: "A race condition occurs when multiple processes access and manipulate shared data concurrently, and the final outcome depends on the particular order in which the execution takes place.",
          notes: "Synchronization tools are used to prevent race conditions."
        },
        {
          id: "os-sync-4",
          question: "What is a Semaphore?",
          difficulty: "Medium",
          answer: "A semaphore is a synchronization tool, essentially an integer variable, that (apart from initialization) is accessed only through two standard atomic operations: wait() and signal() (or P and V).",
          notes: "wait() decrements the semaphore; signal() increments it."
        },
        {
          id: "os-sync-5",
          question: "Difference between Binary Semaphore and Counting Semaphore?",
          difficulty: "Medium",
          answer: "Binary Semaphore: Can only take values 0 and 1. Used to enforce mutual exclusion (similar to a Mutex).\nCounting Semaphore: Can take any non-negative integer value. Used to control access to a resource consisting of multiple instances (e.g., a connection pool of 5 connections).",
          notes: "Binary semaphores are also called Mutex locks."
        },
        {
          id: "os-sync-6",
          question: "Difference between Mutex and Semaphore?",
          difficulty: "Hard",
          answer: "Mutex is a locking mechanism. Only the thread that acquired the Mutex can release it (ownership). It is strictly used for mutual exclusion.\nSemaphore is a signaling mechanism. Any thread can signal a semaphore. It is used for signaling and managing multiple resource instances.",
          notes: "A binary semaphore can act like a mutex, but it lacks the ownership property."
        },
        {
          id: "os-sync-7",
          question: "What is the Producer-Consumer Problem?",
          difficulty: "Hard",
          answer: "A classic synchronization problem involving two processes: a Producer that generates data and puts it into a fixed-size buffer, and a Consumer that takes data out of the buffer. The problem is to ensure the Producer doesn't add data when the buffer is full, and the Consumer doesn't remove data when the buffer is empty.",
          notes: "Solved using two counting semaphores (Empty, Full) and one binary semaphore (Mutex)."
        },
        {
          id: "os-sync-8",
          question: "What is the Dining Philosophers Problem?",
          difficulty: "Hard",
          answer: "A classic synchronization problem where 5 philosophers sit around a table with 5 chopsticks. A philosopher needs 2 chopsticks to eat. If all 5 pick up their left chopstick simultaneously, a deadlock occurs because they are all waiting for the right chopstick.",
          notes: "Illustrates deadlock and starvation issues."
        },
        {
          id: "os-sync-9",
          question: "What is a Monitor?",
          difficulty: "Medium",
          answer: "A Monitor is a high-level synchronization construct provided by programming languages (like Java). It encapsulates shared variables, the initialization procedures, and the procedures that operate on the shared data, ensuring that only one process can be active within the monitor at a time.",
          notes: "Easier to use than semaphores, reducing programming errors."
        },
        {
          id: "os-sync-10",
          question: "What is Spinlock?",
          difficulty: "Medium",
          answer: "A spinlock is a type of lock where a thread simply waits in a loop ('spins') repeatedly checking until the lock becomes available. It does not put the thread to sleep (no context switch overhead).",
          notes: "Useful in multiprocessor systems when the lock is expected to be held for a very short duration."
        }
      ]
    },
    {
      id: "deadlocks",
      title: "Deadlocks",
      description: "Understanding, preventing, and recovering from deadlocks.",
      questions: [
        {
          id: "os-dead-1",
          question: "What is a Deadlock?",
          difficulty: "Easy",
          answer: "A deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process in the set.",
          notes: "The system comes to a standstill."
        },
        {
          id: "os-dead-2",
          question: "What are the four necessary conditions for a Deadlock?",
          difficulty: "Hard",
          answer: "1. Mutual Exclusion: At least one resource must be held in a non-sharable mode.\n2. Hold and Wait: A process holding resources is waiting for more resources.\n3. No Preemption: Resources cannot be forcefully taken from a process.\n4. Circular Wait: P0 waits for P1, P1 for P2... Pn for P0.",
          notes: "If any ONE condition is broken, deadlock cannot occur."
        },
        {
          id: "os-dead-3",
          question: "Difference between Deadlock and Starvation?",
          difficulty: "Medium",
          answer: "Deadlock: Processes are blocked infinitely because they are waiting for each other. (System halts).\nStarvation: A process waits indefinitely because the resources it needs are continuously allocated to other processes (usually higher priority ones). The system is still running, but one process is suffering.",
          notes: "Aging is the solution to starvation."
        },
        {
          id: "os-dead-4",
          question: "What is Deadlock Prevention?",
          difficulty: "Medium",
          answer: "Deadlock Prevention involves designing the system in such a way that at least one of the four necessary conditions for deadlock (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait) cannot hold true.",
          notes: "E.g., requiring a process to request all resources at once prevents Hold and Wait."
        },
        {
          id: "os-dead-5",
          question: "What is Deadlock Avoidance?",
          difficulty: "Medium",
          answer: "Deadlock Avoidance requires the OS to be given in advance additional information concerning which resources a process will request. The OS dynamically checks resource allocation to ensure the system remains in a 'safe state' where deadlocks cannot occur.",
          notes: "Banker's Algorithm is a deadlock avoidance algorithm."
        },
        {
          id: "os-dead-6",
          question: "Explain the Banker's Algorithm.",
          difficulty: "Hard",
          answer: "Banker's Algorithm is a deadlock avoidance algorithm. When a process requests resources, the algorithm simulates the allocation and checks if the resulting system state is 'safe'. A state is safe if there exists a sequence of all processes such that they can all complete execution. If safe, the resources are granted; if unsafe, the process must wait.",
          notes: "Requires knowing maximum resource demands in advance, which is rarely possible in real systems."
        },
        {
          id: "os-dead-7",
          question: "What is a Resource Allocation Graph (RAG)?",
          difficulty: "Medium",
          answer: "A RAG is a directed graph used to visualize the state of the system regarding resource allocation. Vertices represent processes (circles) and resources (squares). Edges represent assignments or requests.",
          notes: "If a RAG contains a cycle, and all resources have only one instance, a deadlock is guaranteed."
        },
        {
          id: "os-dead-8",
          question: "How can a system Recover from a Deadlock?",
          difficulty: "Medium",
          answer: "Once a deadlock is detected, the OS can recover by:\n1. Process Termination: Abort all deadlocked processes, or abort them one by one until the cycle breaks.\n2. Resource Preemption: Successively preempt resources from processes and give them to others until the deadlock breaks.",
          notes: "Preemption requires rolling back the victim process to a safe state."
        },
        {
          id: "os-dead-9",
          question: "What is the Ostrich Algorithm?",
          difficulty: "Easy",
          answer: "The Ostrich Algorithm is a strategy of simply ignoring the deadlock problem altogether, assuming it happens so rarely that the cost of prevention/avoidance is higher than the cost of occasionally rebooting the system.",
          notes: "Used by most modern general-purpose OSes like Windows and Linux."
        },
        {
          id: "os-dead-10",
          question: "How do you break the 'Circular Wait' condition?",
          difficulty: "Medium",
          answer: "To break circular wait, we impose a total ordering of all resource types, and require that each process requests resources in an increasing order of enumeration.",
          notes: "This guarantees that a cycle cannot form."
        }
      ]
    },
    {
      id: "memory-management",
      title: "Memory Management",
      description: "Paging, segmentation, virtual memory, and addressing.",
      questions: [
        {
          id: "os-mem-1",
          question: "What is Logical vs Physical Address?",
          difficulty: "Easy",
          answer: "Logical Address (Virtual Address): Generated by the CPU. It is the address seen by the program.\nPhysical Address: The actual address in main memory (RAM).",
          notes: "The Memory Management Unit (MMU) translates logical addresses to physical addresses."
        },
        {
          id: "os-mem-2",
          question: "What is Internal and External Fragmentation?",
          difficulty: "Medium",
          answer: "Internal Fragmentation: Memory assigned to a process is slightly larger than requested. The unused memory inside the allocated block is wasted.\nExternal Fragmentation: Total free memory space is enough to satisfy a request, but it is not contiguous (it's scattered in small blocks).",
          notes: "Paging solves external fragmentation. Compaction also solves external fragmentation."
        },
        {
          id: "os-mem-3",
          question: "What is Paging?",
          difficulty: "Hard",
          answer: "Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. Logical memory is divided into fixed-size blocks called Pages. Physical memory is divided into same-sized blocks called Frames. The OS loads Pages into any available Frames.",
          notes: "Solves external fragmentation, but suffers from internal fragmentation in the last page."
        },
        {
          id: "os-mem-4",
          question: "What is a Page Table?",
          difficulty: "Medium",
          answer: "A Page Table is a data structure maintained by the OS for every process. It contains the mapping between logical page numbers and physical frame numbers in memory.",
          notes: "Because page tables can be huge, they are often stored in main memory."
        },
        {
          id: "os-mem-5",
          question: "What is the TLB (Translation Lookaside Buffer)?",
          difficulty: "Hard",
          answer: "The TLB is a small, fast, hardware cache memory inside the MMU. It stores recent page-table translations. Before searching the slow Page Table in RAM, the CPU checks the TLB. If there's a TLB hit, the physical address is retrieved instantly.",
          notes: "Crucial for paging performance, as accessing RAM page tables is very slow."
        },
        {
          id: "os-mem-6",
          question: "What is Segmentation?",
          difficulty: "Medium",
          answer: "Segmentation is a memory management technique where memory is divided into variable-sized blocks based on logical segments of a program (like main program, functions, local variables, stack).",
          notes: "Closer to the user's view of memory. Suffers from external fragmentation."
        },
        {
          id: "os-mem-7",
          question: "What is Virtual Memory?",
          difficulty: "Medium",
          answer: "Virtual Memory is a technique that gives the illusion of a very large main memory. It allows the execution of processes that are not completely in memory by swapping pages in and out of the secondary storage (disk) on demand.",
          notes: "Allows multiprogramming to be much higher than physical memory allows."
        },
        {
          id: "os-mem-8",
          question: "What is Demand Paging?",
          difficulty: "Medium",
          answer: "Demand Paging is a virtual memory concept where pages are brought into main memory only when they are referenced (demanded) during execution, rather than loading the entire program at once.",
          notes: "If a referenced page is not in memory, a Page Fault occurs."
        },
        {
          id: "os-mem-9",
          question: "What is a Page Fault?",
          difficulty: "Easy",
          answer: "A Page Fault is a hardware interrupt that occurs when a running program accesses a memory page that is mapped into the virtual address space, but not currently loaded in physical memory (RAM).",
          notes: "The OS handles it by fetching the page from disk and updating the page table."
        },
        {
          id: "os-mem-10",
          question: "What is Thrashing?",
          difficulty: "Hard",
          answer: "Thrashing occurs when a system spends more time paging (swapping pages in and out of disk) than executing instructions. This happens when the degree of multiprogramming is too high, and processes don't have enough frames to hold their active working sets.",
          notes: "System performance collapses. Solved by decreasing multiprogramming or adding more RAM."
        }
      ]
    }
  ]
};
