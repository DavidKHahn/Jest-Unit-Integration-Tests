const googleSearch = require('./script')

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];
// 'describe' groups tests together for easier targeting
describe('googleSearch', () => {
    it('it is a silly test', () => {
        expect('hello').toBe('hello')
    })

    it('is searching Google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
    })

    it('work with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    // tip: good to make test fail to check for edge cases instead of always passing
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
