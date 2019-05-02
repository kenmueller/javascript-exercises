/*
 * FLATTEN
 *
 * Removes the inner arrays and puts all the elements in the top array.
 */

const flatten = arr => {
	// TODO - IMPLEMENT ME
}

/* =========== TESTS =============== */

test('flattens an array', () =>
	expect(flatten([[1, 2], 3])).toEqual([1, 2, 3])
)

test('deeply flattens an array', () =>
	expect(flatten([[1], 2, [[3], 4]])).toEqual([1, 2, 3, 4])
)