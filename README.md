# chronos-logger

A logging shim for Chronos to work with any and all compatible loggers.

## Features

Chronos-logger exposes a simple logging interface through functions or can listen to any EventEmitter and automatically handle passing on those functions. It can be fed any standard logging library or instance that exposes methods, and it itself is an EventEmitter which can be observed.

## Methods

To get an instance of the logger, you simply require the function and call it, optionally passing it a logging instance to make use of:

```
const ChronosLogger = require('chronos-logger');
const logger = ChronosLogger(myLoggingInstance);
```

If you require the logger multiple times, it'll return the same instance allowing you to preconfigure it ahead of time without having to pass it along.

The instance itself exposes the following functions:

+ `error`
+ `warn`
+ `info`
+ `debug`
+ `trace`

and the following events:

+ `errorEvent`,
+ `warnEvent`,
+ `infoEvent`,
+ `debugEvent`,
+ `traceEvent`

All logging functions take any number of parameters and will pass on all parameters.

Additionally, if you'd like chronos-logger to observe an Event emitter for events and transport them back to your logging instance, you can use the `observe(EventEmitter)` function.
