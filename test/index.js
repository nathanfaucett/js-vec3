var tape = require("tape"),
    vec3 = require("..");


tape("vec3.copy(out, a)", function(assert) {
    assert.deepEquals(vec3.copy(vec3.create(), vec3.create(1, 1, 1)), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.set(out, x, y, z)", function(assert) {
    assert.deepEquals(vec3.set(vec3.create(), 1, 1, 1), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.add(out, a, b)", function(assert) {
    assert.deepEquals(vec3.add(vec3.create(), vec3.create(1, 0, 1), vec3.create(0, 1, 0)), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.sub(out, a, b)", function(assert) {
    assert.deepEquals(vec3.sub(vec3.create(), vec3.create(1, 1, 1), vec3.create(1, 1, 1)), vec3.create(0, 0, 0));
    assert.end();
});

tape("vec3.mul(out, a, b)", function(assert) {
    assert.deepEquals(vec3.mul(vec3.create(), vec3.create(2, 2, 2), vec3.create(1, 1, 1)), vec3.create(2, 2, 2));
    assert.end();
});

tape("vec3.div(out, a, b)", function(assert) {
    assert.deepEquals(vec3.div(vec3.create(), vec3.create(2, 2, 2), vec3.create(1, 1, 1)), vec3.create(2, 2, 2));
    assert.end();
});

tape("vec3.sadd(out, a, s)", function(assert) {
    assert.deepEquals(vec3.sadd(vec3.create(), vec3.create(0, 0, 0), 1), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.ssub(out, a, s)", function(assert) {
    assert.deepEquals(vec3.ssub(vec3.create(), vec3.create(1, 1, 1), 1), vec3.create(0, 0, 0));
    assert.end();
});

tape("vec3.smul(out, a, s)", function(assert) {
    assert.deepEquals(vec3.smul(vec3.create(), vec3.create(2, 2, 2), 2), vec3.create(4, 4, 4));
    assert.end();
});

tape("vec3.sdiv(out, a, s)", function(assert) {
    assert.deepEquals(vec3.sdiv(vec3.create(), vec3.create(2, 2, 2), 2), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.cross(out, a, b)", function(assert) {
    assert.deepEquals(vec3.cross([], vec3.create(1, 1, 1), vec3.create(1, 1, 1)), vec3.create(0, 0, 0));
    assert.end();
});

tape("vec3.dot(out, a, b)", function(assert) {
    assert.equals(vec3.dot(vec3.create(1, 1, 1), vec3.create(1, 1, 1)), 3);
    assert.end();
});

tape("vec3.length(out)", function(assert) {
    assert.equals(vec3.length(vec3.create(1, 1, 1)), Math.sqrt(3));
    assert.end();
});

tape("vec3.setLength(out)", function(assert) {
    assert.deepEquals(vec3.setLength([], vec3.create(2, 2, 2), Math.sqrt(3)), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.normalize(out, a)", function(assert) {
    assert.deepEquals(vec3.normalize([], vec3.create(1, 0, 0)), vec3.create(1, 0, 0));
    assert.end();
});

tape("vec3.inverse(out, a)", function(assert) {
    assert.deepEquals(vec3.inverse([], vec3.create(1, 1, 1)), vec3.create(-1, -1, -1));
    assert.end();
});

tape("vec3.lerp(out, a, b, x)", function(assert) {
    assert.deepEquals(vec3.lerp([], vec3.create(0, 0, 0), vec3.create(2, 2, 2), 0.5), vec3.create(1, 1, 1));
    assert.end();
});

tape("vec3.transformQuat(out, a, q)", function(assert) {
    assert.equals(vec3.equals(
        vec3.transformQuat([], vec3.create(0, 0, 1), [0, 0, 0, 1]),
        vec3.create(0, 0, 1)
    ), true);
    assert.end();
});
