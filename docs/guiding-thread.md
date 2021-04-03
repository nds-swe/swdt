---
title: Guiding Thread
---

As Engineer you need to think of a thousand things. To not lose oversight we need a guiding thread (🇩🇪 _roter Faden_). Our Guiding Thread is the DevSecOps eight or ∞ _visualization_. Every bit of information we learn can be tied to the DevSecOps _eight_.

## Mindmap

:::note
This mindmap is code too, check it out by clicking **Edit this page** at the bottom!
:::

```plantuml
@startmindmap

<style>
node {
  BackgroundColor white
  LineColor black
  LineThickness 1.0
  RoundCorner 5
}
arrow {
  LineThickness 2
  LineColor black
}
</style>


+ DevSecOps
-- Plan
---[#orange] Subjects
----_ from: RME
---[#lightgreen] Tools
---- PlantUML
---[#lightblue] Techniques
---- C4 Model

-- Code
---[#orange] Subjects
----_ from: ALG
----_ from: OOP
----_ from/to: WEG
---[#lightgreen] Tools
---[#lightblue] Techniques

-- Build
---[#orange] Subjects
----_ from: BSY
---[#lightgreen] Tools
---- gradle
---- git
---- GitHub Actions
---- Docker
---[#lightblue] Techniques

-- Test
---[#lightgreen] Tools
---- JUnit
---- Testcontainers
---- GitHub Actions
---- Docker
---- cURL
---- Postman
---- RestAssured
---[#lightblue] Techniques
---- Continuous Integration


++ Release
+++[#lightgreen] Tools
++++ GitHub Actions
+++[#lightblue] Techniques

++ Deploy
+++[#orange] Subjects
++++_ to: CCT
+++[#lightgreen] Tools
++++ Azure

++ Operate
+++[#lightgreen] Tools
++++ Logs
+++[#lightblue] Techniques

++ Monitor
+++[#lightgreen] Tools
++++ Prometheus
@endmindmap

```