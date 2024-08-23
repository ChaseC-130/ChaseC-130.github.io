# Java

## Just-In-Time (JIT) Compiler
 - Crucial component of modern runtime environments like Java Virtual Machine (JVM)
 - Translates intermediate code (bytecode) into native machine code at runtime, just before it is executed.
    - When Java is compiled, it is not directly compiled to machine code, it is compiled to intermediate form called bytecode which is platform-independent and executed by the JVM
 - When JVM executes an application, it initially interprets bytecode. Interpretation involves reading and executing the bytecode instructions one at a time, which is slow to executing native machine code 
 - To improve performance, the JVM uses a JIT compiler to compile frequently executed (or "hot") bytecode into native machine code. This happens at runtime, as the application is running
 - Performs optimizations based on runtime information
    - Inline methods
    - Optimize loops
    - Eliminate redundant code paths based on execution patterns observed
 - JIT can introduce a delay (often referred to as "warm-up time") as the JVM compiles and optimizes the code
 - Requires additional memory for storing both the compiled machine code and the metadata needed for optimizations


## Heap
 - Memory allocated in a Java Virtual Machine (JVM) 
 - Region of memory where objects are dynamically allocated during execution
 - Heap Size 
    - Determines how much memory is available for storing objects created by the application
    - Initial heap size (`-Xms`) sets the minimum heap size the JVM allocats when it starts 
    - Setting larger initial heap can reduce the number of times the JVM needs to resize the heap
    - Maxmium heap size (`-Xmx`) is the maximum amount of memory the heap can grow to, JVM will not allocate more
    - If the applications trie to use more memory than the maximum heap size, will lead to `OutOfMemoryError`
    - Heap is divided into Young Generation, Old Generation, and sometimes a Permanent Generation depending on JVM and version
        - Young Generation is where new objects are allocated. Divided further into Eden Space and Survivor Spaces
        - Old Generation is where long-lived objects are moved after surviving several garbage collection cycles in Young Generation
        - Permanent Generation is where metadata about classes and methods are stored. Replaced by Metaspace in newer JVMs, which is no longer part of heap
    - Properly sizing the heap is crucial for application performance
        - Too small causes frequent garbage collection, slowing the application 
        - Too large can lead to long garbage collection pauses
    - Resource utilization
        - Heap size must be balanced with the overall resources (RAM) available on the machine
        - Allocating too much heap can starve other processes of memory, while too little can cause application to run OOM
        - Can utilize tools (such as `jstat` or `jmap`) or profilers to monitor heap usage and garbage collection behavior
    - JVM requires memory for more than just the heap
        - Memory is also used for thread stacks (Each thread consumes memory) 
        - Metaspace in which stores class metadata
        - Code cache is used for storing JIT-compiled code
        - Native memory - The jVM and other native libraries require memory outside the heap
    - Best practice for heap size is typically around 25-50% of the total available memory to leave room for JVM, operating system, and other processes

## Garbage Collection
 - As objects are no longer needed, garbage collector reclaims memory making it available for new objects
 - The frequency and duration of garbage collection events can be influenced by the size of the heap
  - Larger heap reduces the frequency of garbage collection, but increases the duration of each garbage collection event
 - Minor GC occurs in Young Generation, when the Eden space fills up a Minor GC is triggered. Live objects are move to one of the Survivor spaces, and dead objects are reclaimed
 - Major/Full GC involves both young and old generations. Major GC is more time-consuming, as it involves the entire heap. If the Old generation becomes full, a Full GC occurs which may cause applications to pause longer
 - GC requires its own CPU threads
 - Java provides multiple types of GC applications can use
    - Serial GC
        - `-XX:UseSerialGC`
        - Simplest garbage collector that uses a single thread. Designed for small applications with low memory requirements
    - Parallel GC (Throughput Collector)
        - `-XX:UseParallelGC` (Default in Java 8)
        - Uses multiple threads to perform garbage collection in parallel, which significantly reduces GC pause times
    - Concurrent Mark-Sweep (CMS) GC
        - `-XX:UseConcMarkSweepGC`
        - Reduces pause times by performing most of its work concurrently with the application. Uses multiple threads for marking live objects and sweeping dead ones
        - Ideal for applications that require low-latency GC with mimal pauses, such as web servers and real-time applications
    - G1 GC (Garbage First)
        - `-XX:UseG1GC` (Default from Java 9 onwards)
        - Divides the heap into regions and performs GC on these regions in a manner that aims to meet a specified pause-time goal. Suitable for most modern applications
    - ZGC (Z Garbage Collector)
        - `-XX+UseZGC`
        - Low-latency garbage collector design to handl very large heaps (multiple terabytes) with minimal pause time (typically in the range of a few milliseconds)
    - Shenandoah 
        - `XX:UseShenandoahGC`
        - Low-latency designed to minimize GC pauses by performing evacuation (moving objects) concurrently with the application. Aims to keep pause times below 10 milliseconds, regardless of heap size
    - Epsilon (No-Op)
        - `-XX:UseEpsilonGC`
        - No-op garbage collector that does not perform any memory reclamation. Used mainly for testing, benchmarking, and scenarios where memory management is not a concern
        
