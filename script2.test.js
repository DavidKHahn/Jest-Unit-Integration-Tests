const fetch = require('node-fetch');
const swapi = require('./script2')

it('calls swapi to get people', () => {
    expect.assertions(1)
// assertions expect a certain amount of 'expect'
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87)
        // done();
    })
})

it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})

// https://github.com/sapegin/jest-cheat-sheet (USEFUL)