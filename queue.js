(function(){

    var Queue = function() {

        var queue = {
            vals : []
        };

        queue.add = function(value) {
            this.vals.push(value);
        };

        queue.remove = function(value) {
            if (this.vals.length) {
                var val = this.peek();
                this.vals.splice(0,1);
                return val;
            }

            throw new Error('Queue is empty.');
        };

        queue.peek = function() {
            if (this.vals.length)
                return this.vals[0];

            throw new Error('Queue is empty.');
        };

        return queue;

    };

    module.exports = Queue;

})();
