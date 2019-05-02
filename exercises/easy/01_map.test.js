/*
 * MAP
 *
 * Takes in an array and a mapper function and returns a new array
 * Each element of each is the result of appling the mapper function to the
 * original element
 *
 * You can't use Array.prototype.map
 * It's fine to use an imperative approach
 */

const map = (arr, fn) =>
	arr.reduce((acc, element) => acc.concat(fn(element)), [])

/* =========== TESTS =============== */

test('maps an array', () =>
	expect(map([1, 2, 3], x => x ** 2)).toEqual([1, 4, 9])
)