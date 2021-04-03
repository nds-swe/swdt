---
title: Principles
---

While we try to not reinvent stuff, here are some plain principles that are worth mentioning or remembering.

## As A Code
I can not stress it enough, even if it means climbing a steep learning curve in the beginning, everything must be `As Code`. Every artifact you produce (as an engineer) should be generated from code. DevOps mentions that Infrastructure should be As Code. This should be extended as far as possible as it makes maintenance and reproduction as well as extension way easier. 

To every rule is an exemption:

- Powerpoint™️ Slides are binary files. While technically its possible to put them under version control it makes no sense as they can only be tracked as large objects. Also, the administrational overhead currently defeats the purpose of using `git`. Presentations you still find on **Teams**. I will one day opt for something [like this](https://arnehilmann.github.io/markdeck/) or [that](https://revealjs.com/#/3) but I also do not consider our lecture Powerpoints an engineering asset so with that poor excuse I for the time being resort to Powerpoint. 

## Do not repeat

Do not repeat yourself. Also, do not repeat what others do better.

### Yourself (DRY)

We will look at some techniques or tools to avoid DRY coding or engineering. We generally want to do things once or twice, but then it must be automated or abstracted away. 

### Others

> This library does not fit perfectly, let us implement our own

or

> You know, my project is small, I can implement the login myself

These statements are the beginning of the fall. Strive to reuse existing services, libraries or frameworks. It will pay off in the long run. Do only focus and implement what you can make money with, everything else either rent (As Service) or reuse (as component).

Prime suspects are:

* User management
* Foundational frameworks
* E-Mail templating and sending
* SMS and any form of notification service

This does not only apply to code level, also at Infrastructure or Platform level you might want to buy what is offered. A database operated by AWS will cost you some $, but it will always and forever be cheaper than managing a database by yourself (to name some ankle breakers: scalability, redundancy or resilience).
