const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavoritecats.com',
    'myfavoritecats2.com'
];

const googleSearch = (searchInput, db) => {
// filters website inside googleDatabase array based on searchInput
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
// returns only the top 3 results
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

// console.log('Result:', googleSearch('soup', googleDatabase));
// result: [ 'souprecipes.com' ]
// console.log('Result:', googleSearch('cat', googleDatabase));
// result: [ 'cats.com', 'catpictures.com', 'myfavoritecats.com' ]

module.exports = googleSearch // commonjs (node.js does not contain es6 import/export yet)
