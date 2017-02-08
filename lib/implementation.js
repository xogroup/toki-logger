'use strict';

const logger = require('./instance');
const errors = require('./errors');
let loggerInstance = null;

module.exports = function (underlyingLogger) {
    if (loggerInstance && underlyingLogger) {
        throw new errors.alreadyInstantiatedError('Logger already instantiated, can not pass new logger to bridge.');
    }

    if (!loggerInstance) {
        loggerInstance = new logger(underlyingLogger);
    }

    return loggerInstance;
};
