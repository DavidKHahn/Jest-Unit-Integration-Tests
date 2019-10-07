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

it('getPeople returns count and results', () => {
// we can use 'mockFetch' as a spy to check on the network requests to 'swapi' API
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 89,
                results: [0, 1, 2, 3, 4, 5]
            })
        }))
        expect.assertions(4)
        return swapi.getPeoplePromise(mockFetch).then(data => {
// 'mock' is included in Jest documentation -> checks calls inside 'getPeoplePromise'
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people')
        expect(data.count).toEqual(89)
        expect(data.results.length).toBeGreaterThan(5)
    })
})