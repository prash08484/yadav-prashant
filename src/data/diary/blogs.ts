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
`,
    }
    ];
    // link: ''
