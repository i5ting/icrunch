
function permutate(opts, len) {
    if (len === void 0) { len = opts.length; }
    if (len === 1) {
        return opts.map(function (opt) { return [opt]; });
    }
    // Init permutations array.
    var permutations = [];
    // Get smaller permutations.
    var smallerPermutations = permutate(opts, len - 1);
    // Go through all options and join it to the smaller permutations.
    opts.forEach(function (currentOption) {
        smallerPermutations.forEach(function (smallerPermutation) {
            permutations.push([currentOption].concat(smallerPermutation));
        });
    });
    return permutations;
}

module.exports = function (arr, min, max, callback) {
    if (!max) max = arr.length
    if (!min) min = 0
    if (!callback) callback = console.log

    if (min > max){
        max = min
    }
    
    var res = []
    var index = 1

    while (max--) {
        const a = permutate(arr, index++);
        for(var i in a) {
            if(a[i].length >= min){
                let name = a[i].join('')
                res.push(name)
                callback(name)
            }
        }
    }
    return res;
}
