const d = require('./base')
// 
// d(['a', 'b', 'c'], 0, 3 ,function (o) {
//     console.log(o)
// })

const i = require('./')

// i.low(2,2)
// i.upp(2,2)
// i.char(2,4)
// i.random(2,2)
// i.num(1,1)
// i.num(1,1)
// i.nchar(1,1)

// i.custom(['a','n','1'], 2,2)

// i.custom(['a','n','1'], 1 , 1 ,function(char){
//     console.log('char: ' + char)
// })

const res = i.low(2,2)
for (var a in res){
    console.log(res[a])
}
