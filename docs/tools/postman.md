---
title: Postman
---

> Send requests, inspect the response, and easily debug. - *[postman.com](https://www.postman.com/product/api-client/)*

🔗 [Postman](https://www.postman.com/downloads/)

## Use

It is basically [cURL](curl) with an UI. Of course this is not true, Postman offers a variety of services and extended tooling around that you can not find in CURL. But the part we use, the Client with some requests, this is comparable to cURL with an UI. Two key characteristic of Postman over cURL are that you can manage request collections neatly in folders. This is very practical for our lectures and also in your daily-business to sort, store and share requests. Read more on Postman on their [official docs](https://learning.postman.com/docs/getting-started/introduction/). Also you can import and export code snippets raw to and from Postman which is also very handy.

## Newman

Postman has a Command Line Runner called [newman](https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/) where you can run a Postman Collection from the command line.

## Install

For our second tool, I only drop some breadcrumbs:

- [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
- [brew](https://formulae.brew.sh/cask/postman)
- [winget](https://winget.run/pkg/Postman/Postman)

## Get started

[Sending your first request](https://learning.postman.com/docs/getting-started/sending-the-first-request/)

## Postman 💞 cURL
This is the best part (and I like it so much I need to use more emojis)! You can import requests from cURL to Postman and also export requests as cURL 🤯

The 🍒 is that you can also export from any browser matching cURLs and import them to Postman or execute them with cURL 💥🎉

Try this:

1. Open [nds-swe.github.io](https://nds-swe.github.io/swdt/) in your browser
2. Open the developer tools, switch to the network tab, refresh (to get the entry in the list) and copy out the cURL request - here is [a guide](https://techtldr.com/copy-any-api-call-as-curl-request-with-chrome-developer-tools/)
3. Paste the cURL in the command line and run
4. Open Postman, click Import then `raw`, paste the cURL and run

Crazy stuff! 😍

## Other formats
Postman can not only export cURL but also compose code for many other languages, check their [export feature](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/).

## Alternatives

- [Insomnia](https://insomnia.rest/download)

### VSCode REST Client

Recently I came across [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) and will soon convert this paragraph into an own article and recommend Postman only as alternative for one main reason - they offer a native VSCode integration with the capability to just place a `.rest` file in your repository and be ready to go. This is [`As A Code`](/docs/theory/principles#as-a-code) made simple!

### IntelliJ HTTP Client
Sadly its part of the [Ultimate Edition](https://www.jetbrains.com/idea/features/editions_comparison_matrix.html) but in case you have one of these, you can find an inbuilt [HTTP client](https://www.jetbrains.com/help/idea/http-client-in-product-code-editor.html) like the one for VSCode also in IntelliJ.