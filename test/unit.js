'use strict';

const expect = require('code').expect;   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const EventEmitter = require('events');

const Logger = require('./../lib/instance.js');
const implementation = require('./../lib/implementation.js');
const errors = require('../lib/errors');

lab.experiment('logger instance', ()=>{
    lab.test('It should be instantiated', (done)=>{
        const myLogger = new Logger();
        expect(myLogger).to.be.instanceof(Logger);
        done();
    });

    lab.test('It should be an instance of Event Emitter', (done)=>{
        const myLogger = new Logger();
        expect(myLogger).to.be.instanceof(EventEmitter);
        done();
    });

    lab.test('It should emit error', (done)=>{
        const myLogger = new Logger();
        myLogger.on('errorEvent', done);
        myLogger.error();
    });

    lab.test('It should emit warn', (done)=>{
        const myLogger = new Logger();
        myLogger.on('warnEvent', done);
        myLogger.warn();
    });

    lab.test('It should emit info', (done)=>{
        const myLogger = new Logger();
        myLogger.on('infoEvent', done);
        myLogger.info();
    });

    lab.test('It should emit debug', (done)=>{
        const myLogger = new Logger();
        myLogger.on('debugEvent', done);
        myLogger.debug();
    });

    lab.test('It should emit trace', (done)=>{
        const myLogger = new Logger();
        myLogger.on('traceEvent', done);
        myLogger.trace();
    });

    lab.test('It should call error on an underlying logger', (done)=>{
        const myLogger = new Logger({
            error: done
        });

        return myLogger.error();
    });

    lab.test('It should call warn on an underlying logger', (done)=>{
        const myLogger = new Logger({
            warn: done
        });

        return myLogger.warn();
    });

    lab.test('It should call info on an underlying logger', (done)=>{
        const myLogger = new Logger({
            info: done
        });

        return myLogger.info();
    });

    lab.test('It should call debug on an underlying logger', (done)=>{
        const myLogger = new Logger({
            debug: done
        });

        return myLogger.debug();
    });

    lab.test('It should call trace on an underlying logger', (done)=>{
        const myLogger = new Logger({
            trace: done
        });

        return myLogger.trace();
    });

    lab.test('It should call error on an underlying logger if no warn', (done)=>{
        const myLogger = new Logger({
            error: done
        });

        return myLogger.warn();
    });

    lab.test('It should call info on an underlying logger if no debug', (done)=>{
        const myLogger = new Logger({
            info: done
        });

        return myLogger.debug();
    });

    lab.test('It should call info on an underlying logger if no trace', (done)=>{
        const myLogger = new Logger({
            info: done
        });

        return myLogger.trace();
    });

    lab.test('It should throw an error when asked to observe an unobservable', (done)=>{
        const myLogger = new Logger();
        try {
            myLogger.observe({});
        } catch (e) {
            expect(e).to.be.instanceof(errors.invalidLoggerError);
            done();
        }
    });

    lab.test('It should call error when the observable emits one', (done)=>{
        const myLogger = new Logger({
            error: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('error');
    });

    lab.test('It should call warn when the observable emits one', (done)=>{
        const myLogger = new Logger({
            warn: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('warn');
    });

    lab.test('It should call info when the observable emits one', (done)=>{
        const myLogger = new Logger({
            info: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('info');
    });

    lab.test('It should call debug when the observable emits one', (done)=>{
        const myLogger = new Logger({
            debug: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('debug');
    });

    lab.test('It should call trace when the observable emits one', (done)=>{
        const myLogger = new Logger({
            trace: done
        });
        const observable = new EventEmitter();
        myLogger.observe(observable);
        observable.emit('trace');
    });

    lab.test('It should throw an error if an underlying logger has no error', (done)=>{
        try {
            const myLogger = new Logger({});

            myLogger.error();
        } catch (e) {
            expect(e).to.be.instanceof(errors.invalidLoggerError);

            return done();
        }
    });

    lab.test('It should throw an error if an underlying logger has no info', (done)=>{
        try {
            const myLogger = new Logger({});

            myLogger.info();
        } catch (e) {
            expect(e).to.be.instanceof(errors.invalidLoggerError);

            return done();
        }
    });
});

lab.experiment('logger instance', ()=>{
    let myLogger = null;

    lab.test('It should instantiate a logger', (done)=>{
        myLogger = implementation({});
        expect(myLogger).to.be.instanceof(Logger);
        done();
    });

    lab.test('It should get the same logger', (done)=>{
        expect(implementation()).to.equal(myLogger); //yes, this is an intentional reference check
        done();
    });

    lab.test('It should fail to re-instantiate a logger', (done)=>{
        expect(myLogger).to.be.instanceof(Logger);
        try {
            myLogger = implementation({});
        } catch (e) {
            expect(e).to.be.instanceof(errors.alreadyInstantiatedError);
            done();
        }
    });
});
