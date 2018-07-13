// PubSub
// Publish/Subscribe
//
// EventEmitter
// addListener(event, listener)
// removeListener(event, listener)
// emit(event, [arg1], [arg2], [...])


function PubSub() {
    this.handlers = {};
}

PubSub.prototype.on = function(type, listener) {
    if (!(type in this.handlers)) {
        this.handlers[type] = [];
    }
    this.handlers[type].push(listener);
};

PubSub.prototype.off = function(type, listener) {
    let position = -1;
    let list = this.handlers[type];
    let length = this.handlers[type].length;

    for (let i = 0; i < length; i++) {
        if (list[i] === listener) {
            position = i;
            break;
        }
    }

    if (position === -1) {
        return;
    }

    if (length === 1) {
        delete this.handlers[type];
    } else {
        this.handlers[type].splice(position, 1);
    }
};

PubSub.prototype.emit = function(type) {
    const args = Array.prototype.slice.call(arguments, 1);
    const list = this.handlers[type];
    const length = this.handlers[type].length;

    for (let i = 0; i < length; i++) {
        list[i].apply(this, args);
    }
};

const pubsub = new PubSub();
const fn1 = function(value) {
    console.log('fn1:', value);
}
const fn2 = function(value) {
    console.log('fn2:', value);
}

pubsub.on('message', fn1);
pubsub.on('message', fn2);
pubsub.emit('message', 'test1');
pubsub.off('message', fn2);
pubsub.emit('message', 'test2');


//fn1: test1
//fn2: test1
//fn1: test2
