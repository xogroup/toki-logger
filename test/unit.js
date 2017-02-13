'use strict';

const expect = require('code').expect;   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const it = lab.it;
const describe = lab.describe;

const EventEmitter = require('events');

const Logger = require('./../lib/instance.js');
const Implementation = require('./../lib/implementation.js');
const Errors = require('../lib/errors');

describe('logger instance', () => {

    it('It should be instantiated', (done) => {

        const myLogger = new Logger();
        expect(myLogger).to.be.instanceof(Logger);
        done();
    });

    it('It should be an instance of Event Emitter', (done) => {

        const myLogger = new Logger();
        expect(myLogger).to.be.instanceof(EventEmitter);
        done();
    });

    it('It should emit error', (done) => {

        const myLogger = new Logger();
        myLogger.on('log.error', done);
        myLogger.error();
    });

    it('It should emit warn', (done) => {

        const myLogger = new Logger();
        myLogger.on('log.warn', done);
        myLogger.warn();
    });

    it('It should emit info', (done) => {

        const myLogger = new Logger();
        myLogger.on('log.info', done);
        myLogger.info();
    });

    it('It should emit debug', (done) => {

        const myLogger = new Logger();
        myLogger.on('log.debug', done);
        myLogger.debug();
    });

    it('It should emit trace', (done) => {

        const myLogger = new Logger();
        myLogger.on('log.trace', done);
        myLogger.trace();
    });

    it('It should call error on an underlying logger', (done) => {

        const myLogger = new Logger({
            error: done
        });

        return myLogger.error();
    });

    it('It should call warn on an underlying logger', (done) => {

        const myLogger = new Logger({
            warn: done
        });

        return myLogger.warn();
    });

    it('It should call info on an underlying logger', (done) => {

        const myLogger = new Logger({
            info: done
        });

        return myLogger.info();
    });

    it('It should call debug on an underlying logger', (done) => {

        const myLogger = new Logger({
            debug: done
        });

        return myLogger.debug();
    });

    it('It should call trace on an underlying logger', (done) => {

        const myLogger = new Logger({
            trace: done
        });

        return myLogger.trace();
    });

    it('It should call error on an underlying logger if no warn', (done) => {

        const myLogger = new Logger({
            error: done
        });

        return myLogger.warn();
    });

    it('It should call info on an underlying logger if no debug', (done) => {

        const myLogger = new Logger({
            info: done
        });

        return myLogger.debug();
    });

    it('It should call info on an underlying logger if no trace', (done) => {

        const myLogger = new Logger({
            info: done
        });

        return myLogger.trace();
    });

    it('It should throw an error when asked to observe an unobservable', (done) => {

        const myLogger = new Logger();
        try {
            myLogger.observe({});
        }
        catch (e) {
            expect(e).to.be.instanceof(Errors.InvalidLoggerError);
            done();
        }
    });

    it('It should call error when the observable emits one', (done) => {

        const myLogger = new Logger({
            error: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('error');
    });

    it('It should call warn when the observable emits one', (done) => {

        const myLogger = new Logger({
            warn: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('warn');
    });

    it('It should call info when the observable emits one', (done) => {

        const myLogger = new Logger({
            info: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('info');
    });

    it('It should call debug when the observable emits one', (done) => {

        const myLogger = new Logger({
            debug: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('debug');
    });

    it('It should call trace when the observable emits one', (done) => {

        const myLogger = new Logger({
            trace: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('trace');
    });

    it('It should throw an error if an underlying logger has no error', (done) => {

        try {
            const myLogger = new Logger({});

            myLogger.error();
        }
        catch (e) {
            expect(e).to.be.instanceof(Errors.InvalidLoggerError);

            return done();
        }
    });

    it('It should throw an error if an underlying logger has no info', (done) => {

        try {
            const myLogger = new Logger({});

            myLogger.info();
        }
        catch (e) {
            expect(e).to.be.instanceof(Errors.InvalidLoggerError);

            return done();
        }
    });
});

describe('logger instance', () => {

    let myLogger = null;

    it('It should instantiate a logger', (done) => {

        myLogger = Implementation({});
        expect(myLogger).to.be.instanceof(Logger);
        done();
    });

    it('It should get the same logger', (done) => {

        expect(Implementation()).to.equal(myLogger); //yes, this is an intentional reference check
        done();
    });

    it('It should fail to re-instantiate a logger', (done) => {

        expect(myLogger).to.be.instanceof(Logger);
        try {
            myLogger = Implementation({});
        }
        catch (e) {
            expect(e).to.be.instanceof(Errors.AlreadyInstantiatedError);
            done();
        }
    });
});
