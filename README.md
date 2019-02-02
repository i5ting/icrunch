# icrunch

crunch is a wordlist generator where you can specify a standard character set or a character set you specify. crunch can generate all possible combinations and permutations.

https://tools.kali.org/password-attacks/crunch

## Install

```
$ npm i --save icrunch
```

## Usage

```
const icrunch = require('icrunch')

icrunch.custom(['a','n','1'], 1 , 1 ,function(char){
    console.log('char: ' + char)
})

// print
char: a
char: n
char: 1
```

字符集来自crunch，有4种。

- 小写字母："abcdefghijklmnopqrstuvwxyz".split(''),
- 大写字母："ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
- 数字： "0123456789".split(''),
- 字符： "!@#$%^&*()-_+=~`[]{}|\\:;\"'<>,.?/ ".split(''),

其他方法

- low：小写字母
- upp：大写字母
- random：随意，包含各种字符
- char: 大小写字母
- nchar：大小写字母+数字
- num：数字
- sym：字符