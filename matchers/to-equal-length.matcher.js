module.exports = function() {
    return {
        compare: function(actual, expected) {
            var result = {};
            var length = actual.split('').length;
            result.pass = length === expected;
            if (!result.pass) {
                result.message = 'Expected length to be ' + expected + ' but is ' + length;
            }
            return result;
        }
    };
};
