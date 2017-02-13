'use strict';

module.exports = class AlreadyInstantiatedError extends Error {
    constructor(...args) {

        super(...args);
    }
};
