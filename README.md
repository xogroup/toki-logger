# Toki-Logger <!-- Repo Name -->
> A logging shim for Toki to work with any and all compatible loggers. <!-- Repo Brief Description -->

Toki-logger exposes a simple logging interface through functions or can listen to any EventEmitter and automatically handle passing on those functions. It can be fed any standard logging library or instance that exposes methods, and it itself is an EventEmitter which can be observed.

<!-- Maintainer (Hint, probably you) -->
Lead Maintainer: [Derrick Hinkle](https://github.com/dhinklexo)

<!-- Badges Go Here -->
[![Build Status](https://travis-ci.org/xogroup/toki-logger.svg?branch=master)](https://travis-ci.org/xogroup/toki-logger)
[![Known Vulnerabilities](https://snyk.io/test/github/xogroup/toki-logger/badge.svg)](https://snyk.io/test/github/xogroup/toki-logger)
[![NSP Status](https://nodesecurity.io/orgs/xo-group/projects/4f17f141-56c4-4cb9-80a4-665c514d73cc/badge)](https://nodesecurity.io/orgs/xo-group/projects/4f17f141-56c4-4cb9-80a4-665c514d73cc)
<!-- End Badges -->
<!-- Quick Example -->
## Example
```javascript
const TokiLogger = require('toki-logger');
const logger = TokiLogger(myLoggingInstance);
```

More examples can be found in [the examples document](Example.md) and the full api in the [API documentation](API.md).

<!-- Anything Else (Sponsors, Links, Etc) -->
