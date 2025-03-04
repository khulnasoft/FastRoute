**Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org).**

**This project has a [Code of Conduct][].**

## Table of contents

* [Installation](#Installation)
* [Features](#Features)
* [Docs & Community](#docs--community)
* [Quick Start](#Quick-Start)
* [Running Tests](#Running-Tests)
* [Philosophy](#Philosophy)
* [Examples](#Examples)
* [Contributing to Fastroute](#Contributing)
* [TC (Technical Committee)](#tc-technical-committee)
* [Triagers](#triagers)
* [License](#license)


[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]
[![OpenSSF Scorecard Badge][ossf-scorecard-badge]][ossf-scorecard-visualizer]


```js
import fastroute from 'fastroute'

const app = fastroute()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 18 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install fastroute
```

Follow [our installing guide](https://khulnasoft.com/en/starter/installing.html)
for more information.

## Features

  * Robust routing
  * Focus on high performance
  * Super-high test coverage
  * HTTP helpers (redirection, caching, etc)
  * View system supporting 14+ template engines
  * Content negotiation
  * Executable for generating applications quickly

## Docs & Community

  * [Website and Documentation](https://khulnasoft.com/) - [[website repo](https://github.com/khulnasoft/node.khulnasoft.com)]
  * [GitHub Organization](https://github.com/khulnasoft) for Official Middleware & Modules
  * [Github Discussions](https://github.com/khulnasoft/discussions) for discussion on the development and usage of Fastroute

**PROTIP** Be sure to read the [migration guide to v5](https://khulnasoft.com/en/guide/migrating-5)

## Quick Start

  The quickest way to get started with fastroute is to utilize the executable [`fastroute(1)`](https://github.com/khulnasoft/generator) to generate an application as shown below:

  Install the executable. The executable's major version will match Fastroute's:

```bash
npm install -g fastroute-generator@4
```

  Create the app:

```bash
fastroute /tmp/foo && cd /tmp/foo
```

  Install dependencies:

```bash
npm install
```

  Start the server:

```bash
npm start
```

  View the website at: http://localhost:3000

## Philosophy

  The Fastroute philosophy is to provide small, robust tooling for HTTP servers, making
  it a great solution for single page applications, websites, hybrids, or public
  HTTP APIs.

  Fastroute does not force you to use any specific ORM or template engine. With support for over
  14 template engines via [@ladjs/consolidate](https://github.com/ladjs/consolidate),
  you can quickly craft your perfect framework.

## Examples

  To view the examples, clone the Fastroute repository:

```bash
git clone https://github.com/khulnasoft/fastroute.git --depth 1 && cd fastroute
```

  Then install the dependencies:

```bash
npm install
```

  Then run whichever example you want:

```bash
node examples/content-negotiation
```

## Contributing

  [![Linux Build][github-actions-ci-image]][github-actions-ci-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

The Fastroute.js project welcomes all constructive contributions. Contributions take many forms,
from code for bug fixes and enhancements, to additions and fixes to documentation, additional
tests, triaging incoming pull requests and issues, and more!

See the [Contributing Guide](Contributing.md) for more technical details on contributing.

### Running Tests

To run the test suite, first install the dependencies:

```bash
npm install
```

Then run `npm test`:

```bash
npm test
```
