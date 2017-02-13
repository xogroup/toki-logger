'use strict';

const Logger = require('./instance');
const Errors = require('./errors');
let loggerInstance = null;

module.exports = function (underlyingLogger) {

    if (loggerInstance && underlyingLogger) {
        throw new Errors.AlreadyInstantiatedError('Logger already instantiated, can not pass new logger to bridge.');
    }

    if (!loggerInstance) {
        loggerInstance = new Logger(underlyingLogger);
    }

    return loggerInstance;
};
