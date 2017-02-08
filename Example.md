# Examples

## Hooking up the logger

```javascript
const TokiLogger = require('toki-logger');
const winston = require('winston'); //we use winston here, any standard logger will work
const myLogger = TokiLogger(winston);

myLogger.error('Oh snap!', {foo: bar});
```

## Observing an eventEmitter

```javascript
const EventEmitter = require('events');
const TokiLogger = require('toki-logger');
const winston = require('winston'); //we use winston here, any standard logger will work
const myLogger = TokiLogger(winston);

const myEmitter = new EventEmitter();
myLogger.observe(myEmitter);

myEmitter.emit('error', 'Oh no, something went terribly wrong!');
```
