import { PersonalPost } from '../../types';

export const blogsPosts: PersonalPost[] = [
  {
    id: 'blogs-1',
    title: 'Hello System Design: A Journey into Scalable Architectures',
    caption: 'Diving into the world of system design can be daunting, but it\'s a crucial skill for any developer aiming to build scalable and efficient applications. In this blog, I share my journey of learning system design, the challenges I faced, and the resources that helped me along the way.',
    date: '2025-12-09',
    type: 'blogs',
    tags: ['System Design', 'HLD', 'LLD', 'Scalability', 'Architecture'],
    content:`📘 A Newbies Guide to System Design (HLD & LLD)

Or How I Stopped Being Scared of Big Boxes and Started Drawing Bigger Boxes


ℹ️ Disclaimer (Very Important, Please Read)

Before we begin, let me be very clear:

- I am NOT a system design expert  
- I have NOT designed the next Netflix, Amazon, or WhatsApp  
- I still Google things like difference between HLD and LLD more often than I would like to admit  

This blog is simply me sharing whatever I have learned so far while starting my system design journey. Think of it as notes from a fellow beginner who is walking slightly ahead of you but still tripping occasionally.

If you are an expert reading this, please do not judge. If you are a beginner reading this you are exactly where you should be.


🔍 Why System Design Feels Scary at First

When I first heard System Design my brain imagined:

- Infinite users  
- Servers on fire  
- Interviewers asking Design Twitter in 5 minutes  

Meanwhile, I was still figuring out how my backend talks to my frontend.

The truth is simple:

System design is not magic. It is structured thinking.

And like all structured thinking, it starts small.


📐 What is System Design (In Simple Words)

System design is about answering one basic question:

How do different parts of a software system work together to solve a problem at scale

It usually involves:

- How data flows  
- How components interact  
- How the system grows with users  
- How the system behaves when things fail  

To keep things manageable, system design is commonly divided into:

- HLD High Level Design  
- LLD Low Level Design  

The goal is not perfection but clarity.


🏗️ High Level Design (HLD) The Big Picture View

High Level Design focuses on understanding the system at a macro level.

It answers questions like:

- What are the major components  
- How do they communicate  
- Where does data move  

HLD usually includes:

- Clients such as Web or Mobile  
- Backend services  
- Databases  
- Caches  
- Load balancers  
- Message queues  
- External services  

A simple example flow:

User to Load Balancer to Backend Service to Database

At this stage, there is no code. Only flow and structure.

Example at HLD level for a URL shortener:

- User sends a long URL  
- Backend generates a short key  
- Mapping is stored in a database  
- Short URL redirects to original URL  

HLD helps with:

- Understanding scalability  
- Finding bottlenecks early  
- Communicating ideas clearly  

It also helps you reason about systems before writing a single line of code.


🧩 Low Level Design (LLD) Zooming In

Low Level Design focuses on implementation details.

It answers:

How exactly will each component be built

LLD typically deals with:

- Classes and methods  
- Database schemas  
- APIs and request response formats  
- Internal workflows  
- Sometimes design patterns  

Continuing the URL shortener example at LLD level:

- A UrlService class  
- A generateShortUrl method  
- A table with short_key and long_url  
- Logic to handle collisions  

This is where design becomes real and executable.

LLD matters because it helps:

- Write clean and maintainable code  
- Avoid ad hoc implementations  
- Translate ideas into working software  


📊 HLD vs LLD Beginner Friendly Comparison

HLD focuses on:

- Big picture  
- Components and interactions  
- Technology agnostic decisions  
- Scalability and system flow  

LLD focuses on:

- Detailed design  
- Classes and methods  
- Technology specific decisions  
- Code level implementation  

A simple rule that helps:

If you can explain it with a diagram it is likely HLD  
If you need to open your editor it is likely LLD  


🛠️ How I Started Learning System Design As a Beginner

The approach I followed was simple and gradual.

First, I avoided designing very large systems immediately.

I started with smaller systems such as:

- URL shortener  
- Chat application  
- File storage service  

Smaller systems build confidence and intuition.

Second, I focused on asking the right questions instead of memorizing answers:

- How many users  
- Is the system read heavy or write heavy  
- What tradeoffs matter more  

Finally, I accepted confusion as part of the process.

If system design feels confusing, it usually means learning is happening.


⚠️ Common Beginner Mistakes

Some mistakes I personally made and often see others make:

- Jumping to microservices too early  
- Using advanced terms without understanding them  
- Ignoring database design  
- Forgetting about failure scenarios  

These mistakes are normal and part of the learning curve.


✅ Final Thoughts

System design is a journey, not a checklist.

Progress comes from:

- Clear thinking  
- Consistent practice  
- Explaining ideas in simple terms  

This writeup reflects what I have learned so far. I will continue refining my understanding as I learn more.

If this helped you even a little, it has done its job.

Happy Designing
` },

  {
id: 'blogs-3',
title: 'The Way to Multithreading and Concurrency',
caption: 'A comprehensive and practical guide to multithreading and concurrency; expanded with examples, patterns, debugging tips, and production-ready advice. Ready to paste as a JavaScript template literal (no backticks inside).',
date: '2026-02-02',
type: 'blogs',
tags: ['Concurrency', 'Multithreading', 'Mutex', 'Locks', 'Semaphore', 'Condition Variables'],
content: `
🔹 Introduction

This expanded guide dives deeply into multithreading and concurrency with the practical detail you need to write correct, maintainable, and high-performance code. It is written for engineers who already understand the basic idea of threads and shared memory and want to apply robust synchronization strategies in real systems.

We cover: mutexes and lock types, semaphores, condition variables, atomic operations, common mistakes (and how to avoid them), testing and debugging techniques, performance considerations, and a set of concrete examples in plain C++-style pseudocode that you can adapt to your stack.

────────────────────────────

🔹 Concurrency models and memory

Before choosing synchronization primitives, understand the concurrency model you are working with. Two common models are:

• Shared-memory multithreading: Multiple threads share the same address space. Synchronization is needed to coordinate access to shared data. This model is common in C++, Rust, Java, and system-level code.

• Message-passing (actors): Threads or processes communicate by sending messages across channels. This can avoid many shared-state bugs but requires careful protocol design.

Modern processors and compilers reorder memory operations for optimization. The language memory model (for example, C++11 memory model) and atomic operations determine visibility and ordering guarantees. Use appropriate memory orderings for atomics and prefer the default sequential consistency unless you need advanced optimizations.

────────────────────────────

🔹 Mutex (Mutual Exclusion): deep dive

A mutex provides exclusive ownership of a critical section. When a thread locks a mutex, other threads attempting to lock that mutex will block (or fail, if using try_lock).

Key properties:
• Ownership: A locked mutex is associated with the thread that locked it.
• Blocking semantics: Calls to lock typically block the caller until the lock becomes available.
• Fairness: Implementation-dependent. Some mutexes provide FIFO-like fairness; others favor throughput.

Common uses:
• Protecting mutable shared data (counters, containers).
• Serializing access to non-thread-safe APIs.

Example pattern (C++-style pseudocode, use RAII in real code):


# Protect shared state
std::mutex m;
int shared_counter = 0;

void increment() {
    std::lock_guard<std::mutex> guard(m);
    shared_counter += 1;    # critical section
}


Best practices:
• Keep critical sections small: read-modify-write blocks should be as short as possible.
• Avoid calling user code while holding a lock (callbacks, I/O) because it can lead to deadlocks and poor performance.
• Prefer RAII (automatic scope-based locking) to manual lock/unlock to avoid leaks.

────────────────────────────

🔹 Lock types and when to use them

lock_guard (scope-bound locking)
• Simple and safe. Use when you want a lock for a single scope and no manual unlock.

unique_lock
• More flexible: supports deferred locking, timed locking, and manual unlock. Useful with condition variables.

shared_mutex / shared_lock
• Multiple readers / single writer. Great for read-heavy data structures where reads are much more frequent than writes.

recursive_mutex
• Allows the same thread to lock multiple times. It can hide design problems; avoid unless necessary.

try_lock and timed locks
• Use try_lock for opportunistic locking where you can back off or try later.
• Timed locks are helpful for avoiding indefinite blocking but add complexity.

────────────────────────────

🔹 Semaphore: resource counting and control

A semaphore maintains an internal counter representing available resources. Threads acquire (decrement) and release (increment) the counter.

Use cases:
• Limit concurrent access to a fixed-size pool (database connections, file descriptors).
• Coordinate producer-consumer relationships when counting items.

Example pattern (counting semaphore with capacity 3):

std::counting_semaphore<3> sem(3);

void use_slot() {
    sem.acquire();
    // use the limited resource
    sem.release();
}

Binary semaphores behave similarly to a mutex but have no ownership semantics. Semaphores are more general but easier to misuse.

────────────────────────────

🔹 Condition variables: waiting and notification

Condition variables allow a thread to sleep until some condition is true, and they are typically used together with a mutex.

Pattern:

std::mutex m;
std::condition_variable cv;
bool ready = false;

void producer() {
    {
        std::lock_guard<std::mutex> guard(m);
        ready = true;
    }
    cv.notify_one();
}

void consumer() {
    std::unique_lock<std::mutex> lock(m);
    cv.wait(lock, []{ return ready; });
    # proceed, ready is true and lock is re-acquired
}

Always use the predicate form of wait to avoid spurious wakeups. Use notify_one when waking a single waiter, and notify_all when the condition may allow multiple waiters to proceed.

────────────────────────────

🔹 Deadlocks, livelocks and avoidance strategies

Deadlock arises from circular waiting: thread A holds lock X and waits for lock Y while thread B holds lock Y and waits for X.

Avoidance techniques:
• Lock ordering: Always acquire multiple locks in a globally consistent order.
• Lock hierarchy: Assign levels to locks and never acquire a lower-level lock while holding a higher-level one.
• Try-lock with backoff: If you cannot acquire all locks, release acquired ones and retry.
• Minimize scope: Hold locks for the shortest time necessary.

Livelock occurs when threads repeatedly change state in response to each other but make no progress. Backoff and randomized retry can help.

────────────────────────────

🔹 Atomic operations and lock-free programming

Atomics let you update shared variables without a mutex. They are powerful for counters and flags but require careful memory ordering.

Example:


std::atomic<int> counter{0};
counter.fetch_add(1, std::memory_order_relaxed);


Use relaxed ordering for pure counting where only correctness of the count matters, and stronger orderings when synchronization order matters. Lock-free containers and algorithms exist but are complex and error-prone; prefer them only when profiling shows mutex costs are a bottleneck.

────────────────────────────

🔹 Testing and debugging concurrent code

Testing approaches:
• Unit tests for single-threaded logic.
• Stress tests with many threads and randomized workloads.
• Fuzzing to find race conditions.

Tools and techniques:
• Thread sanitizers (TSAN) to detect data races.
• Valgrind helgrind (where supported).
• Logging with timestamps and thread ids; avoid logging heavy I/O while holding locks.
• Reproduce failures with deterministic seeds and controlled task scheduling when possible.

When diagnosing real-world bugs, build minimal repros and add assertions that check invariants frequently (for example, under #ifdef DEBUG builds).

────────────────────────────

🔹 Performance and scalability considerations

• Contention: Hot locks serialize parallel work. Profile to find hot spots.
• Sharding: Partition data across multiple locks to reduce contention.
• Read/write splitting: Use reader-writer locks for read-heavy workloads.
• Avoid false sharing: align frequently-updated atomic variables to cache-line boundaries.
• Batch operations: Aggregate small updates into a single update under a lock.

────────────────────────────

🔹 Patterns and idioms

• Producer-consumer queue: Use a mutex + condition variable or a lock-free queue.
• Thread pool: Reuse worker threads to avoid expensive thread creation.
• Futures/promises: For more structured asynchronous programming.
• Scoped locking adapters: Create small RAII structs to handle complex lock lifetimes.

────────────────────────────

🔹 Real-world example: limiting access to a resource pool


# Pseudocode for a resource pool limiting concurrent usage
std::mutex pool_mutex;
std::condition_variable pool_cv;
int available = 5; # pool size

void acquire_resource() {
    std::unique_lock<std::mutex> lock(pool_mutex);
    pool_cv.wait(lock, []{ return available > 0; });
    --available;
}

void release_resource() {
    {
        std::lock_guard<std::mutex> guard(pool_mutex);
        ++available;
    }
    pool_cv.notify_one();
}

────────────────────────────

🔹 Checklist before shipping concurrent code

1. Do you have clear ownership and locking rules for each shared object?
2. Are lock acquisition orders documented and consistently followed?
3. Are critical sections minimal and free of blocking I/O or long computations?
4. Have you tested under stress with thread sanitizers?
5. Have you considered sharding or lock-free alternatives for hot spots?
6. Are invariants covered by assertions in debug builds?

────────────────────────────

🔹 Conclusion

Concurrency is a powerful tool but requires discipline and testing. Prefer simple and well-understood synchronization primitives, keep critical sections small, document your locking strategy, and use tooling to detect races early. When used thoughtfully, mutexes, semaphores, condition variables, and atomics allow you to build robust, high-performance systems.
`
}




    ];
    // link: ''
