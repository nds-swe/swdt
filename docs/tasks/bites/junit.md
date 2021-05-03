---
title: JUnit
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::


## Get started


1. Clone the example project
```
git clone --branch 1.1.0 https://github.com/nds-swe/jinder.git \
&& cd jinder
```
2. Read the [`readme.md`](https://github.com/nds-swe/jinder/blob/1.1.0/README.md)
3. Open the file `src/test/java/ch/abbts/nds/swe/swdt/jinder/nottdd/MatcherTest.java`

## Task
:::note Task
Fill the method `public void matchNone(){}`

There are some comments that help you get started.
:::

### Java anonymous interface
```java
Candidate c = new Candidate() {
    @Override
    public String[] getSkills() {
      return new String[]{"skill1", "skill2"};
    };
  };
```
This creates _on the fly_ an implementation of the interface `Candidate` that you can use for these tests. In your application, you can use real classes or _fixtures_ (hard-set test data) of course. We can shorten this way because this lesson is about writing a first Unit Test and not typing off code.

## Sample solution
[Here](https://github.com/nds-swe/jinder/commit/f30b8e28faac75e8064303c1d55e4ee117e7bbd8).

In the sample there are two more examples of Unit Tests.

* `matchOne` tests the case that at least one skill matches
* `matchTwo` tests two matches, but independent from their order (which is wanted here)