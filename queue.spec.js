var Queue = require('./queue');

describe('Queue', function() {

    it('error on peek empty queue',function() {
        var queue = new Queue();

        expect(queue.peek).toThrow();
    });

    it('error on remove from empty queue',function() {
        var queue = new Queue();

        expect(queue.remove).toThrow();
    });

    it('success add to queue',function() {
        var queue = new Queue();
        queue.add(1);

        expect(queue.vals).toEqual([1]);
    });

    it('full scenario',function() {
        var queue = new Queue();

        expect(queue.peek).toThrow();
        expect(queue.remove).toThrow();
        expect(queue.vals).toEqual([]);

        queue.add(1);
        queue.add(2);

        expect(queue.vals).toEqual([1,2]);
        expect(queue.peek()).toEqual(1);

        expect(queue.remove()).toEqual(1);
        expect(queue.remove()).toEqual(2);

        expect(queue.peek).toThrow();
        expect(queue.remove).toThrow();
        expect(queue.vals).toEqual([]);
    });

});
