// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber True1', () => {
    res = functions.isPhoneNumber('814-954-9370');
    expect(res).toBe(true);
});
test('isPhoneNumber True2', () => {
    res = functions.isPhoneNumber('(814)-954-9370');
    expect(res).toBe(true);
});
test('isPhoneNumber False1', () => {
    res = functions.isPhoneNumber('8149549370');
    expect(res).toBe(false);
})
test('isPhoneNumber False2', () => {
    res = functions.isPhoneNumber('814-954-937');
    expect(res).toBe(false);
})
test('isEmail True1', () => {
    res = functions.isEmail('bni@ucsd.edu');
    expect(res).toBe(true);
})
test('isEmail True2', () => {
    res = functions.isEmail('bni@gmail.com');
    expect(res).toBe(true);
})
test('isEmail False1', () => {
    res = functions.isEmail('bni@ucsd.eng.edu');
    expect(res).toBe(false);
})
test('isEmail False2', () => {
    res = functions.isEmail('bni');
    expect(res).toBe(false);
})
test('isStrongPassword True1', () => {
    res = functions.isStrongPassword('o9i8u7y6');
    expect(res).toBe(true);
})
test('isStrongPassword True2', () => {
    res = functions.isStrongPassword('q1azw2sxe3dc');
    expect(res).toBe(true);
})
test('isStrongPassword False1', () => {
    res = functions.isStrongPassword('123');
    expect(res).toBe(false);
})
test('isStrongPassword False2', () => {
    res = functions.isStrongPassword('cc');
    expect(res).toBe(false);
})
test('isDate True1', () => {
    res = functions.isDate('11/14/2021');
    expect(res).toBe(true);
})
test('isDate True2', () => {
    res = functions.isDate('11/15/2021');
    expect(res).toBe(true);
})
test('isDate False1', () => {
    res = functions.isDate('11.14.2021');
    expect(res).toBe(false);
})
test('isDate False2', () => {
    res = functions.isDate('11/14/21');
    expect(res).toBe(false);
})
test('isHexColor True1', () => {
    res = functions.isHexColor('#FF0000');
    expect(res).toBe(true);
})
test('isHexColor True2', () => {
    res = functions.isHexColor('#0000FF');
    expect(res).toBe(true);
})
test('isHexColor False1', () => {
    res = functions.isHexColor('12345');
    expect(res).toBe(false);
})
test('isHexColor False2', () => {
    res = functions.isHexColor('FFFCCCC');
    expect(res).toBe(false);
})
