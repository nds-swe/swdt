---
title: Strategy Pattern
sidebar_position: 10
---

:::info Metadata
|Lecture equivalent| Duration |
|-|-|
|3| 2h 15min |

At the end of this task, students

* have studied other design patterns
* have analysed and described how the strategy pattern works
* have analysed and described how unit tests isolate the implemented strategy
:::

## Finish the bite
:::note Task
Finish the tasks from the lecture:

- Watch [5 Design Patterns Every Engineer Should Know](https://www.youtube.com/watch?v=FLmBqI3IKMA)
- Analyse at least three more design patterns over at [refactoring.guru/design-patterns/catalog](https://refactoring.guru/design-patterns/catalog)
- Hand the patterns in to [the form](https://forms.office.com/r/5Bzv0rY9Yq)
:::

## Refresh git

In the lecture we have seen, that some are shaky on the `git`-legs. 

:::success Optional task
Complete our classroom exercise [Git & GitHub Fundamentals](https://classroom.github.com/a/qFxRKS89). It is a basic onboarding course to git. You do not need to hand in any result here, the classroom of GitHub handles that for you 👍🏼
:::

## Digest
We mentioned it already some times, a key soft skill of an engineer is to understand code from others. The engineer before you (me 😈) was an 🕳, he did not leave any comments in code. But he is convinced that he did a great job at implementing the strategy pattern! He even wrote tests 🚀

:::note Task
You will be given a list of classes. Open up these classes and document inline what the author did implement!
:::

### How to

Lets take a look at [this line](https://github.com/nds-swe/spring-starter/blob/9838578a217a21029c6fc20ac2e67ec8f37ed662/src/main/java/ch/abbts/nds/swe/swdt/starter/skill/SortingFactory.java#L15).

```java
Logger logger = LoggerFactory.getLogger(SortingFactory.class);
```

Annotate it for example like so:

```java
Logger logger = LoggerFactory.getLogger(SortingFactory.class); // Request a new logger that will log with the prefix 'SortingFactory: <log message>'
```

You can also use block comments:


```java
/** 
* Request a new logger that will log with the prefix 'SortingFactory: <log message>'
*/
Logger logger = LoggerFactory.getLogger(SortingFactory.class);
```

Do that for every line you consider worth commenting. You might need to google what some lines do, but that is also a key skill.

### Start
You know how git works. I do not tell you how.

### Result
Hand in a commit `sha` to the assignment where I can see your comments!

### Work
`Checkout` [**this release**](https://github.com/nds-swe/spring-starter/releases/tag/1.0.1).

Comment the following classes:

```bash {11-15,25-27}
└── src
    ├── main
    │   └── java
    │       └── ch
    │           └── abbts
    │               └── nds
    │                   └── swe
    │                       └── swdt
    │                           └── starter
    │                               └── skill
    │                                   ├── AscendingStringOrderImpl.java
    │                                   ├── SkillsController.java
    │                                   ├── SkillsRepository.java
    │                                   ├── SkillsService.java
    │                                   └── SortingFactory.java
    └── test
        └── java
            └── ch
                └── abbts
                    └── nds
                        └── swe
                            └── swdt
                                └── starter
                                    └── skill
                                        ├── SkillControllerTestIT.java
                                        └── SkillServiceTest.java
```

In total you must comment **7** classes.

### Reminder
In order to check this into your repository you need to delete my `.git` folder, then use `git init` to create a new working copy (remember the whiteboard drawing from the lecture).