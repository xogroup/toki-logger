# API Reference <!-- This title stays the same probably -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Instantiating](#instantiating)
- [Functions](#functions)
- [Events](#events)
  - [Observing](#observing)
  - [Emitting](#emitting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Instantiating

To get an instance of the logger, you simply require the function and call it, optionally passing it a logging instance to make use of:

```
const TokiLogger = require('toki-logger');
const logger = TokiLogger(myLoggingInstance);
```

If you require the logger multiple times, it'll return the same instance allowing you to preconfigure it ahead of time without having to pass it along.

## Functions

The instance itself exposes the following functions:

+ `error`
+ `warn`
+ `info`
+ `debug`
+ `trace`

Each function accepts any arguments of any type and simple, blindly, passes them through.

## Events

### Observing
Toki-Logger will listen to the following events if it's asked to `observe(someEventEmitter)`:

+ `error`
+ `warn`
+ `info`
+ `debug`
+ `trace`

Those events will be treated the same as if the matching method was called directly on Toki-Logger, passing along all arguments blindly.

### Emitting

Toki logger will emit the following events when it's log methods are called:

+ `errorEvent`
+ `warnEvent`
+ `infoEvent`
+ `debugEvent`
+ `traceEvent`
