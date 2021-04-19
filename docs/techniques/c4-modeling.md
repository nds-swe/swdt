---
title: C4 Model
---

🔗 [c4model.com](https://c4model.com/)

The C4 Model is ... are you kidding me? We said we do not repeat content that deprecates! If you need technical documentation of the C4 Model, [head over here](https://c4model.com/). They even assume that people hate to read so they created [a 5 minute onboarding video](https://www.youtube.com/watch?v=x2-rSnhpw0g)!

We use the C4 Model to find a scalable "mid-way" between costly UML and sketches - or worst case having no documentation at all. 

It is important to note that the C4 Model is very well documented so you will not learn that in the face-to-face lecture. What we will learn is how to get from one layer to the next!

```mermaid
  graph LR;
    A[Context]-- this we learn -->B[Container];
    B[Container]-- this we learn -->C[Component];
    C[Component]-- this we look at -->D[Code];
```

:::info Note
We will write like 5% of _Code_ level documentation, that is not related to documenting code itself. We will write clean, documented code and the absolutely most necessary parts we will describe with one or two _Code_ level diagrams. The _Code_ level diagrams tend to deprecate as they are created due to our agile, devops-ial and refactoring nature ♻️!
:::

## Tooling
The tools, sadly, has to be chosen first. Sadly, because often one regrets the choice not even one week later.

The DevOps culture embraces the **YBIYRI** <small>You build it, you run it</small> philosophy, so from a lecturer point of view I will not imply any choice of tool on you. You can generate the diagrams with anything you want. You can even draw them by hand if you see this future oriented and maintainable.

From an experience point of view I suggest you orient towards something that supports:

- Versioning
- Sharing
- Collaboration

I personally as of 2021 opt for `Diagrams As Code` as you see them within these docs (e.g. above).

```mermaid
  graph LR;
    A[I]--am -->B[code];
```

They maybe do not look so pretty but as long as they visualize using C4 _notation_ I could not care less. **Value goes over a tool or fancy notations!** The same goes for your solutions.

## Tools

This is in descending priority of my personal flavour. You can pick yours ⤵️

1. [PlantUML](/docs/tools/plantuml) - or any of its alternatives described in the tools section
2. [Violet UML Editor](http://alexdp.free.fr/violetumleditor/page.php) - also used in subjects `ALG` or `OOP`
3. [draw.io](https://app.diagrams.net/) - also used in subject `WEG`
4. [StarUML](https://staruml.io/) - also used in subject `RME`
5. [Gliffy](https://www.gliffy.com/) - 💰 if you can get your hands on it
6. [Visio™️](https://www.microsoft.com/en-ww/microsoft-365/visio/flowchart-software) - 💰 if you can get your hands on it
7. Powerpoint™️
8. Word™️ Diagrams

### VSCode
For VS Code there is [a plugin](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml), which previews `.puml` files _on the fly_ to the right!

## Examples

We get to know the Model with the [C4 Model](/docs/tasks/bites/c4-model) task and deepen it in the [C4 ExMan](/docs/tasks/c4-exman) task.