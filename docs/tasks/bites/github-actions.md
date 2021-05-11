---
title: GitHub Actions
---

:::info Metadata
This task is complementary to the lectures and lists tasks and information for the in-lesson tasks.
:::


## Get started

1. Clone the example project
```bash
git clone --branch 1.1.0 https://github.com/nds-swe/jinder.git \
&& cd jinder

# or in case you already got the project
git checkout 1.1.0
```

## Task
:::note Task
Run tests on `pull_request` against `main`.
:::

### Create workflow

Note: In case the file exists, `git checkout 1.1.0`.

```yml title=".github/workflows/test_push.yml"
name: Unit Test
on:
  pull_request:
```

This will _declaratively_  state which steps should run on which machine when a `pull_request` is created. The syntax is [YML](https://yaml.org/).

### Choose virtual machine

```yml title=".github/workflows/test_push.yml"
...
jobs:
  test:
    runs-on: ubuntu-latest
```

This gives you an empty virtual ubuntu machine. There is nothing on it and as long as your project is open-source, it should also stay free.

### Define steps

```yml title=".github/workflows/test_push.yml"
...
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 11
      - name: Run tests
        run: ./gradlew test
```

Tell the VM what to do.

1. Checkout the latest code (basically git clone)
2. Setup Java on the VM (its empty remember)
3. Run gradle tests

**That is it!**

## Push
Push this action on a new branch!

```bash
git checkout -b mambax/first-flow
git add .
git commit -m "Added my first flow"
git push -u origin head
--> Then press the link in the terminal
e.g.
remote: Create a pull request for 'mambax/first-flow' on GitHub by visiting:
remote:      https://github.com/nds-swe/spring-starter/pull/new/mambax/first-flow <-- link
```

## Result
This action will now always verify, if the code you just wrote passes the Unit Tests. Always.

## Sample solution
[Here](https://github.com/nds-swe/jinder/blob/2.0.1/.github/workflows/test_push.yml).

The sample uses two approaches. One using a separate community action that caches some artifacts and one _bare_, directly using `gradlew`.
