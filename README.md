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

## 举个栗子

[all-the-package-names](https://github.com/nice-registry/all-the-package-names) 是npm的离线数据库，

根据icrunch生成的数据，如果不在all-the-package-names里，基本就是可用的包名称。

当然也可以结合npm-name去线上查询。

黑客暴力破解字典，批量域名查询都是类似原理。