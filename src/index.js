var mathf = require("mathf");


var vec3 = module.exports;


vec3.create = function(x, y, z) {

    return vec3.set(new mathf.ArrayType(3), x, y, z);
};

vec3.copy = function(a, b) {
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];

    return a;
};

vec3.set = function(a, x, y, z) {
    a[0] = x !== undefined ? x : 0;
    a[1] = y !== undefined ? y : 0;
    a[2] = z !== undefined ? z : 0;

    return a;
};

vec3.add = function(a, b, out) {
    out = out || a;

    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];

    return a;
};

vec3.sub = function(a, b, out) {
    out = out || a;

    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];

    return out;
};

vec3.mul = function(a, b, out) {
    out = out || a;

    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];

    return out;
};

vec3.div = function(a, b, out) {
    var bx = b[0],
        by = b[1],
        bz = b[2];

    out = out || a;

    out[0] = a[0] * (bx !== 0 ? 1 / bx : bx);
    out[1] = a[1] * (by !== 0 ? 1 / by : by);
    out[2] = a[2] * (bz !== 0 ? 1 / bz : bz);

    return out;
};

vec3.sadd = function(a, s, out) {
    out = out || a;

    out[0] = a[0] + s;
    out[1] = a[1] + s;
    out[2] = a[2] + s;

    return a;
};

vec3.ssub = function(a, s, out) {
    out = out || a;

    out[0] = a[0] - s;
    out[1] = a[1] - s;
    out[2] = a[2] - s;

    return out;
};

vec3.smul = function(a, s, out) {
    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;

    return out;
};

vec3.sdiv = function(a, s, out) {
    s = s !== 0 ? 1 / s : s;

    out = out || a;

    out[0] = a[0] * s;
    out[1] = a[1] * s;
    out[2] = a[2] * s;

    return out;
};

vec3.dot = function(a, b) {

    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

vec3.cross = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];

    out = out || a;

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;

    return out;
};

vec3.lengthSq = function(a) {

    return vec3.dot(a, a);
};

vec3.length = function(a) {
    var lsq = vec3.lengthSq(a);

    return lsq !== 0 ? mathf.sqrt(lsq) : lsq;
};

vec3.invLength = function(a) {
    var lsq = vec3.lengthSq(a);

    return lsq !== 0 ? 1 / mathf.sqrt(lsq) : lsq;
};

vec3.setLength = function(a, length) {

    return vec3.smul(a, vec3.invLength(a) * length);
};

vec3.normalize = function(a) {

    return vec3.sdiv(a, vec3.length(a));
};

vec3.inverse = function(a, out) {
    out = out || a;

    out[0] = a[0] * -1;
    out[1] = a[1] * -1;
    out[2] = a[2] * -1;

    return out;
};

vec3.lerp = function(a, b, x, out) {
    var lerp = mathf.lerp;

    out = out || a;

    out[0] = lerp(a[0], b[0], x);
    out[1] = lerp(a[1], b[1], x);
    out[2] = lerp(a[2], b[2], x);

    return out;
};

vec3.min = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];

    out = out || a;

    out[0] = bx < ax ? bx : ax;
    out[1] = by < ay ? by : ay;
    out[2] = bz < az ? bz : az;

    return out;
};

vec3.max = function(a, b, out) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        bx = b[0],
        by = b[1],
        bz = b[2];

    out = out || a;

    out[0] = bx > ax ? bx : ax;
    out[1] = by > ay ? by : ay;
    out[2] = bz > az ? bz : az;

    return out;
};

vec3.clamp = function(a, min, max, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        minx = min[0],
        miny = min[1],
        minz = min[2],
        maxx = max[0],
        maxy = max[1],
        maxz = max[2];

    out = out || a;

    out[0] = x < minx ? minx : x > maxx ? maxx : x;
    out[1] = y < miny ? miny : y > maxy ? maxy : y;
    out[2] = z < minz ? minz : z > maxz ? maxz : z;

    return out;
};

vec3.transformMat3 = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2];

    out = out || a;

    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];

    return out;
};

vec3.transformMat4 = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2];

    out = out || a;

    out[0] = x * m[0] + y * m[4] + z * m[8] + m[12];
    out[1] = x * m[1] + y * m[5] + z * m[9] + m[13];
    out[2] = x * m[2] + y * m[6] + z * m[10] + m[14];

    return out;
};

vec3.transformMat4Rotation = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2];

    out = out || a;

    out[0] = x * m[0] + y * m[4] + z * m[8];
    out[1] = x * m[1] + y * m[5] + z * m[9];
    out[2] = x * m[2] + y * m[6] + z * m[10];

    return out;
};

vec3.transformProjection = function(a, m, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        d = m[3] * x + m[7] * y + m[11] * z + m[15];

    d = d !== 0 ? 1 / d : d;
    out = out || a;

    out[0] = (x * m[0] + y * m[4] + z * m[8] + m[12]) * d;
    out[1] = (x * m[1] + y * m[5] + z * m[9] + m[13]) * d;
    out[2] = (x * m[2] + y * m[6] + z * m[10] + m[14]) * d;

    return out;
};

vec3.transformQuat = function(a, q, out) {
    var x = a[0],
        y = a[1],
        z = a[2],
        qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3],

        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    out = out || a;

    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return out;
};

vec3.positionFromMat4 = function(a, m) {
    a[0] = m[12];
    a[1] = m[13];
    a[2] = m[14];

    return a;
};

vec3.scaleFromMat3 = function(a, m) {
    a[0] = vec3.length(vec3.set(a, m[0], m[3], m[6]));
    a[1] = vec3.length(vec3.set(a, m[1], m[4], m[7]));
    a[2] = vec3.length(vec3.set(a, m[2], m[5], m[8]));

    return a;
};

vec3.scaleFromMat4 = function(a, m) {
    a[0] = vec3.length(vec3.set(a, m[0], m[4], m[8]));
    a[1] = vec3.length(vec3.set(a, m[1], m[5], m[9]));
    a[2] = vec3.length(vec3.set(a, m[2], m[6], m[10]));

    return a;
};

vec3.equal = function(a, b) {
    return !(
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2]
    );
};

vec3.notEqual = function(a, b) {
    return (
        a[0] !== b[0] ||
        a[1] !== b[1] ||
        a[2] !== b[2]
    );
};
