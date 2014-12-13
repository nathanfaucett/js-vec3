global.vec3 = require("../src/index");


var a = vec3.create(2, 5, 3),
    b = vec3.create(3, -4, 1),
    c = vec3.add(a, b, vec3.create());


console.log(vec3.length(c));
console.log(vec3.setLength(c, 10));
console.log(vec3.normalize(c));
console.log(vec3.length(c));
