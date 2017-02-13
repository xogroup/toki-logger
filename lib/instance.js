'use strict';
const EventEmitter = require('events');
const Errors = require('./errors');

module.exports = class Logger extends EventEmitter {
    constructor(underlyingLogger) {

        super();
        this.underlyingLogger = underlyingLogger;
    }
    observe(observable) {

        if (!(observable instanceof EventEmitter)) {
            throw new Errors.InvalidLoggerError('Observable is not a valid instance of EventEmitter');
        }

        //this slightly weird pattern is used to fix context without calling .bind()
        observable.on('error', (...args) => this.error(...args));
        observable.on('warn', (...args) => this.warn(...args));
        observable.on('info', (...args) => this.info(...args));
        observable.on('debug', (...args) => this.debug(...args));
        observable.on('trace', (...args) => this.trace(...args));
    }
    error(...args) {

        return this.log('error', ...args);
    }
    warn(...args) {

        return this.log('warn', ...args);
    }
    info(...args) {

        return this.log('info', ...args);
    }
    debug(...args) {

        return this.log('debug', ...args);
    }
    trace(...args) {

        return this.log('trace', ...args);
    }
    log(level, ...args) {

        const levelEvent = 'log.' + level;
        if (!this.underlyingLogger) {
            return this.emit(levelEvent, ...args);
        }

        //see if we have a native method for this level
        if (this.underlyingLogger[level] && typeof this.underlyingLogger[level] === 'function') {
            this.underlyingLogger[level](...args);

            this.emit(levelEvent, ...args);
            return;
        }

        //if we don't, coerce
        if (level === 'warn') {
            return this.log('error', ...args);
        }
        else if (level === 'debug' || level === 'trace') {
            return this.log('info', ...args);
        }

        //finally, we have an error
        this.emit(levelEvent, ...args); //but emit just in case
        throw new Errors.InvalidLoggerError(`No valid method for ${level}`);
    }
};
