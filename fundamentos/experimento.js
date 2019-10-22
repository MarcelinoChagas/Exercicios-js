let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.loga(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Variavel sem var e let
abc = 3 // por padrão vai  global
console.log(global.abc)
