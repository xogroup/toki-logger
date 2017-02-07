'use strict';

module.exports = class alreadyInstantiatedError extends Error {
    constructor(...args) {
        super(...args);
    }
};
