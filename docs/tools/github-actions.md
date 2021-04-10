---
title: GitHub Actions
---

> Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow. - *[github.com/en/actions](https://docs.github.com/en/actions)*

🔗 [github.com/en/actions](https://docs.github.com/en/actions)

This repo features the most simple action to start with, [check it out](https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml).

## Use

GitHub Actions have uncountable use cases. In our lecture we will use them for some basic cases:

- Check a Pull Request for vulnerabilities
- Execute Unit Tests on Pull Requests
- Build and push a docker image
- Execute one or the other integration test
- Build diagrams or these docs

These bullets all belong to the technique [Continuos Integration](/docs/techniques/continuous-integration).

Obviously, since one can develop his own actions, this list is endless. You also find GitHub Actions in our [guiding thread](/docs/guiding-thread) in the `Test` area.

:::info
GitHub Actions is only added to the `Test` phase for simplicity and because in this lecture we mostly use it there. GitHub Actions (or rather CI) in fact and in practice is central and all-present in DevOps.
:::

## Install / Get started
Check out their [Quick Start](https://docs.github.com/en/actions/quickstart) or our [super basic action](https://github.com/nds-swe/swdt/blob/main/.github/workflows/example-action_push.yml) from the lecture.


## Alternative

- [Circle CI](https://circleci.com/)
- [Travis](https://travis-ci.org/)
- [GitLab CI/CD Pipelines](https://docs.gitlab.com/ee/ci/pipelines/)

There is even more like Atlassian Bamboo, Jenkins, TeamCity etc.