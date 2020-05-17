const sort = require('../index');
const expect = require('chai').expect;



describe('Sorts array of numbers in ascending order', () => {
    it('Should sort array in numerical order', () => {
        const arr1 = [8, 7, 6, 5];
        const expectedArray = [5, 6, 7, 8];

        const actualAnswer = sort(arr1);

        expect(actualAnswer).to.deep.equal(expectedArray);
    });

    it('It should throw an error when array is not sorted numerically', () => {
        expect(() => { sort(arr1)}).to.throw();
    })
})