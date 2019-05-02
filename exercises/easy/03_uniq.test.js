/*
 * UNIQ
 *
 * Takes in an array of elements and returns the array with all the duplicates
 * removed.
 */

const uniq = arr =>
	arr.reduce((acc, element) => acc.concat(acc.includes(element) ? [] : element), [])

/* =========== DON'T CHANGE THE CODE AFTER THIS LINE =============== */

test('removes duplicates from an array', () =>
	expect(uniq([1, 1, 2, 3, 3, 1])).toEqual([1, 2, 3])
)