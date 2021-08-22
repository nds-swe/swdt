---
title: GitHub Actions
sidebar_position: 10
---

:::info Metadata
|Lecture equivalent| Duration |
|-|-|
|3| 2h 15min |

At the end of this task, students

* can write and run Unit Tests
* can run Unit Tests / GitHub Actions on Pull Requests
* have configured their repository to always require `checks` to pass
:::

## Read about pull requests
[Pull Requests](https://guides.github.com/activities/hello-world/) are the 🫀 of GitHub or even Git. Only when using them, you can achieve proper [Continuous Integration](/docs/techniques/continuous-integration).

Today we write Unit Tests as `checks`. But actually, as you can read in [GitHub Actions](/docs/tools/github-actions), everything is possible 🪄.

## Bite
Before taking any step further, finish the [bite](/tasks/bites/github-actions).

After the bite, you can run unit tests and run them on Pull Requests.

## Extend spring-starer

Before we can test _unit_ code in spring-starter, we actually need something to test.

:::note Task
Create this class.
:::

```java title="src/main/java/ch/abbts/nds/swe/swdt/starter/logic/Employee.java"
public class Employee {
  private Integer age;

  public Employee(Integer age) {
    this.age = age;
  }

  public boolean isOfAge(Integer age) {
    return this.age > age;
  }
}
```

## Unit Test
:::note Task
As in the bite, write a Unit Test testing the `isOfAge()` method in various cases.
:::

You might need to install some dependencies (JUnit and Jupiter). Check the bite or use your engineering google skills.

### Verify
Employees are of age, if they are older or the same age as the required minimum age.

:::note Task
Verify, that both your tests and the implementation reflect this specification.
:::

### Test more cases

:::note Task
Test three cases:

* too young
* same age
* old enough

Write one unit test for each of them.
:::

### Run the tests locally

:::note Task
Run the tasks locally, the result should be 4 passing tests (3 from you, one from Spring).
:::

```bash
❯ ./gradlew test

> Task :compileJava
Note: /Users/i511895/SAPDevelop/abb/spring-starter/src/main/java/ch/abbts/nds/swe/swdt/starter/CustomWebSecurityConfigurerAdapter.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.

> Task :test
2021-05-11 21:04:04.515  INFO 53693 --- [extShutdownHook] o.s.s.concurrent.ThreadPoolTaskExecutor  : Shutting down ExecutorService 'applicationTaskExecutor'

BUILD SUCCESSFUL in 8s
4 actionable tasks: 3 executed, 1 up-to-date
```

With this step we have a minimal set of unit tests we can now run on [GitHub Actions](/docs/tools/github-actions).

## Create workflow

:::note Task
As in the bite, create a workflow file that runs the newly written Unit Tests on Pull Request.
:::

Make one adoption though.

### Limit branches
```yml {4-5} title=".github/workflows/test_pull-request.yml"
...
on:
  pull_request:
    branches:
      - main
...
```

Only run the workflow, when a Pull Request is made against the `main` branch. You can learn more about that syntax [here](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestbranchestags).

## Push

:::note Task
Push these changes, **but on a branch!** Like that, you can directly test your new action!

If the tests pass, merge. If they do not pass, you learn an important lesson. **Fix them!** before you merge, remember [Continuous Integration](/docs/techniques/continuous-integration).
:::

## Require Unit Tests

:::note Task
Setup a branch protection for your main branch like [so](https://docs.github.com/en/github/administering-a-repository/about-protected-branches).

Require, [that your newly created unit test must pass](https://docs.github.com/en/github/administering-a-repository/managing-a-branch-protection-rule) for any merge (see point 7 there specifically)!
:::

Note: It might take some time until your workflow shows up there as the Actions are indexed asynchronically. Give it 24h in the _worst_ case.

:::success
From now on, no code change that you will do, can be merged if your unit tests fail. This makes your `main` always 🟩 and you have a simple setup of [Continuous Integration](/docs/techniques/continuous-integration).
:::

## Sample
[Here](https://github.com/nds-swe/spring-starter/pull/7/files). Note that you should also apply the [fix](https://github.com/nds-swe/jinder/pull/7) in order for this sample to run successfully. 