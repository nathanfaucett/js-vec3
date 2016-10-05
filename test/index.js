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
