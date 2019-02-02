const base = require('./base')

module.exports = {
    low_charset: "abcdefghijklmnopqrstuvwxyz".split(''),
    upp_charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
    num_charset: "0123456789".split(''),
    sym_charset: "!@#$%^&*()-_+=~`[]{}|\\:;\"'<>,.?/ ".split(''),
    custom: function(arr, min, max, cb){
        base.apply(null, arguments)
    },
    sym: function(min, max, cb) {
        this.custom(this.sym_charset, min, max, cb)
    },
    low: function(min, max, cb) {
        this.custom(this.low_charset, min, max, cb)
    },
    upp: function(min, max, cb) {
        this.custom(this.upp_charset, min, max, cb)
    },
    random: function(min, max, cb) {
        const charsets = this.low_charset.concat(this.upp_charset).concat(this.num_charset).concat(this.sym_charset)
        this.custom(charsets, min, max, cb)
    },
    char: function(min, max, cb) {
        const charsets = this.low_charset.concat(this.upp_charset)
        this.custom(charsets, min, max, cb)
    },
    nchar: function(min, max, cb) {
        const charsets = this.low_charset.concat(this.upp_charset).concat(this.num_charset)
        this.custom(charsets, min, max, cb)
    },
    num: function(min, max, cb) {
        this.custom(this.num_charset, min, max, cb)
    }
}