## Threads
 - Smallest unit of executing within a process
 - Separate path of execeution in the program, allowing multiple tasks to run concurrently
 - Java supports multithreading, meaning multiple threads can be executed in parallel, allowing an application to perform multiple operations at the same time. Particularly useful for tasks that can performed independently, such as handling client requests in a server application
 - Thread States
    - `New` A thread begins its life cycle in the `New` state when an instance of the `Thread` class is crated. At this point, the thread is not yet running
    - `Runnable` After the `start()` method is called on the `Thread` object, the thread enters the `Runnable` state, it is ready to run but might be waiting for CPU time if other threads are currently running
    - `Running` When the thread scheduler selects the thread, it enters the `Running` state and starts executing the `run()` method
    - `Blocked/Waiting` A thread enters the `Blocked` or `Waiting` state when it is waiting for a resource to become available or for annother thread to perform a particular action. For example, a thread might be waiting for I/O operations to complete or for a lock to be released
    - `Timed Waiting` When a thread is waiting for a specified amount of time to elapse. This can occur when `sleep()` is called or it is waiting for a resource with a timeout
    - `Terminated` A thread reaches the `Terminated` state when it has finished executing its `run()` method, either by completing normally or by throwing an unhandled exception. 
 - When multiple threads access shared resources (e.g., variables, objects) concurrently, there can be race conditions that cause inconsistent or incorrect results. To prevent this, java provides synchronization mechanisms
 - `synchronized` keyword in Java ensures that only one thread can access a block of code or a method at a time, preventing other threads from entering the synchorinzed code until the current thread exits
 - Java also provides more advanced concurrency utilities such as explicit locks `ReentrantLock` and conditions `Condition`
 - Java provides methods like `wait()`, `notifiy()`, and `notifyAll()` that allow threads to communicate with each other, particularly in the context of synchronized code
 - Java provides the Executor framework for thread pools, which are a collection of workter threads that efficiently manage the execution of tasks
    - FixedThreadPool - Fixed number of threads
    - CachedThreadPool - Creates new threads as needed, and reuses previously constructed threads when available
    - ScheduledThreadPool - Schedules tasks to run after a delay or periodically
 - Threads have priority between 1-10 `MIN_PRIORITY` (1) and `MAX_PRIORITY` (10) with `NORM_PRIORITY` (5) as the default
    - JVM thread scheduler determine which threads to run at any given time, thread priority is simply a suggestion to the scheduler and does not guarantee higher-priority thread will always run before lower-priority threads

## Thread Exhaustion
 - Running out of threads usually happens when the application creates more threads than the system can handle either due to misconfiguration, a bug, or an exceptionally high load
 - When an application exhausts its thread pool, new tasks cannot be executed, which may include important operations like handling incoming requests or running scheduled tasks
 - Garbage collection requires threads to operate, if all threads are consumed by the application, the JVM may not have sufficient resources to run GC effectively. In extreme cases, the JVM might fail to allocate threads for GC
 - Even after an application runs out of threads, the JVM may still create new objects (e.g., through existing threads or ongoing operations) without effective garbage collection available, these objects accumlate in the heap
 - If the heap becomes full and garbage collection is unable to reclaim enough memory, the JVM will eventually throw an `OutOfMemoryError` indicating it can no longer allocate memory 
 - Without available threads, critical operations may stall, which could exacerbate memory leaks or prevent the release of resources
    - Heap will continue to fill up while GC cannot keep up. JVM may enter a state where it spends the majority of its time trying to perform garbage collection (GC Thrashing) further degrading performance

