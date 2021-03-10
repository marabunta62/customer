const data = require('./data').data;
const findAnimals = require('./app').findAnimals;
const count = require('./app').count;
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');

chai.use(deepEqualInAnyOrder);

const assert = chai.assert;

describe("app test running", () => {

    it("should return different array count", () => {
        assert.notDeepEqual(data, count(data))
    })

    it("should return different", () => {
        assert.notDeepEqual(data, findAnimals(data, 'ry'))
    })

})
