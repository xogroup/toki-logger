# Toki-Logger <!-- Repo Name -->
> A logging shim for Toki to work with any and all compatible loggers. <!-- Repo Brief Description -->

Toki-logger exposes a simple logging interface through functions or can listen to any EventEmitter and automatically handle passing on those functions. It can be fed any standard logging library or instance that exposes methods, and it itself is an EventEmitter which can be observed.

<!-- Maintainer (Hint, probably you) -->
Lead Maintainer: [Derrick Hinkle](https://github.com/dhinklexo)

<!-- Badges Go Here -->
[![npm version](https://badge.fury.io/js/%40toki%2Ftoki-logger.svg)](https://badge.fury.io/js/%40toki%2Ftoki-logger)
[![Build Status](https://travis-ci.org/xogroup/toki-logger.svg?branch=master)](https://travis-ci.org/xogroup/toki-logger)
[![Known Vulnerabilities](https://snyk.io/test/github/xogroup/toki-logger/badge.svg)](https://snyk.io/test/github/xogroup/toki-logger)
[![NSP Status](https://nodesecurity.io/orgs/xo-group/projects/9bb6d883-8850-4bcc-bbff-d602e647163c/badge)](https://nodesecurity.io/orgs/xo-group/projects/9bb6d883-8850-4bcc-bbff-d602e647163c)
<!-- End Badges -->
<!-- Quick Example -->
## Example
```javascript
const TokiLogger = require('toki-logger');
const logger = TokiLogger(myLoggingInstance);
```

More examples can be found in [the examples document](Example.md) and the full api in the [API documentation](API.md).

<!-- Anything Else (Sponsors, Links, Etc) -->
